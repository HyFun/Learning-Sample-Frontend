import path from "path";
import multer from "koa-multer";
import { v4 } from "uuid";

const FILE_URL = "/files";
const PATH = path.resolve(__dirname, `../../public${FILE_URL}`);
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, PATH);
    },
    filename: function (req, file, cb) {
      const stuff = file.originalname.substring(
        file.originalname.lastIndexOf(".")
      );
      const filename = `${v4()}${stuff}`;
      const url = `${FILE_URL}/${filename}`;
      // @ts-ignore
      file.url = url;
      cb(null, filename);
    },
  }),
});

export default upload;
