import { useParams, Link } from "react-router-dom";
import { getPost, POSTS } from "../data/posts.js";
import { DOMAINS } from "../data/domains.js";
import OfferCard from "../components/OfferCard.jsx";
import Chip from "../components/Chip.jsx";
import Faq from "../components/Faq.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Seo from "../components/Seo.jsx";
import Icon from "../components/Icon.jsx";
import { SITE, absoluteUrl, defaultOgImageUrl } from "../site.js";
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
  if (block.type === "ai")
    return (
      <div className="not-prose my-8">
        <div className="rounded-2xl bg-ocean/5 border border-ocean/15 p-5 sm:p-6">
          <div className="flex items-start gap-3.5">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ocean text-white mt-0.5">
              <Icon name="spark" className="w-5 h-5" />
            </span>
            <div>
              <p className="text-sm font-bold text-ocean mb-1.5">
                Use AI to help with this
              </p>
              <p className="text-sm text-slate-700 leading-relaxed">
                {block.text}
              </p>
            </div>
          </div>
        </div>
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

  const pageUrl = absoluteUrl(`/guides/${post.slug}`);
  const shareImage = defaultOgImageUrl();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: pageUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    image: [shareImage],
    author: { "@type": "Organization", name: SITE.shortName },
    publisher: { "@type": "Organization", name: SITE.shortName },
    articleSection: domain?.name,
  };

  const faqLd = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const jsonLd = faqLd ? [articleLd, faqLd] : articleLd;

  return (
    <article>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/guides/${post.slug}`}
        type="article"
        jsonLd={jsonLd}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: post.title, path: `/guides/${post.slug}` },
        ]}
      />
      <header className="relative overflow-hidden bg-slate2 text-white">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-ocean/40 blur-3xl" />
        <div className="container-content py-16 relative">
          <nav className="text-sm font-bold" aria-label="Breadcrumb">
            <Link to="/guides" className="text-slate-300 hover:text-white">
              Guides
            </Link>
            <span className="text-slate-500"> / </span>
            <Link
              to={`/domains/${domain?.slug}`}
              className="text-slate-300 hover:text-white"
            >
              {domain?.name}
            </Link>
          </nav>
          <h1 className="text-3xl sm:text-5xl mt-5 max-w-3xl leading-tight">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-3 text-sm font-bold text-slate-300">
            <Chip color={domain?.color}>{domain?.name}</Chip>
            <span>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
            <span>{post.readMinutes} min read</span>
          </div>
        </div>
      </header>
      <div className="container-content py-12 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className="prose-site">
            {post.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </div>
          <Faq items={post.faq} />
          <div className="mt-12">
            <CtaBand />
          </div>
        </div>
        <aside className="space-y-6">
          <div className="card p-6">
            <h3 className="font-display text-lg text-ink mb-3">
              Keep reading
            </h3>
            <ul className="space-y-3">
              {more.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/guides/${p.slug}`}
                    className="text-sm text-ocean hover:underline font-medium"
                  >
                    {p.title}
                  </Link>
                  <p className="text-xs text-slate-500">
                    {p.readMinutes} min read
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="font-display text-lg text-ink mb-2">
              Explore the {domain?.name} domain
            </h3>
            <p className="text-sm text-slate-600 mb-3">{domain?.tagline}</p>
            <Link
              to={`/domains/${domain?.slug}`}
              className="btn-primary w-full"
            >
              Open domain
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}