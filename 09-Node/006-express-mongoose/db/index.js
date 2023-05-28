const mongoose = require("mongoose");

// 监听事件
mongoose.connection.on("connecting", () => {
  console.log("mongoose 开始连接");
});

mongoose.connection.on("connected", () => {
  console.log("mongoose 连接成功");
});

mongoose.connection.on("error", (err) => {
  console.log("mongoose 连接失败", err);
});

// 创建副本集连接
mongoose.connect(
  `mongodb://${process.env.NODE_MONGO_USER}:${process.env.NODE_MONGO_PWD}@localhost:27017/test`,
  {
    useNewUrlParser: true,
    authSource: "admin",
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
