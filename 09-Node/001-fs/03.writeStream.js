const fs = require("fs");

const ws = fs.createWriteStream("test.txt");
ws.write("Hello\n");
ws.write("world\n");
ws.write("!");

ws.close();
