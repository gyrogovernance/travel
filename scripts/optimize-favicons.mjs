/**
 * Regenerate public/favicon.png and apple-touch-icon.png from the icon PNG.
 * Run: node scripts/optimize-favicons.mjs
 */
import { statSync } from "fs";
import sharp from "sharp";

const src = "src/assets/GG_Travel_Icon.png";

await sharp(src).resize(32, 32).png({ compressionLevel: 9 }).toFile("public/favicon.png");
await sharp(src).resize(180, 180).png({ compressionLevel: 9 }).toFile("public/apple-touch-icon.png");

for (const f of ["public/favicon.png", "public/apple-touch-icon.png"]) {
  console.log(`${f}: ${Math.round(statSync(f).size / 1024)} KB`);
}
