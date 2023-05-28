var express = require("express");
const UserModel = require("../model/User");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", async function (req, res, next) {
  const { name, sex, age } = req.body;
  try {
    const data = await UserModel.create({ name, sex, age });
    res.send({ ok: 1, data });
  } catch (error) {
    res.send({ ok: 0 });
  }
});

module.exports = router;
