const fs = require("fs");

const rs = fs.createReadStream("./test.txt");
const ws = fs.createWriteStream("./test2.txt");

rs.on("data", (chunk) => {
  ws.write(chunk);
});

rs.on("error", () => {
  console.log("error");
});

rs.on("end", () => {
  console.log("end");
});
