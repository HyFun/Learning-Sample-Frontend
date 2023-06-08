import { WebSocketServer, WebSocket } from "ws";
import { verify } from "../utils/jwt";

let no = 0;

const server = new WebSocketServer({ port: 8089 });

enum Type {
  INVALID_TOKEN = 0,
  WELCOME = 1,
  MESSAGE = 2,
}

enum MessageType {
  BOT = "BOT",
  MESSAGE = "MESSAGE",
}

server.on("connection", (ws, req) => {
  const { searchParams } = new URL(req.url!, "http://localhost:8089");
  const token = searchParams.get("token") || "";
  const user = verify(token);
  if (!user) {
    send(ws, { type: Type.INVALID_TOKEN, errMsg: "无效的token，请重新登陆" });
    return;
  }

  // 生成用户信息
  const newUser = generateInfo(user as any);
  // @ts-ignore
  ws._payload = { user: newUser };
  // 发送给其他人
  send(ws, { type: Type.WELCOME, data: { messageType: MessageType.BOT } });

  ws.on("message", (message) => {
    const content = message.toString();
    send(ws, {
      type: Type.MESSAGE,
      data: { messageType: MessageType.MESSAGE, content },
    });
  });
  ws.on("close", () => {});
});

/**
 * 生成个人信息
 */
function generateInfo(user: { username: string; id: string }) {
  //颜色对象
  function rgb() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  }

  return {
    no: ++no,
    id: user.id,
    username: user.username,
    avatar: rgb(),
  };
}

function send(ws: WebSocket, message: any, all: boolean = true) {
  if (message.data) {
    // @ts-ignore
    message.data.user = ws._payload.user;
    message.data.self = true;
    message.data.date = new Date().toLocaleString();
  }

  if (all) {
    server.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        if (message.data) {
          message.data.self = ws === client ? true : false;
        }
        client.send(JSON.stringify(message), { binary: false });
      }
    });
  } else {
    ws.send(JSON.stringify(message), { binary: false });
  }
}
