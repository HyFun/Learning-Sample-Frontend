import express from "express";

var router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/todo");
});

router.get("/login", function (req, res, next) {
  const { errMsg } = req.query;
  res.render("login", { errMsg });
});

router.get("/register", function (req, res) {
  res.render("register");
});

router.get("/todo", function (req, res) {
  res.render("todo");
});

router.get("/upload", function (req, res) {
  res.render("upload");
});

export default router;
