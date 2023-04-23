const { URL } = require("url");

const base = "http://127.0.0.1:3000";
module.exports = {
  format: (url) => new URL(url, base),
};
