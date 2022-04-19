import { Request, Response } from "express";

import getGitHubUser from "../../utils/getGithubUser";

const token = async (req: Request, res: Response) => {
  const code = req.body.code as string;

  if (!code) {
    res.status(400).json({
      err: "No code provided",
    });
    return;
  }

  const gitHubUser = await getGitHubUser(code);

  res.status(200).json({
    token: gitHubUser.access_token,
    refreshToken: gitHubUser.refresh_token,
    expires: gitHubUser.expires_in,
  });
};

export default token;
