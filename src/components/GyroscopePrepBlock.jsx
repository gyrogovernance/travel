import { GYROSCOPE_OPS, GYROSCOPE_OPERATIONS_HEADING } from "../data/atlasMethod.js";

export default function GyroscopePrepBlock({ prep }) {
  if (!prep) return null;

  return (
    <div className="mt-6">
      <h3 className="text-lg text-ink">{GYROSCOPE_OPERATIONS_HEADING}</h3>
      <p className="mt-1 text-sm text-slate-600 font-medium leading-relaxed">
        Work through each operation in order before you copy the AI prompt.
      </p>

      <ul className="mt-4 space-y-4">
        {GYROSCOPE_OPS.map((op) => {
          if (op.key === "ici") {
            const prose = prep.ici;
            if (!prose) return null;
            return (
              <li key={op.key} className="atlas-panel">
                <p className="text-sm font-bold text-ink leading-snug">
                  <span className="text-ocean">Operation {op.order}.</span> {op.name}
                  <span className="font-medium text-slate-500">: {op.question}</span>
                </p>
                <div className="mt-3 space-y-3 text-sm text-slate-700 font-medium leading-relaxed">
                  {prose.split("\n\n").map((p) => (
                    <p key={p.slice(0, 48)}>{p}</p>
                  ))}
                </div>
              </li>
            );
          }

          const items = prep[op.key];
          if (!items?.length) return null;

          return (
            <li key={op.key} className="atlas-panel">
              <p className="text-sm font-bold text-ink leading-snug">
                <span className="text-ocean">Operation {op.order}.</span> {op.name}
                <span className="font-medium text-slate-500">: {op.question}</span>
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700 font-medium leading-relaxed list-disc pl-5">
                {items.map((item) => (
                  <li key={item.slice(0, 60)}>{item}</li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
