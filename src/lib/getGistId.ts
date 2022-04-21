import axios from "axios";
import chalk from "chalk";

const getGistId = async (gistLink: string) => {
  try {
    await axios.get(gistLink).then((res) => res.status);
    const linkArray = gistLink.split("/");
    console.log(
      chalk.greenBright(
        "The ID of the gist is: " + linkArray[linkArray.length - 1]
      )
    );
  } catch (err) {
    console.log(chalk.redBright("The link is not valid gist link!"));
  }
};

export default getGistId;
