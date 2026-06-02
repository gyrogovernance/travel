import { Link } from "react-router-dom";

/** Compact destination tile for grids and homepage strips. */
export default function DestinationCard({ destination, compact = false }) {
  const { slug, name, country, region, image, teaser } = destination;

  return (
    <Link
      to={`/destinations/${slug}`}
      className={`group card card-hover overflow-hidden flex ${
        compact ? "flex-row items-stretch" : "flex-col"
      }`}
    >
      <div
        className={
          compact
            ? "w-24 sm:w-28 shrink-0 overflow-hidden card-img-zoom"
            : "aspect-[16/10] overflow-hidden card-img-zoom"
        }
      >
        <img
          src={image}
          alt=""
          loading="lazy"
          className="img-hover-zoom"
        />
      </div>
      <div className={compact ? "p-4 flex flex-col min-w-0 flex-1" : "p-5 flex flex-col flex-1"}>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-500">
          {region}
        </p>
        <h3 className={`text-ink leading-snug ${compact ? "text-base mt-0.5" : "text-lg mt-1"}`}>
          {name}
        </h3>
        <p className="text-xs font-semibold text-slate-500 mt-0.5">{country}</p>
        {!compact && teaser ? (
          <p className="mt-2 text-sm text-slate-600 font-medium line-clamp-2 flex-1">
            {teaser}
          </p>
        ) : null}
      </div>
    </Link>
  );
}
