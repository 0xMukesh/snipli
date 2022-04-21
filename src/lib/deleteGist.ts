import { Octokit } from "@octokit/core";
import chalk from "chalk";
import ora from "ora";

import getToken from "../utils/getToken";

const deleteGist = async (gistId: string) => {
  const octokit = new Octokit({
    auth: getToken(),
  });

  const spinner = ora("Deleting gist").start();
  try {
    await octokit.request("DELETE /gists/{gist_id}", {
      headers: {
        accept: "application/vnd.github.v3+json",
      },
      gist_id: gistId,
    });
    spinner.succeed(`Gist ${chalk.green(gistId)} deleted`);
  } catch (err) {
    console.log(
      chalk.redBright("Something went wrong while deleting the gist")
    );
    console.log(err);
    spinner.fail(`Something went wrong while deleting gist ${gistId}`);
  }
};

export default deleteGist;
