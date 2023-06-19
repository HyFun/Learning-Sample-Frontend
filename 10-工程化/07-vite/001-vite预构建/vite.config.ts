import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    exclude: ["lodash-es"],
  },
});
