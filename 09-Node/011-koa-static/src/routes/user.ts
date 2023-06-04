import Router from "koa-router";

const router = new Router();

router
  .get("/:id", (ctx) => {
    ctx.body = `Get user ${ctx.params?.id}`;
  })
  .post("/", (ctx) => {
    ctx.body = `Post user`;
  })
  .del("/", (ctx) => {
    ctx.body = `Delete user`;
  })
  .patch("/", (ctx) => {
    ctx.body = `Update user`;
  });

export default router;
