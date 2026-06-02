import { SITE } from "./site.js";

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

// Sub-marker from widget embed codes (shmarker=). Often differs from TP_MARKER.
export const TP_SHMARKER = "734920";

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
  compensation: {
    label: "Check Flight Compensation",
    note: "Delays and cancellations may qualify for a payout.",
    url: brandLink("https://www.airhelp.com"),
  },
};



// Site-wide affiliate note (footer on every page). Pass showDisclosure to
// AffiliateBanner or TravelSearch only if a page has no footer.
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
  // Aviasales meta-search (full page at /search/flights). Optional inline src.
  flightSearch: {
    title: "Search flights",
    note: "Compare fares across airlines. Fly direct and stay longer to make each flight count.",
    icon: "compass",
    src: "",
    fullPagePath: "/search/flights",
    fallbackKey: "flights",
  },
  // AirHelp / Compensair flight compensation form.
  flightCompensation: {
    title: "Flight compensation",
    note: "Check if you are owed money for delays, cancellations, or denied boarding.",
    icon: "shield",
    src: `https://tpemb.com/content?trs=${TP_MARKER}&shmarker=${TP_SHMARKER}&lang=en&powered_by=true&campaign_id=120&promo_id=8679`,
    fallbackKey: "compensation",
    embedClass: "compensation-widget-embed",
    featured: true,
  },
  // Hotel search form.
  hotelSearch: {
    title: "Search stays",
    note: "Look for locally owned guesthouses and independent hotels.",
    icon: "compass",
    src: "",
    fallbackKey: "hotels",
  },
  // Experiences and tours search.
  toursSearch: {
    title: "Find experiences",
    note: "Choose tours run by local guides who are paid fairly.",
    icon: "compass",
    src: "",
    fallbackKey: "tours",
  },
};

// =============================================================
//  FLIGHT META-SEARCH (White Label on /search/flights)
//  Loader from Travelpayouts > White Label > Your widget code.
// =============================================================
export const FLIGHT_META_SEARCH = {
  trs: TP_MARKER,
  shmarker: TP_SHMARKER,
  locale: "en",
  currency: "usd",
  wlId: "18249",
  wlMainHost: "https://tpemb.com",
  /** Where search results render (#tpwl-tickets on this path). */
  resultsPath: "/search/flights",
  popularDestinations: ["IST", "DXB", "MOW", "LAS", "NYC", "LON"],
  weedle: {
    widgetHost: "https://tpemb.com",
    promoId: "4044",
    campaignId: "100",
    limit: 6,
    linkColor: "0a6e7c",
  },
};

// =============================================================
//  SPECIFIC TOURS WIDGET (WeGoTrip via Travelpayouts)
//  Per-destination city_id is resolved at build time from WeGoTrip sitemap.
//  SubID in dashboard is optional; page URL is tracked automatically.
// =============================================================
export const TOURS_WIDGET = {
  host: "https://tpemb.com/content",
  trs: TP_MARKER,
  shmarker: TP_SHMARKER,
  locale: "en",
  tours: 3,
  /** false: we disclose affiliates in-page; avoids duplicate TP badges in embed */
  powered_by: false,
  campaignId: "150",
  promoId: "4489",
};

/** Build embed src for a destination-specific WeGoTrip tours widget. */
export function buildToursWidgetSrc({ cityId }) {
  if (!cityId) return null;

  const q = new URLSearchParams({
    trs: TOURS_WIDGET.trs,
    shmarker: TOURS_WIDGET.shmarker,
    locale: TOURS_WIDGET.locale,
    tours: String(TOURS_WIDGET.tours),
    powered_by: "false",
    campaign_id: TOURS_WIDGET.campaignId,
    promo_id: TOURS_WIDGET.promoId,
    city_id: String(cityId),
  });

  return `${TOURS_WIDGET.host}?${q.toString()}`;
}

/** Loads WL Web (main.js) once; mounts into #tpwl-search / #tpwl-tickets. */
export function mountFlightMetaSearch() {
  const { wlId, wlMainHost, resultsPath } = FLIGHT_META_SEARCH;
  if (!wlId) return;

  const base = SITE.siteUrl.replace(/\/$/, "");
  const resultsURL = `${base}${resultsPath.startsWith("/") ? resultsPath : `/${resultsPath}`}`;

  window.TPWL_CONFIGURATION = {
    ...window.TPWL_CONFIGURATION,
    resultsURL,
  };

  if (document.querySelector("script[data-tp-wl-main]")) return;

  const script = document.createElement("script");
  script.async = true;
  script.type = "module";
  script.src = `${wlMainHost.replace(/\/$/, "")}/wl_web/main.js?wl_id=${wlId}`;
  script.dataset.tpWlMain = "1";
  script.setAttribute("nowprocket", "");
  script.setAttribute("data-noptimize", "1");
  script.setAttribute("data-cfasync", "false");
  script.setAttribute("data-wpfc-render", "false");
  script.setAttribute("seraph-accel-crit", "1");
  script.setAttribute("data-no-defer", "1");
  document.head.appendChild(script);
}

