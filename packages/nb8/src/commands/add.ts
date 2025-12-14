// packages/nb8/src/commands/add.ts
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import { fetchComponent } from "../utils/registry.js";

// Helper to write component to disk
async function installComponent(componentKey: string, config: any, spinner: any) {
  const component = await fetchComponent(componentKey);
  
  if (!component) {
    spinner.fail(`Component '${componentKey}' not found in registry.`);
    return;
  }

  // 1. Install internal dependencies (Recursion)
  if (component.internalDependencies.length > 0) {
    spinner.text = `Installing dependencies for ${component.name}: ${component.internalDependencies.join(", ")}...`;
    for (const dep of component.internalDependencies) {
      await installComponent(dep, config, spinner);
    }
    spinner.text = `Installing ${component.name}...`;
  }

  // 2. Rewrite Imports
  let content = component.content;

  // Fix Constants
  content = content.replace(
    /from\s+['"]\.\.\/constants['"]/g, 
    `from '${config.aliases.constants}'`
  );

  // Fix Utils/Colors
  content = content.replace(
    /from\s+['"]\.\.\/app\/utils\/colors['"]/g, 
    `from '${config.aliases.utils}'`
  );


  // 3. Write File
  const targetPath = path.join(process.cwd(), config.paths.components, component.filename);
  
  // Check if file exists to avoid overwrite (optional logic)
  if (await fs.pathExists(targetPath)) {
    // You could add a prompt here to ask for overwrite
    // For now, we overwrite
  }

  await fs.ensureDir(path.dirname(targetPath));
  await fs.writeFile(targetPath, content);

  return component;
}

export async function add(componentKey: string) {
  if (!fs.existsSync("nb8.json")) {
    console.error(chalk.red("Error: Config not found. Run 'npx nb8 init' first."));
    return;
  }
  
  const config = await fs.readJSON("nb8.json");
  const spinner = ora(`Installing ${componentKey}...`).start();

  try {
    const component = await installComponent(componentKey, config, spinner);
    
    if (component) {
      spinner.succeed(chalk.green(`Installed ${component.name}`));
      
      // Notify about npm dependencies
      if (component.dependencies.length > 0) {
        console.log(chalk.yellow(`\n⚠️  This component requires the following packages:`));
        console.log(chalk.cyan(`   npm install ${component.dependencies.join(" ")}`));
      }
    }
  } catch (e) {
    spinner.fail("Installation failed");
    console.error(e);
  }
}