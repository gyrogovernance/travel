// Accessible FAQ accordion using native details/summary so it works
// without JS and is keyboard friendly by default.
export default function Faq({ items }) {
  if (!items || !items.length) return null;
  return (
    <section className="mt-12" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-2xl sm:text-3xl text-ink mb-4">
        Frequently asked questions
      </h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details
            key={item.q}
            className="group card p-0 overflow-hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 font-bold text-ink list-none">
              <span>{item.q}</span>
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ocean/10 text-ocean transition group-open:rotate-45">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <div className="px-5 pb-5 text-slate-700 font-medium leading-relaxed">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
