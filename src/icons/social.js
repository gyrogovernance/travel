import { siInstagram, siTiktok, siYoutube } from "simple-icons";

/**
 * Social brand icon registry (Simple Icons).
 * Add entries here when SOCIAL_LINKS gains a new platform; ids must match site.js.
 * @see https://simpleicons.org/
 */
export const SOCIAL_ICONS = {
  tiktok: siTiktok,
  instagram: siInstagram,
  youtube: siYoutube,
};

/** @param {keyof typeof SOCIAL_ICONS} id */
export function getSocialIcon(id) {
  return SOCIAL_ICONS[id] ?? null;
}

export const SOCIAL_ICON_IDS = Object.keys(SOCIAL_ICONS);
