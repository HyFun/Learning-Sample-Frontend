import Koa from "koa";
import resource from "koa-static";
import views from "koa-views";
import bodyParser from "koa-bodyparser";
import session from "koa-session-minimal";
import path from "path";

import { logger } from "./plugin/logger";
import router from "./routes";
import { nextTick } from "process";

const app = new Koa();

// 中间件
app.use(
  session({
    key: "sessionId",
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);
app.use(bodyParser());
app.use(views(path.resolve(__dirname, "./views"), { extension: "ejs" }));
app.use(resource(path.resolve(__dirname, "../public")));

// 路由守卫
app.use(async (ctx, nextTick) => {
  if (ctx.path.includes("login")) {
    await nextTick();
    return;
  }
  if (ctx.session.user) {
    ctx.session.mydate = Date.now();
    await nextTick();
  } else {
    ctx.redirect("/login");
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
