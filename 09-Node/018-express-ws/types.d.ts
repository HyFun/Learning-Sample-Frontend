import "multer";
import { UserModel } from "./src/model/User";

declare global {
  namespace Express {
    namespace Multer {
      interface File {
        url?: string;
      }
    }
  }
}

declare module "ws" {
  interface WebSocket {
    _user: UserModel;
  }
}
