import fs from "fs";

const fileExists = (filePath: string): boolean => {
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true;
  } catch (e) {
    return false;
  }
};

export default fileExists;
