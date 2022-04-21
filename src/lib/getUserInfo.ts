import { Octokit } from "@octokit/core";

const getUserInfo = async (accessToken: string) => {
  const octokit = new Octokit({
    auth: accessToken,
  });

  const response = await octokit.request("GET /user").then((res) => res.data);

  return response;
};

export default getUserInfo;
