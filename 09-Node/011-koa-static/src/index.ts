import Koa from "koa";
import resource from "koa-static";
import path from "path";

import { logger } from "./plugin/logger";
import router from "./routes";

const app = new Koa();

app.use(resource(path.resolve(__dirname, "../public")));
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  logger.info("Server start");
});
