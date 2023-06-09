import { WebSocket, RawData } from "ws";
import { v4 } from "uuid";

import { UserModel } from "../model/User";
import { Service } from "./service";
import { WSResponse } from "./model/Response";
import { success } from "../utils/data";
import { MessageResponse } from "./model/Message";
import { MessageType } from "./model/MessageType";
import { MessageModel } from "../model/Message";

interface Options {
  ws: WebSocket;
  userId: string;
  service: Service;
  connectionMap: Map<string, Connection>;
}

export class Connection {
  private ws: WebSocket;
  private user: UserModel | undefined;
  private service: Service;
  private connectionMap: Map<string, Connection>;

  constructor({ ws, userId, service, connectionMap }: Options) {
    this.ws = ws;
    this.service = service;
    this.connectionMap = connectionMap;
    // 查询用户信息
    this.connect(userId);

    // bind
    this.bind();
  }

  public send(data: WSResponse) {
    this.ws.send(JSON.stringify(data), { binary: false });
  }

  public isAlive() {
    return this.ws.readyState === WebSocket.CONNECTING;
  }

  public destroy() {
    this.unbind();
    this.ws.close();
  }

  public getUser() {
    return this.user;
  }

  private async connect(userId: string) {
    await this.initUser(userId);
    await this.initHistory();
  }

  private async initUser(userId: string) {
    try {
      const user = await this.service.getUser(userId);
      this.user = user;
      // 数据库存储
      const message: MessageModel = {
        id: v4(),
        user_id: user.id,
        message: `👋 欢迎[${user.username}]加入群聊~`,
        messageType: MessageType.SYSTEM,
      };
      await this.service.addMessage(message);
      // send message
      this.connectionMap.forEach((connect, userId) => {
        if (!connect) return;
        const response: MessageResponse = {
          ...message,
          message:
            +userId === user.id ? `👏🏻 您已成功加入群聊~` : message.message,
          user,
        };

        connect.send({ status: 200, data: success(response) });
      });
    } catch (error: any) {
      const response: WSResponse = {
        status: 200,
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
  private async initHistory() {}

  private bind() {
    this.ws.on("message", this.onReceiveMessage);
  }

  private unbind() {
    this.ws.off("message", this.onReceiveMessage);
  }

  private onReceiveMessage(w: WebSocket, message: RawData) {}
}
