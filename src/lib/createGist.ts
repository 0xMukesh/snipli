import { Octokit } from "@octokit/core";
import chalk from "chalk";

import getToken from "../utils/getToken";

const createGist = async (
  gistFileName: string,
  gistFileContent: string,
  gistDescription: string,
  gistIsPublic: boolean
) => {
  if (getToken() === null) {
    console.log(
      chalk.red(
        "\nYou need to login into snipli via your GitHub account to create a gist using this command."
      )
    );
    return;
  }

  try {
    const octokit = new Octokit({
      auth: `${getToken()}`,
    });

    const response = await octokit.request("POST /gists", {
      headers: {
        accept: "application/vnd.github.v3+json",
      },
      description: gistDescription,
      public: gistIsPublic,
      files: {
        [gistFileName]: {
          content: gistFileContent,
        },
      },
    });

    console.log(
      chalk.green(`\nGist created successfully!\n\n${response.data.html_url}`)
    );
  } catch (err) {
    console.log(
      chalk.red(
        `\nSomething went wrong while creating the gist. Please try again.`
      )
    );

    console.log(err);
  }
};

export default createGist;
