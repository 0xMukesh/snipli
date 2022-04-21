import { Command, Flags } from "@oclif/core";
import chalk from "chalk";

import readGist from "../lib/readGist";

import getToken from "../utils/getToken";

export default class Read extends Command {
  static description = "📖 Read a Gist via using it's ID";

  static examples = ["snipli read -i=ca22a324f761cd241ace4c9a35286496"];

  static flags = {
    id: Flags.string({
      char: "i",
      description: "ID of the Gist",
      required: true,
    }),
  };

  async run() {
    if (getToken() === null) {
      console.log(
        chalk.redBright(
          "\nYou need to be logged in to use this command!\nUse the 'snipli login' command to login"
        )
      );
    }
    const { flags } = await this.parse(Read);

    readGist(flags.id as string);
  }
}
