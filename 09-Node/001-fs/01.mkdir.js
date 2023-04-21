const path = require("path");

const fs = require("fs");

// 1. 异步操作
fs.mkdir(path.resolve(__dirname, "test"), (error) => {
  if (!error) {
    console.log(`创建文件夹成功`);
  }
});

// 2. 同步操作
try {
  fs.mkdirSync(path.resolve(__dirname, "test2"));
} catch (error) {}

// 3. 创建深层次目录
try {
  fs.mkdirSync(path.resolve(__dirname, "test3", "3-1"), { recursive: true });
} catch (error) {}

// 4. promise
const p = fs.promises;

(async () => {
  try {
    await p.mkdir(path.resolve(__dirname, "test-promise", "1"), {
      recursive: true,
    });
    console.log(`promise:创建成功`);
  } catch (error) {
    console.log(`promise:创建失败`, error);
  }
})();
