import inquirer from "inquirer";
import chalk from "chalk";
import open from "open";
import express, { Application, Request, Response } from "express";
import axios from "axios";

import tokenConfig from "../utils/tokenConfig";

import { api } from "../../package.json";

const authorizeViaCli = async () => {
  inquirer
    .prompt({
      name: "openBrowser",
      type: "confirm",
      message: "👀 Would you like to open the browser to login?",
      default: true,
    })
    .then(async (answers) => {
      if (!answers.openBrowser) {
        console.log(
          chalk.yellow(
            "⚠️ If you're not authorized,\nYou won't be able to use snipli."
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

        const authApiResponse = await axios.get(`${api}/authorize`);

        app.get("/callback", (req: Request, res: Response) => {
          resolve(req.query.code);
          res.redirect("https://www.scam.com/");
        });

        const authUrl = authApiResponse.data["url"];
        console.log(authUrl);
        open(authUrl);

        const code = await p;

        const response = await axios.post(`${api}/token`, {
          code: code,
        });
        console.log(response.data);
        const access_token = response.data.token;

        // const user = await getUser(access_token);

        tokenConfig(access_token);

        server.close();

        process.exit(0);
      } catch (error) {
        console.log(error);
        console.log(chalk.redBright(error));
        process.exit(1);
      }
    });
};

export default authorizeViaCli;
