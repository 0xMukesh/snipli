import fs from "fs";
import os from "os";

import { tokenConfigFileLocation } from "../constants/constants";

const getToken = () => {
  try {
    const token = fs.readFileSync(tokenConfigFileLocation, {
      encoding: "utf-8",
    });
    return token;
  } catch {
    return null;
  }
};

export default getToken;
