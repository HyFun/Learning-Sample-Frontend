import Message, { MessageModel } from "../model/Message";
import User, { UserModel } from "../model/User";

export class Service {
  public async getMessages() {
    const result = await Message.findAll({ include: [{ model: User }] });
    return result.map((v) => v.dataValues);
  }

  public async getUser(userId: string) {
    const result = await User.findOne({ where: { id: userId } });
    if (result?.dataValues) {
      return result.dataValues as UserModel;
    } else {
      throw new Error("该用户不存在");
    }
  }

  public async addMessage(message: MessageModel) {
    return await Message.create(message);
  }
}
