import fs from "fs";
import chalk from "chalk";

import { tokenConfigFileLocation } from "../constants/constants";

const revokeToken = () => {
  try {
    fs.unlink(tokenConfigFileLocation, (err) => {
      if (err) {
        console.error(chalk.redBright(`\nFailed to log out!`));
        return;
      }
      console.log(chalk.greenBright(`\nSuccessfully logged out!`));
    });
  } catch (err) {
    console.error(chalk.redBright(`\nFailed to log out!`));
    console.log(chalk.redBright(err));
  }
};

export default revokeToken;
