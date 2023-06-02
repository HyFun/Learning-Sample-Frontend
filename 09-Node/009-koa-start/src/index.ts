import Koa from "koa";

import { logger } from "./plugin/logger";

const app = new Koa();

app.use((ctx, next) => {
  console.log(ctx.request.path);
  ctx.response.body = "Hello World!";
});

app.listen(3000, () => {
  logger.info("Server start");
});
