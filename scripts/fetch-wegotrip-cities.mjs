/**
 * Downloads WeGoTrip city sitemap and writes scripts/data/wegotrip-cities.json.
 * Run: node scripts/fetch-wegotrip-cities.mjs
 */
import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "data/wegotrip-cities.json");

function slugify(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function main() {
  const res = await fetch("https://wegotrip.com/city-sitemap.xml");
  if (!res.ok) {
    console.error(`Failed to fetch sitemap: ${res.status}`);
    process.exit(1);
  }
  const xml = await res.text();
  const cities = [];
  const re = /wegotrip\.com\/([a-z0-9-]+)-d(\d+)\//gi;
  let m;
  while ((m = re.exec(xml)) !== null) {
    cities.push({
      slug: m[1],
      cityId: Number(m[2]),
      url: `https://wegotrip.com/${m[1]}-d${m[2]}/`,
    });
  }

  cities.sort((a, b) => a.slug.localeCompare(b.slug));

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(
    OUT,
    JSON.stringify({ fetchedAt: new Date().toISOString(), count: cities.length, cities }, null, 2),
    "utf8"
  );
  console.log(`Wrote ${cities.length} WeGoTrip cities to ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
