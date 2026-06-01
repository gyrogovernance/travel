import { Helmet } from "react-helmet-async";
import { SITE } from "../site.js";

// Per page SEO: title, description, canonical, Open Graph, Twitter,
// and optional JSON-LD structured data.
export default function Seo({
  title,
  description = SITE.description,
  path = "/",
  type = "website",
  image,
  jsonLd,
}) {
  const fullTitle = title
    ? `${title} | ${SITE.shortName}`
    : `${SITE.name}: ${SITE.tagline}`;
  // Hash routing keeps the canonical on the base document URL.
  const canonical = `${SITE.siteUrl}/${path && path !== "/" ? `#${path}` : ""}`;
  const ogImage = image ? `${SITE.siteUrl}${image}` : undefined;

  return (
    <Helmet>
      <html lang={SITE.locale} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.shortName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content={ogImage ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
