const express = require("express");

const app = express();

/**
 * 错误中间件
 */
app.get("/home", (req, res) => {
  res.send("Home");
});

// 错误中间件，放到最后
app.use((req, res) => {
  res.status(404).send("/404");
});

app.listen(3000, () => {
  console.log(`server start`);
});
