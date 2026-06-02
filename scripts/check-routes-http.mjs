/**
 * HTTP smoke test for built SPA routes (run preview first on port 4173).
 * bun run preview &  then  bun scripts/check-routes-http.mjs
 */
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const BASE = process.env.PREVIEW_URL || "http://localhost:4173";
const __dirname = dirname(fileURLToPath(import.meta.url));
const sitemap = readFileSync(join(__dirname, "..", "public", "sitemap.xml"), "utf8");

const paths = [...sitemap.matchAll(/<loc>https:\/\/[^<]+\/([^<]*)<\/loc>/g)].map((m) => {
  const tail = m[1];
  return tail ? `/${tail.replace(/\/$/, "")}` : "/";
});

const unique = [...new Set(paths)];
const failures = [];

async function check(path) {
  const url = path === "/" ? BASE + "/" : `${BASE}${path}`;
  try {
    const res = await fetch(url, { redirect: "follow" });
    const ok = res.ok || res.status === 304;
    if (!ok) failures.push({ path, status: res.status });
  } catch (e) {
    failures.push({ path, error: e.message });
  }
}

const batch = 8;
for (let i = 0; i < unique.length; i += batch) {
  await Promise.all(unique.slice(i, i + batch).map(check));
}

console.log(`Checked ${unique.length} sitemap paths against ${BASE}`);
if (failures.length) {
  console.log(`FAILURES (${failures.length}):`);
  for (const f of failures.slice(0, 25)) console.log(`  ${f.path}: ${f.status ?? f.error}`);
  process.exit(1);
}
console.log("All routes returned HTTP 2xx.");
