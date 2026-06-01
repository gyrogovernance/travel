// =============================================================
//  TRAVELPAYOUTS AFFILIATE CONFIG
//  Update everything here in ONE place.
//
//  Two layers work together:
//  1. DRIVE (the script in index.html) auto converts any links to
//     the 53 selected brands into affiliate links sitewide. So even
//     a plain link to a brand becomes an affiliate link.
//  2. The MANUAL offers below are for intentional, hand placed CTAs
//     where we want specific copy, styling, and position.
//
//  See docs/travelpayouts.md for the full reference and program list.
// =============================================================

// Your Travelpayouts project id (marker).
export const TP_MARKER = "535198";

// Helper that appends your marker to any partner link.
// Optionally pass a SubID to track which page or button converted.
// SubIDs show up in the Travelpayouts Performance report.
export function withMarker(url, subId) {
  const sep = url.includes("?") ? "&" : "?";
  const sub = subId ? `&sub_id=${encodeURIComponent(subId)}` : "";
  return `${url}${sep}marker=${TP_MARKER}${sub}`;
}

// Affiliate offers shown across the site. These point at brands that
// are in our selected program list. Replace any "url" with a real
// tracked deep link from the dashboard if you want a specific landing
// page or SubID. Add &sub_id=PLACEMENT to a link to track placements.
export const AFFILIATE_OFFERS = {
  flights: {
    label: "Find Fair Flights",
    note: "Compare carbon and price before you book.",
    url: withMarker("https://tp.media/r?u=https%3A%2F%2Faviasales.com"),
  },
  hotels: {
    label: "Stay With Locals",
    note: "Choose locally owned stays where you can.",
    url: withMarker("https://tp.media/r?u=https%3A%2F%2Fwww.booking.com"),
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

// =============================================================
//  TRAVELPAYOUTS WIDGETS (search forms and tools)
//
//  Widgets are pure <script> embeds, so they work perfectly on this
//  static site. Generate each widget in your dashboard, then paste
//  ONLY the script "src" URL here. The TravelWidget component injects
//  it into a container so it renders inline.
//
//  How to get a src:
//  1. Open the widget builder in Travelpayouts (Tools > Widgets).
//  2. Configure it and copy the embed code. It looks like:
//       <script async src="https://tpwgts.com/content?..."></script>
//  3. Paste just the URL string below.
//
//  Leave a value as "" (empty) to show a styled fallback link instead
//  of the live widget, so nothing looks broken before you add the id.
// =============================================================
export const WIDGETS = {
  // Aviasales flight search form.
  flightSearch: {
    title: "Search flights",
    note: "Compare fares across airlines. Fly direct and stay longer to make each flight count.",
    src: "",
    fallbackKey: "flights",
  },
  // Hotel search form.
  hotelSearch: {
    title: "Search stays",
    note: "Look for locally owned guesthouses and independent hotels.",
    src: "",
    fallbackKey: "hotels",
  },
  // Experiences and tours search.
  toursSearch: {
    title: "Find experiences",
    note: "Choose tours run by local guides who are paid fairly.",
    src: "",
    fallbackKey: "tours",
  },
};

