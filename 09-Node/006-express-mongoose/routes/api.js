var express = require("express");
var router = express.Router();

const UserModel = require("../model/User");
const TodoModel = require("../model/Todo");

router.post("/register", async function (req, res, next) {
  const { username, password } = req.body;
  try {
    const data = await UserModel.create({ username, password });
    res.send({ ok: 1, data });
  } catch (error) {
    res.send({ ok: 0 });
  }
});

router.get("/todo/list", async (req, res) => {
  try {
    const datas = await TodoModel.find();
    res.send({ ok: 1, data: datas });
  } catch (error) {
    res.send({ ok: 0 });
  }
});

router.post("/todo/add", async (req, res) => {
  try {
    // const { title, create_date, finish_date, done } = req.body;
    const data = await TodoModel.create(req.body);
    res.send({ ok: 1, data });
  } catch (error) {
    res.send({ ok: 0 });
  }
});

module.exports = router;
