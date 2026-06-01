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
    <section className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-slate2 via-ink to-ocean text-white px-6 py-12 sm:px-12 shadow-soft">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-oceanlight/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 -bottom-20 h-64 w-64 rounded-full bg-sky/20 blur-3xl" />
      <div className="relative max-w-2xl">
        <span className="eyebrow bg-white/10 text-white">Plan your trip</span>
        <h2 className="mt-4 text-2xl sm:text-4xl leading-tight">{title}</h2>
        <p className="mt-3 text-slate-200 font-medium">{subtitle}</p>
      </div>

      <div className="relative mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {valid.map((k) => (
          <OfferCard key={k} offerKey={k} />
        ))}
      </div>

      {showDisclosure && (
        <p className="relative mt-7 text-xs text-slate-300 max-w-3xl font-medium">{DISCLOSURE}</p>
      )}
    </section>
  );
}
