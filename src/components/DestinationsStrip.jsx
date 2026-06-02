import { Link } from "react-router-dom";
import { DESTINATIONS, FEATURED_SLUGS } from "../data/destinations.js";
import Icon from "./Icon.jsx";

export default function DestinationsStrip() {
  const featured = FEATURED_SLUGS.map((slug) =>
    DESTINATIONS.find((d) => d.slug === slug)
  ).filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink via-slate2 to-ocean text-white">
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-sky/20 blur-3xl" />
      <div className="container-content py-12 sm:py-14 relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl leading-tight">
              Start with a place you already know
            </h2>
            <p className="mt-3 text-slate-200 font-medium leading-relaxed">
              Five anchor spots, domain context, four prep steps, then a
              destination-specific prompt. Pick one and plan in minutes.
            </p>
          </div>
          <Link to="/destinations" className="btn bg-white text-ink hover:bg-slate-100 shrink-0">
            Browse all {DESTINATIONS.length} destinations
            <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[420px] overflow-y-auto pr-1">
          {featured.map((d) => (
            <Link
              key={d.slug}
              to={`/destinations/${d.slug}`}
              className="group flex items-center gap-3 rounded-xl bg-white/10 ring-1 ring-white/15 px-3 py-2.5 hover:bg-white/20 transition"
            >
              <img
                src={d.image}
                alt=""
                loading="lazy"
                className="h-12 w-12 rounded-lg object-cover shrink-0"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold truncate">{d.name}</span>
                <span className="block text-xs text-slate-300 truncate">{d.country}</span>
              </span>
              <Icon
                name="arrow"
                className="w-4 h-4 shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
