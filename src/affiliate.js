// =============================================================
//  TRAVELPAYOUTS AFFILIATE CONFIG
//  Update everything here in ONE place.
//
//  HOW LINKS WORK HERE
//  Drive (the script in index.html) automatically converts plain
//  links to the 53 selected brands into proper Travelpayouts
//  affiliate links, adding the correct partner id and tracking. So
//  the offers below point at the real brand websites, and Drive does
//  the conversion at click time. This avoids hand built redirect URLs,
//  which can break (for example "missing argument: p").
//
//  If you want a fixed, pre tracked deep link instead of relying on
//  Drive, generate it in the Travelpayouts dashboard and paste that
//  exact URL as the "url" value below.
//
//  See docs/travelpayouts.md for the full reference and program list.
// =============================================================

// Your Travelpayouts project id (marker). Kept for reference and for
// any dashboard generated links you may paste in.
export const TP_MARKER = "535198";

// Build a plain brand link. Drive converts it to an affiliate link on
// click. An optional SubID is added as a normal query parameter, which
// Drive preserves for the Performance report.
export function brandLink(url, subId) {
  if (!subId) return url;
  const sep = url.includes("?") ? "&" : "?";
  return `${url}${sep}sub_id=${encodeURIComponent(subId)}`;
}

// Affiliate offers shown across the site. These point at the real brand
// sites. Drive turns them into affiliate links automatically.
export const AFFILIATE_OFFERS = {
  flights: {
    label: "Find Fair Flights",
    note: "Compare carbon and price before you book.",
    url: brandLink("https://www.aviasales.com"),
  },
  hotels: {
    label: "Stay With Locals",
    note: "Choose locally owned stays where you can.",
    url: brandLink("https://www.booking.com"),
  },
  trains: {
    label: "Take the Train",
    note: "Lower carbon ground travel where it works.",
    url: brandLink("https://www.omio.com"),
  },
  tours: {
    label: "Book Ethical Experiences",
    note: "Tours that pay guides fairly.",
    url: brandLink("https://www.getyourguide.com"),
  },
  esim: {
    label: "Get a Travel eSIM",
    note: "Stay connected without roaming waste.",
    url: brandLink("https://www.airalo.com"),
  },
  insurance: {
    label: "Insure Your Trip",
    note: "Protect yourself and the people who rely on you.",
    url: brandLink("https://ekta.travel"),
  },
};



// Short affiliate note for footer, banners, and inline placements.
export const DISCLOSURE =
  "Some booking links may earn us a small commission at no extra cost to you, which helps support our research. We only suggest partners that fit our ethical travel principles.";

// Longer note for the privacy policy (cookies and attribution).
export const DISCLOSURE_PRIVACY =
  `${DISCLOSURE} Bookings may run through Travelpayouts; if you complete a purchase, the partner may set a cookie so the booking can be credited to this site.`;

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

