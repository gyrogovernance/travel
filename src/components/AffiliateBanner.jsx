import { AFFILIATE_OFFERS, DISCLOSURE } from "../affiliate.js";
import OfferCard from "./OfferCard.jsx";

// A grid of recommended booking partners. Pass an array of offer keys,
// or leave empty to show a default selection.
export default function AffiliateBanner({
  title = "Book Your Trip the Ethical Way",
  subtitle = "These are the partners we trust for fair, low harm travel. Booking through them supports this site.",
  keys = ["flights", "hotels", "trains", "tours", "esim", "insurance"],
  showDisclosure = true,
}) {
  const valid = keys.filter((k) => AFFILIATE_OFFERS[k]);

  return (
    <section className="bg-slate2 text-white rounded-3xl px-6 py-10 sm:px-10">
      <div className="max-w-2xl">
        <h2 className="font-display text-2xl sm:text-3xl">{title}</h2>
        <p className="mt-2 text-slate-300">{subtitle}</p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {valid.map((k) => (
          <OfferCard key={k} offerKey={k} />
        ))}
      </div>

      {showDisclosure && (
        <p className="mt-6 text-xs text-slate-400 max-w-3xl">{DISCLOSURE}</p>
      )}
    </section>
  );
}
