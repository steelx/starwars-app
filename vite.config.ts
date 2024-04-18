/** @type {import('vite').UserConfig} */
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths"
import { resolve } from "path";


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setuptest.ts"],
    include: ["./src/**/*.{test}.{ts,tsx}"],
  },
  resolve: {
    alias: [
      { find: '@styles', replacement: resolve(__dirname, './src/styles') },
      { find: '@store', replacement: resolve(__dirname, './src/store') },
      { find: '@pages', replacement: resolve(__dirname, './src/pages') },
    ]
  }
});
