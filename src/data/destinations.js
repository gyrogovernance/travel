/**
 * Atlas destinations: lightweight catalog in JSON, full page copy per slug (code-split).
 * Regenerate data with: bun run destinations
 */
import catalog from "./destinations/index.json" with { type: "json" };

export const REGIONS = catalog.regions;
export const FEATURED_SLUGS = catalog.featuredSlugs;
export const DESTINATIONS = catalog.destinations;

export function getDestination(slug) {
  return DESTINATIONS.find((d) => d.slug === slug);
}

export function destinationsByRegion(region) {
  return DESTINATIONS.filter((d) => d.region === region);
}

/** Full Atlas page fields for one slug (loaded on demand). */
export async function loadDestinationDetail(slug) {
  if (!slug) return null;
  try {
    const mod = await import(`./destinations/detail/${slug}.json`);
    return mod.default;
  } catch {
    return null;
  }
}
