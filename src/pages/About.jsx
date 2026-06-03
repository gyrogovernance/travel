import { Link } from "react-router-dom";
import { DOMAINS } from "../data/domains.js";
import { GYROSCOPE_OPS } from "../data/atlasMethod.js";
import Icon from "../components/Icon.jsx";
import Seo from "../components/Seo.jsx";
import { SITE } from "../site.js";

const sourceTypes = [
  {
    term: "Direct Authority",
    def: "A direct source of information (a local guide, an official site, your own observation).",
  },
  {
    term: "Indirect Authority",
    def: "An indirect source of information (AI output, platform rankings, aggregated reviews).",
  },
  {
    term: "Direct Agency",
    def: "A human who receives information and bears responsibility (you, a local resident).",
  },
  {
    term: "Indirect Agency",
    def: "An artificial processor of information (an AI assistant, a booking algorithm).",
  },
];

const domainFrameworks = [
  {
    domain: "Economy",
    framework: "Common Governance Model (CGM)",
    role: "Trace where money and decisions flow at a systemic level.",
  },
  {
    domain: "Employment",
    framework: "Gyroscope Protocol",
    role: "Classify the human work that keeps cooperation accountable.",
  },
  {
    domain: "Education",
    framework: "✋ The Human Mark (THM)",
    role: "Define alignment capacities and displacement risks.",
  },
  {
    domain: "Ecology",
    framework: "Gyroscopic Global Governance (GGG)",
    role: "Aggregate upstream choices into systemic health or displacement.",
  },
];

const displacementRisks = [
  {
    name: "Governance Traceability Displacement (GTD)",
    pattern: "Approaching Indirect Authority and Agency as Direct",
    travel:
      "You treat a platform or AI as the decision-maker instead of an indirect source traceable to human oversight. Spending and accountability detach from the communities you visit.",
  },
  {
    name: "Information Variety Displacement (IVD)",
    pattern: "Approaching Indirect Authority without Agency as Direct",
    travel:
      "You treat AI-generated or aggregated text as if you had verified it yourself. One indirect source replaces officials, locals, and diverse perspectives.",
  },
  {
    name: "Inference Accountability Displacement (IAD)",
    pattern: "Approaching Indirect Agency without Authority as Direct",
    travel:
      "You attribute the plan to the assistant instead of keeping your own responsibility for what you book, who you hire, and what you support.",
  },
  {
    name: "Intelligence Integrity Displacement (IID)",
    pattern: "Approaching Direct Authority and Agency as Indirect",
    travel:
      "You defer to algorithmic defaults over locals, official sources, and your own judgment. Direct knowledge is demoted when conditions change on the ground.",
  },
];

const startTips = [
  "Book direct",
  "Ask about labor practices",
  "Talk to a local, not only reviews",
  "Choose the train over the short flight",
];

