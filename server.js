const express = require("express");
const response = require("express/lib/response");
const http = require("http");
const app = express();

const fs = require("fs");

let user;
fs.readFile("database/users.json", "utf8", (err, data) => {
  if (err) {
    console.log("System error is happened!");
  } else {
    user = JSON.parse(data);
  }
});

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "views");
app.set("view engine", "ejs");

app.post("/create-item", (request, response) => {
  console.log(request.body);
  return response.json({ test: "success" });
});

app.get("/author", (request, response) => {
  return response.render("author", { user: user });
});

app.get("/", (req, res) => {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;

server.listen(PORT, () => {
  console.log("This is succesfully runned on server");
});
