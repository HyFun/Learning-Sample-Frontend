import { INTEGER, STRING, DATE } from "sequelize";

import db from "../plugin/db";

const Gender = db.instance.define("users", {
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    comment: "ID",
  },
  name: {
    type: STRING,
    allowNull: false,
    comment: "显示名",
  },
});

export default Gender;
