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
    setupFiles: ["./test-helpers/setupTest.ts"],
    include: ["./src/**/*.{test,spec}.{ts,tsx}"],
  },
  resolve: {
    alias: [
      { find: '@test-helpers', replacement: resolve(__dirname, './test-helpers') },
      { find: '@assets', replacement: resolve(__dirname, './src/assets') },
      { find: '@shared', replacement: resolve(__dirname, './src/shared') },
      { find: '@store', replacement: resolve(__dirname, './src/store') },
      { find: '@pages', replacement: resolve(__dirname, './src/pages') },
    ]
  }
});
