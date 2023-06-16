import path from "path";

import { SessionType } from "../types";

function getStorage(filename: string): string {
  return path.join(__dirname, "./assets", filename);
}

export const storageMap = {
  [SessionType.CHAT]: getStorage(`${SessionType.CHAT}-session.json`),
};
