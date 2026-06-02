/**
 * Align private Atlas markdown with Gyroscope Protocol work category names
 * (and site data keys gm, icu, iinter, ico).
 *
 * Skips canonical reference papers (THM, GGG) where THM principle names stay.
 *
 * Run: node scripts/sync-private-markdown-gyroscope.mjs
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { dirname, join, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const privateDir = join(root, "private");

const SKIP_SUFFIXES = [
  `${join("docs", "references", "GGG_Paper.md")}`,
  `${join("docs", "references", "THM.md")}`,
];

/** Restore THM principle names in context.md after bulk Gyroscope renames. */
const CONTEXT_THM_CAPACITIES =
  "THM defines four **alignment capacities** (Governance Management Traceability, Information Curation Variety, Inference Interaction Accountability, Intelligence Cooperation Integrity)";
const CONTEXT_THM_CAPACITIES_WRONG =
  "THM defines four **alignment capacities** (Governance Management, Information Curation, Inference Interaction, Intelligence Cooperation)";

const NAME_REPLACEMENTS = [
  ["Governance Management Traceability", "Governance Management"],
  ["Information Curation Variety", "Information Curation"],
  ["Inference Interaction Accountability", "Inference Interaction"],
  ["Intelligence Cooperation Integrity", "Intelligence Cooperation"],
];

const PROMPT_ICI_OLD =
  "- **Intelligence Cooperation.** Build me a soft plan";
const PROMPT_ICI_NEW =
  "- **Intelligence Cooperation.** How should I trust my own judgment and local advice over algorithmic defaults when conditions change? Build me a soft plan";

function shouldSkip(relPath) {
  const norm = relPath.replace(/\\/g, "/");
  return SKIP_SUFFIXES.some((s) => norm.endsWith(s.replace(/\\/g, "/")));
}

function walkMd(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walkMd(full, files);
    } else if (name.endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

function transform(content) {
  let out = content;
  for (const [from, to] of NAME_REPLACEMENTS) {
    out = out.split(from).join(to);
  }
  if (out.includes(PROMPT_ICI_OLD)) {
    out = out.split(PROMPT_ICI_OLD).join(PROMPT_ICI_NEW);
  }
  return out;
}

const files = walkMd(privateDir);
let changed = 0;
const counts = Object.fromEntries(NAME_REPLACEMENTS.map(([from]) => [from, 0]));

for (const file of files) {
  const rel = relative(privateDir, file);
  if (shouldSkip(rel)) {
    console.log(`skip ${rel}`);
    continue;
  }

  const before = readFileSync(file, "utf8");
  const after = transform(before);
  if (after === before) continue;

  for (const [from] of NAME_REPLACEMENTS) {
    const n = before.split(from).length - 1;
    if (n) counts[from] += n;
  }

  let final = after;
  if (rel.replace(/\\/g, "/") === "docs/context.md" && final.includes(CONTEXT_THM_CAPACITIES_WRONG)) {
    final = final.split(CONTEXT_THM_CAPACITIES_WRONG).join(CONTEXT_THM_CAPACITIES);
  }

  writeFileSync(file, final, "utf8");
  changed++;
  console.log(`updated ${rel}`);
}

console.log("");
console.log(`Files changed: ${changed}`);
for (const [from, n] of Object.entries(counts)) {
  if (n) console.log(`  ${from}: ${n} replacements`);
}
