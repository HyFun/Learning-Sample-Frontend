const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome user");
});

router.get("/info", (req, res) => {
  res.send("user/info");
});

module.exports = router;
