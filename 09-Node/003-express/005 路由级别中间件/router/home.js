const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome home");
});

router.get("/dashboard", (req, res) => {
  res.send("home/dashboard");
});

module.exports = router;
