import { Link } from "react-router-dom";
import { DOMAINS } from "../data/domains.js";
import Icon from "../components/Icon.jsx";
import Seo from "../components/Seo.jsx";
import { SITE } from "../site.js";

export default function About() {
  return (
    <div>
      <Seo
        title="About"
        description="Gyro Governance is an AI Safety Lab helping humans get better together through ethical travel and collective superintelligence."
        path="/about"
      />

      {/* Hero */}
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
              <h1 className="text-4xl sm:text-6xl mt-4 leading-tight">
                About Gyro Governance
              </h1>
            </div>
          </div>
          <p className="mt-6 text-lg text-slate-100 max-w-2xl leading-relaxed font-medium">
            Collective Superintelligence is not another AI model. It is about
            humans getting better together. We are an AI Safety Lab, and we
            apply our research to ethical travel because the same principles
            that keep AI aligned also help people travel with purpose.
          </p>
        </div>
      </section>

      {/* Core idea */}
      <section className="container-content py-14 prose-site max-w-3xl">
        <h2>What is Collective Superintelligence?</h2>
        <p>
          Most people hear "superintelligence" and think of a machine that
          outsmarts everyone. We see it differently. Collective
          Superintelligence happens when humans and AI cooperate with clear
          principles, and humans keep the final say. AI does the research. You
          make the decisions. The whole system becomes smarter than either part
          alone.
        </p>
        <p>
          This idea comes from our research in AI safety. We study how to keep
          intelligent systems aligned with human values, and we build tools
          that help people make better choices. Ethical travel is one of those
          tools. The same framework that prevents AI from going off track also
          helps travelers stay on track: four domains, four questions, one
          compass.
        </p>

        <h2>Why an AI Safety Lab works on travel</h2>
        <p>
          Safety is not just about preventing harm from machines. It is about
          steering powerful systems toward outcomes that help people and the
          planet. The global tourism industry moves trillions of dollars,
          employs one in ten workers worldwide, and produces eight percent of
          global carbon emissions. Small changes in how we travel add up to
          large effects in the world.
        </p>
        <p>
          Our research identifies four principles that keep any cooperative
          system healthy, whether it is a human-AI partnership or a
          traveler-community relationship. When these principles break down,
          things go wrong. When they hold, the system works for everyone. We
          call these principles the four domains.
        </p>

        <h2 id="principles">The four domains</h2>
        <p>
          Every recommendation on this site is checked against four domains.
          Together they form a simple compass for traveling well.
        </p>
      </section>

      {/* Domain cards */}
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

      {/* The research behind it */}
      <section className="container-content py-14 prose-site max-w-3xl">
        <h2>The research behind the compass</h2>
        <p>
          The four domains are grounded in a framework called The Human Mark
          (THM), which classifies all failures in cooperative systems as
          displacement: when an indirect source gets treated as if it were
          direct, or when a direct source gets treated as if it were indirect.
          In AI safety, this explains jailbreaks, deceptive alignment, and
          accountability gaps. In travel, it explains what goes wrong when
          tourists trust algorithms over locals, when booking platforms take
          money out of communities, or when travelers treat their own judgment
          as inferior to a machine's suggestion.
        </p>
        <p>
          THM identifies four displacement risks. Each one corresponds to one
          of our four domains:
        </p>
        <ul>
          <li>
            <strong>Economy</strong> comes from Governance Traceability: can
            you trace where your money goes, or does it vanish into indirect
            systems that have no stake in the place you visit?
          </li>
          <li>
            <strong>Employment</strong> comes from Inference Accountability:
            does responsibility for the effects of tourism stay with the humans
            who do the work, or does it get displaced onto systems that cannot
            be held accountable?
          </li>
          <li>
            <strong>Education</strong> comes from Information Variety: do you
            learn from diverse, direct sources, or do you rely on a single
            indirect source that compresses everything into the most popular
            answer?
          </li>
          <li>
            <strong>Ecology</strong> comes from Intelligence Integrity: do you
            take responsibility for your impact, or do you treat your own
            judgment as less important than convenience?
          </li>
        </ul>
        <p>
          The same patterns that cause AI to fail also cause travel to fail.
          The same principles that keep AI aligned also keep travel aligned.
          That is why an AI Safety Lab works on travel.
        </p>
      </section>

      {/* AI prompts as a tool */}
      <section className="container-content pb-6 prose-site max-w-3xl">
        <h2>How the prompts work</h2>
        <p>
          Our AI prompts are designed to help you use AI as an indirect source,
          exactly what it is. You copy a prompt, fill in your details, and
          paste it into any AI assistant. The AI does research, compares
          options, and generates ideas. Then you verify with real people and
          make your own decisions.
        </p>
        <p>
          This is Collective Superintelligence in practice. AI handles the
          information processing. You handle the judgment. Neither is enough
          alone. Together, they are more than the sum of their parts.
        </p>
        <p>
          <Link to="/prompts">Browse the prompts</Link> to try it yourself.
        </p>
      </section>

      {/* Transparency */}
      <section className="container-content py-14 prose-site max-w-3xl">
        <h2>How we stay honest</h2>
        <p>
          This site is supported by travel affiliate partnerships. When you
          book through our links we may earn a commission at no extra cost to
          you. We never let commissions override our principles. If a partner
          does not fit our four domains, we do not recommend it.
        </p>
        <p>
          The affiliate revenue funds our AI safety research. Every booking you
          make through this site helps us continue the work that produced the
          framework behind these guides. That is the virtuous cycle: better
          travel funds better research, which produces better tools for better
          travel.
        </p>

        <h2>Start where you are</h2>
        <p>
          You do not need to be perfect to travel ethically. You only need to
          make better choices than you did last time. Start with one change in
          each domain and build from there. Book direct. Ask about labor
          practices. Talk to a local instead of reading another review. Choose
          the train over the short flight.
        </p>
        <p>
          <Link to="/guides">Browse our guides</Link> to begin, or{" "}
          <Link to="/prompts">grab a prompt</Link> and let AI help you plan
          your kindest trip yet.
        </p>
      </section>
    </div>
  );
}