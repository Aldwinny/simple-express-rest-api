var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.listen(443, () => {
  console.log("Server running on port 443");
});
