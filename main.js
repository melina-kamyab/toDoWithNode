/* jshint esversion: 8 */

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/todoRoute");
const nodeSass = require("node-sass-middleware");
const path = require("path");
require("dotenv").config();

const Todo = require("./model/todo");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + "/public"));

app.use(
  nodeSass({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public"),
  })
);

app.set("view engine", "ejs");
app.use("/", router);

app.get("/", async (req, res) => {
  const data = await Todo.find();
  console.log(data);
  res.render("index.ejs", {data});
});

app.post("/", async (req, res) => {
  console.log(req.body.itemName);
  await new Todo({
    name: req.body.itemName,
  }).save();
  res.redirect("/");
});

mongoose.connect(
  process.env.DATABASE_URL,
  {useNewUrlParser: true, useUnifiedTopology: true},
  (err) => {
    console.log(err);
    if (err) return;
    app.listen(8000, () => {
      console.log("app is running");
    });
  }
);
