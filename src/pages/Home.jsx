import { Link } from "react-router-dom";
import { DOMAINS } from "../data/domains.js";
import { POSTS } from "../data/posts.js";
import DomainCard from "../components/DomainCard.jsx";
import AffiliateBanner from "../components/AffiliateBanner.jsx";
import TravelSearch from "../components/TravelSearch.jsx";
import Icon from "../components/Icon.jsx";
import Chip from "../components/Chip.jsx";
import Seo from "../components/Seo.jsx";
import AtlasIntro from "../components/AtlasIntro.jsx";
import DestinationsStrip from "../components/DestinationsStrip.jsx";
import { SITE } from "../site.js";
import heroImg from "../assets/hero.webp";
const steps = [
  {
    icon: "book",
    title: "Start with the four domains",
    body:
      "Economy, Employment, Education, and Ecology: four lenses that reveal what matters on any trip.",
  },
  {
    icon: "compass",
    title: "Partner with AI for research",
    body:
      "Let our prompts handle the data gathering. Then, check the findings with locals and official sources to ensure they hold up.",
  },
  {
    icon: "shield",
    title: "Book with purpose",
    body:
      "Choose partners that align with the four domains so your spending supports local people and places.",
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
<div className="absolute inset-0 hero-scrim" />
<div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-oceanlight/30 blur-3xl animate-float" />
<div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-sky/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
<div className="container-content relative py-28 sm:py-36 text-white">
<div className="max-w-3xl animate-fade-up">
<span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider ring-1 ring-white/25 backdrop-blur">
<Icon name="shield" className="w-4 h-4" />
Built by an AI Safety Lab
</span>
<h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance drop-shadow-sm">
Better{" "}
<span className="text-sky">Together</span>
</h1>
<p className="mt-6 text-lg sm:text-xl text-slate-100 max-w-2xl font-medium leading-relaxed">
Collective Superintelligence is people and AI cooperating to unlock
better outcomes. In travel, this means letting AI handle the heavy
research while you bring the judgment, values, and local connection
that make a trip meaningful.
</p>
<div className="mt-9 flex flex-wrap gap-4">
<Link to="/guides" className="btn-accent">
Read the Guides
<Icon name="arrow" className="w-4 h-4" />
</Link>
<Link to="/about" className="btn border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur">
How It Works
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
<span className="eyebrow">Your Compass</span>
<h2 className="mt-4 text-3xl sm:text-5xl text-ink text-balance leading-tight">
Four Domains of <span className="gradient-text">Ethical Travel</span>
</h2>
<p className="mt-4 text-lg text-slate-700 leading-relaxed font-medium">
Every trip touches four areas of life. Ask these four questions to guide
your choices: Where does your money go? Who benefits from your visit?
Whose knowledge do you trust? What is your impact?
</p>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2">
{DOMAINS.map((d) => (
<DomainCard key={d.slug} domain={d} />
))}
</div>
</section>
{/* How it works */}
<section className="bg-cream pb-10 sm:pb-12">
<div className="container-content pt-12 sm:pt-16">
<div className="max-w-2xl">
<span className="eyebrow">How it works</span>
<h2 className="mt-4 text-3xl sm:text-5xl text-ink leading-tight">
Research with AI, <span className="gradient-text">decide yourself.</span>
</h2>
<p className="mt-4 text-lg text-slate-700 font-medium leading-relaxed">
True cooperation blends machine speed with human wisdom. Let AI gather
the options, verify the details with real people, and then choose the
path that feels right to you.
</p>
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
<AtlasIntro />
<DestinationsStrip />
{/* AI Prompts teaser */}
<section className="container-content section-pad">
<div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-ocean to-leaf text-white p-8 sm:p-12">
<div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 rounded-full bg-white/15 blur-3xl" />
<div className="relative lg:flex lg:items-center lg:justify-between lg:gap-10">
<div className="max-w-2xl">
<span className="eyebrow bg-white/15 text-white">AI Prompts</span>
<h2 className="mt-4 text-3xl sm:text-4xl leading-tight">
Copy a prompt. Plan a kinder trip.
</h2>
<p className="mt-3 text-white/90 font-medium text-lg">
Ready-made prompts to build ethical itineraries, find fair-work
tours, learn from locals, and lower your footprint. Fill in the
brackets and let an AI assistant draft your plan.
</p>
</div>
<Link to="/prompts" className="btn bg-white text-ink hover:bg-slate-100 mt-6 lg:mt-0 shrink-0">
Browse the prompts
<Icon name="arrow" className="w-4 h-4" />
</Link>
</div>
</div>
</section>
{/* Search, partners, guides — one white band to avoid double section padding */}
<section className="bg-white">
<div className="container-content section-pad space-y-12 sm:space-y-14">
<TravelSearch />
<AffiliateBanner />
<div>
<div className="flex items-end justify-between gap-4 mb-8">
<div>
<span className="eyebrow">Guides</span>
<h2 className="mt-4 text-3xl sm:text-5xl text-ink leading-tight">Latest Guides</h2>
<p className="mt-3 text-lg text-slate-700 font-medium">
Practical reading for your next thoughtful trip.
</p>
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
</div>
</div>
</section>
{/* Mission strip — flows into footer (both ink) */}
<section className="relative overflow-hidden bg-ink text-white">
<div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-ocean/40 blur-3xl" />
<div className="pointer-events-none absolute -left-16 -bottom-24 h-72 w-72 rounded-full bg-leaf/30 blur-3xl" />
<div className="container-content py-14 sm:py-16 text-center relative">
<h2 className="text-3xl sm:text-5xl text-balance leading-tight">
Collective Superintelligence means humans getting better together, not
building smarter machines.
</h2>
<p className="mt-5 text-lg text-slate-200 max-w-2xl mx-auto font-medium">
We are an AI Safety Lab bringing the same rigor to travel as we do to
frontier technology. Four domains, clear principles, practical tools:
everything we build helps people make kinder choices, not just faster
ones.
</p>
<Link to="/about" className="btn bg-white text-ink hover:bg-slate-100 mt-8">
How we work
<Icon name="arrow" className="w-4 h-4" />
</Link>
</div>
</section>
</div>
);
}