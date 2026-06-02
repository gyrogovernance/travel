# Travelpayouts Reference

A working reference for how this site monetizes through Travelpayouts, what is
already set up, and what to use in the future.

Project id (marker): **535198**
Dashboard: https://app.travelpayouts.com/dashboard
Content analytics: https://app.travelpayouts.com/statistics/content_analytics?source=535198
Affiliate tools docs: https://support.travelpayouts.com/hc/en-us/categories/200359097-Affiliate-tools

---

## 1. What is installed

### Drive (the single script)
Travelpayouts Drive is one AI script that powers every advanced tool. It is
installed once, first inside `<head>` in `index.html`:

```html
<script nowprocket data-noptimize="1" data-cfasync="false" data-wpfc-render="false" seraph-accel-crit="1" data-no-defer="1">
  (function () {
    var script = document.createElement("script");
    script.async = 1;
    script.src = "https://emrldtp.cc/NTM1MTk4.js?t=535198";
    document.head.appendChild(script);
  })();
</script>
```

- `emrldtp.cc` is Travelpayouts infrastructure (same family as `emrld.cc`,
  `emrld.ltd`). It is legitimate, not malware.
- The odd attributes tell caching and optimization tools (WP Rocket,
  Autoptimize, Cloudflare Rocket Loader, WP Fastest Cache) to leave the script
  alone so it loads first and fast. Keep them.
- The script loads `async` and does not block content or hurt Core Web Vitals.
- Drive only activates on travel related pages that have enough content.
- It verifies against a LIVE site, not the local preview. Deploy first, then
  click "I have pasted the code" in the dashboard.

### Drive features (all part of the one script)
Toggle these in the dashboard. They are the levers for organic conversions.

| Feature | What it does |
| --- | --- |
| Switch Links to Travelpayouts | Turns links to travel brand sites in your content into affiliate links. |
| Link Relevant Keywords | Detects travel keywords in your text and turns them into affiliate links. |
| Insert Recommendations | Adds contextual recommendation blocks where they fit in articles. |
| Display Smart Previews | Shows a hover preview with extra detail on travel links. |
| Show Targeted Offers | Detects booking intent and opens a relevant offer in a background tab. |
| Content Analytics | Per page clicks, conversions, and earnings across all tools. |

Drive automatically adds `rel="noopener nofollow sponsored"` to the links it
creates, and keeps any existing SubIDs intact.

---

## 2. Selected brands for link switching

All 53 brands are selected. Because Drive auto switches any of these brand links
in our content, we should reference these brands by name and link to their
normal sites in articles. Drive converts them to affiliate links on the fly.

Booking.com, Trip.com, Viator, Agoda, Expedia, GetYourGuide,
Tripadvisor Experiences, Klook, Yesim, DiscoverCars, Kiwitaxi, Localrent.com,
Traveloka, Welcome Pickups, Tiqets, Omio, Kiwi.com, Hotels.com, Airalo, 12Go,
GetTransfer.com, VisitorsCoverage, GigSky, Drimsim, GetRentacar.com,
Hostelworld, AirHelp, Go City, EKTA, Economybookings.com, Busbud, Insubuy,
BikesBooking.com, Eatwith, QEEQ, WeGoTrip, Rail Europe, Big Bus Tours, Vrbo,
HolidayTaxis, Ticketmaster, AutoEurope (US, CA), AutoEurope (EU, UK), CheapOair,
SEARADAR, Radical Storage, TicketNetwork, Aviasales, intui.travel, Compensair,
NordVPN, Saily, KKday.

### High value programs to feature (best reward or cookie)
Prioritize content and CTAs around these because they pay the most or hold the
cookie longest.

| Program | Reward | Cookie | Category |
| --- | --- | --- | --- |
| Aviasales | up to 40% | 30 days | Flights |
| EKTA | 25% | 30 days | Insurance |
| GetTransfer.com | 4 to 25% | 30 days | Transfers |
| GigSky | 20% plus fixed | 30 days | SIM cards |
| Yesim | 18% | 90 days | SIM cards |
| AirHelp | 15 to 16.6% | 45 days | Flight compensation |
| Saily | 15% | 30 days | SIM cards |
| Airalo | 12% | 30 days | SIM cards |
| Localrent.com | 7.5 to 12% | 30 days | Car rental |
| GetRentacar.com | 10% | 90 days | Car rental |
| intui.travel | 10% | 35 days | Transfers |
| Kiwitaxi | 9 to 11% | 30 days | Transfers |
| Welcome Pickups | 8 to 9% | 45 days | Transfers |
| Go City | 3.4 to 6% | 90 days | Tours and passes |
| Tiqets | 3.5 to 8% | 30 days | Attractions |

Note: SIM card and insurance programs have strong rates and fit our Ecology and
Education domains well (eSIM reduces roaming waste, insurance protects the trip).

---

