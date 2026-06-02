import { useEffect, useRef } from "react";
import { injectTravelpayoutsScript } from "../utils/travelpayouts.js";

/** Parse height from iFrameSizer postMessage (WeGoTrip widgetManager). */
function parseIframeSizerHeight(data) {
  if (typeof data !== "string" || !data.startsWith("[iFrameSizer]")) return null;
  const parts = data.split(":");
  if (parts.length < 2) return null;
  const height = parseInt(parts[1], 10);
  return Number.isFinite(height) && height > 0 ? height : null;
}

/**
 * Travelpayouts WeGoTrip embed with auto-height iframe.
 * The partner script sets a fixed iframe height; WeGoTrip sends [iFrameSizer]
 * messages when content size changes — we apply those here.
 */
export default function ToursWidgetEmbed({ src }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return injectTravelpayoutsScript(containerRef.current, src);
  }, [src]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function applyIframeLayout(iframe) {
      iframe.style.width = "100%";
      iframe.style.maxWidth = "100%";
      iframe.style.display = "block";
      iframe.scrolling = "no";
    }

    function onMessage(event) {
      const iframe = container.querySelector("iframe.js-wegotrip-widget, iframe");
      if (!iframe) return;
      const height = parseIframeSizerHeight(event.data);
      if (height) iframe.style.height = `${height}px`;
    }

    const observer = new MutationObserver(() => {
      const iframe = container.querySelector("iframe");
      if (iframe) applyIframeLayout(iframe);
    });

    observer.observe(container, { childList: true, subtree: true });
    window.addEventListener("message", onMessage);

    return () => {
      observer.disconnect();
      window.removeEventListener("message", onMessage);
    };
  }, [src]);

  if (!src) return null;

  return <div ref={containerRef} className="tours-widget-embed" />;
}
