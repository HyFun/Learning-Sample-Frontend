const http = require("http");

const register = require("./router");

const app = http.createServer(async (req, res) => {
  register(req, res);
});

app.listen(3000, () => {
  console.log(`start success`);
});
