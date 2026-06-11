import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../utils/analytics.js";

// Scrolls to top on route change, or to an anchor if a hash is present.
export default function ScrollToTop() {
  const { pathname, hash, search } = useLocation();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    const pagePath = `${pathname}${search}${hash}`;

    // Initial page view is sent by gtag in index.html; track SPA navigations only.
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
    } else {
      trackPageView(pagePath);
    }

    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash, search]);

  return null;
}
