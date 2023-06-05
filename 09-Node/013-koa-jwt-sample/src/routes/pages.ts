import Router from "koa-router";

const router = new Router();

router.get("login", async (ctx) => {
  await ctx.render("login");
});

router.get("home", async (ctx) => {
  await ctx.render("home");
});

router.get("404", async (ctx) => {
  await ctx.render("404");
});

export default router;
