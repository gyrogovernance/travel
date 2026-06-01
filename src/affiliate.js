// =============================================================
//  TRAVELPAYOUTS AFFILIATE CONFIG
//  Update everything here in ONE place.
//
//  1. Sign up at https://www.travelpayouts.com/
//  2. Copy your marker (partner id) into TP_MARKER below.
//  3. Optional: replace the program slugs/links with your own
//     tracked links from the Travelpayouts dashboard.
// =============================================================

export const TP_MARKER = "YOUR_TP_MARKER"; // <-- replace with your marker, e.g. "123456"

// Helper that appends your marker to any partner link.
export function withMarker(url) {
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}marker=${TP_MARKER}`;
}

// Affiliate offers shown across the site. Swap the "url" values
// with your real tracked deep links from the Travelpayouts panel.
export const AFFILIATE_OFFERS = {
  flights: {
    label: "Find Fair Flights",
    note: "Compare carbon and price before you book.",
    url: withMarker("https://tp.media/r?u=https%3A%2F%2Faviasales.com"),
  },
  hotels: {
    label: "Stay With Locals",
    note: "Choose locally owned stays where you can.",
    url: withMarker("https://tp.media/r?u=https%3A%2F%2Fhotellook.com"),
  },
  trains: {
    label: "Take the Train",
    note: "Lower carbon ground travel where it works.",
    url: withMarker("https://tp.media/r?u=https%3A%2F%2Fomio.com"),
  },
  tours: {
    label: "Book Ethical Experiences",
    note: "Tours that pay guides fairly.",
    url: withMarker("https://tp.media/r?u=https%3A%2F%2Fwww.getyourguide.com"),
  },
  esim: {
    label: "Get a Travel eSIM",
    note: "Stay connected without roaming waste.",
    url: withMarker("https://tp.media/r?u=https%3A%2F%2Fairalo.com"),
  },
  insurance: {
    label: "Insure Your Trip",
    note: "Protect yourself and the people who rely on you.",
    url: withMarker("https://tp.media/r?u=https%3A%2F%2Fekta.travel"),
  },
};

// Affiliate disclosure text used in the footer and on pages.
export const DISCLOSURE =
  "Some links on this site are affiliate links through Travelpayouts. If you book through them we may earn a commission at no extra cost to you. We only suggest services that fit our ethical travel principles.";
