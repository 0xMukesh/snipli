import { Command, Flags } from "@oclif/core";
import chalk from "chalk";

import deleteGist from "../lib/deleteGist";

import getToken from "../utils/getToken";

export default class Delete extends Command {
  static description = "🚚 Delete a gist";

  static examples = ["snipli delete --id=bfce776b3ad1145f764d89c296fec605"];

  static flags = {
    id: Flags.string({
      char: "i",
      description: "ID of the gist which is to be deleted",
      required: true,
    }),
  };

  async run() {
    const { flags } = await this.parse(Delete);

    if (getToken() === null) {
      console.log(
        chalk.redBright("You need to be logged in to delete a gist.")
      );
      return;
    }

    deleteGist(flags.id);
  }
}
