import { Middleware } from "koa";
import { formidable, File } from "formidable";

const formdata = (fileField?: string): Middleware => {
  return async (ctx, next) => {
    const form = formidable({ multiples: true });
    await new Promise<void>((resolve, reject) => {
      form.parse(ctx.req, (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }

        ctx.request.body = fields;
        let list: File[] = [];
        if (fileField) {
          const fileArray = files[fileField];
          if (fileArray) {
            // @ts-ignore
            if (fileArray.length) {
              // @ts-ignore
              list = [...fileArray];
            } else {
              // @ts-ignore
              list = [fileArray];
            }
          }
        }
        // @ts-ignore
        ctx.request.files = list;
        
        resolve();
      });
    });

    await next();
  };
};

export default formdata;
