import TravelWidget from "./TravelWidget.jsx";
import { DISCLOSURE } from "../affiliate.js";

// A grid of Travelpayouts search widgets. Pass an array of widget keys
// or use the default set. Works fully on a static site.
export default function TravelSearch({
  title = "Plan and book in one place",
  subtitle = "Search flights, stays, and experiences through partners that fit our ethical travel principles.",
  keys = ["flightSearch", "flightCompensation", "hotelSearch", "toursSearch"],
  showDisclosure = true,
}) {
  return (
    <section aria-labelledby="travel-search-heading">
      <div className="max-w-2xl">
        <span className="eyebrow">Search and book</span>
        <h2 id="travel-search-heading" className="mt-4 text-3xl sm:text-4xl text-ink leading-tight">
          {title}
        </h2>
        <p className="mt-3 text-lg text-slate-700 font-medium">{subtitle}</p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {keys.map((k) => (
          <TravelWidget key={k} widgetKey={k} />
        ))}
      </div>

      {showDisclosure && (
        <p className="mt-6 text-xs text-slate-500 max-w-3xl font-medium">{DISCLOSURE}</p>
      )}
    </section>
  );
}
