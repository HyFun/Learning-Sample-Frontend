import mongoose from "mongoose";

export async function connectDB() {
  console.log("mongoose 开始连接");
  mongoose
    .connect(`mongodb://localhost:27017`, {
      dbName: "test",
      user: process.env.NODE_MONGO_USER,
      pass: process.env.NODE_MONGO_PWD,
      autoCreate: true,
    })
    .then(() => {
      console.log("mongoose 连接成功");
    })
    .catch((err: any) => {
      console.log("mongoose 连接失败", err);
    });
}
