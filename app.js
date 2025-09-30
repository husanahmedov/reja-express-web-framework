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

app.post("/edit-item", async (request, response) => {
  const id = request.body.id;
  db.collection("plan").findOneAndUpdate(
    { _id: new mongodb.ObjectId(id) },
    { $set: { reja: request.body.new_input } },
    (error, data) => {
      if (error) {
        response.json({ result: "Error" });
      } else {
        response.json({ result: "Done" });
      }
    }
  );
});

// API
app.post("/delete-item", async (request, response) => {
  const id = request.body.id;
  const result = await db
    .collection("plan")
    .deleteOne({ _id: new mongodb.ObjectId(id) });
  if (result.deletedCount == 0) {
    throw new Error("Wrong id or there is no collection like this");
  } else {
    response.json({ result: "success" });
  }
});

app.post("/delete-all", (request, response) => {
  const deleteAll = request.body.delete_all;
  db.collection("plan").deleteMany(function () {
    response.json({ state: "All items are deleted!" });
  });
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
