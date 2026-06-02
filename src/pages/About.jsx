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
traveler-community relationship. We apply these principles across
four domains of life: Economy, Employment, Education, and Ecology.
When the principles break down in any domain, things go wrong. When
they hold across all domains, the system works for everyone.
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
The four domains come from a framework called Gyroscopic Global
Governance (GGG), which models how cooperative systems stay aligned
across four interconnected areas of life. GGG integrates three
research frameworks, each governing one domain:
</p>
<ul>
<li>
<strong>Economy</strong> is governed by the Common Governance Model
(CGM), which studies how systems maintain direction and trace
authority to their sources. In travel: can you trace where your
money goes, or does it vanish into indirect systems that have no
stake in the place you visit?
</li>
<li>
<strong>Employment</strong> is governed by the Gyroscope Protocol,
which classifies meaningful human work into four categories of
contribution: Governance Management, Information Curation,
Inference Interaction, and Intelligence Cooperation. In travel:
does tourism create real work with real accountability, or does it
reduce people to interchangeable parts in a booking machine?
</li>
<li>
<strong>Education</strong> is governed by The Human Mark (THM),
which defines four alignment capacities: Governance Management
Traceability, Information Curation Variety, Inference Interaction
Accountability, and Intelligence Cooperation Integrity. In travel:
do you trace AI tips back to real sources, keep your own
accountability for decisions, and treat locals as direct authority,
or treat model output as ground truth?
</li>
<li>
<strong>Ecology</strong> closes the loop: it aggregates economy,
employment, and education into systemic health and displacement
(GTD, IVD, IAD, IID). In travel: do your choices add up to
regeneration or degradation?
</li>
</ul>
<p>
THM and the Gyroscope Protocol are related but not identical.
THM names alignment <em>capacities</em> and displacement
<em>risks</em> (source-type errors). The Gyroscope Protocol names
<em>work categories</em> for how people contribute in practice.
Destination pages use the Gyroscope categories; this page explains
the THM research behind them.
</p>
<p>
The four displacement risks arise when Authority and Agency are
treated as titles for a system or person instead of categories of
source type. Governance Traceability Displacement (GTD) is
approaching indirect authority and agency as direct: treating an
AI or platform as an autonomous decision-maker rather than an
instrument traceable to human oversight. Information Variety
Displacement (IVD) is approaching indirect authority without agency
as direct: treating AI-generated information as if you had
directly observed or verified it yourself. Inference Accountability
Displacement (IAD) is approaching indirect agency without authority
as direct: treating an AI conclusion as if it were an authoritative
provider rather than your own accountable inference. Intelligence
Integrity Displacement (IID) is approaching direct authority and
agency as indirect: deferring to algorithmic defaults over your own
judgment and local advice.
</p>
<p>
In travel, GTD shows up when booking systems seem to decide for
you; IVD when a single AI answer replaces checking official sites;
IAD when responsibility for a plan is attributed to the tool; IID
when you override local knowledge because an app said otherwise.
The same patterns that break AI alignment break ethical travel.
Destination preparation steps follow the Gyroscope Protocol work
categories (Governance Management, Information Curation, Inference
Interaction, Intelligence Cooperation). THM principles guide how
we built those steps. That is why an AI Safety Lab works on travel.
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