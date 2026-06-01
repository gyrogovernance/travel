import { Link } from "react-router-dom";
import { POSTS } from "../data/posts.js";
import { DOMAINS } from "../data/domains.js";
import AffiliateBanner from "../components/AffiliateBanner.jsx";
import Chip from "../components/Chip.jsx";
import Seo from "../components/Seo.jsx";

export default function Guides() {
  return (
    <div>
      <Seo
        title="Guides"
        description="Practical, honest ethical travel guides across Economy, Employment, Education, and Ecology."
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
            Practical, honest reading and AI prompts to help you travel better across all four
            domains of ethical travel.
          </p>
        </div>
      </section>

      <section className="container-content py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => {
            const domain = DOMAINS.find((d) => d.slug === p.domain);
            return (
              <Link key={p.slug} to={`/guides/${p.slug}`} className="card card-hover p-7 flex flex-col">
                <Chip color={domain?.color} className="self-start">{domain?.name}</Chip>
                <h2 className="text-xl text-ink mt-4 leading-snug">{p.title}</h2>
                <p className="text-slate-600 mt-2 flex-1 font-medium">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
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
