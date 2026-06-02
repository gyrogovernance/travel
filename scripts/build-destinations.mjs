/**
 * Builds src/data/destinations/index.json, detail/*.json, and copies hero images.
 * Source: private/products/atlas/*.md and private/products/atlas/assets/*.jpg
 *
 * Run: bun run destinations
 */
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  copyFileSync,
  existsSync,
  readdirSync,
} from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { matchToursCity } from "./match-tours-city.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const ATLAS_ROOT = join(root, "private/products/atlas");
const MD_DIR = ATLAS_ROOT;
const ASSETS_DIR = join(ATLAS_ROOT, "assets");
const OUT_CATALOG = join(root, "src/data/destinations/index.json");
const OUT_DETAIL_DIR = join(root, "src/data/destinations/detail");
const OUT_IMG_DIR = join(root, "public/destinations");

const REGIONS = ["Asia", "Africa", "Europe", "Americas", "Oceania"];

const TRANSPORT_FALLBACK =
  "Use official tourism and transit sites for current routes, passes, and booking rules.";

function escapeJsString(s) {
  return s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .replace(/\n/g, "\\n");
}

function stripMarkdownInline(s) {
  return s
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

function firstParagraphs(text, count = 1) {
  const paras = text
    .split(/\n\n+/)
    .map((p) => stripMarkdownInline(p.replace(/\n/g, " ").trim()))
    .filter((p) => p.length > 40);
  return paras.slice(0, count).join("\n\n");
}

function section(text, startHeading, endHeadingRegex) {
  const startIdx = text.indexOf(startHeading);
  if (startIdx === -1) return "";
  const after = text.slice(startIdx + startHeading.length);
  const endMatch = after.search(endHeadingRegex);
  const body = endMatch === -1 ? after : after.slice(0, endMatch);
  return body.trim();
}

function parseBulletList(block) {
  const items = [];
  for (const line of block.split("\n")) {
    const m = line.match(/^-\s+(.+)$/);
    if (m) items.push(stripMarkdownInline(m[1]));
  }
  return items;
}

function parseEthicalCompass(text) {
  const block = section(text, "### 🌍 Ethical Compass", /\n---|\n## /);
  const compass = { economy: "", employment: "", education: "", ecology: "" };
  if (!block) return compass;

  const patterns = [
    ["economy", /Economy/i],
    ["employment", /Employment/i],
    ["education", /Education/i],
    ["ecology", /Ecology/i],
  ];

  for (const line of block.split("\n")) {
    const m = line.match(/^-\s+\*\*[^*]+\*\*\s*(.+)$/);
    if (!m) continue;
    const body = stripMarkdownInline(m[1]);
    for (const [key, re] of patterns) {
      if (re.test(line) && body) {
        compass[key] = body;
      }
    }
  }
  return compass;
}

const GYROSCOPE_SECTIONS = {
  gm: "### 🔍 Governance Management",
  icu: "### 📡 Information Curation",
  iinter: "### 🎯 Inference Interaction",
  ico: "### 🔄 Intelligence Cooperation",
};

function parseGyroscopePrep(text) {
  const gm = parseBulletList(section(text, GYROSCOPE_SECTIONS.gm, /\n### /));
  const icu = parseBulletList(section(text, GYROSCOPE_SECTIONS.icu, /\n### /));
  const iinter = parseBulletList(section(text, GYROSCOPE_SECTIONS.iinter, /\n### /));
  const icoBlock = section(text, GYROSCOPE_SECTIONS.ico, /\n### /);
  const icoParas = icoBlock
    .split(/\n\n+/)
    .map((p) => stripMarkdownInline(p.replace(/\n/g, " ").trim()))
    .filter((p) => p.length > 20 && !p.startsWith("-"));
  const ico = icoParas.join("\n\n");

  return { gm, icu, iinter, ico };
}

function parseAnchorSpots(text) {
  const block = section(text, "### 📍 Top 5 Anchor Spots", /\n### /);
  if (!block) return [];
  const spots = [];
  for (const line of block.split("\n")) {
    const m = line.match(/^\d+\.\s+(.+)$/);
    if (m) spots.push(stripMarkdownInline(m[1]));
  }
  return spots.slice(0, 5);
}

function parsePrompt(text) {
  const block = section(text, "### 🤖 AI Prompt", /\n---|\n\nPart of \*\*/);
  if (!block) return "";
  const lines = [];
  for (const line of block.split("\n")) {
    const trimmed = line.trim();
    if (trimmed.startsWith(">")) {
      lines.push(trimmed.replace(/^>\s?/, ""));
    } else if (trimmed && lines.length > 0) {
      lines.push(trimmed);
    }
  }
  return lines.join("\n").trim();
}

function parsePracticalBlock(text) {
  return section(text, "### 🧰 Practical Essentials", /\n### |\n---/);
}

function parseRecommendedLength(practicalBlock) {
  const m = practicalBlock.match(/\*\*Recommended Length\.\*\*\s*([^\n]+)/);
  if (m) return stripMarkdownInline(m[1]);
  const m2 = practicalBlock.match(/Recommended Length[.:]\s*([^\n]+)/i);
  return m2 ? stripMarkdownInline(m2[1]) : "";
}

function parseTransportHint(practicalBlock) {
  const labels = [
    "Transport",
    "Getting There and Around",
    "Getting around",
    "Getting Around",
  ];
  for (const label of labels) {
    const m = practicalBlock.match(
      new RegExp(`\\*\\*${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\.\\*\\*\\s*([^\\n]+)`)
    );
    if (m) {
      const value = stripMarkdownInline(m[1]);
      if (value) return value;
    }
  }
  return null;
}

function parseMeta(lines, key) {
  const re = new RegExp(`^${key}:\\s*(.+)$`, "m");
  const m = lines.match(re);
  return m ? m[1].trim() : "";
}

function parseTitle(h1) {
  const m = h1.match(/^#\s+(.+?),\s*(.+)$/);
  if (m) return { name: m[1].trim(), country: m[2].trim() };
  const plain = h1.replace(/^#\s+/, "").trim();
  return { name: plain, country: "" };
}

function parseIntro(text) {
  const parts = text.split(/^---$/m);
  const head = parts[0] || text;
  const lines = head.split("\n");
  const paras = [];
  let buf = [];
  for (const line of lines) {
    if (line.startsWith("#") || line.startsWith("!") || line.startsWith("Country:")) continue;
    if (line.startsWith("Region:")) continue;
    if (!line.trim()) {
      if (buf.length) {
        paras.push(buf.join(" "));
        buf = [];
      }
      continue;
    }
    if (line.startsWith("##")) break;
    buf.push(line.trim());
  }
  if (buf.length) paras.push(buf.join(" "));
  const cleaned = paras.map((p) => stripMarkdownInline(p)).filter((p) => p.length > 30);
  return cleaned[0] || "";
}

function processFile(filename) {
  const slug = filename.replace(/\.md$/, "");
  const raw = readFileSync(join(MD_DIR, filename), "utf8");
  const h1 = raw.match(/^#\s+.+$/m)?.[0] || "";
  const { name, country } = parseTitle(h1);
  const region = parseMeta(raw, "Region") || "Asia";
  const intro = parseIntro(raw);
  const whyBlock = section(raw, "### ✨ Why Visit", /\n### /);
  const whyVisit = firstParagraphs(whyBlock, 2);
  const ethicalCompass = parseEthicalCompass(raw);
  const gyroscopePrep = parseGyroscopePrep(raw);
  const anchorSpots = parseAnchorSpots(raw);
  const practicalBlock = parsePracticalBlock(raw);
  const recommendedLength = parseRecommendedLength(practicalBlock);
  let transportHint = parseTransportHint(practicalBlock);
  if (!transportHint) transportHint = TRANSPORT_FALLBACK;
  const prompt = parsePrompt(raw);

  const imageFile = `${slug}.jpg`;
  const srcImage = join(ASSETS_DIR, imageFile);
  if (!existsSync(srcImage)) {
    console.warn(`WARN: missing image for ${slug}: ${srcImage}`);
  } else {
    copyFileSync(srcImage, join(OUT_IMG_DIR, imageFile));
  }

  const teaser = intro || firstParagraphs(whyBlock, 1);
  const toursMatch = matchToursCity({ slug, name: name || slug });

  return {
    slug,
    name: name || slug,
    country: country || parseMeta(raw, "Country"),
    region,
    image: `/destinations/${imageFile}`,
    teaser,
    intro,
    whyVisit,
    ethicalCompass,
    gyroscopePrep,
    anchorSpots,
    recommendedLength: recommendedLength || null,
    transportHint,
    prompt,
    toursCityId: toursMatch?.cityId ?? null,
  };
}

function validate(destinations) {
  const warnings = [];
  for (const d of destinations) {
    for (const key of ["economy", "employment", "education", "ecology"]) {
      if (!d.ethicalCompass[key]) {
        warnings.push(`${d.slug}: missing ethicalCompass.${key}`);
      }
    }
    for (const key of ["gm", "icu", "iinter"]) {
      if (!d.gyroscopePrep[key]?.length) {
        warnings.push(`${d.slug}: missing gyroscopePrep.${key} bullets`);
      }
    }
    if (!d.gyroscopePrep.ico) {
      warnings.push(`${d.slug}: missing gyroscopePrep.ico`);
    }
    if (!d.prompt) warnings.push(`${d.slug}: missing prompt`);
    if (d.anchorSpots.length < 5) {
      warnings.push(`${d.slug}: only ${d.anchorSpots.length} anchor spots`);
    }
  }
  if (warnings.length) {
    console.warn("Validation warnings:");
    for (const w of warnings.slice(0, 20)) console.warn(`  ${w}`);
    if (warnings.length > 20) console.warn(`  ... and ${warnings.length - 20} more`);
  }
}

function main() {
  if (!existsSync(MD_DIR)) {
    console.error(`Atlas markdown folder not found:\n${MD_DIR}`);
    process.exit(1);
  }

  mkdirSync(OUT_IMG_DIR, { recursive: true });

  const files = readdirSync(MD_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort();

  const destinations = files.map(processFile);
  validate(destinations);

  destinations.sort((a, b) => {
    const ri = REGIONS.indexOf(a.region) - REGIONS.indexOf(b.region);
    if (ri !== 0) return ri;
    return a.name.localeCompare(b.name);
  });

  let order = 0;
  for (const d of destinations) {
    order += 1;
    d.order = order;
  }

  const featuredSlugs = [];
  const extras = [
    "tokyo",
    "kyoto",
    "cairo",
    "cape-town",
    "london",
    "paris",
    "rome",
    "venice",
    "new-york-city",
    "mexico-city",
    "rio-de-janeiro",
    "sydney",
    "bali",
    "istanbul",
    "machu-picchu",
  ];
  for (const slug of extras) {
    if (destinations.some((d) => d.slug === slug)) {
      featuredSlugs.push(slug);
    }
  }

  mkdirSync(OUT_DETAIL_DIR, { recursive: true });

  const summaries = destinations.map((d) => ({
    slug: d.slug,
    name: d.name,
    country: d.country,
    region: d.region,
    order: d.order,
    image: d.image,
    teaser: d.teaser,
    toursCityId: d.toursCityId,
  }));

  writeFileSync(
    OUT_CATALOG,
    `${JSON.stringify({ regions: REGIONS, featuredSlugs, destinations: summaries }, null, 2)}\n`,
    "utf8"
  );

  for (const d of destinations) {
    writeFileSync(
      join(OUT_DETAIL_DIR, `${d.slug}.json`),
      `${JSON.stringify(d, null, 2)}\n`,
      "utf8"
    );
  }

  const withTours = destinations.filter((d) => d.toursCityId).length;
  console.log(`Wrote catalog (${summaries.length} summaries) to ${OUT_CATALOG}`);
  console.log(`Wrote ${destinations.length} detail JSON files to ${OUT_DETAIL_DIR}`);
  console.log(`Tours widget: ${withTours}/${destinations.length} destinations matched WeGoTrip cities`);
  console.log(`Copied images to ${OUT_IMG_DIR}`);
}

main();
