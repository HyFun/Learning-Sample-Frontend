import { model, Schema } from "mongoose";

const schema = new Schema({
  username: String,
  password: String,
  avatar_url: String,
});

const UserModel = model("user", schema);

export default UserModel;
