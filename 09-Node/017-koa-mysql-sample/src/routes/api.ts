import Router from "@koa/router";
import path from "path";
import fs from "fs";

import { generate, verify } from "../utils/token";

import UserModel from "../model/User";
import formdata from "../middleware/file";

const router = new Router();

// 登录/注册
router
  .post("/login", async (ctx) => {
    try {
      const { username, password } = ctx.request.body as {
        username: string;
        password: string;
      };

      const result = await UserModel.findOne({
        attributes: [
          "id",
          "username",
          "gender",
          "age",
          "create_time",
          "avatar_url",
        ],
        where: {
          username,
          password,
        },
      });

      const user = result?.dataValues;

      if (user) {
        const newToken = generate({ username, id: user.id }, "1h");
        ctx.set("Authorization", newToken);
        ctx.body = {
          ok: 1,
          data: user,
        };
      } else {
        throw new Error();
      }
    } catch (error) {
      ctx.body = {
        ok: 0,
        errMsg: "用户名/密码错误",
      };
    }
  })
  .post("/register", formdata("avatar"), async (ctx) => {
    try {
      const { username, password } = ctx.request.body as any;
      // 检查用户
      const result = await UserModel.findOne({
        attributes: ["id"],
        where: { username },
      });
      if (result?.dataValues) {
        throw new Error("该用户已经存在");
      }
      // 保存file
      let url = "";
      // @ts-ignore
      const file = ctx.request.files?.[0];
      if (file) {
        const stuff = file.originalFilename!.substring(
          file.originalFilename?.lastIndexOf(".") || 0
        );
        const name = file.newFilename + stuff;
        const savePath = path.resolve(__dirname, `../../public/files/${name}`);
        const rs = fs.createReadStream(file.filepath);
        const ws = fs.createWriteStream(savePath);
        rs.pipe(ws);
        url = `/files/${name}`;
      }

      await UserModel.create({ username, password, avatar_url: url });
      ctx.body = {
        ok: 1,
      };
    } catch (error: any) {
      ctx.body = {
        ok: 0,
        errMsg: error.message,
      };
    }
  });

// 用户
router
  .get("/user", async (ctx) => {
    try {
      const token = ctx.get("Authorization").split(" ")[1];
      const { id } = verify(token) as { id: string };

      const user = await UserModel.findOne({ where: { id } });

      if (user?.dataValues) {
        ctx.body = {
          ok: 1,
          data: user.dataValues,
        };
      } else {
        throw new Error();
      }
    } catch (error) {
      ctx.body = {
        ok: 0,
        errMsg: "查询失败",
      };
    }
  })
  .get("/users", async (ctx) => {
    try {
      const list = await UserModel.findAll();
      if (list)
        ctx.body = {
          ok: 1,
          data: list.map((v) => v.dataValues),
        };
    } catch (error) {
      ctx.body = {
        ok: 0,
        errMsg: "查询失败",
      };
    }
  });

export default router;
