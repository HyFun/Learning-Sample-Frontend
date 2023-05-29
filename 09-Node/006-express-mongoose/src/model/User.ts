import { model, Schema } from "mongoose";

const schema = new Schema({
  username: String,
  password: String,
});

const UserModel = model("user", schema);

export default UserModel;
