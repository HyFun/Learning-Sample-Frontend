const { model, Schema } = require("mongoose");

const schema = new Schema({
  title: String,
  done: Boolean,
  create_date: String,
  finish_date: String,
});

const TodoModel = model("todo", schema);

module.exports = TodoModel;