## 3. Manual tools (use when we want explicit placements)

Drive handles automatic conversion, but for hand placed, high intent spots we
can also use these. They live in `src/affiliate.js`.

### Affiliate links
- Preferred method here: link to the real brand site and let Drive convert it on
  click. Drive adds the correct partner id and tracking automatically.
- Do NOT hand build `https://tp.media/r?u=BRAND` style URLs. That is not a valid
  deep link format and the redirect fails with errors like "missing argument: p".
- If you need a fixed, pre tracked link, generate the exact URL in the
  Travelpayouts dashboard (or Chrome extension) and paste it verbatim.
- Track placements with a SubID parameter so we can see which page or button
  converts. Docs: How to track the performance of your affiliate links.

### Widgets (search forms, tables)
- Search forms for flights and hotels can be embedded as a script slot.
- Reference: Getting started with widgets, Types of widgets.
- If a widget does not appear, it is usually Cloudflare Rocket Loader. Add the
  Travelpayouts script to the exceptions list.

### Banners
- Downloadable banners exist per program. Use sparingly; contextual links and
  recommendation blocks convert better than banners.

---

## 3b. What is implemented in this static site

This is a static site (BrowserRouter with GitHub Pages 404 fallback, no server). Everything below works without a
backend.

### Drive script
First in `<head>` of `index.html`. Auto converts the 53 selected brand links.

### Manual offers (`src/affiliate.js`)
`AFFILIATE_OFFERS` powers the offer cards and affiliate banner. They point at the
real brand websites and Drive converts them on click. `brandLink(url, subId)`
returns the plain brand URL with an optional SubID added as a normal query
parameter, which Drive preserves.

### Search widgets (`WIDGETS` in `src/affiliate.js`)
Travelpayouts widgets are external `<script>` embeds, which are static friendly.
- Configured by key: `flightSearch`, `hotelSearch`, `toursSearch`.
- Each entry holds a `src` (paste the widget script URL from the dashboard).
- While `src` is empty, a styled fallback button is shown, so nothing looks
  broken before the ids are added.
- Rendered by `src/components/TravelWidget.jsx` (injects the script into a
  container and cleans up on route change) and grouped by
  `src/components/TravelSearch.jsx`.
- Placed on the Home page and in each Domain sidebar (mapped via `widgetKey` in
  `src/data/domains.js`).

To activate a widget: build it in the dashboard (Tools > Widgets), copy the
script src URL, and paste it into the matching `WIDGETS[...]src` value.

### Resources page (`/resources`)
A curated, SEO friendly directory of programs by category. Links point at the
real brand sites with a `resources` SubID, and Drive converts them on click.
Data lives in `src/data/programs.js`. This is a pure static page and a strong
conversion and search asset.

### SubID tracking
Use `brandLink(url, "placement-name")` so the Performance report shows which
page or button earned. The Resources page uses `resources`; add more SubIDs as
needed (for example `home-hero`, `guide-esim`).

---

## 4. How we use this going forward (playbook)

1. Write genuinely useful travel content per domain. Drive only works on pages
   with real, travel related content.
2. Mention and link the selected brands naturally in the text. Drive converts
   those links automatically, so plain brand links are fine.
3. For key calls to action, use the manual offers in `src/affiliate.js` so the
   placement, copy, and styling are intentional.
4. Lead with high value programs (see table) where they genuinely fit the
   reader's need. Do not push insurance or SIM offers where they are irrelevant.
5. Keep the visible affiliate disclosure (footer and guide pages). Required by
   program terms and advertising rules.
6. After deploying, confirm Drive in the dashboard, then watch Content Analytics
   to see which pages and links earn, and double down on those topics.

---

## 5. Key documentation links

- How to install Drive: https://support.travelpayouts.com/hc/en-us/articles/21844864838290-How-to-install-Drive-on-your-website
- What is Drive: https://support.travelpayouts.com/hc/en-us/articles/21844777943058-What-is-Travelpayouts-Drive
- FAQ about Drive: https://support.travelpayouts.com/hc/en-us/articles/32097258847378-FAQ-about-Drive
- Content analytics: https://support.travelpayouts.com/hc/en-us/articles/22641653439506-Content-analytics
- How to create and use affiliate links: https://support.travelpayouts.com/hc/en-us/articles/360027634052
- Track performance with SubID: https://support.travelpayouts.com/hc/en-us/articles/115001389052
- Getting started with widgets: https://support.travelpayouts.com/hc/en-us/articles/360031977872-Getting-started-with-widgets
- Types of widgets: https://support.travelpayouts.com/hc/en-us/articles/360032321331-Types-of-widgets
- How to test affiliate tools: https://support.travelpayouts.com/hc/en-us/articles/360012395860-How-to-test-the-affiliate-tools
- How the script works (speed and SEO): https://www.travelpayouts.com/blog/travelpayouts-script/
