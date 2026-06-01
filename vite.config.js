import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static site build. Set "base" to your repo subpath if deploying to
// GitHub Pages under a subdirectory, otherwise leave as "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
});
