// Sized at build time via vite-imagetools (navbar/footer display at 40px).
import travelIcon from "./assets/GG_Travel_Icon.png?w=128&h=128";
import ogImage from "./assets/GG_Travel_OG.jpg";
import labLogo from "./assets/gyrogovernance_logo.png";
import labIcon from "./assets/gyrogovernance_stamp.png";

// Central site metadata. Update siteUrl to your real domain before
// deploying so canonical links and structured data are correct.
export const SITE = {
  name: "Gyro Governance Ethical Travel",
  shortName: "Gyro Governance Ethical Travel",
  // Full title used on the home page and as the default SEO title.
  fullTitle: "Gyro Governance Ethical Travel: AI-Empowered Guides for Human Adventures",
  tagline: "AI-Empowered Guides for Human Adventures",
  // Set this to your live domain, with no trailing slash.
  siteUrl: "https://travel.gyrogovernance.com",
  labUrl: "https://gyrogovernance.com",
  description:
    "Ethical travel guidance across Economy, Employment, Education, and Ecology. Gyro Governance helps you use AI to plan moral travel, make friends locally and abroad, and empower the communities you visit.",
  locale: "en",
  // Default Open Graph share image (built URL; source file in src/assets/).
  ogImage,
  travelIcon,
  labLogo,
  labIcon,
};

/** Absolute URL for a site path (BrowserRouter, no hash). */
export function absoluteUrl(path = "/") {
  const base = SITE.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Absolute URL for a built asset path or full URL string. */
export function absoluteAssetUrl(asset) {
  if (!asset) return absoluteUrl("/og.jpg");
  if (typeof asset === "string" && asset.startsWith("http")) return asset;
  const path = asset.startsWith("/") ? asset : `/${asset}`;
  return absoluteUrl(path);
}

export function defaultOgImageUrl() {
  return absoluteAssetUrl(SITE.ogImage);
}
