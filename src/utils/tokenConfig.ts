import fs from "fs";
import path from "path";
import chalk from "chalk";
import os from "os";

import { tokenConfigFileLocation } from "../constants/constants";

const tokenConfig = (token: string) => {
  try {
    fs.writeFileSync(tokenConfigFileLocation, token);
    console.log(chalk.green("✅ Token has been saved successfully!"));
  } catch (err) {
    console.log(chalk.red("❌ Error while saving token!"));
    console.log(chalk.redBright(err));
  }
};

export default tokenConfig;
