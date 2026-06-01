import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "gg_cookie_notice_dismissed";

// A lightweight cookie notice. It appears on first visit and dismisses
// automatically once the visitor starts scrolling, or when they click
// the button. The choice is stored so it does not show again.
export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if the visitor has not dismissed it before.
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      dismissed = false;
    }
    if (dismissed) return;

    setVisible(true);

    const dismiss = () => {
      setVisible(false);
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // Ignore storage errors (for example private mode).
      }
      window.removeEventListener("scroll", onScroll);
    };

    // Dismiss after a small scroll so an accidental nudge does not count.
    const onScroll = () => {
      if (window.scrollY > 80) dismiss();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Expose the dismiss handler for the button via closure.
    CookieNotice._dismiss = dismiss;

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  const handleClick = () => {
    if (CookieNotice._dismiss) CookieNotice._dismiss();
    else setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-5"
    >
      <div className="container-content">
        <div className="card flex flex-col sm:flex-row sm:items-center gap-4 p-5 shadow-soft ring-1 ring-black/10">
          <p className="text-sm text-slate-700 font-medium flex-1">
            We use a few cookies for basic features, analytics, and affiliate
            tracking. This notice disappears as you scroll. Read our{" "}
            <Link to="/cookies" className="text-ocean font-bold underline underline-offset-2">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-ocean font-bold underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
          <button onClick={handleClick} className="btn-primary shrink-0">
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
