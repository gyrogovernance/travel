# Gyro Governance Ethical Travel

AI Guides for Human Adventures. A static React website built with Bun and Vite,
focused on ethical travel across four domains: Economy, Employment, Education, and
Ecology. Monetized through travel affiliate links via Travelpayouts.

## Tech stack

- Bun (package manager and runtime)
- Vite (build tool, static output)
- React 18 with React Router (HashRouter for host friendly static routing)
- Tailwind CSS

## Getting started

```bash
bun install      # install dependencies
bun run dev      # start the dev server (http://localhost:5173)
bun run build    # produce the static site in dist/
bun run preview  # preview the production build locally
```

The build output in `dist/` is fully static. You can host it on any static host
such as Netlify, Vercel, Cloudflare Pages, GitHub Pages, or plain object storage.

## Adding your Travelpayouts affiliate marker

Everything affiliate related lives in ONE file: `src/affiliate.js`.

1. Sign up at https://www.travelpayouts.com/
2. Open `src/affiliate.js` and replace `YOUR_TP_MARKER` with your real marker id.
3. Replace the `url` values in `AFFILIATE_OFFERS` with your own tracked deep links
   from the Travelpayouts dashboard if you want program specific links.
4. Optional: paste your site verification meta tag into `index.html` where the
   comment indicates.

That is the only place you need to edit. Every offer card and banner across the
site reads from this config.

## Project structure

```
gyro-governance/
  index.html              page shell and meta tags
  src/
    affiliate.js          single source of truth for affiliate config
    main.jsx              app entry
    App.jsx               routes
    index.css             Tailwind layers and component classes
    components/           Navbar, Footer, OfferCard, AffiliateBanner, etc.
    data/
      domains.js          the four ethical travel domains and content
      posts.js            guides and blog content
    pages/                Home, Domain, Guides, Post, About, NotFound
  public/                 favicon, robots.txt
```

## SEO

- Per page titles, descriptions, canonical links, Open Graph, Twitter cards,
  and JSON-LD structured data are handled by `src/components/Seo.jsx` using
  `react-helmet-async`.
- Set your live domain in `src/site.js` (the `siteUrl` field). This drives
  canonical URLs and structured data.
- Update `public/sitemap.xml` and `public/robots.txt` with your real domain.
- A static Open Graph fallback lives in `index.html` for crawlers that do not
  run JavaScript.

## Fonts

Fonts are self hosted, no external requests at runtime.

- Caprasimo is used for all large display titles (h1, h2, h3, .font-display).
- Nunito (variable, weights 400 to 800) is used for all body and UI text.
- The woff2 files live in `public/fonts/` and are preloaded in `index.html`.
- They are also embedded as base64 in `src/fonts.css` so they render even in
  sandboxed previews with no network access.

## Accessibility

- Skip to content link, focus rings, semantic landmarks, alt text on imagery,
  and reduced motion support in `src/index.css`.

## Content

- The four domains and their principles live in `src/data/domains.js`.
- Guides and blog posts live in `src/data/posts.js`. Add a new object to the
  `POSTS` array to publish a new guide. Use block types `p`, `h2`, `h3`, `ul`,
  and `offer` (with an offer key) to compose articles.

## Notes on the preview

This static build uses inline styles, embedded SVG, and a self contained CSS
bundle, so it renders fully in a normal browser. The HashRouter setup means deep
links work without server rewrite rules.

## Affiliate disclosure

The site shows an affiliate disclosure in the footer and on guide pages, edited
in `src/affiliate.js`. Keep a visible disclosure to stay compliant with affiliate
program terms and advertising rules.
