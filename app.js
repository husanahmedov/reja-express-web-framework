const express = require("express");
const app = express();
const mongodb = require("mongodb");

const db = require("./server").db();

app.use(express.static("public")); // Traditional API support
app.use(express.json()); // REST API Support
app.use(express.urlencoded({ extended: true })); // Traditional API Support

app.set("views", "views");
app.set("view engine", "ejs");

// API
app.post("/create-item", (request, response) => {
  const new_reja = request.body.reja;
  db.collection("plan").insertOne({ reja: new_reja }, (err, data) => {
    response.json(data.ops[0]);
  });
});

// API
app.post("/delete-item", (request, response) => {
  const id = request.body.id;
  db.collection("plan").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    function (error, data) {
      response.json({ result: "success" });
    }
  );
});

// API
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

/*
  PATTERNS: ARCHITECTURE & DESIGN PATTERNS
  Frontend Development: 1.BSSR(Backed Side Server Rendering) & SPA(React, Vue, Angular...)
  API REQUEST:
    TYPE: Traditional API | REST API | Graphql API
    METHODS: GET | POST ...
    STRUCTURE: header | body
*/
