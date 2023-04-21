const http = require("http");
const fs = require("fs");
const fsPromise = fs.promises;
const path = require("path");

const response = require("./response");

const app = http.createServer(async (req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      res.setHeader("Content-Type", "application/json");
      res.end(response.success("这是Home页面"));
      break;
    case "/file":
      const pathUrl = path.resolve(__dirname, "./static/test.txt");
      const stat = await fsPromise.stat(pathUrl);
      if (stat.isFile()) {
        const name = path.basename(pathUrl);
        const rs = fs.createReadStream(pathUrl);
        res.writeHead(200, {
          "Content-Type": "text/plain; charset=utf-8",
        });
        // res.writeHead(200, {
        //   "Content-Type": "application/force-download",
        //   "Content-Disposition": `attachment; filename=${name}`,
        // });
        rs.pipe(res);
      } else {
        res.end(response.failed(404, "not found file!"));
      }
      break;
    default:
      res.statusCode = 404;
      res.end(response.failed(404, "not found!"));
      break;
  }
});

app.listen(3000, () => {
  console.log(`start success`);
});
