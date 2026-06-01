import { Link } from "react-router-dom";
import { DOMAINS } from "../data/domains.js";
import Icon from "../components/Icon.jsx";
import Seo from "../components/Seo.jsx";

export default function About() {
  return (
    <div>
      <Seo
        title="About the Lab"
        description="Gyro Governance is an AI Safety Lab applying principled thinking to ethical travel across four domains."
        path="/about"
      />
      <section className="bg-gradient-to-br from-ink to-ocean text-white">
        <div className="container-content py-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
            <Icon name="shield" className="w-4 h-4" />
            AI Safety Lab
          </span>
          <h1 className="font-display text-4xl sm:text-5xl mt-5">About Gyro Governance</h1>
          <p className="mt-4 text-slate-200 max-w-2xl leading-relaxed">
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
