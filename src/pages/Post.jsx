import { useParams, Link } from "react-router-dom";
import { getPost, POSTS } from "../data/posts.js";
import { DOMAINS } from "../data/domains.js";
import OfferCard from "../components/OfferCard.jsx";
import Seo from "../components/Seo.jsx";
import { SITE } from "../site.js";
import { DISCLOSURE } from "../affiliate.js";
import NotFound from "./NotFound.jsx";

function Block({ block }) {
  if (block.type === "h2") return <h2>{block.text}</h2>;
  if (block.type === "h3") return <h3>{block.text}</h3>;
  if (block.type === "p") return <p>{block.text}</p>;
  if (block.type === "ul")
    return (
      <ul>
        {block.items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    );
  if (block.type === "offer")
    return (
      <div className="not-prose my-6">
        <OfferCard offerKey={block.key} />
      </div>
    );
  return null;
}

export default function Post() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;

  const domain = DOMAINS.find((d) => d.slug === post.domain);
  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE.shortName },
    publisher: { "@type": "Organization", name: SITE.shortName },
    articleSection: domain?.name,
  };

  return (
    <article>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/guides/${post.slug}`}
        type="article"
        jsonLd={jsonLd}
      />
      <header className="bg-slate2 text-white">
        <div className="container-content py-14">
          <Link to="/guides" className="text-sm text-slate-300 hover:text-white">Guides</Link>
          <span className="text-slate-500"> / </span>
          <Link to={`/domains/${domain?.slug}`} className="text-sm text-slate-300 hover:text-white">{domain?.name}</Link>
          <h1 className="font-display text-3xl sm:text-4xl mt-4 max-w-3xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-300">
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold text-white"
              style={{ backgroundColor: domain?.color }}
            >
              {domain?.name}
            </span>
            <span>{new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
            <span>{post.readMinutes} min read</span>
          </div>
        </div>
      </header>

      <div className="container-content py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 prose-site">
          {post.blocks.map((b, i) => (
            <Block key={i} block={b} />
          ))}
          <p className="text-xs text-slate-500 border-t border-black/10 pt-5 mt-8">{DISCLOSURE}</p>
        </div>

        <aside className="space-y-6">
          <div className="card p-6">
            <h3 className="font-display text-lg text-ink mb-3">Keep reading</h3>
            <ul className="space-y-3">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link to={`/guides/${p.slug}`} className="text-sm text-ocean hover:underline font-medium">
                    {p.title}
                  </Link>
                  <p className="text-xs text-slate-500">{p.readMinutes} min read</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg text-ink mb-2">Explore the {domain?.name} domain</h3>
            <p className="text-sm text-slate-600 mb-3">{domain?.tagline}</p>
            <Link to={`/domains/${domain?.slug}`} className="btn-primary w-full">Open domain</Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
