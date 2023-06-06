import { ParameterizedContext } from "koa";
import formidable from "formidable";

export async function parseFormData(ctx: ParameterizedContext): Promise<any> {
  const form = formidable({});
  return new Promise((resolve, reject) => {
    form.parse(ctx.req, (err, fields) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(fields || {});
    });
  });
}
