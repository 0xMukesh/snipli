import { Command, Flags } from "@oclif/core";

import chalk from "chalk";

import authorizeViaCli from "../lib/authorizeViaCli";

import getToken from "../utils/getToken";
import tokenConfig from "../utils/tokenConfig";

export default class Login extends Command {
  static description = "🔑 Login into snipli via GitHub";

  static examples = ["snipli login"];

  static flags = {
    token: Flags.string({
      char: "t",
      description: "Manually use personal access token to authenticate",
      required: false,
    }),
  };

  async run() {
    const { flags } = await this.parse(Login);

    if (getToken() === null) {
      if (flags.token !== undefined) {
        tokenConfig(flags.token as string);
        return;
      }
      await authorizeViaCli();
    } else {
      console.log(chalk.yellow("\nYou're already logged in!"));
    }
  }
}
