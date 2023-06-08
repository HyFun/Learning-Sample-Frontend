import { Message } from "./Message";

export interface WSResponse {
  status: 200 | 401 | 400;
  data: any;
}
