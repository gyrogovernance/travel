import Seo from "../components/Seo.jsx";

// Shared layout for simple legal pages (Privacy, Cookies).
// Content is passed as an array of { heading, paragraphs[] } sections.
export default function LegalPage({ title, description, path, updated, sections }) {
  return (
    <div>
      <Seo
        title={title}
        description={description}
        path={path}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: title, path },
        ]}
      />

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-ocean/40 blur-3xl" />
        <div className="container-content py-16 relative">
          <h1 className="text-4xl sm:text-5xl leading-tight">{title}</h1>
          {updated && (
            <p className="mt-4 text-sm font-bold text-slate-300">Last updated {updated}</p>
          )}
        </div>
      </section>

      <section className="container-content py-14 prose-site max-w-3xl">
        {sections.map((s) => (
          <div key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs.map((p, i) =>
              Array.isArray(p) ? (
                <ul key={i}>
                  {p.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p key={i}>{p}</p>
              )
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
