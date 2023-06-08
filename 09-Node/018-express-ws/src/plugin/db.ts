import { Sequelize, Options } from "sequelize";

const option: Options = {
  host: process.env.MYSQL_HOST,
  port: +process.env.MYSQL_PORT!,
  username: process.env.MYSQL_USER_NAME,
  password: process.env.MYSQL_PASSWORD,
  dialect: "mysql",
  database: "chat",
  define: {
    timestamps: false,
  },
};

class MongooseClient {
  private sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(option);
  }

  async connect() {
    try {
      console.log("mysql 连接开始");
      await this.sequelize.authenticate();
      console.log("mysql 连接成功");
    } catch (error) {
      console.log("mysql 连接失败", error);
    }
  }

  get instance() {
    return this.sequelize;
  }
}

export default new MongooseClient();
