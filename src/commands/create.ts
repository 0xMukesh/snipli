import { Command, Flags } from "@oclif/core";
import chalk from "chalk";
import fs from "fs";
import ora from "ora";

import createGist from "../lib/createGist";

import getToken from "../utils/getToken";
import fileExists from "../utils/fileExists";
import getFileName from "../utils/getFileName";

export default class Create extends Command {
  static description =
    "🦄 Create a new snippet of your local file on gist.github.com";

  static examples = [
    "snipli create --file=code.ts --description='Need help at line 59 of file code.ts' --public",
  ];

  static flags = {
    file: Flags.string({
      char: "f",
      description: "Path to the file of which you want to create a gist",
      required: true,
    }),
    description: Flags.string({
      char: "d",
      description: "Description of the gist",
      required: true,
    }),
    public: Flags.boolean({
      char: "p",
      description: "Whether the gist should be public or not",
      default: true,
      allowNo: true,
    }),
  };

  async run() {
    const { flags } = await this.parse(Create);

    if (getToken() === null) {
      console.log(
        chalk.red(
          "\nYou need to login into snipli via your GitHub account to create a gist using this command."
        )
      );
      return;
    }

    if (!fileExists(flags.file)) {
      console.log(
        chalk.red(
          `\nThe file you specified does not exist. Please check the path and try again.`
        )
      );
      return;
    }

    const spinner = ora("Creating gist...").start();

    try {
      await createGist(
        getFileName(flags.file) as string,
        fs.readFileSync(flags.file, "utf8"),
        flags.description,
        flags.public
      );
      spinner.succeed("Gist has been created successfully!");
    } catch (err) {
      spinner.fail("Error while creating the gist");
    }
  }
}
