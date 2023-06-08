import { INTEGER, STRING, DATE } from "sequelize";

import db from "../plugin/db";

export interface UserModel {
  id: string;
  avatar_url: string;
  username: string;
  password: string;
  create_time: string;
}

const User = db.instance.define("users", {
  id: {
    type: INTEGER,
    primaryKey: true,
    comment: "用户ID",
  },
  avatar_url: {
    type: STRING,
    comment: "用户头像",
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
  create_time: {
    type: DATE,
    comment: "创建时间",
  },
});

export default User;
