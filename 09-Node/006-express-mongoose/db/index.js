const mongoose = require("mongoose");

console.log("mongoose 开始连接");

mongoose
  .connect(
    `mongodb://${process.env.NODE_MONGO_USER}:${process.env.NODE_MONGO_PWD}@localhost:27017/test`,
    {
      useNewUrlParser: true,
      authSource: "admin",
      // useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("mongoose 连接成功");
  })
  .catch((err) => {
    console.log("mongoose 连接失败", err);
  });
