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
  breadcrumbs,
}) {
  const fullTitle = title
    ? `${title} | ${SITE.shortName}`
    : `${SITE.name}: ${SITE.tagline}`;
  // Hash routing keeps the canonical on the base document URL.
  const canonical = `${SITE.siteUrl}/${path && path !== "/" ? `#${path}` : ""}`;
  const ogImage = image ? `${SITE.siteUrl}${image}` : undefined;

  // Build BreadcrumbList structured data from a [{name, path}] list.
  const breadcrumbLd = breadcrumbs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: `${SITE.siteUrl}/${b.path && b.path !== "/" ? `#${b.path}` : ""}`,
        })),
      }
    : null;

  // Merge any page jsonLd with the breadcrumb data into one array.
  const allLd = [];
  if (jsonLd) Array.isArray(jsonLd) ? allLd.push(...jsonLd) : allLd.push(jsonLd);
  if (breadcrumbLd) allLd.push(breadcrumbLd);

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

      {allLd.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(allLd.length === 1 ? allLd[0] : allLd)}
        </script>
      )}
    </Helmet>
  );
}
