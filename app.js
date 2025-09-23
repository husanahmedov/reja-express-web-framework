const express = require("express");
const app = express();

const db = require("./server").db();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", (request, response) => {
  console.log(request.body);
  return response.json({ test: "success" });
});

app.get("/", (req, res) => {
  res.render("reja");
});

module.exports = app;
