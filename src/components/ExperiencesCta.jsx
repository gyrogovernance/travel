import { wegotripLink } from "../affiliate.js";
import Icon from "./Icon.jsx";

/** Sidebar CTA: Atlas destinations plus WeGoTrip audio tours (Education / Employment domains). */
export default function ExperiencesCta() {
  return (
    <div className="card p-6">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
          <Icon name="headphones" className="w-5 h-5" />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg text-ink">Self-guided audio tours</h3>
          <p className="text-sm text-slate-600 mt-1 font-medium">
            Turn Atlas anchor spots into a personalized route you listen to on your phone,
            offline at your pace.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <a
          href={wegotripLink("domain-experiences-audio")}
          target="_blank"
          rel="noopener sponsored nofollow"
          className="btn-primary w-full"
        >
          Explore WeGoTrip
          <Icon name="arrow" className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
