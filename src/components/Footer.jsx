import { Link } from "react-router-dom";
import { DOMAINS } from "../data/domains.js";
import { DISCLOSURE } from "../affiliate.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 bg-ink text-slate-300">
      <div className="container-content py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-ocean text-white">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="8" />
                <ellipse cx="12" cy="12" rx="8" ry="3.2" />
                <ellipse cx="12" cy="12" rx="3.2" ry="8" />
              </svg>
            </span>
            <span className="font-display text-white text-lg">Gyro Governance</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            An AI Safety Lab building guidance for human adventures that respect people and planet.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Domains</h4>
          <ul className="space-y-2 text-sm">
            {DOMAINS.map((d) => (
              <li key={d.slug}>
                <Link to={`/domains/${d.slug}`} className="hover:text-white">{d.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/guides" className="hover:text-white">Guides</Link></li>
            <li><Link to="/resources" className="hover:text-white">Travel Resources</Link></li>
            <li><Link to="/about" className="hover:text-white">About the Lab</Link></li>
            <li><Link to="/about#principles" className="hover:text-white">Our Principles</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Disclosure</h4>
          <p className="text-xs leading-relaxed text-slate-400">{DISCLOSURE}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>Copyright {year} Gyro Governance. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
            <Link to="/cookies" className="hover:text-white">Cookies</Link>
            <span className="hidden sm:inline">Travel thoughtfully. Travel kindly.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
