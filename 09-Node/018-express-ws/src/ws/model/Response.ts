import { MessageModel } from "../../model/Message";
import { success, failed } from "../../utils/data";
import { MessageResponse } from "./Message";

interface WSMessageResponse {
  status: 200;
  data: ReturnType<typeof success<MessageModel | MessageResponse>>;
}

interface WSErrorResponse {
  status: 401;
  data: ReturnType<typeof failed>;
}

export type WSResponse = WSMessageResponse | WSErrorResponse;
