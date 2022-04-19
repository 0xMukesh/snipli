import axios from "axios";
import queryString from "query-string";
import dotenv from "dotenv";

dotenv.config();

const getGitHubUser = async (code: string) => {
  const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

  const githubToken = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`
    )
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });

  const decoded = queryString.parse(githubToken);

  return decoded;
};

export default getGitHubUser;
