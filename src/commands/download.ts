import { Command, Flags } from "@oclif/core";
import chalk from "chalk";
import ora from "ora";

import downloadGist from "../lib/downloadGist";

import getToken from "../utils/getToken";
import fileExists from "../utils/fileExists";

export default class Download extends Command {
  static description = "📩 Download a gist by using its ID or URL";

  static examples = [
    "snipli download --url=https://gist.github.com/Kira272921/2de1c7331597c3149af01e8b69fb778f",
  ];

  static flags = {
    url: Flags.string({
      char: "u",
      description: "URL of the Gist which you are going to download",
      exclusive: ["id"],
    }),
    id: Flags.string({
      char: "i",
      description: "ID of the Gist which you are going to download",
      exclusive: ["url"],
    }),
    path: Flags.string({
      char: "p",
      description: "The path where the Gist will be downloaded",
      default: ".",
      required: true,
    }),
    name: Flags.string({
      char: "n",
      description: "Name of the file in which the gist content would be saved",
      required: true,
    }),
  };

  async run() {
    const { flags } = await this.parse(Download);

    if (getToken() === null) {
      console.log(
        chalk.red(
          "\nYou need to be logged into snipli via your GitHub account to download a gist using this command."
        )
      );
      return;
    }

    if (!fileExists(flags.path as string)) {
      console.log(
        chalk.red(
          `\nThe path you specified does not exist. Please check the path and try again.`
        )
      );
      return;
    }

    const spinner = ora("Downloading the gist...").start();

    try {
      let gistId = flags.id;

      if (flags.url) {
        gistId = flags.url.split("/").pop();
      }

      await downloadGist(
        gistId as string,
        flags.path as string,
        flags.name as string
      );
      spinner.succeed("Gist downloaded successfully!");
    } catch (err) {
      console.log(
        chalk.red(
          `\nSomething went wrong while downloading the gist. Please try again.`
        )
      );
      console.log(err);
      spinner.fail("Gist download failed!");
    }
  }
}
