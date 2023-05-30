import mongoose from "mongoose";

export const url = `mongodb://localhost:${process.env.NODE_MONGO_PORT}`;

export const options: mongoose.ConnectOptions = {
  dbName: "test",
  auth: {
    username: process.env.NODE_MONGO_USER,
    password: process.env.NODE_MONGO_PWD,
  },
  authSource: "admin",
};
class MongooseClient {
  async connect() {
    console.log("mongoose 连接开始");
    try {
      await mongoose.connect(url, options);
      console.log("mongoose 连接成功");
    } catch (error) {
      console.log("mongoose 连接失败", error);
    }
  }
}

export default new MongooseClient();
