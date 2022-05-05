import inquirer from "inquirer";
import chalk from "chalk";
import open from "open";
import express, { Application, Request, Response } from "express";
import axios from "axios";

import tokenConfig from "../utils/tokenConfig";

import { apiUrl, authSuccessRedirectUrl } from "../constants/constants";

const authorizeViaCli = async () => {
  inquirer
    .prompt({
      name: "openBrowser",
      type: "confirm",
      message: "Would you like to open the browser to login?",
      default: true,
    })
    .then(async (answers) => {
      if (!answers.openBrowser) {
        console.log(
          chalk.yellowBright(
            "\nIf you're not authorized,\nYou won't be able to use snipli."
          )
        );
        return;
      }

      try {
        const app: Application = express();

        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));

        const server = app.listen(9991);

        let resolve: any;

        const p = new Promise((_resolve) => {
          resolve = _resolve;
        });

        const authAPI = await axios.post(`${apiUrl}/authorize`);

        app.get("/callback", async (req: Request, res: Response) => {
          resolve(req.query.code);
          res.redirect(authSuccessRedirectUrl);
        });

        const authUrl = await authAPI.data["url"];

        open(authUrl);

        const code = await p;

        const response = await axios.post(`${apiUrl}/token`, { code });

        const access_token = response.data.token;

        await tokenConfig(access_token);

        server.close();

        process.exit(0);
      } catch (error) {
        console.error(chalk.redBright(error));
        process.exit(1);
      }
    });
};

export default authorizeViaCli;
