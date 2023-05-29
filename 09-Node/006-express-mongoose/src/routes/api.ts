import express = require("express");

import UserModel from "../model/User";
import TodoModel from "../model/Todo";

var router = express.Router();

router.post("/register", async function (req, res, next) {
  const { username, password } = req.body;
  try {
    const list = await UserModel.find({ username });
    if (list.length) {
      throw new Error("该用户已经存在");
    }
    const data = await UserModel.create({ username, password });
    res.send({ ok: 1, data });
  } catch (error: any) {
    res.send({ ok: 0, errMsg: error.message });
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

router.patch("/todo", async (req, res) => {
  try {
    const { id } = req.body;
    const data = await TodoModel.findByIdAndUpdate(id, req.body);
    res.send({ ok: 1, data });
  } catch (error) {
    res.send({ ok: 0 });
  }
});

router.delete("/todo", async (req, res) => {
  try {
    const { id } = req.body;
    const data = await TodoModel.findByIdAndDelete(id);
    res.send({ ok: 1, data });
  } catch (error) {
    res.send({ ok: 0 });
  }
});

export default router;
