import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

/** Card CTA for tours: destination pages host the WeGoTrip widget per city. */
export default function ExperiencesCta() {
  return (
    <div className="card p-6">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
          <Icon name="compass" className="w-5 h-5" />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg text-ink">Find experiences</h3>
          <p className="text-sm text-slate-600 mt-1 font-medium">
            Choose tours run by local guides who are paid fairly.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <Link to="/destinations" className="btn-primary w-full">
          Browse destinations
          <Icon name="arrow" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
