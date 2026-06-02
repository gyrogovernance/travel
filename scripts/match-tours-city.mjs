import { readFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CITIES_FILE = join(__dirname, "data/wegotrip-cities.json");

/** Manual overrides when slug/name matching is ambiguous. */
const SLUG_ALIASES = {
  "ho-chi-minh-city": "ho-chi-minh",
  "new-york-city": "new-york",
  "mexico-city": "mexico-city",
  "rio-de-janeiro": "rio-de-janeiro",
  "great-barrier-reef": "cairns",
  "machu-picchu": "cusco",
  "serengeti-national-park": "arusha",
  "maasai-mara": "nairobi",
  "kruger-national-park": "johannesburg",
  "victoria-falls": "victoria-falls",
  "iguazu-falls": "puerto-iguazu",
  "patagonia": "el-calafate",
  "banff": "banff",
  "fiji-nadi": "nadi",
  "giza": "cairo",
  "abu-dhabi": "abu-dhabi",
  "hong-kong": "hong-kong",
  "phuket": "phuket",
  "bali": "denpasar",
  "gold-coast": "surfers-paradise",
  "fiji-nadi": "nadi",
};

function slugify(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function loadCities() {
  if (!existsSync(CITIES_FILE)) return [];
  const data = JSON.parse(readFileSync(CITIES_FILE, "utf8"));
  return data.cities || [];
}

/** @returns {{ cityId: number, wegotripSlug: string, url: string } | null} */
export function matchToursCity(destination) {
  const cities = loadCities();
  if (!cities.length) return null;

  const bySlug = new Map(cities.map((c) => [c.slug, c]));
  const candidates = [
    SLUG_ALIASES[destination.slug],
    destination.slug,
    slugify(destination.name),
    slugify(destination.name.split(",")[0]),
    slugify(destination.name.split("(")[0]),
  ].filter(Boolean);

  for (const key of candidates) {
    const hit = bySlug.get(key);
    if (hit) {
      return { cityId: hit.cityId, wegotripSlug: hit.slug, url: hit.url };
    }
  }

  const nameSlug = slugify(destination.name);
  const partial = cities.find(
    (c) => c.slug.includes(nameSlug) || nameSlug.includes(c.slug)
  );
  if (partial) {
    return { cityId: partial.cityId, wegotripSlug: partial.slug, url: partial.url };
  }

  return null;
}
