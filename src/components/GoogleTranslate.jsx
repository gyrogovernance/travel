import { useEffect, useId, useRef, useState } from "react";
import { TRANSLATE_LANGUAGES, TRANSLATE_LANGUAGE_CODES } from "../data/translateLanguages.js";
import { applyLanguage, getGoogTransCookie } from "../utils/googTransCookies.js";

const SCRIPT_ID = "google-translate-script";
const INIT_CALLBACK = "__ggGoogleTranslateInit";

let loadPromise = null;

function loadGoogleTranslate() {
  if (window.google?.translate?.TranslateElement) {
    return Promise.resolve();
  }
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    window[INIT_CALLBACK] = () => {
      if (window.google?.translate?.TranslateElement) resolve();
      else reject(new Error("Google Translate API unavailable"));
    };

    if (document.getElementById(SCRIPT_ID)) {
      const poll = window.setInterval(() => {
        if (window.google?.translate?.TranslateElement) {
          window.clearInterval(poll);
          resolve();
        }
      }, 50);
      window.setTimeout(() => {
        window.clearInterval(poll);
        reject(new Error("Google Translate load timeout"));
      }, 15000);
      return;
    }

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://translate.google.com/translate_a/element.js?cb=${INIT_CALLBACK}`;
    script.async = true;
    script.onerror = () => reject(new Error("Google Translate script blocked"));
    document.head.appendChild(script);
  });

  return loadPromise;
}

export default function GoogleTranslate({ className = "" }) {
  const reactId = useId().replace(/:/g, "");
  const engineId = `google_translate_engine_${reactId}`;
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    loadGoogleTranslate()
      .then(() => {
        if (cancelled) return;
        const host = document.getElementById(engineId);
        if (!host || host.dataset.ready !== "1") {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: TRANSLATE_LANGUAGE_CODES,
              autoDisplay: false,
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            engineId
          );
          host.dataset.ready = "1";
        }
      })
      .catch(() => {
        // Cookie-based translate still works if the script is blocked.
      });

    return () => {
      cancelled = true;
    };
  }, [engineId]);

  useEffect(() => {
    function onClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const activeCookie = getGoogTransCookie();
  const navPill =
    "px-3.5 py-2 text-sm font-bold rounded-full transition-colors duration-200";

  return (
    <div ref={rootRef} className={`relative notranslate ${className}`.trim()}>
      <div id={engineId} className="google-translate-engine" aria-hidden="true" />

      <button
        type="button"
        className={`${navPill} inline-flex items-center gap-1.5 text-slate-300 hover:text-white hover:bg-white/10`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Translate
        <svg
          viewBox="0 0 24 24"
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full pt-2 w-56 z-[60]">
          <ul
            role="listbox"
            className="max-h-72 overflow-y-auto rounded-2xl bg-cream shadow-soft ring-1 ring-black/5 p-2"
          >
            {TRANSLATE_LANGUAGES.map((lang) => {
              const active =
                lang.code === "en"
                  ? !activeCookie || activeCookie === "/en/en"
                  : activeCookie.includes(lang.code);
              return (
                <li key={lang.code} role="option" aria-selected={active}>
                  <button
                    type="button"
                    className={`w-full rounded-xl px-3 py-2 text-left text-sm font-bold transition-colors ${
                      active
                        ? "bg-ocean/10 text-ocean"
                        : "text-ink hover:bg-ocean/5"
                    }`}
                    onClick={() => {
                      applyLanguage(lang.code);
                      setOpen(false);
                    }}
                  >
                    {lang.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
