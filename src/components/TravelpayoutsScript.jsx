import { useEffect, useRef } from "react";
import {
  injectTravelpayoutsScript,
  observeAndRemoveTpPoweredByBadges,
} from "../utils/travelpayouts.js";

/** Mounts a Travelpayouts embed script inside a container. */
export default function TravelpayoutsScript({
  src,
  className = "min-h-[60px]",
  stripPoweredBy = false,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const cleanupScript = injectTravelpayoutsScript(container, src);
    const cleanupBadges = stripPoweredBy
      ? observeAndRemoveTpPoweredByBadges(container)
      : () => {};
    return () => {
      cleanupBadges();
      cleanupScript();
    };
  }, [src, stripPoweredBy]);

  if (!src) return null;

  return <div ref={containerRef} className={className} />;
}
