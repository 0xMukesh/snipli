import fs from "fs";
import path from "path";
import chalk from "chalk";

import { tokenConfigFileLocation } from "../constants/constants";

const tokenConfig = async (token: string) => {
  try {
    fs.mkdirSync(path.dirname(tokenConfigFileLocation), { recursive: true });
    fs.writeFileSync(tokenConfigFileLocation, JSON.stringify({ token: token }));
    console.log(chalk.green("\nToken has been saved successfully!"));
  } catch (err) {
    console.log(chalk.red("\nAn error occurred while saving token!"));
    console.log(chalk.redBright(err));
  }
};

export default tokenConfig;
