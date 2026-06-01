import { AFFILIATE_OFFERS } from "../affiliate.js";
import Icon from "./Icon.jsx";

// Renders a single affiliate offer by its key in AFFILIATE_OFFERS.
export default function OfferCard({ offerKey }) {
  const offer = AFFILIATE_OFFERS[offerKey];
  if (!offer) return null;

  return (
    <a
      href={offer.url}
      target="_blank"
      rel="noopener sponsored nofollow"
      className="group flex items-center justify-between gap-4 rounded-2xl bg-cream p-5 ring-1 ring-black/5 transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-soft"
    >
      <div>
        <p className="font-extrabold text-ink">{offer.label}</p>
        <p className="text-sm text-slate-600 mt-0.5 font-medium">{offer.note}</p>
      </div>
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ocean text-white transition duration-300 ease-smooth group-hover:bg-oceanlight">
        <Icon name="arrow" className="w-5 h-5" strokeWidth={2.2} />
      </span>
    </a>
  );
}
