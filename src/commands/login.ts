import { Command } from "@oclif/core";

import chalk from "chalk";

import authorizeViaCli from "../lib/authorizeViaCli";
import getToken from "../utils/getToken";

export default class Login extends Command {
  static description = "🔑 Login into snipli via GitHub";

  async run() {
    if (getToken() === null) {
      await authorizeViaCli();
    } else {
      console.log(chalk.yellow("⚠️ You're already logged in!"));
    }
  }
}
