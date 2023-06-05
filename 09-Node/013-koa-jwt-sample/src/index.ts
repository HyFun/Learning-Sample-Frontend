import Koa from "koa";
import resource from "koa-static";
import views from "koa-views";
import bodyParser from "koa-bodyparser";
import path from "path";

import { logger } from "./plugin/logger";
import router from "./routes";
import { verify, generate } from "./utils/token";

const app = new Koa();

// 中间件
app.use(bodyParser());
app.use(views(path.resolve(__dirname, "./views"), { extension: "ejs" }));
app.use(resource(path.resolve(__dirname, "../public")));

// 路由守卫
app.use(async (ctx, next) => {
  if (ctx.path.includes("login") || ctx.path === "/") {
    await next();
    return;
  }

  const handleRedirect = async () => {
    if (/^\/api/.test(ctx.path)) {
      ctx.status = 401;
      ctx.body = {
        ok: 0,
        errMsg: "",
      };
    } else {
      await next();
    }
  };

  const Authorization = ctx.request.get("Authorization");
  const token = Authorization?.split(" ")?.[1];

  if (token) {
    const user = verify(token) as { id: string; username: string };
    if (user) {
      const newToken = generate(
        { userId: user.id, username: user.username },
        "1h"
      );
      ctx.set("Authorization", newToken);
      await next();
    } else {
      await handleRedirect();
    }
  } else {
    await handleRedirect();
  }
});

app.use(router.routes()).use(router.allowedMethods());

// 404
app.use(async (ctx, next) => {
  if (ctx.status === 404) {
    ctx.redirect("/404");
  } else {
    await next();
  }
});

app.listen(3000, () => {
  logger.info("Server start");
});
