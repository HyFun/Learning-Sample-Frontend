const fs = require("fs");
const fsPromise = fs.promises;

const mime = require("mime");

function renderJson(res, statusCode, json) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(json);
}

async function renderAsset(res, path) {
  const stat = await fsPromise.stat(path);
  if (stat.isFile()) {
    res.writeHead(200, {
      "Content-Type": mime.getType(path),
    });
    const rs = fs.createReadStream(path);
    rs.pipe(res);
  } else {
    throw new Error("path must be file");
  }
}

module.exports = {
  renderJson,
  renderAsset,
};
