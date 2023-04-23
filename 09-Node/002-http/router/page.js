const { renderAsset } = require("../render");

const { resolve } = require("path");

const pages = {
  "/": (req, res) =>
    renderAsset(res, resolve(__dirname, "../pages/login.html")),
  "/favicon.ico": (req, res) =>
    renderAsset(res, resolve(__dirname, "../public/favicon.png")),
  "/login.html": (req, res) =>
    renderAsset(res, resolve(__dirname, "../pages/login.html")),
  "/home.html": (req, res) =>
    renderAsset(res, resolve(__dirname, "../pages/home.html")),
};

module.exports = pages;
