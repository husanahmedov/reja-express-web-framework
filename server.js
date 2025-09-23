const express = require("express");
const http = require("http");
const app = express();

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
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;

server.listen(PORT, () => {
  console.log(
    `This is succesfully runned on server ${PORT} http://localhost:${PORT}`
  );
});
