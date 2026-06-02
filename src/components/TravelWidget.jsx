import { Link } from "react-router-dom";
import { WIDGETS, AFFILIATE_OFFERS } from "../affiliate.js";
import TravelpayoutsScript from "./TravelpayoutsScript.jsx";
import Icon from "./Icon.jsx";

export default function TravelWidget({ widgetKey }) {
  const widget = WIDGETS[widgetKey];
  if (!widget) return null;

  const offer = widget.fallbackKey ? AFFILIATE_OFFERS[widget.fallbackKey] : null;
  const hasEmbed = Boolean(widget.src);
  const fullPage = widget.fullPagePath;

  return (
    <div className="card p-6 flex flex-col">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
          <Icon name={widget.icon || "compass"} className="w-5 h-5" />
        </span>
        <div>
          <h3 className="text-lg text-ink">{widget.title}</h3>
          {widget.note && (
            <p className="text-sm text-slate-600 mt-1 font-medium">{widget.note}</p>
          )}
        </div>
      </div>

      {hasEmbed ? (
        <TravelpayoutsScript src={widget.src} className="mt-5 min-h-[60px] flex-1" />
      ) : fullPage ? (
        <Link to={fullPage} className="btn-primary mt-5 w-full">
          Open flight search
          <Icon name="arrow" className="w-4 h-4" />
        </Link>
      ) : (
        offer && (
          <a
            href={offer.url}
            target="_blank"
            rel="noopener sponsored nofollow"
            className="btn-primary mt-5 w-full"
          >
            {offer.label}
            <Icon name="arrow" className="w-4 h-4" />
          </a>
        )
      )}

      {hasEmbed && fullPage ? (
        <Link to={fullPage} className="mt-3 text-sm font-bold text-ocean hover:underline">
          Full-screen flight search
        </Link>
      ) : null}
    </div>
  );
}
