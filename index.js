var express = require("express");
var app = express();

app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.get("/about", (req, res) => {
  res.send("Not much to see here");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Listening on port " + port);
});
