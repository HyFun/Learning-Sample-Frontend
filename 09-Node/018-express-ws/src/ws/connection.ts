import { WebSocket, RawData } from "ws";
import { v4 } from "uuid";

import { UserModel } from "../model/User";
import { Service } from "./service";
import { WSResponse } from "./model/Response";
import { success } from "../utils/data";
import { Message } from "./model/Message";
import { MessageType } from "./model/MessageType";

interface Options {
  ws: WebSocket;
  userId: string;
  service: Service;
}

export class Connection {
  private ws: WebSocket;
  private user: UserModel | undefined;
  private service: Service;

  constructor({ ws, userId, service }: Options) {
    this.ws = ws;
    this.service = service;
    // 查询用户信息
    this.initUser(userId).then(() => this.getHistory());

    // bind
    this.bind();
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

  private async initUser(userId: string) {
    try {
      const user = await this.service.getUser(userId);
      this.user = user;
      // 欢迎加入
      
    } catch (error: any) {
      const response: WSResponse = {
        status: 200,
        data: success<Message>({
          id: v4(),
          messageType: MessageType.SYSTEM,
          message: "❌ 获取用户信息失败",
          date: Date.now(),
        }),
      };
      this.ws.send(JSON.stringify(response), { binary: false });
    }
  }

  // 获取历史消息
  private async getHistory() {}

  private bind() {
    this.ws.on("message", this.onReceiveMessage);
  }

  private unbind() {
    this.ws.off("message", this.onReceiveMessage);
  }

  private onReceiveMessage(w: WebSocket, message: RawData) {}
}
