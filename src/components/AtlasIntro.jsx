import { Link } from "react-router-dom";
import { ATLAS_STEPS, GYROSCOPE_OPERATIONS_HEADING } from "../data/atlasMethod.js";

export default function AtlasIntro() {
  return (
    <section className="container-content pt-10 sm:pt-12 pb-8 sm:pb-10">
      <div className="max-w-3xl">
        <span className="eyebrow">Ethical Travel Atlas</span>
        <h2 className="mt-4 text-3xl sm:text-5xl text-ink leading-tight text-balance">
          Pick a place. Get the bones of a great trip.
        </h2>
        <p className="mt-4 text-lg text-slate-700 font-medium leading-relaxed">
          One hundred mainstream destinations. Each page gives you five anchor spots, ethical
          context for that place, the {GYROSCOPE_OPERATIONS_HEADING.toLowerCase()}, and a
          copy-ready AI prompt you can paste into any assistant.
        </p>
      </div>
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
        , then open a destination below.
      </p>
    </section>
  );
}
