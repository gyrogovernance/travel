import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { DOMAINS } from "../data/domains.js";
import { GUIDES_RESOURCES } from "../data/guidesMenu.js";
import { SITE } from "../site.js";
import Icon from "./Icon.jsx";
import BrandLockup from "./BrandLockup.jsx";
import GoogleTranslate from "./GoogleTranslate.jsx";

const navBase =
  "px-3.5 py-2 text-sm font-bold rounded-full transition-colors duration-200";

function linkClass({ isActive }) {
  return `${navBase} ${
    isActive
      ? "text-white bg-white/15"
      : "text-slate-300 hover:text-white hover:bg-white/10"
  }`;
}

function isGuidesSectionActive(pathname) {
  return (
    pathname === "/guides" ||
    pathname.startsWith("/guides/") ||
    pathname === "/resources" ||
    pathname.startsWith("/domains/")
  );
}

const menuRow =
  "flex items-start gap-3 rounded-xl p-2.5 hover:bg-ocean/5 transition-colors";

function MenuRow({ to, icon, iconClass, title, description }) {
  return (
    <Link to={to} className={menuRow}>
      <span
        className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white ${iconClass}`}
      >
        <Icon name={icon} className="w-4 h-4" />
      </span>
      <span>
        <span className="block text-sm font-bold text-ink">{title}</span>
        {description ? (
          <span className="block text-xs text-slate-500 leading-snug">{description}</span>
        ) : null}
      </span>
    </Link>
  );
}

// Desktop Guides dropdown. Opens on hover and focus.
function GuidesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const closeTimer = useRef(null);
  const { pathname } = useLocation();
  const sectionActive = isGuidesSectionActive(pathname);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
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

  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const triggerClass =
    open || sectionActive
      ? "text-white bg-white/15"
      : "text-slate-300 hover:text-white hover:bg-white/10";

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <div className={`inline-flex items-center rounded-full ${triggerClass}`}>
        <NavLink
          to="/guides"
          className={() =>
            `${linkClass({ isActive: sectionActive })} rounded-r-none !bg-transparent pr-2`
          }
          onClick={() => setOpen(false)}
        >
          Guides
        </NavLink>
        <button
          type="button"
          className={`px-2 py-2 rounded-l-none rounded-r-full inline-flex items-center ${
            open || sectionActive ? "text-white" : "text-slate-300 hover:text-white"
          }`}
          aria-haspopup="true"
          aria-expanded={open}
          aria-label="Open guides menu"
          onClick={() => setOpen((v) => !v)}
          onFocus={openNow}
        >
          <svg
            viewBox="0 0 24 24"
            className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div
        className={`absolute left-0 top-full pt-2 transition duration-200 ease-smooth ${
          open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-1 invisible"
        }`}
      >
        <div className="rounded-2xl bg-cream shadow-soft ring-1 ring-black/5 p-2 w-72">
          <MenuRow {...GUIDES_RESOURCES} />
          <div className="my-1.5 border-t border-black/8" role="separator" />
          <p className="px-2.5 pb-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">
            Four domains
          </p>
          {DOMAINS.map((d) => (
            <Link key={d.slug} to={`/domains/${d.slug}`} className={menuRow}>
              <span
                className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: d.color }}
              >
                <Icon name={d.icon} className="w-4 h-4" />
              </span>
              <span>
                <span className="block text-sm font-bold text-ink">{d.name}</span>
                <span className="block text-xs text-slate-500 leading-snug">{d.tagline}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  function goHome() {
    setOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-white/10">
      <div className="container-content flex items-center justify-between h-18 py-3 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-3">
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 md:justify-self-start"
          onClick={goHome}
          aria-label="Gyro Governance Ethical Travel home"
        >
          <img
            src={SITE.travelIcon}
            alt=""
            width="40"
            height="40"
            className="h-10 w-10 shrink-0 rounded-full"
          />
          <BrandLockup />
        </Link>

        <nav
          className="hidden md:flex items-center justify-center gap-1 md:justify-self-center"
          aria-label="Primary"
        >
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <GuidesMenu />
          <NavLink to="/prompts" className={linkClass}>AI Prompts</NavLink>
        </nav>

        <div className="flex items-center gap-2 shrink-0 ml-1 md:ml-0 md:justify-self-end">
          <GoogleTranslate />
          <button
          className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl text-white hover:bg-white/10"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-ink">
          <div className="container-content py-3 flex flex-col gap-1">
            <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>

            <p className="px-3.5 pt-3 pb-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">
              Guides
            </p>
            <NavLink to="/guides" className={linkClass} onClick={() => setOpen(false)}>Guides hub</NavLink>
            <NavLink to="/resources" className={linkClass} onClick={() => setOpen(false)}>
              {GUIDES_RESOURCES.title}
            </NavLink>

            <p className="px-3.5 pt-2 pb-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">
              Four domains
            </p>
            {DOMAINS.map((d) => (
              <NavLink
                key={d.slug}
                to={`/domains/${d.slug}`}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                <span className="inline-flex items-center gap-2.5">
                  <span
                    className="inline-flex h-6 w-6 items-center justify-center rounded-md text-white"
                    style={{ backgroundColor: d.color }}
                  >
                    <Icon name={d.icon} className="w-3.5 h-3.5" />
                  </span>
                  {d.name}
                </span>
              </NavLink>
            ))}

            <NavLink to="/prompts" className={linkClass} onClick={() => setOpen(false)}>AI Prompts</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
