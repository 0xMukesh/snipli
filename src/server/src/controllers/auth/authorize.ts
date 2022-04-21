import { Request, Response } from "express";
import dotenv from "dotenv";

import { redirectUrl } from "../../constants/constants";

dotenv.config();

const authorize = async (_req: Request, res: Response) => {
  const { GITHUB_CLIENT_ID } = process.env;

  res.status(200).json({
    url: `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectUrl}&scope=user:email%20gist`,
  });
};

export default authorize;
