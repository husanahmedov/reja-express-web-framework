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
  const new_reja = request.body.reja;
  db.collection("plan").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log("ERROR: ", err);
      response.end("Something went wrong");
    } else {
      response.end("successfully added");
    }
  });
  return response.end("succedd");
});

app.get("/", (req, res) => {
  db.collection("plan")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log("ERROR: ", err);
        res.end("Something went error");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
