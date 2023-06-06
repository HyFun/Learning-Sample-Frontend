import Router from "@koa/router";

import pages from "./pages";
import api from "./api";

const router = new Router();

router.use("/", pages.routes());
router.use("/api", api.routes(), api.allowedMethods());

router.redirect("/", "/home");

export default router;

export const WHITE_LIST = ["/api/login", "/api/register"];
