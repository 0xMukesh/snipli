import fs from "fs";

import { tokenConfigFileLocation } from "../constants/constants";

const getToken = () => {
  try {
    const token = JSON.parse(
      fs.readFileSync(tokenConfigFileLocation, {
        encoding: "utf-8",
      })
    );

    return token["token"];
  } catch {
    return null;
  }
};

export default getToken;
