import { Command, Flags } from "@oclif/core";
import chalk from "chalk";

import getGistId from "../lib/getGistId";

import getToken from "../utils/getToken";

export default class Id extends Command {
  static description = "💡 Get the ID of a gist from it's link";

  static examples = [
    "snipli id --link=https://gist.github.com/Kira272921/bfce776b3ad1145f764d89c296fec605",
  ];

  static flags = {
    link: Flags.string({
      char: "l",
      description: "Link of the gist",
      required: true,
    }),
  };

  async run() {
    const { flags } = await this.parse(Id);

    if (getToken() === null) {
      console.log(
        chalk.redBright(
          "\nYou need to be logged in to use this command!\nUse the 'snipli login' command to login"
        )
      );
      return;
    }

    getGistId(flags.link as string);
  }
}
