require("dotenv").config();
let express = require("express");
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", jsonHandler);
function jsonHandler(req, res) {
  let message = "Hello json";
  if (process.env["MESSAGE_STYLE"] === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({
    message: message,
  });
}

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});

module.exports = app;
