import axios from "axios";
import { Request, Response } from "express";

const token = async (req: Request, res: Response) => {
  try {
    const {
      AUTH0_ISSUER_BASE_URL,
      AUTH0_CLIENT_ID,
      AUTH0_CLIENT_SECRET,
      AUTH0_BASE_URl,
    } = process.env;

    const code = req.body.code;

    const response = await axios.post(
      `${AUTH0_ISSUER_BASE_URL}/oauth/token`,
      `grant_type=authorization_code&client_id=${AUTH0_CLIENT_ID}&client_secret=${AUTH0_CLIENT_SECRET}&code=${code}&redirect_uri=${AUTH0_BASE_URl}/callback`
    );
    res.status(200).json({ token: response.data["access_token"] });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      code: 400,
      message: "Not authorized",
      isError: true,
    });
  }
};

export default token;
