/**
 * Static site audit: routes, assets, affiliate config, build data.
 * Run: bun scripts/site-audit.mjs
 */
import { existsSync, readdirSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { POSTS } from "../src/data/posts.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");

const { destinations: DESTINATIONS } = JSON.parse(
  readFileSync(join(root, "src/data/destinations/index.json"), "utf8")
);

const VALID_DOMAINS = new Set(["economy", "employment", "education", "ecology"]);
const STATIC_ROUTES = new Set([
  "/",
  "/guides",
  "/destinations",
  "/resources",
  "/prompts",
  "/search/flights",
  "/about",
  "/privacy",
  "/cookies",
]);

const issues = [];
const warnings = [];

function issue(msg) {
  issues.push(msg);
}
function warn(msg) {
  warnings.push(msg);
}

function checkDuplicates(items, key, label) {
  const seen = new Map();
  for (const item of items) {
    const v = item[key];
    if (seen.has(v)) {
      issue(`Duplicate ${label} ${key}: "${v}"`);
    }
    seen.set(v, true);
  }
}

checkDuplicates(POSTS, "slug", "post");
checkDuplicates(DESTINATIONS, "slug", "destination");

for (const p of POSTS) {
  if (!VALID_DOMAINS.has(p.domain)) {
    issue(`Post "${p.slug}" has invalid domain: ${p.domain}`);
  }
  if (!p.title?.trim()) issue(`Post "${p.slug}" missing title`);
  if (!p.excerpt?.trim()) warn(`Post "${p.slug}" missing excerpt`);
}

const detailDir = join(root, "src/data/destinations/detail");

for (const d of DESTINATIONS) {
  if (!d.region) warn(`Destination "${d.slug}" missing region`);
  const imgPath = join(publicDir, "destinations", `${d.slug}.webp`);
  const jpgPath = join(publicDir, "destinations", `${d.slug}.jpg`);
  if (!existsSync(imgPath) && !existsSync(jpgPath)) {
    issue(`Missing hero image for destination "${d.slug}"`);
  }
  if (!existsSync(join(detailDir, `${d.slug}.json`))) {
    issue(`Missing detail JSON for destination "${d.slug}"`);
  }
}

const routeSet = new Set(STATIC_ROUTES);
for (const d of VALID_DOMAINS) routeSet.add(`/domains/${d}`);
for (const p of POSTS) routeSet.add(`/guides/${p.slug}`);
for (const d of DESTINATIONS) routeSet.add(`/destinations/${d.slug}`);

const srcDir = join(root, "src");
const srcFiles = [];
function walk(dir) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, name.name);
    if (name.isDirectory()) walk(p);
    else if (/\.(jsx?|tsx?)$/.test(name.name)) srcFiles.push(p);
  }
}
walk(srcDir);

const internalLinkRe = /(?:to|href)=\{?[`'"](\/[^`'"]+)[`'"]/g;
const staticHrefRe = /href="(\/[^"#?]+)"/g;

for (const file of srcFiles) {
  const text = readFileSync(file, "utf8");
  for (const re of [internalLinkRe, staticHrefRe]) {
    let m;
    re.lastIndex = 0;
    while ((m = re.exec(text))) {
      let path = m[1];
      if (path.includes("#")) path = path.split("#")[0];
      if (!path || path === "/") continue;
      if (!routeSet.has(path) && !path.startsWith("/domains/")) {
        const rel = file.replace(root + "\\", "").replace(root + "/", "");
        if (!path.includes("${")) {
          issue(`Unknown internal route in ${rel}: ${path}`);
        }
      }
    }
  }
}

const assetImports = [];
const importRe = /from\s+["']([^"']+\.(webp|png|jpg|svg))["']/g;
for (const file of srcFiles) {
  const text = readFileSync(file, "utf8");
  let m;
  while ((m = importRe.exec(text))) {
    assetImports.push({ file, spec: m[1] });
  }
}

console.log("SITE AUDIT");
console.log("----------");
console.log(`Posts: ${POSTS.length}`);
console.log(`Destinations: ${DESTINATIONS.length}`);
console.log(`Routes in graph: ${routeSet.size}`);
const toursMatched = DESTINATIONS.filter((d) => d.toursCityId).length;
console.log(`WeGoTrip matched: ${toursMatched}/${DESTINATIONS.length} (expected gaps OK)`);
console.log("");

if (warnings.length) {
  console.log(`WARNINGS (${warnings.length}):`);
  for (const w of warnings.slice(0, 30)) console.log(`  - ${w}`);
  if (warnings.length > 30) console.log(`  ... and ${warnings.length - 30} more`);
  console.log("");
}

if (issues.length) {
  console.log(`ISSUES (${issues.length}):`);
  for (const i of issues) console.log(`  - ${i}`);
  process.exit(1);
}

console.log("No blocking issues found.");
if (warnings.length) process.exit(0);
console.log("No warnings.");
