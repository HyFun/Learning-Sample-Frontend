import { WebSocket } from "ws";
import { Connection } from "./connection";
import { verify } from "../utils/jwt";
import { Status, WSResponse } from "./types/Response";
import { failed } from "../utils/data";
import { Service } from "./service";
import { UserModel } from "../model/User";

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
      status: Status.INVALID_TOKEN,
      data: failed("您的token已过期，请重新登录"),
    };
    ws.send(JSON.stringify(response), { binary: false });
    return;
  }
  // 检测是否还在map里
  const userId = user.id;

  const cn = map.get(userId);
  let cnUser: UserModel | undefined;
  if (cn) {
    cnUser = cn.getUser();
    cn.destroy();
    map.delete(userId);
  }

  const connect = new Connection({
    ws,
    userId,
    service,
    connectionMap: map,
    user: cnUser,
  });
  map.set(userId, connect);
  return connect;
}
