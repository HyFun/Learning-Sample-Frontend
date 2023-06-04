import Router from "koa-router";

const router = new Router();

router.post("/login", (ctx) => {
  const { username, password } = ctx.request.body as {
    username: string;
    password: string;
  };
  if (username === "admin" && password === "admin") {
    // @ts-ignore
    ctx.session.user = { username };
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

export default router;
