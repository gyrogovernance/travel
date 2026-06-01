import { Link } from "react-router-dom";
import { DOMAINS } from "../data/domains.js";
import { DISCLOSURE } from "../affiliate.js";
import { SITE } from "../site.js";
import BrandLockup from "./BrandLockup.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 bg-ink text-slate-300">
      <div className="container-content py-12 grid gap-10 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-3 w-fit" aria-label="Gyro Governance Ethical Travel home">
            <img
              src={SITE.travelIcon}
              alt=""
              width="40"
              height="40"
              className="h-10 w-10 shrink-0 rounded-full"
            />
            <BrandLockup />
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Ethical travel, AI-empowered. Guides for human adventures that respect people and planet.
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
            <li><Link to="/prompts" className="hover:text-white">AI Prompts</Link></li>
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
