import { WebSocketServer, WebSocket } from "ws";
import { getMessenger } from "./messenger";

const server = new WebSocketServer({ port: 8089 });

server.on("connection", (ws, req) => {
  const { searchParams } = new URL(req.url!, "http://localhost:8089");
  const token = searchParams.get("token") || "";

  getMessenger({ ws, token });
});
