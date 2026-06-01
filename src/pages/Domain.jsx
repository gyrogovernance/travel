import { useParams, Link } from "react-router-dom";
import { getDomain, DOMAINS } from "../data/domains.js";
import { POSTS } from "../data/posts.js";
import Icon from "../components/Icon.jsx";
import AffiliateBanner from "../components/AffiliateBanner.jsx";
import Seo from "../components/Seo.jsx";
import NotFound from "./NotFound.jsx";

export default function Domain() {
  const { slug } = useParams();
  const domain = getDomain(slug);
  if (!domain) return <NotFound />;

  const related = POSTS.filter((p) => p.domain === slug);
  const others = DOMAINS.filter((d) => d.slug !== slug);

  return (
    <div>
      <Seo
        title={`${domain.name}: Ethical Travel`}
        description={domain.summary}
        path={`/domains/${domain.slug}`}
        image={domain.image}
      />

      {/* Hero with image */}
      <section className="relative overflow-hidden text-white">
        <img
          src={domain.image}
          alt={domain.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute inset-0 opacity-80" style={{ backgroundColor: domain.color }} />
        <span className="absolute inset-0 bg-ink/40" />
        <div className="container-content relative py-16 sm:py-20">
          <nav className="text-sm text-white/80">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="text-white/50"> / </span>
            <span>{domain.name}</span>
          </nav>
          <div className="mt-5 flex items-center gap-4">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
              <Icon name={domain.icon} className="w-7 h-7" />
            </span>
            <div>
              <h1 className="font-display text-4xl sm:text-5xl">{domain.name}</h1>
              <p className="text-white/90 mt-1">{domain.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-white/90 leading-relaxed">{domain.summary}</p>
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
              <div key={pr.title} className="card p-5 border-t-4" style={{ borderTopColor: domain.color }}>
                <h3 className="font-display text-lg text-ink">{pr.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{pr.body}</p>
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
