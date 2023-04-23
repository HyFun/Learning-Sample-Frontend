const fs = require("fs");

const rs = fs.createReadStream("./test.txt");
const ws = fs.createWriteStream("./test3.txt");

rs.pipe(ws);
