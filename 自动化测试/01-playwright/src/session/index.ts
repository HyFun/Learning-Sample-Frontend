import { SessionType } from "../types";
import { storageMap } from "./constant";
import { login, enter } from "../utils/page-helper";
import testConfig from "../utils/config-helper";
import { isExist } from "./util";

const map = new Map<SessionType, boolean>();

class Session {
  public async start(sessionType: SessionType, use: (r: any) => Promise<void>) {
    const storage = storageMap[sessionType];
    const isLogin = map.get(sessionType);
    if (isLogin || isExist(storage)) {
      await enter({ storage, use });
    } else {
      await login({
        url: testConfig.url!,
        username: testConfig.username!,
        password: testConfig.password!,
        storage,
      });
      await this.start(sessionType, use);
    }
    map.set(sessionType, true);
  }
}

const session = new Session();

export default session;
