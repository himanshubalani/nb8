// packages/nb8/src/index.ts
import { Command } from "commander";
import { init } from "./commands/init.js";
import { add } from "./commands/add.js";

const program = new Command();

program
  .name("nb8")
  .description("NeoBrutal UI CLI")
  .version("1.0.0");

program
  .command("init")
  .description("Initialize your project with nb8")
  .action(init);

program
  .command("add")
  .description("Add a component to your project")
  .argument("[component]", "The component to add")
  .action(add);

program.parse();