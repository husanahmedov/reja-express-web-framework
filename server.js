const express = require("express");
const http = require("http");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.end("<h1>This is from express js<h1>");
});

const server = http.createServer(app);
let PORT = 3000;

server.listen(PORT, () => {
  console.log("This is succesfully runned on server");
});
