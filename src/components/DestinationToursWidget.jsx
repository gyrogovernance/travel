import { buildToursWidgetSrc, wegotripLink } from "../affiliate.js";
import ToursWidgetEmbed from "./ToursWidgetEmbed.jsx";
import Icon from "./Icon.jsx";

/** WeGoTrip specific-tours widget for one destination (Travelpayouts promo 4489). */
export default function DestinationToursWidget({ destinationName, destinationSlug, cityId }) {
  const src = buildToursWidgetSrc({ cityId });
  if (!src) return null;

  return (
    <section className="mt-10" aria-labelledby="destination-tours-heading">
      <div className="max-w-3xl">
        <h3 id="destination-tours-heading" className="text-lg text-ink">
          Tours and experiences in {destinationName}
        </h3>
        <p className="mt-1 text-sm text-slate-600 font-medium leading-relaxed">
          Curated self-guided audio tours and museum tickets for {destinationName}. For a route
          built around your own anchor spots, use{" "}
          <a
            href={wegotripLink(
              destinationSlug ? `destination-${destinationSlug}-widget` : "destination-widget"
            )}
            target="_blank"
            rel="noopener sponsored nofollow"
            className="text-ocean font-bold hover:underline"
          >
            WeGoTrip&apos;s AI tour creator
          </a>
          .
        </p>
      </div>
      <div className="mt-4 rounded-2xl bg-cream p-4 sm:p-6 ring-1 ring-black/5">
        <ToursWidgetEmbed src={src} />
      </div>
    </section>
  );
}
