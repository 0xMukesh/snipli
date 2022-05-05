import axios from "axios";
import fs from "fs";
import shelljs from "shelljs";
import chalk from "chalk";

const readGist = async (gistId: string) => {
  const response = await axios
    .get(`https://api.github.com/gists/${gistId}`)
    .then((res) => res.data);

  const file = Object.keys(response.files)[0];
  const content = response.files[file].content;

  shelljs.mkdir("-p", ".snipli/temp");

  fs.writeFileSync(`.snipli/temp/${file}`, content);

  console.log(chalk.green("Opening the file in vim..."));

  // get configured EDITOR
  const EDITOR: string = process.env.EDITOR || "vim";

  const vim = require("child_process").spawn(EDITOR, [`.snipli/temp/${file}`], {
    stdio: "inherit",
  });

  vim.on("exit", () => {
    shelljs.rm("-rf", ".snipli");
  });
};

export default readGist;
