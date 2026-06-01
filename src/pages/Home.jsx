import { Link } from "react-router-dom";
import { DOMAINS } from "../data/domains.js";
import { POSTS } from "../data/posts.js";
import DomainCard from "../components/DomainCard.jsx";
import AffiliateBanner from "../components/AffiliateBanner.jsx";
import TravelSearch from "../components/TravelSearch.jsx";
import Icon from "../components/Icon.jsx";
import Chip from "../components/Chip.jsx";
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
          className="absolute inset-0 h-full w-full object-cover scale-105"
          fetchpriority="high"
        />
        {/* Strong layered scrim keeps text readable on any image. */}
        <div className="absolute inset-0 hero-scrim" />
        {/* Soft floating color blobs for a modern feel. */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-oceanlight/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sky/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

        <div className="container-content relative py-28 sm:py-36 text-white">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider ring-1 ring-white/25 backdrop-blur">
              <Icon name="shield" className="w-4 h-4" />
              Built by an AI Safety Lab
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance drop-shadow-sm">
              AI-Empowered Guides for{" "}
              <span className="text-sky">Human Adventures</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-100 max-w-2xl font-medium leading-relaxed">
              Gyro Governance Ethical Travel helps you use AI to plan moral trips, make friends
              locally and abroad, and empower the communities you visit. Four domains, one simple
              goal: travel that does good.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/guides" className="btn-accent">
                Read the Guides
                <Icon name="arrow" className="w-4 h-4" />
              </Link>
              <Link to="/about" className="btn border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur">
                About the Lab
              </Link>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {DOMAINS.map((d) => (
              <Link
                key={d.slug}
                to={`/domains/${d.slug}`}
                className="group rounded-2xl bg-white/10 ring-1 ring-white/20 px-4 py-4 backdrop-blur transition duration-300 ease-smooth hover:bg-white/20 hover:-translate-y-1"
              >
                <span className="flex items-center gap-2.5 text-sm font-bold">
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ backgroundColor: d.color }}
                  >
                    <Icon name={d.icon} className="w-4 h-4" />
                  </span>
                  {d.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative -mt-10 z-10">
        <div className="container-content">
          <div className="card grid grid-cols-2 lg:grid-cols-4 overflow-hidden divide-x divide-y lg:divide-y-0 divide-black/5">
            {DOMAINS.map((d) => (
              <div key={d.slug} className="px-5 py-8 text-center">
                <p className="text-2xl sm:text-3xl" style={{ color: d.color, fontFamily: "Caprasimo, serif" }}>
                  {d.stat}
                </p>
                <p className="mt-2 text-xs text-slate-600 leading-snug font-semibold">{d.statLabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="container-content section-pad">
        <div className="max-w-3xl">
          <span className="eyebrow">The framework</span>
          <h2 className="mt-4 text-3xl sm:text-5xl text-ink text-balance leading-tight">
            The Four Domains of <span className="gradient-text">Ethical Travel</span>
          </h2>
          <p className="mt-4 text-lg text-slate-700 leading-relaxed font-medium">
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
      <section className="bg-cream">
        <div className="container-content section-pad">
          <div className="max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 text-3xl sm:text-5xl text-ink leading-tight">
              Three steps to a <span className="gradient-text">kinder trip</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="group relative rounded-3xl bg-sand p-8 ring-1 ring-black/5 transition duration-300 ease-smooth hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="absolute right-6 top-5 text-5xl text-ocean/10" style={{ fontFamily: "Caprasimo, serif" }}>
                  {i + 1}
                </span>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean text-white shadow-glow transition duration-300 ease-smooth group-hover:scale-105">
                  <Icon name={s.icon} className="w-7 h-7" />
                </span>
                <h3 className="mt-5 text-xl text-ink">{s.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed font-medium">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Prompts teaser */}
      <section className="container-content section-pad">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-ocean to-leaf text-white p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-white/15 blur-3xl" />
          <div className="relative lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-2xl">
              <span className="eyebrow bg-white/15 text-white">AI Prompts</span>
              <h2 className="mt-4 text-3xl sm:text-4xl leading-tight">
                Let your AI plan a kinder trip
              </h2>
              <p className="mt-3 text-white/90 font-medium text-lg">
                Copy ready prompts that help you build moral itineraries, make friends locally and
                abroad, and empower the communities you visit. Fill in the blanks and go.
              </p>
            </div>
            <Link to="/prompts" className="btn bg-white text-ink hover:bg-slate-100 mt-6 lg:mt-0 shrink-0">
              Browse the prompts
              <Icon name="arrow" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Travelpayouts search widgets */}
      <section className="bg-white">
        <div className="container-content section-pad">
          <TravelSearch />
        </div>
      </section>

      {/* Affiliate banner */}
      <section className="container-content section-pad">
        <AffiliateBanner />
      </section>

      {/* Latest guides */}
      <section className="container-content section-pad">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <span className="eyebrow">Guides</span>
            <h2 className="mt-4 text-3xl sm:text-5xl text-ink leading-tight">Latest Guides</h2>
            <p className="mt-3 text-lg text-slate-700 font-medium">Practical reading for your next thoughtful trip.</p>
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
              <Link
                key={p.slug}
                to={`/guides/${p.slug}`}
                className="card card-hover p-7 flex flex-col"
              >
                <Chip color={domain?.color} className="self-start">{domain?.name}</Chip>
                <h3 className="text-xl text-ink mt-4 leading-snug">{p.title}</h3>
                <p className="text-slate-600 mt-2 flex-1 font-medium">{p.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-ocean">
                  Read guide <Icon name="arrow" className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Mission strip */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-ocean/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 -bottom-24 h-72 w-72 rounded-full bg-leaf/30 blur-3xl" />
        <div className="container-content py-20 text-center relative">
          <h2 className="text-3xl sm:text-5xl text-balance leading-tight">
            Adventures that leave the world <span className="text-sky">better</span>
          </h2>
          <p className="mt-5 text-lg text-slate-200 max-w-2xl mx-auto font-medium">
            We believe technology should help people make kinder choices. That is why this AI Safety
            Lab built a travel guide grounded in real principles, not just deals.
          </p>
          <Link to="/about" className="btn bg-white text-ink hover:bg-slate-100 mt-8">
            Learn how we work
            <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
