import express from "express";

var router = express.Router();

const pages = [
  {
    name: "register",
    path: "/register",
    title: "注册",
  },
  {
    name: "todo",
    path: "/todo",
    title: "Todo列表",
  },
];

router.get("/login", function (req, res, next) {
  const { errMsg } = req.query;
  res.render("login", { errMsg });
});

router.get("/", function (req, res, next) {
  res.render("index", { routes: pages });
});

pages.forEach((v) => {
  router.get(v.path, function (req, res, next) {
    res.render(v.name);
  });
});

export default router;
