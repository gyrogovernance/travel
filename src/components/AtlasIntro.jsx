import { Link } from "react-router-dom";
import { ATLAS_STEPS, PREP_STEPS_HEADING } from "../data/atlasMethod.js";
import { wegotripLink } from "../affiliate.js";
import Icon from "./Icon.jsx";

export function AtlasDestinationsHeader({ variant = "light", className = "" }) {
  const dark = variant === "dark";

  return (
    <div className={className}>
      <span className={dark ? "eyebrow bg-white/15 text-white" : "eyebrow"}>
        Destinations
      </span>
      <h2
        className={`mt-4 text-3xl sm:text-5xl leading-tight text-balance ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        Pick a place. Get the bones of a great trip.
      </h2>
      <p
        className={`mt-4 text-lg font-medium leading-relaxed ${
          dark ? "text-slate-200" : "text-slate-700"
        }`}
      >
        One hundred mainstream destinations. Each page gives you five anchor spots,
        ethical context for that place, {PREP_STEPS_HEADING.toLowerCase()}, and a
        destination-specific AI prompt you can paste into any assistant.
      </p>
    </div>
  );
}

export function AtlasMethodSteps({ className = "" }) {
  return (
    <div className={className}>
      <ol className="mt-6 grid gap-3 sm:grid-cols-3 max-w-4xl">
        {ATLAS_STEPS.map((s) => (
          <li
            key={s.step}
            className="rounded-2xl bg-cream p-4 ring-1 ring-black/5"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-ocean">
              Step {s.step}: {s.label}
            </p>
            <p className="mt-2 text-sm text-slate-700 font-medium leading-relaxed">
              {s.summary}
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-5 text-sm text-slate-600 font-medium">
        New to the method?{" "}
        <Link to="/guides/how-to-plan-ethical-travel-with-ai" className="text-ocean font-bold hover:underline">
          Read the 3-step guide
        </Link>
        , then open a destination below. When your itinerary is ready,{" "}
        <a
          href={wegotripLink("atlas-intro-audio")}
          target="_blank"
          rel="noopener sponsored nofollow"
          className="text-ocean font-bold hover:underline inline-flex items-center gap-1"
        >
          build a self-guided audio tour
          <Icon name="arrow" className="w-3.5 h-3.5" />
        </a>{" "}
        on WeGoTrip.
      </p>
    </div>
  );
}
