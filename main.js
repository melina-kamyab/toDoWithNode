const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/todoRoute");
const nodeSass = require("node-sass-middleware");
const path = require("path");

const app = express();
app.use(express.static(__dirname + "/public"));

app.use(
  nodeSass({
    src: path.join(__dirname, "scss"),
    dest: path.join(__dirname, "public"),
  })
);

app.use(bodyParser.urlencoded({extended: false}));
app.set("view engine", "ejs");
app.use("/", router);

mongoose.connect(
  "mongodb+srv://Fed20s:test@cluster0.lfdxf.mongodb.net/ToDoList?retryWrites=true&w=majority",
  (err) => {
    console.log(err);
    if (err) return;
    app.listen(8000, () => {
      console.log("app is running");
    });
  }
);
