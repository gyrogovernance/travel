# Project Context

A single brief that captures who we are, what we publish, how we write, and how
the site is organized. Paste this into any AI tool to give it the full picture
before it helps with content, strategy, or copy. Keep it up to date as the site
grows.

For the affiliate and monetization details, see `travelpayouts.md`.

---

## Who we are

**Gyro Governance** is an AI Safety Lab. This website, **Gyro Governance Ethical
Travel: AI-Empowered Guides for Human Adventures**, applies the careful,
principled thinking we use in AI safety to the choices travelers face.

- Mission: help people use AI to plan moral travel, make friends locally and
  abroad, and empower the communities they visit.
- Promise: practical, honest guidance, never guilt or greenwashing.
- Funding: travel affiliate links (Travelpayouts). We only recommend services
  that fit our principles, and we always disclose.

### Title and tagline variations
Use the full title once per page (usually the SEO title and home hero), then vary
the phrasing elsewhere for freshness. Approved forms:

- Gyro Governance Ethical Travel: AI-Empowered Guides for Human Adventures (full)
- AI-Empowered Guides for Human Adventures
- AI-Empowered Human Adventures
- AI-Empowered Ethical Travel

Always hyphenate "AI-Empowered". Do not use "AI Guides for Human Adventures"
(old wording) on its own, it reads awkwardly.

### Brand assets (in src/assets)
- `GG_Travel_Icon.svg` and `GG_Travel_Logo.svg`: this site's mark (the purple G).
  Use in the header, footer, and favicon.
- `gyrogovernance_logo.png` and `gyrogovernance_stamp.png`: the Gyro Governance
  lab mark (the green T). Use only when we explicitly reference the lab, for
  example the About page.
- `GG_Travel_OG.jpg`: default social share image (also copied to `public/og.jpg`
  for static meta tags in index.html).

---

## The four domains (our framework)

Everything we publish maps to one of these four domains. They are our compass.

| Domain | Slug | One line |
| --- | --- | --- |
| Economy | `economy` | Keep your spending in the places you visit. |
| Employment | `employment` | Respect the people whose work makes travel possible. |
| Education | `education` | Learn before you go, and learn while you are there. |
| Ecology | `ecology` | Leave the land and sea better than you found them. |

When planning new content, name the domain it serves. If it does not clearly fit
one, it probably does not belong on the site.

---

## Voice and style rules

- Warm, calm, practical, and honest. Encourage, do not lecture.
- Plain language. Short sentences. Concrete, doable actions.
- No guilt, no doom, no greenwashing. Celebrate the joy of travel.
- Respect the reader and the places we write about. No culture as costume.
- **No em dashes and no en dashes anywhere.** Use commas, periods, or "to" for
  ranges (for example "7 to 30 days"). This is a hard rule across the whole site.
- Spell out symbols in body copy where natural (for example "8 percent").
- Use "you" for the reader. Keep a global, inclusive perspective.
- Every recommendation should be something a real traveler can act on.

---

## What we publish

### Domain pages (`/domains/:slug`)
Each domain page has: a summary, a key stat, four principles, a practical
checklist, related guides, and a matched booking section.

### Guides (`/guides` and `/guides/:slug`)
Long form, practical articles. Each guide belongs to one domain and can include
an FAQ. Current guides:

| Title | Domain |
| --- | --- |
| The Ethical Travel Starter Guide for 2026 | Economy |
| How to Spot a Fair Tour Operator | Employment |
| Low Carbon Routes That Still Feel Like Adventure | Ecology |
| The Best Travel eSIM Setup for Ethical Travelers | Ecology |
| Travel Insurance for Responsible Trips: A Plain Guide | Employment |

Guide building blocks (see `src/data/posts.js`): `p` (paragraph), `h2`, `h3`,
`ul` (list), and `offer` (an affiliate offer card by key). Optional `faq` array
of question and answer pairs renders an accordion and FAQ rich snippet data.

### AI Prompts (`/prompts`)
Copy ready prompts that readers paste into their own AI assistant to plan ethical
trips, make friends locally and abroad, and empower communities. Each prompt maps
to a domain. Source: `src/data/prompts.js`. This is core to our direction: we
help people leverage their own AI, not just read static advice.

| Category | Domain |
| --- | --- |
| Plan a moral trip | Economy |
| Make friends locally and abroad | Education |
| Empower communities | Employment |
| Tread lightly on nature | Ecology |

Prompt writing rules: keep them copy ready, use [BRACKETS] for the reader to
fill in, stay practical and kind, and always include a reminder to verify AI
output against official sources.

### Resources (`/resources`)
A curated directory of trusted booking partners grouped by category, each mapped
to a domain. Source: `src/data/programs.js`.

| Category | Domain |
| --- | --- |
| Stays and accommodation | Economy |
| Tours and experiences | Employment |
| Trains, buses, and transfers | Ecology |
| Connectivity (eSIM) | Ecology |
| Insurance and protection | Employment |
| Flights (when you must) | Ecology |

### About (`/about`)
Explains the lab, why an AI Safety Lab works on travel, and our principles.

### Legal
Privacy Policy (`/privacy`) and Cookie Policy (`/cookies`). A cookie notice
appears on first visit and dismisses on scroll.

---

## Where content lives (edit these to change the site)

```
src/
  data/
    domains.js     The four domains: summaries, stats, principles, checklists.
    posts.js       All guides and their FAQs.
    programs.js    The curated partner list on the Resources page.
    prompts.js     The copy ready AI prompts on the AI Prompts page.
  affiliate.js     Affiliate config, offers, widgets, and disclosure text.
  site.js          Site name, titles, tagline, brand assets, and live URL.
docs/
  context.md       This file. The shared brief for content and strategy.
  travelpayouts.md The monetization reference (programs, tools, playbook).
```

You can change almost all visible content by editing the four files in `src/data`
and `src/affiliate.js`. No component edits are needed for routine content work.

---

## Site map

- `/` Home: hero, the four domains, how it works, AI prompts teaser, search,
  featured guides.
- `/domains/economy`, `/employment`, `/education`, `/ecology`
- `/guides` and each guide at `/guides/<slug>`
- `/prompts`
- `/resources`
- `/about`
- `/privacy`, `/cookies`

---

## How to add a new guide (content workflow)

1. Pick the single domain it serves and a clear, search friendly title.
2. Add an entry to `POSTS` in `src/data/posts.js` with a unique `slug`.
3. Write the body using `p`, `h2`, `h3`, and `ul` blocks. Place one or two
   `offer` blocks where a reader is genuinely ready to act.
4. Add 2 or 3 FAQ pairs that answer real questions. These help search.
5. Keep the voice rules above. No em dashes or en dashes.
6. Add the new URL to `public/sitemap.xml`.

---

## How we think about improving

- Lead with usefulness. Affiliate income follows genuinely helpful content.
- Cover real traveler questions, especially around the higher value categories
  (see `travelpayouts.md`): flights, insurance, eSIM, transfers, experiences.
- Internally link guides to their domain and to related guides.
- Watch which pages earn (Content Analytics), then write more on those topics.
- Revisit this brief whenever the framework, voice, or structure changes.
