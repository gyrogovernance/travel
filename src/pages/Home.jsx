import { Link } from "react-router-dom";
import { DOMAINS } from "../data/domains.js";
import { POSTS } from "../data/posts.js";
import DomainCard from "../components/DomainCard.jsx";
import AffiliateBanner from "../components/AffiliateBanner.jsx";
import Icon from "../components/Icon.jsx";
import Seo from "../components/Seo.jsx";
import { SITE } from "../site.js";
import heroImg from "../assets/hero.jpg";

const steps = [
  {
    icon: "book",
    title: "Learn the framework",
    body: "Start with the four domains. Each gives you clear, real world choices you can make on any trip.",
  },
  {
    icon: "compass",
    title: "Plan with intention",
    body: "Use our guides to shape a trip that supports local people and protects the places you visit.",
  },
  {
    icon: "shield",
    title: "Book the ethical way",
    body: "Reserve flights, stays, and experiences through partners that fit our principles.",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.shortName,
    description: SITE.description,
    url: SITE.siteUrl,
    knowsAbout: ["Ethical travel", "Sustainable tourism", "AI safety"],
  };

  return (
    <div>
      <Seo path="/" image={heroImg} jsonLd={jsonLd} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="A traveler on a coastal trail overlooking the sea"
          className="absolute inset-0 h-full w-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/92 via-slate2/85 to-ocean/75" />
        <div className="container-content relative py-24 sm:py-32 text-white">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
              <Icon name="shield" className="w-4 h-4" />
              Built by an AI Safety Lab
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Ethical Travel, Guided by AI for Human Adventures
            </h1>
            <p className="mt-5 text-lg text-slate-200 max-w-2xl">
              Gyro Governance helps you explore the world in ways that strengthen local economies,
              respect workers, deepen understanding, and protect nature. Four domains, one simple goal:
              travel that does good.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/guides" className="btn bg-amber2 text-ink hover:bg-amber-400 focus:ring-amber2">
                Read the Guides
                <Icon name="arrow" className="w-4 h-4" />
              </Link>
              <Link to="/about" className="btn border border-white/30 text-white hover:bg-white/10 focus:ring-white">
                About the Lab
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {DOMAINS.map((d) => (
              <Link
                key={d.slug}
                to={`/domains/${d.slug}`}
                className="rounded-xl bg-white/10 ring-1 ring-white/15 px-4 py-3 hover:bg-white/20 transition"
              >
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <Icon name={d.icon} className="w-5 h-5" />
                  {d.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-white border-b border-black/5">
        <div className="container-content grid grid-cols-2 lg:grid-cols-4 divide-x divide-black/5">
          {DOMAINS.map((d) => (
            <div key={d.slug} className="px-4 py-8 text-center">
              <p className="font-display text-2xl sm:text-3xl" style={{ color: d.color }}>
                {d.stat}
              </p>
              <p className="mt-1 text-xs text-slate-500 leading-snug">{d.statLabel}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Domains */}
      <section className="container-content section-pad">
        <div className="max-w-3xl">
          <span className="eyebrow">The framework</span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl text-ink text-balance">
            The Four Domains of Ethical Travel
          </h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            We organize ethical travel into four clear domains. Each one gives you concrete choices
            you can make on any trip, whether it is a weekend nearby or a journey across the world.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {DOMAINS.map((d) => (
            <DomainCard key={d.slug} domain={d} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className="container-content section-pad">
          <div className="max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-ink">
              Three steps to a kinder trip
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl bg-sand p-7">
                <span className="absolute right-5 top-5 font-display text-4xl text-ocean/15">
                  {i + 1}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-ocean text-white">
                  <Icon name={s.icon} className="w-6 h-6" />
                </span>
                <h3 className="mt-4 font-display text-lg text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate banner */}
      <section className="container-content section-pad">
        <AffiliateBanner />
      </section>

      {/* Latest guides */}
      <section className="container-content pb-16">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <span className="eyebrow">Guides</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-ink">Latest Guides</h2>
            <p className="mt-2 text-slate-700">Practical reading for your next thoughtful trip.</p>
          </div>
          <Link to="/guides" className="btn-ghost hidden sm:inline-flex">
            All guides
            <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {POSTS.map((p) => {
            const domain = DOMAINS.find((d) => d.slug === p.domain);
            return (
              <Link key={p.slug} to={`/guides/${p.slug}`} className="card p-6 hover:shadow-md hover:-translate-y-0.5 transition flex flex-col">
                <span
                  className="self-start rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: domain?.color }}
                >
                  {domain?.name}
                </span>
                <h3 className="font-display text-lg text-ink mt-3">{p.title}</h3>
                <p className="text-sm text-slate-600 mt-2 flex-1">{p.excerpt}</p>
                <span className="mt-4 text-xs text-slate-500">{p.readMinutes} min read</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-ocean text-white">
        <div className="container-content py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-balance">
            Adventures that leave the world better
          </h2>
          <p className="mt-3 text-slate-100 max-w-2xl mx-auto">
            We believe technology should help people make kinder choices. That is why this AI Safety
            Lab built a travel guide grounded in real principles, not just deals.
          </p>
          <Link to="/about" className="btn bg-white text-ocean hover:bg-slate-100 focus:ring-white mt-6">
            Learn how we work
          </Link>
        </div>
      </section>
    </div>
  );
}
