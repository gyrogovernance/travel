import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { DOMAINS } from "../data/domains.js";

const navBase =
  "px-3.5 py-2 text-sm font-bold rounded-full transition-colors";

function linkClass({ isActive }) {
  return `${navBase} ${
    isActive ? "text-ocean bg-ocean/10" : "text-slate-700 hover:text-ocean hover:bg-ocean/5"
  }`;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-sand/85 backdrop-blur-md border-b border-black/5">
      <div className="container-content flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)} aria-label="Gyro Governance home">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ocean text-white shadow-glow">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="8" />
              <ellipse cx="12" cy="12" rx="8" ry="3.2" />
              <ellipse cx="12" cy="12" rx="3.2" ry="8" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-lg text-ink">Gyro Governance</span>
            <span className="block text-[11px] font-extrabold uppercase tracking-[0.14em] text-ocean">Ethical Travel</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          {DOMAINS.map((d) => (
            <NavLink key={d.slug} to={`/domains/${d.slug}`} className={linkClass}>
              {d.name}
            </NavLink>
          ))}
          <NavLink to="/guides" className={linkClass}>Guides</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-xl text-ink hover:bg-black/5"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-sand">
          <div className="container-content py-3 flex flex-col gap-1">
            <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
            {DOMAINS.map((d) => (
              <NavLink key={d.slug} to={`/domains/${d.slug}`} className={linkClass} onClick={() => setOpen(false)}>
                {d.name}
              </NavLink>
            ))}
            <NavLink to="/guides" className={linkClass} onClick={() => setOpen(false)}>Guides</NavLink>
            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
