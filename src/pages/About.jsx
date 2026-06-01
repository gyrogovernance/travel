import { Link } from "react-router-dom";
import { DOMAINS } from "../data/domains.js";
import Icon from "../components/Icon.jsx";
import Seo from "../components/Seo.jsx";
import { SITE } from "../site.js";

export default function About() {
  return (
    <div>
      <Seo
        title="About the Lab"
        description="Gyro Governance is an AI Safety Lab applying principled thinking to ethical travel across four domains."
        path="/about"
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-ink via-slate2 to-ocean text-white">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-oceanlight/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-leaf/30 blur-3xl" />
        <div className="container-content py-20 relative">
          <div className="flex items-center gap-5">
            <img
              src={SITE.labLogo}
              alt="Gyro Governance lab logo"
              width="88"
              height="88"
              className="h-20 w-20 sm:h-22 sm:w-22 rounded-full shrink-0"
            />
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider ring-1 ring-white/25 backdrop-blur">
                <Icon name="shield" className="w-4 h-4" />
                AI Safety Lab
              </span>
              <h1 className="text-4xl sm:text-6xl mt-4 leading-tight">About Gyro Governance</h1>
            </div>
          </div>
          <p className="mt-6 text-lg text-slate-100 max-w-2xl leading-relaxed font-medium">
            Gyro Governance is an AI Safety Lab. We study how to keep intelligent systems aligned with
            human values, and we build tools that help people make better, kinder choices. Ethical
            travel is one of those tools.
          </p>
        </div>
      </section>

      <section className="container-content py-14 prose-site max-w-3xl">
        <h2>Why an AI Safety Lab works on travel</h2>
        <p>
          Safety is not only about preventing harm from machines. It is about steering powerful
          systems, including the global tourism industry, toward outcomes that help people and the
          planet. Travel moves enormous amounts of money, labor, and carbon every day. Small changes
          in how we travel add up to large effects in the world.
        </p>
        <p>
          We apply the same careful, principled thinking we use in AI safety to the choices travelers
          face. Our AI guides turn that thinking into clear, practical advice you can act on.
        </p>

        <h2 id="principles">Our principles</h2>
        <p>
          Every recommendation on this site is checked against four domains. Together they form a
          simple compass for traveling well.
        </p>
      </section>

      <section className="container-content pb-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {DOMAINS.map((d) => (
            <div key={d.slug} className="card p-6">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-white mb-3"
                style={{ backgroundColor: d.color }}
              >
                <Icon name={d.icon} className="w-6 h-6" />
              </span>
              <h3 className="font-display text-lg text-ink">{d.name}</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{d.summary}</p>
              <Link to={`/domains/${d.slug}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean">
                Read more
                <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container-content py-14 prose-site max-w-3xl">
        <h2>How we stay honest</h2>
        <p>
          This site is supported by travel affiliate partnerships through Travelpayouts. When you
          book through our links we may earn a commission at no extra cost to you. We never let
          commissions override our principles. If a partner does not fit our four domains, we do not
          recommend it.
        </p>
        <h2>Travel thoughtfully</h2>
        <p>
          You do not need to be perfect to travel ethically. You only need to make better choices
          than you did last time. Start with one change in each domain and build from there.
        </p>
        <p>
          <Link to="/guides">Browse our guides</Link> to begin, or open a domain to see the principles
          in detail.
        </p>
      </section>
    </div>
  );
}
