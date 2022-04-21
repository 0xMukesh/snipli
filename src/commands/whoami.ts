import { Command } from "@oclif/core";
import chalk from "chalk";
import ora from "ora";

import getUserInfo from "../lib/getUserInfo";

import getToken from "../utils/getToken";

export default class Whoami extends Command {
  static description = "👀 Get the info about the logged in user";

  async run() {
    const spinner = ora("Fetching user info...").start();

    try {
      getUserInfo(getToken()).then((res) => {
        console.log(`You are logged in as ${chalk.bold.green(res.login)}`);
      });
      spinner.succeed();
    } catch (err) {
      spinner.fail();
      console.log(chalk.red(err));
    }
  }
}
