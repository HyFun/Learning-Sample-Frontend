import Koa from "koa";
import { logger } from "./plugin/logger";
import router from "./routes";

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  logger.info("Server start");
});
