import { GYROSCOPE_OPS, GYROSCOPE_OPERATIONS_HEADING } from "../data/atlasMethod.js";

/** Compact list of the four Gyroscope operations (Prompts page, etc.). */
export default function GyroscopeOpsOverview({ className = "" }) {
  return (
    <div className={className}>
      <h2 className="text-2xl sm:text-3xl text-ink">{GYROSCOPE_OPERATIONS_HEADING}</h2>
      <p className="mt-2 text-slate-700 font-medium max-w-3xl leading-relaxed">
        Every Atlas destination uses these four operations in Step 2: Preparation. Use them as a
        checklist before you copy and paste your prompt.
      </p>
      <ul className="mt-5 space-y-3">
        {GYROSCOPE_OPS.map((op) => (
          <li key={op.key} className="atlas-panel">
            <p className="text-sm font-bold text-ink leading-snug">
              <span className="text-ocean">Operation {op.order}.</span> {op.name}
            </p>
            <p className="mt-1.5 text-sm text-ocean font-semibold">{op.question}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
