import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    minify: true,
  },
  base: "/",
  build: {
    outDir: "dist",
    cssMinify: false,
  },
});
