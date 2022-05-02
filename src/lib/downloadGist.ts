import axios from "axios";
import fs from "fs";

import fileExists from "../utils/fileExists";

const downloadGist = async (
  gistId: string,
  filePath: string,
  fileName: string
) => {
  const response = await axios
    .get(`https://api.github.com/gists/${gistId}`)
    .then((res) => res.data);

  const file = Object.keys(response.files)[0];
  const content = response.files[file].content;

  if (fileExists(`${filePath}/${fileName}`)) {
    throw `\n${fileName} already exists in ${filePath}`;
  }

  fs.writeFileSync(`${filePath}/${fileName}`, content);
};

export default downloadGist;
