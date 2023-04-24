const fs = require("fs");
const { resolve } = require("path");

const { renderJson } = require("../render");
const { URL } = require("url");

const { success, failed } = require("../utils");
const { format } = require("../utils/url");

const api = {
  "/api/login": (req, res) => {
    const { searchParams } = format(req.url);
    if (
      searchParams.get("user") === "admin" &&
      searchParams.get("password") === "123456"
    ) {
      renderJson(res, 200, success("登录成功"));
    } else {
      renderJson(res, 200, failed(-1, "用户名/密码错误"));
    }
  },
  "/api/files": (req, res) => {
    const files = fs.readdirSync(resolve(__dirname, "../public/static"));
    renderJson(res, 200, success(files));
  },
};

module.exports = api;
