var express = require("express");
var app = express();

app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.get("/about", (req, res) => {
  res.send("Not much to see here");
});

app.get("/data", (req, res) => {
  res.send("Definitely nothing to see here");
});

app.get("/users", (req, res) => {
  res.send("Wow such empty");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listening on port " + port);
});
