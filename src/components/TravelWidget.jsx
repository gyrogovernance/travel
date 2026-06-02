import { Link } from "react-router-dom";
import { WIDGETS, AFFILIATE_OFFERS } from "../affiliate.js";
import TravelpayoutsScript from "./TravelpayoutsScript.jsx";
import Icon from "./Icon.jsx";

const EMPLOYMENT = "#d98c2b";

export default function TravelWidget({ widgetKey }) {
  const widget = WIDGETS[widgetKey];
  if (!widget) return null;

  const offer = widget.fallbackKey ? AFFILIATE_OFFERS[widget.fallbackKey] : null;
  const hasEmbed = Boolean(widget.src);
  const fullPage = widget.fullPagePath;
  const featured = Boolean(widget.featured);

  const shellClass = featured
    ? "relative overflow-hidden rounded-4xl bg-gradient-to-br from-[#d98c2b]/25 via-cream to-ocean/15 p-6 sm:p-8 shadow-soft ring-1 ring-[#d98c2b]/30 flex flex-col"
    : "card p-6 flex flex-col h-full";

  const iconShellClass = featured
    ? "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d98c2b]/20 text-[#b87424]"
    : "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean/10 text-ocean";

  return (
    <div className={shellClass}>
      {featured ? (
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
          style={{ backgroundColor: `${EMPLOYMENT}33` }}
          aria-hidden="true"
        />
      ) : null}

      <div className="relative flex items-start gap-3">
        <span className={iconShellClass}>
          <Icon name={widget.icon || "compass"} className="w-5 h-5" />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg text-ink">{widget.title}</h3>
          {widget.note && (
            <p className="text-sm text-slate-600 mt-1 font-medium">{widget.note}</p>
          )}
        </div>
      </div>

      <div className={`relative ${featured ? "mt-5" : "mt-auto pt-5"} flex flex-col gap-3`}>
        {hasEmbed ? (
          <TravelpayoutsScript
            src={widget.src}
            className={widget.embedClass || "min-h-[60px]"}
          />
        ) : fullPage ? (
          <Link to={fullPage} className="btn-primary w-full">
            Open flight search
            <Icon name="arrow" className="w-4 h-4" />
          </Link>
        ) : (
          offer && (
            <a
              href={offer.url}
              target="_blank"
              rel="noopener sponsored nofollow"
              className="btn-primary w-full"
            >
              {offer.label}
              <Icon name="arrow" className="w-4 h-4" />
            </a>
          )
        )}

        {hasEmbed && fullPage ? (
          <Link to={fullPage} className="text-sm font-bold text-ocean hover:underline">
            Full-screen flight search
          </Link>
        ) : null}
      </div>
    </div>
  );
}
