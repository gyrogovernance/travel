import { useEffect, useRef } from "react";
import { injectTravelpayoutsScript } from "../utils/travelpayouts.js";

/** Mounts a Travelpayouts embed script inside a container. */
export default function TravelpayoutsScript({ src, className = "min-h-[60px]" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    return injectTravelpayoutsScript(containerRef.current, src);
  }, [src]);

  if (!src) return null;

  return <div ref={containerRef} className={className} />;
}
