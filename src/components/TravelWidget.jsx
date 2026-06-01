import { useEffect, useRef } from "react";
import { WIDGETS, AFFILIATE_OFFERS } from "../affiliate.js";
import Icon from "./Icon.jsx";

// Renders a Travelpayouts widget by key. Widgets are external script
// embeds, which work fine on a static site. If no src is configured
// yet, a styled fallback offer link is shown so nothing looks broken.
//
// React does not execute <script> tags inserted as HTML, so we build
// the script element manually and append it to a container ref.
export default function TravelWidget({ widgetKey }) {
  const widget = WIDGETS[widgetKey];
  const containerRef = useRef(null);

  useEffect(() => {
    if (!widget || !widget.src) return;
    const container = containerRef.current;
    if (!container) return;

    // Avoid double injection on route changes or re-renders.
    if (container.dataset.loaded === "1") return;
    container.dataset.loaded = "1";

    const script = document.createElement("script");
    script.async = true;
    script.src = widget.src;
    script.charset = "utf-8";
    container.appendChild(script);

    return () => {
      // Clean up so navigating away does not leak duplicate widgets.
      container.innerHTML = "";
      delete container.dataset.loaded;
    };
  }, [widget]);

  if (!widget) return null;

  const offer = widget.fallbackKey ? AFFILIATE_OFFERS[widget.fallbackKey] : null;

  return (
    <div className="card p-6">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
          <Icon name="compass" className="w-5 h-5" />
        </span>
        <div>
          <h3 className="text-lg text-ink">{widget.title}</h3>
          {widget.note && (
            <p className="text-sm text-slate-600 mt-1 font-medium">{widget.note}</p>
          )}
        </div>
      </div>

      {widget.src ? (
        // Live widget mounts here.
        <div ref={containerRef} className="mt-5 min-h-[60px]" />
      ) : (
        // Fallback until a widget src is configured in affiliate.js.
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
    </div>
  );
}
