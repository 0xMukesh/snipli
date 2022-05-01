import { Command, Flags } from "@oclif/core";
import fs from "fs";
import chalk from "chalk";
import ora from "ora";

import updateGist from "../lib/updateGist";

import getToken from "../utils/getToken";
import fileExists from "../utils/fileExists";
import getFileName from "../utils/getFileName";

export default class Edit extends Command {
  static description = "✏ Edit an existing gist";

  static examples = [
    "snipli edit --id=ca22a324f761cd241ace4c9a35286496 --file=updated-code.ts --description='Updated the code' --public",
  ];

  static flags = {
    id: Flags.string({
      char: "i",
      description: "ID of the Gist which you are going to edit",
      multiple: false,
      exclusive: ["url"],
    }),
    url: Flags.string({
      char: "u",
      description: "URL of the Gist which you are going to edit",
      exclusive: ["id"],
      multiple: false,
    }),
    file: Flags.string({
      char: "f",
      description: "The path of the file which has the edited content",
      required: true,
      multiple: false,
    }),
    description: Flags.string({
      char: "d",
      description: "The description of the Gist",
      required: true,
      multiple: false,
    }),
    public: Flags.boolean({
      char: "p",
      description: "Whether the Gist is public or not",
      default: true,
      allowNo: true,
    }),
  };

  async run() {
    const { flags } = await this.parse(Edit);

    if (getToken() === null) {
      console.log(
        chalk.red(
          "\nYou need to login into snipli via your GitHub account to update a gist using this command."
        )
      );
      return;
    }

    if (!fileExists(flags.file as string)) {
      console.log(
        chalk.red(
          `\nThe file you specified does not exist. Please check the path and try again.`
        )
      );
      return;
    }

    const spinner = ora("Updating gist...").start();

    try {
      let gistId = flags.id;

      if (flags.url) {
        gistId = flags.url.split("/").pop();
      }

      await updateGist(
        getFileName(flags.file) as string,
        fs.readFileSync(flags.file as string, "utf8"),
        flags.description as string,
        flags.public,
        gistId as string
      );
      spinner.succeed("Updated the gist successfully!");
    } catch (err) {
      spinner.fail("Error while updating the gist!");
    }
  }
}
