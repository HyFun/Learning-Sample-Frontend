var express = require("express");
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

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { routes: pages });
});

pages.forEach((v) => {
  router.get(v.path, function (req, res, next) {
    res.render(v.name);
  });
});

module.exports = router;
