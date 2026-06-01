import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

// Static site build. Set "base" to your repo subpath if deploying to
// GitHub Pages under a subdirectory, otherwise leave as "/".
export default defineConfig({
  plugins: [
    react(),
    // Automatic WebP conversion on build.
    // Any image imported without explicit directives is converted to
    // WebP at build time. To opt out for a specific import, add
    // "?format=original" to the import path. To request other formats
    // or sizes, use directives like "?w=800&format=avif".
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has("original")) return new URLSearchParams();
        return new URLSearchParams({ format: "webp", quality: "72" });
      },
    }),
  ],
  base: "/",
  build: {
    outDir: "dist",
    assetsInlineLimit: 0,
  },
});
