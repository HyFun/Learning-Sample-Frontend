import express = require("express");

import User from "../model/User";
import { failed, success } from "../utils/data";
import { generate } from "../utils/jwt";
import upload from "../plugin/multer";

var router = express.Router();

/**
 * user
 */

router
  .post("/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const result = await User.findOne({ where: { username, password } });
      if (result?.dataValues) {
        const { id, username } = result.dataValues;
        const newToken = generate({ id, username }, "1h");
        res
          .setHeader("Authorization", newToken)
          .send(success(result.dataValues));
      } else {
        throw new Error("不存在此用户");
      }
    } catch (error: any) {
      res.send(failed(error.message));
    }
  })
  .get("/logout", (req, res) => {
    res.setHeader("Authorization", "").send(success("退出成功"));
  })
  .post("/register", (req, res) => {
    upload.single("avatar")(req, res, async function (err) {
      if (err) {
        throw err;
      }
      const { username, password } = req.body;
      try {
        // 检测用户
        let result = await User.findOne({ where: { username } });

        if (result?.dataValues) {
          throw new Error("该用户已经存在");
        }

        const url = req.file?.url || "/upload/avatar.png";
        await User.create({ username, password, avatar_url: url });

        res.send(success("注册成功"));
      } catch (error: any) {
        res.send(error.message);
      }
    });
  })
  .get("/user", (req, res) => {});

export default router;
