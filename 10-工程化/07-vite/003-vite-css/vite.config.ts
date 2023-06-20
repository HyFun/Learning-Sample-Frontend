import { defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env";

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
    devSourcemap: true,
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
});
