# Project Context

A single brief that captures who we are, what we publish, how we write, and how
the site is organized. Paste this into any AI tool to give it the full picture
before it helps with content, strategy, or copy. Keep it up to date as the site
grows.

For the affiliate and monetization details, see `travelpayouts.md`.

---

## Who we are

**Gyro Governance** is an AI Safety Lab. This website, **Gyro Governance Ethical
Travel: AI Guides for Human Adventures**, applies the careful, principled
thinking we use in AI safety to the choices travelers face.

- Mission: help people travel in ways that respect people and the planet.
- Promise: practical, honest guidance, never guilt or greenwashing.
- Funding: travel affiliate links (Travelpayouts). We only recommend services
  that fit our principles, and we always disclose.

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
  affiliate.js     Affiliate config, offers, widgets, and disclosure text.
  site.js          Site name, tagline, description, and live URL.
docs/
  context.md       This file. The shared brief for content and strategy.
  travelpayouts.md The monetization reference (programs, tools, playbook).
```

You can change almost all visible content by editing the four files in `src/data`
and `src/affiliate.js`. No component edits are needed for routine content work.

---

## Site map

- `/` Home: hero, the four domains, how it works, search, featured guides.
- `/domains/economy`, `/employment`, `/education`, `/ecology`
- `/guides` and each guide at `/guides/<slug>`
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
