const express = require("express");
const Todo = require("../model/todo");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Todo.find();
    res.render("index.ejs", {data});
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
  await Todo.deleteOne({_id: req.body.id});
  res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
  const allData = await Todo.find();
  const editOne = await Todo.findOne({_id: req.params.id});

  res.render("edit.ejs", {
    allData,
    editOne,
    error: "",
  });
});

router.post("/edit", async (req, res) => {
  await Todo.updateOne({_id: req.body.id}, {name: req.body.name});
  res.redirect("/");
});

module.exports = router;
