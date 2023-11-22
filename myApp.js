require("dotenv").config();
let express = require("express");
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  let response = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase")
    response = response.toUpperCase();
  res.json({ message: response });
});

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});

module.exports = app;
