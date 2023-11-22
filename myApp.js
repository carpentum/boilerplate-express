require("dotenv").config();
let express = require("express");
let app = express();

app.use("/public", express.static(__dirname + "/public"));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/json", jsonHandler);
function jsonHandler(req, res) {
  const mySecret = process.env.MESSAGE_STYLE;
  if (mySecret === "uppercase") {
    res.json({
      message: "HELLO JSON",
    });
  } else {
    res.json({
      message: "Hello json",
    });
  }
}

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});

module.exports = app;
