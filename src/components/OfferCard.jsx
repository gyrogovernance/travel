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
      className="card group flex items-center justify-between gap-4 p-5 hover:shadow-md transition"
    >
      <div>
        <p className="font-semibold text-ink">{offer.label}</p>
        <p className="text-sm text-slate-600 mt-0.5">{offer.note}</p>
      </div>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ocean/10 text-ocean group-hover:bg-ocean group-hover:text-white transition">
        <Icon name="arrow" className="w-5 h-5" />
      </span>
    </a>
  );
}
