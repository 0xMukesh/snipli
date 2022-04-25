import os from "os";

const tokenConfigFileLocation = `${os.homedir()}/.snipli/config.json`;
const apiUrl = "https://snipli-production.up.railway.app";
const authSuccessRedirectUrl = "https://snipli.vercel.app/done";

export { tokenConfigFileLocation, apiUrl, authSuccessRedirectUrl };
