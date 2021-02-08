/* jshint esversion: 8 */

const express = require("express");
const Todo = require("../model/todo");
const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res) => {
  const sorted = parseInt(req.query.sorted) || 1;
  const page = req.query.page || 1;

  const totalNumberOfItems = await Todo.find().countDocuments();
  const numberOfItemsShownPerPage = 5;
  const totalNumberOfPages = Math.ceil(
    totalNumberOfItems / numberOfItemsShownPerPage
  );
  const actualItemsShown = numberOfItemsShownPerPage * page;

  try {
    const data = await Todo.find().sort({date: sorted}).limit(actualItemsShown);
    const apiKey = process.env.API_KEY;
    res.render("index.ejs", {
      data,
      totalNumberOfItems,
      numberOfItemsShownPerPage,
      totalNumberOfPages,
      actualItemsShown,
      sorted,
      apiKey,
    });
  } catch (err) {
    res.render("error.ejs", {error: err});
  }
});

router.post("/", async (req, res) => {
  try {
    await new Todo({
      name: req.body.itemName,
    }).save();
    res.redirect("/");
  } catch (err) {
    res.render("error.ejs", {error: err});
  }
});

router.get("/delete/:id", async (req, res) => {
  await Todo.deleteOne({_id: req.params.id});
  res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
  const allData = await Todo.find();
  const editOne = await Todo.findOne({_id: req.params.id});
  const apiKey = process.env.API_KEY;

  res.render("edit.ejs", {
    allData,
    editOne,
    error: "",
    apiKey,
  });
});

router.post("/edit", async (req, res) => {
  await Todo.updateOne({_id: req.body.id}, {name: req.body.name});
  res.redirect("/");
});

module.exports = router;
