import path from "path";
import multer from "multer";
// import { v4 } from "uuid";

const upload = multer({
  dest: path.resolve(__dirname, "../../public/upload"),
});

export default upload;
