const express = require("express");

const app = express();

// 配置解析post参数的中间件
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

/**
 * GET
 *  req.query
 */
app.get("/login", (req, res) => {
  const query = req.query;
  res.send({
    name: query?.name,
    age: query?.age,
  });
});

/**
 * POST
 *  必须配置中间件: app.use(express.urlencoded({ extended: false }));
 *  Content-Type: application/x-www-form-urlencoded
 */
app.post("/login2", express.urlencoded(), (req, res) => {
  const body = req.body;
  console.log("/login2", body);
  res.send(body);
});

/**
 * POST
 *  必须配置中间件: app.use(express.json());
 *  Content-Type: application/json
 */
app.post("/login3", express.json(), (req, res) => {
  const body = req.body;
  console.log(body);
  res.send(body);
});

app.listen(3000, () => {
  console.log(`server start`);
});
