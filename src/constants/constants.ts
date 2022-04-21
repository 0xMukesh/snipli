import os from "os";

const tokenConfigFileLocation = `${os.homedir()}/.snipli/config.json`;
const apiUrl = "http://localhost:3000";

export { tokenConfigFileLocation, apiUrl };
