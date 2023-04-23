const { URL } = require("url");
const { resolve } = require("path");

const { renderAsset } = require("../render");

const api = require("./api");
const pages = require("./page");

function register(req, res) {
  const { pathname } = new URL(req.url, "http://127.0.0.1:3000");
  const routes = { ...api, ...pages };
  try {
    routes[pathname](req, res);
  } catch (error) {
    renderAsset(res, resolve(__dirname, "../pages/404.html"));
  }
}

module.exports = register;
