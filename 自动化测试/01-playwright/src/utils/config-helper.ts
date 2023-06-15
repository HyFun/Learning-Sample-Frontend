import { Channel } from "../model";

class Configuration {
  region() {}

  get username() {
    return process.env.USER_NAME;
  }

  get password() {
    return process.env.PASSWORD;
  }

  get url() {
    return process.env.BASE_URL;
  }

  get account() {
    if (this.url) {
      const account = this.url.substring(8, this.url.indexOf("."));
      return account;
    }
  }
}

const testConfig = new Configuration();

export default testConfig;
