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

const CARD_PALETTE = [
  { accent: "#0a6e7c", tint: "#e7f2f4" },
  { accent: "#08707e", tint: "#e5f3f5" },
  { accent: "#13a3b5", tint: "#e8f7f9" },
  { accent: "#17b5c7", tint: "#e9f9fb" },
  { accent: "#2f7d4c", tint: "#eaf4ee" },
  { accent: "#3a9160", tint: "#ecf6f0" },
  { accent: "#d98c2b", tint: "#faf3e8" },
  { accent: "#c9781f", tint: "#f8f0e4" },
  { accent: "#5cc2e6", tint: "#edf8fc" },
  { accent: "#4a9fd4", tint: "#ebf5fa" },
  { accent: "#ff6b5e", tint: "#fff0ef" },
  { accent: "#7c6bcf", tint: "#f2effa" },
  { accent: "#c45d8a", tint: "#faf0f5" },
  { accent: "#6b8f71", tint: "#f0f5f1" },
  { accent: "#2d6a8f", tint: "#ebf2f6" },
  { accent: "#b85c38", tint: "#faf2ee" },
  { accent: "#5a7c8f", tint: "#f0f4f6" },
  { accent: "#4f8a7c", tint: "#eef5f3" },
  { accent: "#8b6914", tint: "#f7f2e8" },
];

function cardColorIndex(categoryIndex, programIndex) {
  return (
    PROGRAM_CATEGORIES.slice(0, categoryIndex).reduce(
      (count, category) => count + category.programs.length,
      0
    ) + programIndex
  );
}

function badgeText(accent) {
  const hex = accent.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;
  const channel = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
  const lum = 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
  return lum > 0.55 ? "#0c1524" : "#ffffff";
}

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
        {PROGRAM_CATEGORIES.map((cat, catIndex) => (
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
              {cat.programs.map((p, programIndex) => {
                const { accent, tint } =
                  CARD_PALETTE[cardColorIndex(catIndex, programIndex)];

                return (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener sponsored nofollow"
                    className="card card-hover group p-5 flex flex-col"
                    style={{ backgroundColor: tint }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-sm"
                        style={{ backgroundColor: accent, color: badgeText(accent) }}
                      >
                        <Icon name={p.icon} className="w-5 h-5" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="font-extrabold text-ink">{p.name}</span>
                        <p className="text-sm text-slate-600 mt-2 font-medium">{p.note}</p>
                      </div>
                    </div>
                    <span
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold"
                      style={{ color: accent }}
                    >
                      Open
                      <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </span>
                  </a>
                );
              })}
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
