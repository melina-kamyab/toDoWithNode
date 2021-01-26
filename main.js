const express = require("express");
const mongoose = require("mongoose");
const nodeSass = require("node-sass-middleware");
const bodyParser = require("body-parser");

const app = express();

app.use("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));
app.use(
  nodeSass({
    src: path.join(_dirname, "scss"),
    dest: path.join(_dirname, "public"),
  })
);
