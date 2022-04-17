import { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const authorize = async (_req: Request, res: Response) => {
  const { AUTH0_ISSUER_BASE_URL, AUTH0_CLIENT_ID, AUTH0_BASE_URl } =
    process.env;

  res.status(200).json({
    url: `${AUTH0_ISSUER_BASE_URL}/authorize?response_type=code&client_id=${AUTH0_CLIENT_ID}&redirect_uri=${AUTH0_BASE_URl}/callback&scope=read:user%20user:email%20gist`,
  });
};

export default authorize;
