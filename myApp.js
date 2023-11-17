let express = require("express");
let app = express();

// console.log("Hello world");

app.get("/", function (req, res) {
  res.send("/", `${__dirname}/views/index.html`);
});

module.exports = app;
