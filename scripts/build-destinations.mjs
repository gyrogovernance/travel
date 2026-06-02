/**
 * Builds src/data/destinations.js and copies hero images to public/destinations/.
 * Source: Ethical Travel Atlas markdown in private/products/Notion.
 *
 * Run: npm run destinations
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

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const ATLAS_ROOT = join(
  root,
  "private/products/Notion/Ethical Travel Atlas - 100 Destinations Worth the Journey/Ethical Travel Atlas - 100 Destinations Worth the Journey"
);

const MD_DIR = join(ATLAS_ROOT, "Destinations-Top-100");
const ASSETS_DIR = join(ATLAS_ROOT, "Destinations-Top-100-assets");
const OUT_JS = join(root, "src/data/destinations.js");
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

function parseGyroscopePrep(text) {
  const gtm = parseBulletList(
    section(text, "### 🔍 Governance Management Traceability", /\n### /)
  );
  const ivc = parseBulletList(
    section(text, "### 📡 Information Curation Variety", /\n### /)
  );
  const iia = parseBulletList(
    section(text, "### 🎯 Inference Interaction Accountability", /\n### /)
  );
  const iciBlock = section(text, "### 🔄 Intelligence Cooperation Integrity", /\n### /);
  const iciParas = iciBlock
    .split(/\n\n+/)
    .map((p) => stripMarkdownInline(p.replace(/\n/g, " ").trim()))
    .filter((p) => p.length > 20 && !p.startsWith("-"));
  const ici = iciParas.join("\n\n");

  return { gtm, ivc, iia, ici };
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
    for (const key of ["gtm", "ivc", "iia"]) {
      if (!d.gyroscopePrep[key]?.length) {
        warnings.push(`${d.slug}: missing gyroscopePrep.${key} bullets`);
      }
    }
    if (!d.gyroscopePrep.ici) {
      warnings.push(`${d.slug}: missing gyroscopePrep.ici`);
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

  const lines = [
    "/**",
    " * Ethical Travel Atlas destinations. Generated by scripts/build-destinations.mjs",
    " * Do not edit by hand.",
    " */",
    "",
    `export const REGIONS = ${JSON.stringify(REGIONS)};`,
    "",
    `export const FEATURED_SLUGS = ${JSON.stringify(featuredSlugs)};`,
    "",
    "export const DESTINATIONS = [",
  ];

  for (const d of destinations) {
    lines.push("  {");
    lines.push(`    slug: ${JSON.stringify(d.slug)},`);
    lines.push(`    name: ${JSON.stringify(d.name)},`);
    lines.push(`    country: ${JSON.stringify(d.country)},`);
    lines.push(`    region: ${JSON.stringify(d.region)},`);
    lines.push(`    order: ${d.order},`);
    lines.push(`    image: ${JSON.stringify(d.image)},`);
    lines.push(`    teaser: ${JSON.stringify(d.teaser)},`);
    lines.push(`    intro: ${JSON.stringify(d.intro)},`);
    lines.push(`    whyVisit: ${JSON.stringify(d.whyVisit)},`);
    lines.push(`    ethicalCompass: ${JSON.stringify(d.ethicalCompass)},`);
    lines.push(`    gyroscopePrep: ${JSON.stringify(d.gyroscopePrep)},`);
    lines.push(`    anchorSpots: ${JSON.stringify(d.anchorSpots)},`);
    lines.push(
      `    recommendedLength: ${d.recommendedLength ? JSON.stringify(d.recommendedLength) : "null"},`
    );
    lines.push(`    transportHint: ${JSON.stringify(d.transportHint)},`);
    lines.push(`    prompt: ${JSON.stringify(d.prompt)},`);
    lines.push("  },");
  }

  lines.push("];");
  lines.push("");
  lines.push("export function getDestination(slug) {");
  lines.push('  return DESTINATIONS.find((d) => d.slug === slug);');
  lines.push("}");
  lines.push("");
  lines.push("export function destinationsByRegion(region) {");
  lines.push("  return DESTINATIONS.filter((d) => d.region === region);");
  lines.push("}");
  lines.push("");

  writeFileSync(OUT_JS, lines.join("\n"), "utf8");
  console.log(`Wrote ${destinations.length} destinations to ${OUT_JS}`);
  console.log(`Copied images to ${OUT_IMG_DIR}`);
}

main();
