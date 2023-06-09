import { INTEGER, STRING, DATE, Model } from "sequelize";

import db from "../plugin/db";
import { MessageType } from "../ws/model/MessageType";
import User from "./User";

export interface MessageModel {
  id: string;
  user_id: number;
  message: string;
  messageType: MessageType;
  create_time?: string;
}

const Message = db.instance.define<Model<MessageModel>>("messages", {
  id: {
    type: STRING,
    primaryKey: true,
    allowNull: false,
    comment: "message id",
  },
  user_id: {
    type: INTEGER,
    allowNull: false,
    comment: "related user id",
  },
  message: {
    type: STRING,
    allowNull: false,
    comment: "message content",
  },
  messageType: {
    type: STRING,
    allowNull: false,
    comment: "system or user",
  },
  create_time: {
    type: DATE,
    comment: "创建时间",
  },
});

Message.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

export default Message;
