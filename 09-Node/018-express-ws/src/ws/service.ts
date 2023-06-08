import User, { UserModel } from "../model/User";

export class Service {
  public async getUser(userId: string) {
    const result = await User.findOne({ where: { id: userId } });
    if (result?.dataValues) {
      return result.dataValues as UserModel;
    } else {
      throw new Error("该用户不存在");
    }
  }
}
