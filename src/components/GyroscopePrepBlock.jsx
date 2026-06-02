import {
  GYROSCOPE_OPS,
  GYROSCOPE_OPERATIONS_HEADING,
  GYROSCOPE_PROSE_KEY,
} from "../data/atlasMethod.js";
import Icon from "./Icon.jsx";

function OperationHeader({ order, name, question }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ocean text-white text-sm font-extrabold"
        aria-hidden="true"
      >
        {order}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-ink leading-snug">{name}</p>
        <p className="mt-1 text-sm font-semibold text-ocean leading-snug">{question}</p>
      </div>
    </div>
  );
}

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
          if (op.key === GYROSCOPE_PROSE_KEY) {
            const prose = prep[GYROSCOPE_PROSE_KEY];
            if (!prose) return null;
            return (
              <li key={op.key} className="atlas-panel">
                <OperationHeader order={op.order} name={op.name} question={op.question} />
                <div className="mt-4 space-y-3 text-sm text-slate-700 font-medium leading-relaxed pl-12">
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
              <OperationHeader order={op.order} name={op.name} question={op.question} />
              <ul className="mt-4 space-y-2.5 pl-12">
                {items.map((item) => (
                  <li
                    key={item.slice(0, 60)}
                    className="flex items-start gap-2.5 text-sm text-slate-700 font-medium leading-relaxed"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                      <Icon name="check" className="w-3 h-3" strokeWidth={2.5} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
