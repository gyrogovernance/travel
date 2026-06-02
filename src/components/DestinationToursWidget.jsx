import { buildToursWidgetSrc, DISCLOSURE } from "../affiliate.js";
import ToursWidgetEmbed from "./ToursWidgetEmbed.jsx";

/** WeGoTrip specific-tours widget for one destination (Travelpayouts promo 4489). */
export default function DestinationToursWidget({ destinationName, cityId }) {
  const src = buildToursWidgetSrc({ cityId });
  if (!src) return null;

  return (
    <section className="mt-10" aria-labelledby="destination-tours-heading">
      <div className="max-w-3xl">
        <h3 id="destination-tours-heading" className="text-lg text-ink">
          Tours and experiences in {destinationName}
        </h3>
        <p className="mt-1 text-sm text-slate-600 font-medium leading-relaxed">
          Self-guided audio tours and skip-the-line tickets from WeGoTrip. Verify each
          operator pays guides fairly before you book.
        </p>
      </div>
      <div className="mt-4 rounded-2xl bg-cream p-4 sm:p-6 ring-1 ring-black/5">
        <ToursWidgetEmbed src={src} />
      </div>
      <p className="mt-3 text-xs text-slate-500 font-medium max-w-3xl">{DISCLOSURE}</p>
    </section>
  );
}
