const express = require("express");

const app = express();

// 1. next作用
app.get(
  "/",
  (req, res, next) => {
    next();
  },
  (req, res) => {
    res.send([1, 2, 3, 4, 5]);
  }
);

// 2. 数组写法
const fn1 = (req, res, next) => {
  next();
};
const fn2 = (req, res, next) => {
  res.send("list");
};
app.get("/list", [fn1, fn2]);

// 3. send之后不再执行后续
app.get(
  "/send",
  (req, res, next) => {
    next();
  },
  (req, res, next) => {
    res.send([1, 2, 3, 4, 5]);
    // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    next();
  },
  (req, res) => {
    res.send([7, 8, 9]);
  }
);

// 4. next参数传递
app.get(
  "/params",
  (req, res, next) => {
    res._params = { user: "张三", age: 16 };
    next();
  },
  (req, res) => {
    res.send(res._params);
  }
);

app.listen(3000, () => {
  console.log(`server start`);
});
