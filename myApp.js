require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use("/", express.static(__dirname + "/public"));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));

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

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

app
  .route("/name")
  .get(handleGetName)
  .post(bodyParser.urlencoded({ extended: false }), handlePostName);

function handleGetName(req, res) {
  res.json({
    name: req.query.first + " " + req.query.last,
  });
}

function handlePostName(req, res) {
  res.json({ name: req.body.first + " " + req.body.last });
}

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.send({ time: req.time });
  }
);

app.get("/", function (req, res) {
  res.sendFile(`${__dirname}/views/index.html`);
});

module.exports = app;
