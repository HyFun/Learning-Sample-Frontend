import Router from "koa-router";

import { generate } from "../utils/token";
import multer from "../plugin/multer";

const router = new Router();

// 登录/注册
router.post("/login", (ctx) => {
  const { username, password } = ctx.request.body as {
    username: string;
    password: string;
  };
  if (username === "admin" && password === "admin") {
    const user = { username, id: "user_id" };
    const newToken = generate(user, "1h");
    ctx.set("Authorization", newToken);
    ctx.body = {
      ok: 1,
    };
  } else {
    ctx.body = {
      ok: 0,
      errMsg: "用户名/密码错误",
    };
  }
});
router.post("/register", multer.single("file"), (ctx) => {
  ctx.body = {
    ok: 1,
  };
});

// 用户
router.get("/user", (ctx) => {
  ctx.body = {
    ok: 1,
    data: {
      username: "admin",
    },
  };
});

export default router;
