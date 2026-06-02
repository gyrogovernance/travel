import { Link } from "react-router-dom";
import { POSTS } from "../data/posts.js";
import { DOMAINS } from "../data/domains.js";
import {
  GUIDES_DESTINATIONS,
  GUIDES_RESOURCES,
  GUIDES_TRAVEL,
} from "../data/guidesMenu.js";
import DomainCard from "../components/DomainCard.jsx";
import AffiliateBanner from "../components/AffiliateBanner.jsx";
import Chip from "../components/Chip.jsx";
import Icon from "../components/Icon.jsx";
import Seo from "../components/Seo.jsx";

function HubLinkCard({ to, icon, iconClass, title, description }) {
  return (
    <Link
      to={to}
      className="card card-hover flex items-start gap-4 p-6 group"
    >
      <span
        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${iconClass}`}
      >
        <Icon name={icon} className="w-6 h-6" />
      </span>
      <span className="flex-1">
        <h2 className="text-xl text-ink">{title}</h2>
        <p className="mt-1 text-sm font-medium text-slate-600">{description}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean">
          Explore
          <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition" />
        </span>
      </span>
    </Link>
  );
}

export default function Guides() {
  return (
    <div>
      <Seo
        title="Guides"
        description="Your hub for ethical travel guides, booking resources, and the four domains framework."
        path="/guides"
      />
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-ocean/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-leaf/30 blur-3xl" />
        <div className="container-content py-20 relative">
          <span className="eyebrow bg-white/10 text-white">Guides</span>
          <h1 className="mt-4 text-4xl sm:text-6xl leading-tight">
            AI-Empowered <span className="text-sky">Ethical Travel</span>
          </h1>
          <p className="mt-4 text-lg text-slate-200 max-w-2xl font-medium">
            Everything in the Guides menu lives here: articles, trusted resources, and the four
            domains that shape how we travel.
          </p>
        </div>
      </section>

      <section className="container-content section-pad">
        <div className="max-w-3xl">
          <span className="eyebrow">Atlas and resources</span>
          <h2 className="mt-4 text-3xl sm:text-4xl text-ink leading-tight">Plan your trip</h2>
          <p className="mt-3 text-lg text-slate-700 font-medium leading-relaxed">
            Start with a destination from the Atlas, read domain articles, or open booking tools.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <HubLinkCard {...GUIDES_DESTINATIONS} />
          <HubLinkCard {...GUIDES_TRAVEL} />
          <HubLinkCard {...GUIDES_RESOURCES} />
        </div>
      </section>

      <section className="bg-cream border-y border-black/5">
        <div className="container-content section-pad">
          <div className="max-w-3xl">
            <span className="eyebrow">Framework</span>
            <h2 className="mt-4 text-3xl sm:text-4xl text-ink leading-tight">Four domains</h2>
            <p className="mt-3 text-lg text-slate-700 font-medium leading-relaxed">
              Economy, Employment, Education, and Ecology. Each domain gives concrete choices for
              any trip.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {DOMAINS.map((d) => (
              <DomainCard key={d.slug} domain={d} />
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="container-content section-pad scroll-mt-24">
        <div className="max-w-3xl">
          <span className="eyebrow">Articles</span>
          <h2 className="mt-4 text-3xl sm:text-4xl text-ink leading-tight">Travel guides</h2>
          <p className="mt-3 text-lg text-slate-700 font-medium leading-relaxed">
            Practical, honest reading across all four domains.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => {
            const domain = DOMAINS.find((d) => d.slug === p.domain);
            return (
              <Link key={p.slug} to={`/guides/${p.slug}`} className="card card-hover p-7 flex flex-col">
                <Chip color={domain?.color} className="self-start">{domain?.name}</Chip>
                <h3 className="text-xl text-ink mt-4 leading-snug">{p.title}</h3>
                <p className="text-slate-600 mt-2 flex-1 font-medium">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>
                    {new Date(p.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <span>{p.readMinutes} min read</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-content pb-16">
        <AffiliateBanner />
      </section>
    </div>
  );
}
