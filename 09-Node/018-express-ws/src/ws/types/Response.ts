import { MessageModel } from "../../model/Message";
import { UserModel } from "../../model/User";
import { success, failed } from "../../utils/data";

export enum Status {
  MESSAGE = 200,
  INVALID_TOKEN = 401,
  MESSAGE_LIST = 201,
}

export enum MessageType {
  SYSTEM = "SYSTEM",
  USER = "USER",
}

export interface MessageResponse extends MessageModel {
  user: UserModel;
}

interface WSMessageResponse {
  status: Status.MESSAGE;
  data: ReturnType<typeof success<MessageModel | MessageResponse>>;
}

interface WSMessageListResponse {
  status: Status.MESSAGE_LIST;
  data: ReturnType<typeof success<MessageResponse[]>>;
}

interface WSErrorResponse {
  status: Status.INVALID_TOKEN;
  data: ReturnType<typeof failed>;
}

export type WSResponse =
  | WSMessageResponse
  | WSErrorResponse
  | WSMessageListResponse;
