const fs = require("fs");

const rs = fs.createReadStream("./test.txt");

let value = "";

rs.on("data", (chunk) => {
  value += chunk;
});

rs.on("error", () => {
  console.log("error");
});

rs.on("end", () => {
  console.log(value);
});
