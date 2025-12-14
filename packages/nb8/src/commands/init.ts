// packages/nb8/src/commands/init.ts
import chalk from "chalk";
import prompts from "prompts";
import fs from "fs-extra";
import path from "path";
import fetch from "node-fetch";
import ora from "ora";

const GITHUB_BASE_URL = "https://raw.githubusercontent.com/himanshubalani/nb8/main";

export async function init() {
  console.log(chalk.bold.hex('#FFA500')("Initializing NB8..."));

  // 1. Ask user for the base directory (usually src)
  const response = await prompts({
    type: 'text',
    name: 'baseDir',
    message: 'Where is your source directory?',
    initial: 'src' // or 'app' for Next.js app router
  });

  const baseDir = response.baseDir || "src";
  const nb8Dir = path.join(process.cwd(), baseDir, "nb8");

  // 2. Create the configuration file
  const config = {
    style: "neobrutal",
    paths: {
      root: baseDir,
      nb8: `${baseDir}/nb8`,
      components: `${baseDir}/nb8/components`,
      utils: `${baseDir}/nb8/utils`
    },
    aliases: {
  utils: "../utils",
  constants: "../constants"
}
  };

  await fs.writeFile("nb8.json", JSON.stringify(config, null, 2));

  // 3. Download Core Files
  const spinner = ora("Downloading core files...").start();

  try {
    // Ensure folders exist
    await fs.ensureDir(path.join(nb8Dir, "utils"));
    await fs.ensureDir(path.join(nb8Dir, "components"));

    // --- A. Download constants.ts ---
    const constantsRes = await fetch(`${GITHUB_BASE_URL}/constants.ts`);
    if (!constantsRes.ok) throw new Error("Failed to fetch constants.ts");
    const constantsText = await constantsRes.text();
    await fs.writeFile(path.join(nb8Dir, "constants.ts"), constantsText);

    // --- B. Download utils/colors.ts (renaming to utils/index.ts for cleaner import) ---
    const colorsRes = await fetch(`${GITHUB_BASE_URL}/app/utils/colors.ts`);
    if (!colorsRes.ok) throw new Error("Failed to fetch colors.ts");
    const colorsText = await colorsRes.text();
    await fs.writeFile(path.join(nb8Dir, "utils", "index.ts"), colorsText);

    spinner.succeed(chalk.green("NB8 Initialized successfully!"));
    console.log(chalk.gray(`\nCore files created at: ${nb8Dir}`));
    console.log(chalk.gray(`Config file created: nb8.json`));

  } catch (error) {
    spinner.fail("Failed to initialize.");
    console.error(error);
  }

console.log(chalk.blue(`\nIMPORTANT: Ensure your tsconfig.json has the "@/*" path alias configured:`));
console.log(chalk.gray(`{ "compilerOptions": { "paths": { "@/*": ["./src/*"] } } }`));
}