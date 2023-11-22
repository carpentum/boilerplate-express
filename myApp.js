require("dotenv").config();
let express = require("express");
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  var response = "";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello json".toUpperCase();
  } else {
    response = "Hello json";
  }
  res.json({ message: response });
});

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});

module.exports = app;
