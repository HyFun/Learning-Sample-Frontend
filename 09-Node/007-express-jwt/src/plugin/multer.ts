import path from "path";
import multer from "multer";
import { v4 } from "uuid";

const PATH = path.resolve(__dirname, "../../public/upload");
const FILE_URL = "/upload";
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
      file.url = url;
      cb(null, filename);
    },
  }),
});

export default upload;
