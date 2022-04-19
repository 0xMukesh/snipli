import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const authorize = async (_req: Request, res: Response) => {
  const { GITHUB_CLIENT_ID, MODE, PRODUCTION_API_BASE_URL } = process.env;

  let redirectUri = "http://localhost:9991/callback";

  if (MODE === "PRODUCTION") {
    redirectUri = `${PRODUCTION_API_BASE_URL}/callback`;
  }

  res.status(200).json({
    url: `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&scope=user:email%20gist`,
  });
};

export default authorize;
