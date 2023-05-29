import express = require("express");

import UserModel from "../model/User";
import TodoModel from "../model/Todo";
import { COOKIE_USER_ID } from "../constant";

var router = express.Router();

router.post("/login", async function (req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.redirect("/login?errMsg=请输入用户名/密码");
    return;
  }
  try {
    const user = await UserModel.findOne(req.body);
    console.log(`user`, user);
    if (user) {
      res.cookie(COOKIE_USER_ID, user._id);
      res.redirect("/");
    } else {
      throw new Error();
    }
  } catch (error) {
    res.redirect("/login?errMsg=用户名/密码错误");
  }
});

router.get("/logout", async function (req, res) {
  res.cookie(COOKIE_USER_ID, "");
  res.redirect("/");
});

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
