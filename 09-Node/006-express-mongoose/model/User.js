const { model, Schema } = require("mongoose");

const schema = new Schema({
  name: String,
  sex: String,
  age: Number,
});

const UserModel = model("user", schema);

module.exports = UserModel;
