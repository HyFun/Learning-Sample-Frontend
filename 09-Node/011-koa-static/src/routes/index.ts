import Router from "koa-router";

import home from "./home";
import user from "./user";

const router = new Router();

router.use("/home", home.routes(), home.allowedMethods());
router.use("/user", user.routes(), user.allowedMethods());
router.redirect("/", "/home");

export default router;
