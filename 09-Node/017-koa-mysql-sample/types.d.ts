import "@koa/multer";

declare global {
  namespace multer {
    interface File {
      url?: string;
    }
  }
}
