import express from "express";

import router from "./routes/router";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("🦄 [server] server is live at " + port));
