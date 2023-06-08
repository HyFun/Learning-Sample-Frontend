import { UserModel } from "../../model/User";
import { MessageType } from "./MessageType";

export interface Message {
  id: string;
  messageType: MessageType;
  message: string;
  user?: UserModel;
  date: number;
}
