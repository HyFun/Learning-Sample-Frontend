import Router from "koa-router";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.headers["Content-Type"] = "text/html; charset=utf-8";
  ctx.body = `
    <html>
      <h1>Home</h1>
    </html>
  `;
});

export default router;
