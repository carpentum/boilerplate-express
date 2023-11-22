require("dotenv").config();
let express = require("express");
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    var helloJson = "Hello json".toUpperCase();
  } else {
    var helloJson = "Hello json";
  }
  res.json({ message: helloJson });
});

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});

module.exports = app;
