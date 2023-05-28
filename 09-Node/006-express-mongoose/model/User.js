const { model, Schema } = require("mongoose");

const schema = new Schema({
  username: String,
  password: String,
});

const UserModel = model("user", schema);

module.exports = UserModel;
