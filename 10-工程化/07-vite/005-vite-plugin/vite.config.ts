import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import ProjectInfo from "./plugin/ProjectInfo";

export default defineConfig({
  plugins: [react(), ProjectInfo()],
  server: {
    port: 3000,
    host: "localhost",
  },
});
