import { Link } from "react-router-dom";
import { ETHICAL_COMPASS_DOMAINS } from "../data/atlasMethod.js";
import { DOMAINS } from "../data/domains.js";
import Icon from "./Icon.jsx";

export default function EthicalCompassBlock({ compass }) {
  if (!compass) return null;

  return (
    <div className="mt-6">
      <h3 className="text-lg text-ink">Ethical Compass</h3>
      <p className="mt-1 text-sm text-slate-600 font-medium">
        Four questions for this destination. Each links to our domain guides for deeper reading.
      </p>
      <ul className="mt-4 space-y-4">
        {ETHICAL_COMPASS_DOMAINS.map(({ key, name, slug, question }) => {
          const body = compass[key];
          if (!body) return null;
          const domain = DOMAINS.find((d) => d.slug === slug);
          return (
            <li key={key} className="atlas-panel">
              <div className="flex items-start gap-3">
                <span
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: domain?.color }}
                >
                  <Icon name={domain?.icon} className="w-4 h-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-ink leading-snug">
                    <Link to={`/domains/${slug}`} className="hover:text-ocean">
                      {name}
                    </Link>
                    <span className="font-medium text-slate-500">: {question}</span>
                  </p>
                  <p className="mt-2 text-sm text-slate-700 font-medium leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
