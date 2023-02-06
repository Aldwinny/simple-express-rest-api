var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});

app.get("/api", (req, res, next) => {
  res.json({ status: "200", message: "Yeah sure!" });
});

app.listen(3000, () => {
  console.log("Server running on port 443");
});
