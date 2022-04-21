import { Octokit } from "@octokit/core";
import chalk from "chalk";

import getToken from "../utils/getToken";

const updateGist = async (
  gistFileName: string,
  gistFileContent: string,
  gistDescription: string,
  gistIsPublic: boolean,
  gistId: string
) => {
  try {
    const octokit = new Octokit({
      auth: `${getToken()}`,
    });

    const response = await octokit.request("PATCH /gists/{gist_id}", {
      gist_id: gistId,
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
      chalk.green(`\nGist updated successfully!\n\n${response.data.html_url}`)
    );
  } catch (err) {
    console.log(
      chalk.red(
        `\nSomething went wrong while updating the gist. Please try again.`
      )
    );

    console.log(err);
  }
};

export default updateGist;
