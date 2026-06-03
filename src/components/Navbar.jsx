import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { DOMAINS } from "../data/domains.js";
import {
  GUIDES_DESTINATIONS,
  GUIDES_FLIGHT_SEARCH,
  GUIDES_RESOURCES,
  GUIDES_TRAVEL,
} from "../data/guidesMenu.js";
import { SITE } from "../site.js";
import Icon from "./Icon.jsx";
import BrandLockup from "./BrandLockup.jsx";
import GoogleTranslate from "./GoogleTranslate.jsx";
import SocialLinks from "./SocialLinks.jsx";

const navBase =
  "inline-flex items-center gap-2 px-3.5 py-2 text-sm font-bold rounded-full transition-colors duration-200";

function linkClass({ isActive }) {
  return `${navBase} ${
    isActive
      ? "text-white bg-white/15"
      : "text-slate-300 hover:text-white hover:bg-white/10"
  }`;
}

function NavItem({ to, end, icon, children, onClick }) {
  return (
    <NavLink to={to} end={end} className={linkClass} onClick={onClick}>
      <Icon name={icon} className="w-4 h-4 shrink-0" />
      {children}
    </NavLink>
  );
}

function isGuidesSectionActive(pathname) {
  return (
    pathname === "/guides" ||
    pathname.startsWith("/guides/") ||
    pathname === "/destinations" ||
    pathname.startsWith("/destinations/") ||
    pathname === "/resources" ||
    pathname === "/search/flights" ||
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

  const ctaShellClass = `nav-guides-cta ${
    open || sectionActive ? "nav-guides-cta-active" : ""
  }`;

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <div className={ctaShellClass}>
        <NavLink
          to="/guides"
          className="inline-flex items-center gap-2 pl-4 pr-2 py-2 text-sm font-bold rounded-l-full"
          onClick={() => setOpen(false)}
        >
          <Icon name="compass" className="w-4 h-4 shrink-0" />
          Guides
        </NavLink>
        <button
          type="button"
          className="px-2.5 py-2 rounded-r-full inline-flex items-center"
          aria-haspopup="true"
          aria-expanded={open}
          aria-label="Open guides menu"
          onClick={() => setOpen((v) => !v)}
          onFocus={openNow}
        >
          <Icon
            name="chevron"
            className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div
        className={`absolute right-0 top-full pt-2 transition duration-200 ease-smooth ${
          open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-1 invisible"
        }`}
      >
        <div className="rounded-2xl bg-cream shadow-soft ring-1 ring-black/5 p-2 w-72">
          <MenuRow {...GUIDES_TRAVEL} />
          <MenuRow {...GUIDES_DESTINATIONS} />
          <MenuRow {...GUIDES_RESOURCES} />
          <MenuRow {...GUIDES_FLIGHT_SEARCH} />
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
          <NavItem to="/" end icon="home">Home</NavItem>
          <NavItem to="/about" icon="about">About</NavItem>
          <NavItem to="/prompts" icon="spark">AI Prompts</NavItem>
          <GuidesMenu />
        </nav>

        <div className="flex items-center gap-1 shrink-0 ml-1 md:ml-0 md:justify-self-end">
          <GoogleTranslate />
          <SocialLinks variant="nav" className="hidden md:flex" />
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
            <NavItem to="/" end icon="home" onClick={() => setOpen(false)}>Home</NavItem>
            <NavItem to="/about" icon="about" onClick={() => setOpen(false)}>About</NavItem>
            <NavItem to="/prompts" icon="spark" onClick={() => setOpen(false)}>AI Prompts</NavItem>

            <p className="px-3.5 pt-3 pb-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">
              Guides
            </p>
            <NavLink
              to="/guides"
              className="nav-guides-cta w-full justify-center gap-2 px-5 py-3 text-sm font-bold"
              onClick={() => setOpen(false)}
            >
              <Icon name="compass" className="w-4 h-4 shrink-0" />
              Guides
            </NavLink>
            <NavLink to={GUIDES_TRAVEL.to} className={linkClass} onClick={() => setOpen(false)}>
              <Icon name={GUIDES_TRAVEL.icon} className="w-4 h-4 shrink-0" />
              {GUIDES_TRAVEL.title}
            </NavLink>
            <NavLink to={GUIDES_DESTINATIONS.to} className={linkClass} onClick={() => setOpen(false)}>
              <Icon name={GUIDES_DESTINATIONS.icon} className="w-4 h-4 shrink-0" />
              {GUIDES_DESTINATIONS.title}
            </NavLink>
            <NavLink to={GUIDES_RESOURCES.to} className={linkClass} onClick={() => setOpen(false)}>
              <Icon name={GUIDES_RESOURCES.icon} className="w-4 h-4 shrink-0" />
              {GUIDES_RESOURCES.title}
            </NavLink>
            <NavLink to={GUIDES_FLIGHT_SEARCH.to} className={linkClass} onClick={() => setOpen(false)}>
              <Icon name={GUIDES_FLIGHT_SEARCH.icon} className="w-4 h-4 shrink-0" />
              {GUIDES_FLIGHT_SEARCH.title}
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

            <div className="border-t border-white/10 mt-3 pt-3 pb-1 flex flex-col items-center gap-2">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500">
                Follow us
              </p>
              <SocialLinks variant="nav" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
