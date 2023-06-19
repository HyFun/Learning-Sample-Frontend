import { defineConfig } from "vite";

export default defineConfig({
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName(name, filename, css) {
        return name;
      },
    },
    preprocessorOptions: {
      less: {
        globalVars: {
          mainColor: "blue",
        },
      },
    },
  },
});
