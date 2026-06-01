import { Link } from "react-router-dom";
import { POSTS } from "../data/posts.js";
import { DOMAINS } from "../data/domains.js";
import AffiliateBanner from "../components/AffiliateBanner.jsx";
import Seo from "../components/Seo.jsx";

export default function Guides() {
  return (
    <div>
      <Seo
        title="Guides"
        description="Practical, honest ethical travel guides across Economy, Employment, Education, and Ecology."
        path="/guides"
      />
      <section className="bg-ink text-white">
        <div className="container-content py-16">
          <h1 className="font-display text-4xl sm:text-5xl">Guides</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Practical, honest reading to help you travel better across all four domains of ethical travel.
          </p>
        </div>
      </section>

      <section className="container-content py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => {
            const domain = DOMAINS.find((d) => d.slug === p.domain);
            return (
              <Link key={p.slug} to={`/guides/${p.slug}`} className="card p-6 hover:shadow-md hover:-translate-y-0.5 transition flex flex-col">
                <span
                  className="self-start rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: domain?.color }}
                >
                  {domain?.name}
                </span>
                <h2 className="font-display text-xl text-ink mt-3">{p.title}</h2>
                <p className="text-sm text-slate-600 mt-2 flex-1">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
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
