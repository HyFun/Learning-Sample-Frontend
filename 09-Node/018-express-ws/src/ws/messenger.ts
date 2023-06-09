import { WebSocket } from "ws";
import { Connection } from "./connection";
import { verify } from "../utils/jwt";
import { WSResponse } from "./model/Response";
import { failed } from "../utils/data";
import { Service } from "./service";

const map = new Map<string, Connection>();
const service = new Service();

interface Option {
  ws: WebSocket;
  token: string;
}

export function getMessenger(option: Option) {
  const { ws, token } = option;
  // 校验token
  const user = verify(token) as { id: string; username: string };
  if (!user) {
    const response: WSResponse = {
      status: 401,
      data: failed("您的token已过期，请重新登录"),
    };
    ws.send(JSON.stringify(response), { binary: false });
    return;
  }
  // 检测是否还在map里
  const userId = user.id;

  if (map.has(userId)) {
    const cn = map.get(userId)!;
    if (cn.isAlive()) {
      return cn;
    } else {
      cn.destroy();
    }
  }
  const connect = new Connection({ ws, userId, service, connectionMap: map });
  map.set(userId, connect);
  return connect;
}
