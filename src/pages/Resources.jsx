import { PROGRAM_CATEGORIES } from "../data/programs.js";
import CtaBand from "../components/CtaBand.jsx";
import Icon from "../components/Icon.jsx";
import Seo from "../components/Seo.jsx";

const domainColors = {
  Economy: "#0a6e7c",
  Employment: "#d98c2b",
  Education: "#2f7d4c",
  Ecology: "#13a3b5",
};

export default function Resources() {
  return (
    <div>
      <Seo
        title="Travel Resources"
        description="Trusted, ethical travel booking partners by category: stays, experiences, ground transport, eSIM, insurance, and flights."
        path="/resources"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Travel Resources", path: "/resources" },
        ]}
      />

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-ocean/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-leaf/30 blur-3xl" />
        <div className="container-content py-20 relative">
          <span className="eyebrow bg-white/10 text-white">Resources</span>
          <h1 className="mt-4 text-4xl sm:text-6xl leading-tight">
            AI-Empowered <span className="text-sky">Human Adventures</span>
          </h1>
          <p className="mt-4 text-lg text-slate-200 max-w-2xl font-medium">
            The booking partners we trust, grouped by what you need and matched to
            our four domains. Booking through these supports the site at no extra
            cost to you.
          </p>
        </div>
      </section>

      <section className="container-content section-pad space-y-12">
        {PROGRAM_CATEGORIES.map((cat) => (
          <div key={cat.id} id={cat.id} className="scroll-mt-24">
            <div className="flex items-center gap-3">
              <span
                className="chip"
                style={{ backgroundColor: domainColors[cat.domain], color: "#fff" }}
              >
                {cat.domain}
              </span>
              <h2 className="text-2xl sm:text-3xl text-ink">{cat.title}</h2>
            </div>
            <p className="mt-2 text-slate-700 font-medium max-w-3xl">{cat.intro}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cat.programs.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener sponsored nofollow"
                  className="card card-hover group p-5 flex flex-col"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-extrabold text-ink">{p.name}</span>
                    <span className="text-xs font-bold text-ocean whitespace-nowrap">
                      {p.reward}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mt-2 flex-1 font-medium">{p.note}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ocean">
                    Open
                    <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}

        <CtaBand
          title="Not sure where to start?"
          body="Read the guides first, then come back here to book the pieces of your trip with partners that match your values."
          ctaLabel="Read the guides"
          to="/guides"
        />
      </section>
    </div>
  );
}
