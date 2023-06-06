import Router from "@koa/router";
import formidable from "formidable";

import { generate, verify } from "../utils/token";
import upload from "../plugin/multer";

import UserModel from "../model/User";
import { logger } from "../plugin/logger";
import { parseFormData } from "../utils/form";

const router = new Router();

// 登录/注册
router
  .post("/login", async (ctx) => {
    try {
      const { username, password } = ctx.request.body as {
        username: string;
        password: string;
      };

      const result = await UserModel.findOne({
        attributes: [
          "id",
          "username",
          "gender",
          "age",
          "create_time",
          "avatar_url",
        ],
        where: {
          username,
          password,
        },
      });

      const user = result?.dataValues;

      if (user) {
        const newToken = generate({ username, id: user.id }, "1h");
        ctx.set("Authorization", newToken);
        ctx.body = {
          ok: 1,
          data: user,
        };
      } else {
        throw new Error();
      }
    } catch (error) {
      ctx.body = {
        ok: 0,
        errMsg: "用户名/密码错误",
      };
    }
  })
  .post(
    "/register",
    async (ctx, next) => {
      try {
        const { username } = await parseFormData(ctx);

        try {
          const result = await UserModel.findOne({
            attributes: ["id"],
            where: { username },
          });
          if (result?.dataValues) {
            ctx.body = {
              ok: 0,
              errMsg: "用户已经存在",
            };
          } else {
            throw new Error();
          }
        } catch (error) {
          console.log(error);

          await next();
        }
      } catch (error) {
        console.log(error);
        
        ctx.body = {
          ok: 0,
          errMsg: "解析失败",
        };
      }
    },
    upload.single("file"),
    async (ctx) => {
      try {
        const { username, password } = ctx.request.body as any;
        // @ts-ignore
        const url = ctx.request.file?.url;

        await UserModel.create({ username, password, avatar_url: url });
        ctx.body = {
          ok: 1,
        };
      } catch (error: any) {
        ctx.body = {
          ok: 0,
          errMsg: error.message,
        };
      }
    }
  );

// 用户
// router
//   .get("/user", async (ctx) => {
//     try {
//       const token = ctx.get("Authorization").split(" ")[1];
//       const { id } = verify(token) as { id: string };

//       const user = await UserModel.findOne({ _id: id });

//       if (user) {
//         ctx.body = {
//           ok: 1,
//           data: user,
//         };
//       } else {
//         throw new Error();
//       }
//     } catch (error) {
//       ctx.body = {
//         ok: 0,
//         errMsg: "查询失败",
//       };
//     }
//   })
//   .get("/users", async (ctx) => {
//     try {
//       const list = await UserModel.find();
//       ctx.body = {
//         ok: 1,
//         data: list,
//       };
//     } catch (error) {
//       ctx.body = {
//         ok: 0,
//         errMsg: "查询失败",
//       };
//     }
//   });

export default router;
