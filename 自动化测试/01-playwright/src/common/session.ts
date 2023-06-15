import fs from "fs";

import { Channel } from "../model";
import { sessionStorageMap } from "../constant/storage";
import { enter, login } from "../utils/page-helper";
import testConfig from "../utils/config-helper";

function isExist(path: string) {
  try {
    return fs.existsSync(path);
  } catch (error) {
    return false;
  }
}

class Session {
  private static sessionMap = new Map<Channel, String>();

  public static async start(channel: Channel, use: (r: any) => Promise<void>) {
    await this.login(channel);
    const path = sessionStorageMap[channel];
    await enter({ use, storage: path });
  }

  private static async login(channel: Channel) {
    const session = this.sessionMap.get(channel);
    if (!session) {
      await this.create(channel);
    }
  }

  private static async create(channel: Channel) {
    const path = sessionStorageMap[channel];
    if (!isExist(path)) {
      await login({
        url: testConfig.url!,
        username: testConfig.username!,
        password: testConfig.password!,
        storage: path,
      });
    }
    this.sessionMap.set(channel, path);
  }
}

export default Session;
