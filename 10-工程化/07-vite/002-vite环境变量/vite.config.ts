import { defineConfig, loadEnv } from "vite";

export default defineConfig((config) => {
  const { command, mode } = config;
  console.log("vite: command::", command);

  console.log("vite: mode::", mode);

  const env = loadEnv(mode, process.cwd());
  console.log("vite: env::", env);

  return config;
});
