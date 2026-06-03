import { Link } from "react-router-dom";
import { DOMAINS } from "../data/domains.js";
import { DISCLOSURE } from "../affiliate.js";
import SiteLogo from "./SiteLogo.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-slate-300">
      <div className="container-content py-12 grid gap-10 md:grid-cols-4">
        <div>
          <SiteLogo className="mb-3 w-fit" />
          <p className="text-sm leading-relaxed text-slate-400">
            Ethical travel, AI-empowered. Guides for human adventures that respect people and planet.
          </p>
          <SocialLinks className="mt-4 -ml-2" />
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
            <li><Link to="/destinations" className="hover:text-white">Destinations</Link></li>
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
