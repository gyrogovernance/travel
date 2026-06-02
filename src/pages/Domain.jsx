import { useParams, Link } from "react-router-dom";
import { getDomain, DOMAINS } from "../data/domains.js";
import { POSTS } from "../data/posts.js";
import { getDestination } from "../data/destinations.js";
import { DOMAIN_FEATURED_DESTINATIONS } from "../data/domainDestinations.js";
import Icon from "../components/Icon.jsx";
import AffiliateBanner from "../components/AffiliateBanner.jsx";
import TravelWidget from "../components/TravelWidget.jsx";
import Seo from "../components/Seo.jsx";
import NotFound from "./NotFound.jsx";

export default function Domain() {
  const { slug } = useParams();
  const domain = getDomain(slug);
  if (!domain) return <NotFound />;

  const related = POSTS.filter((p) => p.domain === slug);
  const others = DOMAINS.filter((d) => d.slug !== slug);
  const featuredSlugs = DOMAIN_FEATURED_DESTINATIONS[slug] || [];
  const featuredDestinations = featuredSlugs
    .map((s) => getDestination(s))
    .filter(Boolean);

  return (
    <div>
      <Seo
        title={`${domain.name}: Ethical Travel`}
        description={domain.summary}
        path={`/domains/${domain.slug}`}
        image={domain.image}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: domain.name, path: `/domains/${domain.slug}` },
        ]}
      />

      {/* Hero with image */}
      <section className="relative overflow-hidden text-white">
        <img
          src={domain.image}
          alt={domain.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Tinted brand color plus dark scrim for guaranteed readability. */}
        <span className="absolute inset-0 opacity-55 mix-blend-multiply" style={{ backgroundColor: domain.color }} />
        <span className="absolute inset-0 hero-scrim" />
        <div className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="container-content relative py-20 sm:py-24">
          <nav className="text-sm font-bold text-white/90" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white underline-offset-2 hover:underline">Home</Link>
            <span className="text-white/50"> / </span>
            <span>{domain.name}</span>
          </nav>
          <div className="mt-6 flex items-center gap-4">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30 backdrop-blur">
              <Icon name={domain.icon} className="w-8 h-8" />
            </span>
            <div>
              <h1 className="text-4xl sm:text-6xl leading-none drop-shadow">{domain.name}</h1>
              <p className="text-white/95 mt-2 text-lg font-semibold">{domain.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-white/95 leading-relaxed text-lg font-medium">{domain.summary}</p>
        </div>
      </section>

      {/* Stat callout */}
      <section className="bg-white border-b border-black/5">
        <div className="container-content py-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <p className="font-display text-3xl sm:text-4xl whitespace-nowrap" style={{ color: domain.color }}>
            {domain.stat}
          </p>
          <p className="text-slate-600 text-sm sm:text-base">{domain.statLabel}</p>
        </div>
      </section>

      <section className="container-content py-14 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 prose-site">
          <h2>Principles</h2>
          <div className="grid sm:grid-cols-2 gap-5 not-prose">
            {domain.principles.map((pr) => (
              <div
                key={pr.title}
                className="rounded-3xl p-6 transition duration-300 ease-smooth hover:-translate-y-1"
                style={{ backgroundColor: `${domain.color}14` }}
              >
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-white mb-3"
                  style={{ backgroundColor: domain.color }}
                >
                  <Icon name={domain.icon} className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg text-ink">{pr.title}</h3>
                <p className="text-sm text-slate-700 mt-2 leading-relaxed">{pr.body}</p>
              </div>
            ))}
          </div>

          <h2>Put it into practice</h2>
          <ul className="not-prose space-y-3">
            {domain.practices.map((p) => (
              <li key={p} className="flex items-start gap-3 text-slate-700">
                <span
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: domain.color }}
                >
                  <Icon name="check" className="w-4 h-4" strokeWidth={2.2} />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {domain.widgetKey && <TravelWidget widgetKey={domain.widgetKey} />}

          {featuredDestinations.length > 0 ? (
            <div className="card p-6">
              <h3 className="font-display text-lg text-ink mb-3">Atlas destinations</h3>
              <p className="text-xs text-slate-500 mb-3">
                Places where the {domain.name} domain shows up clearly.
              </p>
              <ul className="space-y-3">
                {featuredDestinations.map((d) => (
                  <li key={d.slug}>
                    <Link
                      to={`/destinations/${d.slug}`}
                      className="flex items-center gap-3 group"
                    >
                      <img
                        src={d.image}
                        alt=""
                        className="h-10 w-10 rounded-lg object-cover shrink-0"
                      />
                      <span className="text-sm font-bold text-ink group-hover:text-ocean">
                        {d.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to="/destinations"
                className="mt-4 inline-flex text-sm font-bold text-ocean hover:underline"
              >
                All destinations
              </Link>
            </div>
          ) : null}

          <div className="card p-6">
            <h3 className="font-display text-lg text-ink mb-3">Related guides</h3>
            {related.length ? (
              <ul className="space-y-3">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/guides/${p.slug}`} className="text-sm text-ocean hover:underline font-medium">
                      {p.title}
                    </Link>
                    <p className="text-xs text-slate-500">{p.readMinutes} min read</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-slate-500">More guides coming soon.</p>
            )}
          </div>

          <div className="card p-6">
            <h3 className="font-display text-lg text-ink mb-3">Other domains</h3>
            <ul className="space-y-2">
              {others.map((d) => (
                <li key={d.slug}>
                  <Link to={`/domains/${d.slug}`} className="flex items-center gap-2 text-sm text-slate-700 hover:text-ocean">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-white" style={{ backgroundColor: d.color }}>
                      <Icon name={d.icon} className="w-4 h-4" />
                    </span>
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section className="container-content pb-16">
        <AffiliateBanner
          title={`Book in line with the ${domain.name} domain`}
          subtitle="Partners that fit this domain. Booking through them supports the site at no extra cost to you."
          keys={domain.offerKeys}
        />
      </section>
    </div>
  );
}
