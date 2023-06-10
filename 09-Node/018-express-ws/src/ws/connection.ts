import { WebSocket, RawData } from "ws";
import { v4 } from "uuid";

import { UserModel } from "../model/User";
import { Service } from "./service";
import { Status, WSResponse } from "./types/Response";
import { success } from "../utils/data";
import { MessageResponse } from "./types";
import { MessageType } from "./types";
import { MessageModel } from "../model/Message";

interface Options {
  ws: WebSocket;
  userId: string;
  service: Service;
  connectionMap: Map<string, Connection>;
  user?: UserModel;
}

export class Connection {
  private ws: WebSocket;
  private user: UserModel | undefined;
  private service: Service;
  private connectionMap: Map<string, Connection>;

  constructor({ ws, userId, service, connectionMap, user }: Options) {
    this.ws = ws;
    this.service = service;
    this.connectionMap = connectionMap;
    this.user = user;
    // 查询用户信息
    this.connect(userId);

    // bind
    this.bind();
  }

  public send(data: WSResponse) {
    this.ws.send(JSON.stringify(data), { binary: false });
  }

  public isAlive() {
    return this.ws.readyState === WebSocket.OPEN;
  }

  public destroy() {
    this.unbind();
    this.ws.close();
  }

  public getUser() {
    return this.user;
  }

  private async connect(userId: string) {
    if (!this.user) {
      await this.initUser(userId);
    } else {
      this.ws._user = this.user;
    }
    await this.initHistory();
  }

  private async initUser(userId: string) {
    try {
      const user = await this.service.getUser(userId);
      this.ws._user = user;
      this.user = user;
      // 数据库存储
      const message: MessageModel = {
        id: v4(),
        user_id: user.id,
        message: `👋 欢迎[${user.username}]加入群聊~`,
        messageType: MessageType.SYSTEM,
      };
      await this.service.addMessage(message);
      // 需要给别人发 hello
      this.connectionMap.forEach((connect, userId) => {
        if (connect.isAlive() && user.id !== +userId) {
          connect.send({
            status: Status.MESSAGE,
            data: success({ ...message, user }),
          });
        }
      });
    } catch (error: any) {
      const response: WSResponse = {
        status: Status.MESSAGE,
        data: success<MessageModel>({
          id: v4(),
          messageType: MessageType.SYSTEM,
          message: "❌ 获取用户信息失败",
          create_time: new Date().toString(),
          user_id: +userId,
        }),
      };
      this.send(response);
    }
  }

  // 获取历史消息
  private async initHistory() {
    try {
      const messages = await this.service.getMessages();
      const response: WSResponse = {
        status: Status.MESSAGE_LIST,
        data: success(messages),
      };
      this.send(response);
    } catch (error) {
      const response: WSResponse = {
        status: Status.MESSAGE,
        data: success<MessageResponse>({
          id: v4(),
          messageType: MessageType.SYSTEM,
          message: "❌ 获取历史消息失败",
          create_time: new Date().toString(),
          user_id: +this.user?.id!,
          user: this.user!,
        }),
      };
      this.send(response);
    }
  }

  private bind() {
    this.ws.on("message", this.onReceiveMessage);
    this.ws.on("close", this.onClose);
  }

  private unbind() {
    this.ws.off("message", this.onReceiveMessage);
    this.ws.off("close", this.onClose);
  }

  private onReceiveMessage = async (message: RawData) => {
    const value = message.toString();

    const messageDB: MessageModel = {
      id: v4(),
      user_id: this.user?.id!,
      message: value,
      messageType: MessageType.USER,
    };
    try {
      await this.service.addMessage(messageDB);
    } catch (error) {
      console.log("db存储失败", error);
    }
    // 发送给其他人
    const response: WSResponse = {
      status: Status.MESSAGE,
      data: success({ ...messageDB, user: this.user! }),
    };
    this.connectionMap.forEach((connect, userId) => {
      connect.send(response);
    });
  };

  private onClose = () => {
    this.destroy();
    this.connectionMap.delete(`${this.user?.id}`);
    
  };
}
