import os from "os";

const tokenConfigFileLocation = `${os.homedir()}/.snipli/config.json`;
const apiUrl = "http://localhost:3000";
const authSuccessRedirectUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

export { tokenConfigFileLocation, apiUrl, authSuccessRedirectUrl };
