import { Express } from "express";

import pages from "./pages";
import api from "./api";

export const WHITE_LIST = [
  "/",
  "/login",
  "/api/login",
  "/register",
  "/api/register",
];

export function register(app: Express) {
  app.use("/", pages);
  app.use("/api", api);
}
