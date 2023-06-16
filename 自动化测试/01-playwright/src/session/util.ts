import fs from "fs";

export function isExist(path: string) {
  try {
    return fs.existsSync(path);
  } catch (err) {
    return false;
  }
}