function LabButton({ className = "" }) {
  return (
    <a
      href={SITE.labUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary rounded-full ${className}`.trim()}
    >
      Gyro Governance Lab
      <Icon name="arrow" className="w-4 h-4" />
    </a>
  );
}

export default function About() {
  return (
    <div>
      <Seo
        title="About"
        description="Gyro Governance helps humans get better together. Our AI safety research on authority, agency, and alignment applied to travelling ethically."
        path="/about"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink via-slate2 to-ocean text-white">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-oceanlight/30 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-leaf/30 blur-3xl" />
        <div className="container-content py-20 relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider ring-1 ring-white/25 backdrop-blur">
            <Icon name="shield" className="w-4 h-4" />
            Built by an AI Safety Lab
          </span>
          <div className="mt-5 flex items-start gap-5 sm:items-center">
            <img
              src={SITE.labIcon}
              alt="Gyro Governance Lab"
              width="88"
              height="88"
              className="h-20 w-20 sm:h-22 sm:w-22 rounded-full shrink-0"
            />
            <div>
              <h1 className="text-4xl sm:text-6xl leading-tight text-balance">
                Ethical Travel
              </h1>
              <p className="mt-3 text-lg text-slate-100 max-w-xl leading-relaxed font-medium">
                AI-Empowered Guides for Sustainable Tourism and Human Adventures
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main contenxt */}
      <section className="container-content py-6 prose-site">
        <h2>About Safety</h2>
        <p><strong>True safety goes beyond preventing AI Risks. It means steering powerful systems toward outcomes that benefit people and the planet.</strong>
        </p>
        <p>
          Tourism drives trillions of dollars, employs one in ten workers worldwide, and generates eight percent of global carbon emissions. Because of this massive scale, even small changes in how we travel create large effects.
        </p>
        <p>
          Our research identifies the principles that keep cooperative systems healthy, and this travel site puts that work into practice.
        </p>

        <h2>Core Thesis</h2>
        <p>
          Collective Superintelligence is central to our research at Gyro Governance Lab. Rather than another AI model, it is the infrastructure that helps humans get better together through technology.
        </p>
        <p>
          Applied to travel, AI provides speed and scale in matters of operationalization while you provide judgment and context. This partnership creates an experience smarter than either part alone.
        </p>         

        <h2 id="domains">The Four Domains</h2>
        <p>
          Every travel decision you make touches four core areas of life. We use
          these four domains as a simple compass to guide every recommendation on
          this site:
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
              <Link
                to={`/domains/${d.slug}`}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean"
              >
                Read more
                <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section className="bg-cream border-y border-black/5">
        <div className="container-content py-14 sm:py-16 space-y-10">
          <div>
            <span className="eyebrow">Research</span>
            <h2 className="mt-4 text-3xl sm:text-4xl text-ink leading-tight text-balance">
              The research behind our framework
            </h2>
            <p className="mt-4 text-lg text-slate-700 font-medium leading-relaxed">
              Gyroscopic Global Governance (GGG) is a paper we've published that describes how Collective Superintelligence leads to the alleviation of Poverty, Unemployment, Misinformation, and Ecological Destruction. 
              
              Four frameworks from our research are being leveraged to support this transformation: the Common Governance Model (Focusing on Economy),
              the Gyroscope Protocol (Focusing on Employment), ✋ The Human Mark (Focusing on Education), and Gyroscopic Global Governance (Focusing on Ecology).
            </p>
            <p className="mt-4 text-slate-700 font-medium leading-relaxed">
              At the core is a distinction between types of sources, not brands
              or platforms. <strong>Authority</strong> and <strong>Agency</strong>{" "}
              name categories in information flows (Direct versus Indirect), not
              titles for a person, company, or AI. 
              </p>
              <p className="mt-4 text-slate-700 font-medium leading-relaxed">
              <strong>All artificial Authority and Agency are Indirect and trace back to human intelligence.</strong>
              </p>
              <p className="mt-4 text-slate-700 font-medium leading-relaxed">
              Governance is operational alignment through traceability of information variety, inference accountability, and intelligence integrity to Direct Authority and Agency.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sourceTypes.map((s) => (
              <div key={s.term} className="card p-5">
                <p className="text-sm font-extrabold text-ocean">{s.term}</p>
                <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
                  {s.def}
                </p>
              </div>
            ))}
          </div>

          <div className="card p-6 sm:p-8">
            <h3 className="font-display text-xl text-ink">Four frameworks, one map</h3>
            <ul className="mt-5 divide-y divide-black/5">
              {domainFrameworks.map((row) => (
                <li key={row.domain} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-sm font-extrabold text-ink">
                    {row.domain}{" "}
                    <span className="font-semibold text-ocean">{row.framework}</span>
                  </p>
                  <p className="mt-1 text-sm text-slate-600 font-medium leading-relaxed">
                    {row.role}
                  </p>
                </li>
              ))}
            </ul>
            <LabButton className="mt-6" />
          </div>

          <div>
            <h3 className="font-display text-2xl text-ink leading-tight">
              ✋ The Human Mark: alignment capacities and displacement risks
            </h3>
            <p className="mt-3 text-slate-700 font-medium leading-relaxed">
              When you treat the wrong source as if it were in charge, cooperation
              breaks down in predictable ways. Each card below names a risk pattern
              and what it looks like on a trip.
            </p>
            <ul className="mt-6 grid gap-4 lg:grid-cols-2">
              {displacementRisks.map((risk) => (
                <li key={risk.name} className="card p-5 sm:p-6">
                  <p className="text-sm font-extrabold text-ink leading-snug">{risk.name}</p>
                  <p className="mt-1.5 text-xs font-bold uppercase tracking-wide text-coral">
                    {risk.pattern}
                  </p>
                  <p className="mt-3 text-sm text-slate-700 font-medium leading-relaxed">
                    {risk.travel}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
                <Icon name="compass" className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-display text-xl text-ink">
                  Gyroscope Protocol: four prep categories on destination pages
                </h3>
                <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
                  Destination pages use these in Step 2: Preparation:
                </p>
              </div>
            </div>
            <ol className="mt-6 space-y-3">
              {GYROSCOPE_OPS.map((op) => (
                <li
                  key={op.key}
                  className="rounded-2xl bg-sand/80 px-4 py-4 ring-1 ring-black/5"
                >
                  <p className="text-sm font-extrabold text-ink">
                    <span className="text-ocean">{op.order}.</span> {op.name}
                  </p>
                  <p className="mt-1 text-sm text-ocean font-semibold">{op.question}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Prompts, transparency, start */}
      <section className="bg-sand border-t border-black/5">
        <div className="container-content py-14 sm:py-16 space-y-10">
          <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-ocean to-leaf text-white p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-white/15 blur-3xl" />
            <div className="relative lg:flex lg:items-center lg:justify-between lg:gap-10">
              <div className="min-w-0 flex-1">
                <span className="eyebrow bg-white/15 text-white">AI Prompts</span>
                <h2 className="mt-4 text-3xl sm:text-4xl leading-tight">How the prompts work</h2>
                <p className="mt-3 text-white/90 font-medium text-lg leading-relaxed">
                  Prompts treat AI as Indirect Authority and Agency: useful for
                  research, never a substitute for Direct sources. Copy a prompt,
                  fill in your details, and paste it into any assistant. The AI
                  handles information processing; you keep inference accountability.
                  Verify with real people and official sources, then choose what to
                  book.
                </p>
              </div>
              <Link
                to="/prompts"
                className="btn bg-white text-ink hover:bg-slate-100 mt-6 lg:mt-0 shrink-0"
              >
                Browse the prompts
                <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="card p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-leaf/15 text-leaf">
                <Icon name="handshake" className="w-6 h-6" />
              </span>
              <div>
                <h2 className="text-2xl sm:text-3xl text-ink leading-tight">How we stay honest</h2>
                <p className="mt-3 text-slate-700 font-medium leading-relaxed">
                  This site is supported by travel affiliate partnerships. When you book
                  through our links we may earn a commission at no extra cost to you. We
                  never let commissions override our principles: if a partner does not
                  meet our standards, we do not recommend it.
                </p>
                <p className="mt-3 text-slate-700 font-medium leading-relaxed">
                  Revenue funds research at the lab. People travelling ethically
                  help fund better research, which produces better guidance for
                  travelling ethically.
                </p>
                <LabButton className="mt-5" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl text-ink leading-tight">Start where you are</h2>
            <p className="mt-3 text-lg text-slate-700 font-medium leading-relaxed">
              You do not need to be perfect. You only need to make better choices
              than you did last time.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {startTips.map((tip) => (
                <li
                  key={tip}
                  className="flex items-center gap-3 rounded-2xl bg-cream px-4 py-3.5 ring-1 ring-black/5 text-sm font-semibold text-ink"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ocean/10 text-ocean">
                    <Icon name="check" className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/guides" className="btn-primary">
                Browse our guides
                <Icon name="arrow" className="w-4 h-4" />
              </Link>
              <Link to="/prompts" className="btn-ghost">
                Grab a prompt
                <Icon name="arrow" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
