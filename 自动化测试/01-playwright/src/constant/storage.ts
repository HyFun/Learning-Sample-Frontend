import path from "path";
import { Channel } from "../model";

export const sessionStorageMap: Record<Channel, string> = {
  [Channel.CHAT]: path.resolve(
    __dirname,
    `../assets/storage/${Channel.CHAT}.json`
  ),
};
