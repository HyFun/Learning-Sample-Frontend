import { INTEGER, STRING, DATE } from "sequelize";

import db from "../plugin/db";
import Gender from "./Gender";

const User = db.instance.define("users", {
  id: {
    type: INTEGER,
    primaryKey: true,
    comment: "用户ID",
  },
  username: {
    type: STRING,
    allowNull: false,
    comment: "用户名",
  },
  password: {
    type: STRING,
    allowNull: false,
    comment: "用户密码",
  },
  gender: {
    type: INTEGER,
    comment: "性别",
  },
  age: {
    type: INTEGER,
    comment: "年龄",
    defaultValue: 10,
  },
  create_time: {
    type: DATE,
    comment: "创建时间",
  },
});

Gender.belongsTo(User, {
  targetKey: "gender",
  foreignKey: "id",
});

export default User;
