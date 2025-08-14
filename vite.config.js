import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    minify: true,
  },
  base: "/", // ensures relative asset paths
  build: {
    outDir: "dist",
    cssMinify: false, // disables esbuild CSS minification, no warnings
  },
});
