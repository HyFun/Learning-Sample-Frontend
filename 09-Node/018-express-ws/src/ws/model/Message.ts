import { UserModel } from "../../model/User";
import { MessageModel } from "../../model/Message";

export interface MessageResponse extends MessageModel {
  user: UserModel;
}
