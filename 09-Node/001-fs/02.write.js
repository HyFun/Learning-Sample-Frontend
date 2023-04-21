const fs = require("fs");
const { resolve } = require("path");

// 1. 异步
fs.writeFile(resolve(__dirname, "test.txt"), "Hello world!", (error) => {
  !error && console.log(``);
});

// 2. 同步
try {
  fs.writeFileSync(resolve(__dirname, "test2.txt"), "Hello world!");
} catch (error) {}

// 3. promise
const p = fs.promises;
p.writeFile(resolve(__dirname, "test3.txt"), "Hello world!")
  .then((result) => {
    console.log(`创建成功`, result);
  })
  .catch((err) => {
    console.log(`创建失败`.err);
  });
