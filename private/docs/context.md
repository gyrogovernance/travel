```markdown
# Project Context: Gyro Governance Ethical Travel

A comprehensive brief capturing who we are, our philosophical framework, what we publish, how we write, and how the site is organized. Paste this into any AI tool to give it the full picture before it helps with content, strategy, or code. Keep it up to date as the site grows.

For affiliate and monetization details, see `travelpayouts.md`.

---

## Who we are

**Gyro Governance** is an AI Safety Lab. This website, **Gyro Governance Ethical Travel: AI-Empowered Guides for Human Adventures**, applies the careful, principled thinking we use in AI safety to the choices travelers face.

- **Mission:** Help people use AI to plan moral travel, make friends locally and abroad, and empower the communities they visit.
- **Promise:** Practical, honest guidance, never guilt or greenwashing. 
- **Funding:** Travel affiliate links (Travelpayouts). We only recommend services that fit our principles, and we always disclose. The affiliate revenue funds our AI safety research, creating a virtuous cycle: better travel funds better research, which produces better tools for better travel.

### Title and tagline variations

Use the full title once per page (usually the SEO title and home hero), then vary the phrasing elsewhere for freshness. Approved forms:

- Gyro Governance Ethical Travel: AI-Empowered Guides for Human Adventures (full)
- AI-Empowered Guides for Human Adventures
- AI-Empowered Human Adventures
- AI-Empowered Ethical Travel

Always hyphenate "AI-Empowered". Do not use "AI Guides for Human Adventures" on its own; it reads awkwardly.

### Brand assets (in `src/assets`)

- `GG_Travel_Icon.png` and `GG_Travel_Logo.png`: This site's mark (the purple G). Imported with vite-imagetools (`?w=128`) so the build outputs small WebP. Do not use raw SVG exports here (they were multi-MB). SVGZ is not used because static hosts rarely serve `.svgz` with the headers browsers need. Use in the header, footer, and favicon.
- `gyrogovernance_logo.png` and `gyrogovernance_stamp.png`: The Gyro Governance lab mark (the green T). Use only when explicitly referencing the lab, for example on the About page.
- `GG_Travel_OG.jpg`: Default social share image (also copied to `public/og.jpg` for static meta tags in `index.html`).

---

## The Philosophy: Collective Superintelligence & The Human Mark

Our approach to travel is not just about sustainability; it is grounded in our AI safety research.

### Collective Superintelligence
Collective Superintelligence is not another AI model. It is about humans getting better together. It happens when humans and AI cooperate with clear principles, and humans keep the final say. AI does the research. You make the decisions. The whole system becomes smarter than either part alone. Applied to travel, this means using AI to plan kinder trips, then verifying with real people.

### Gyroscopic Global Governance (GGG)
The four domains come from **Gyroscopic Global Governance (GGG)**: Economy (CGM), Employment (Gyroscope Protocol), Education (The Human Mark), Ecology (BU dual). Our **Ethical Compass** questions map to those domains on every destination page.

### The Human Mark (THM)
THM defines four **alignment capacities** (Governance Management Traceability, Information Curation Variety, Inference Interaction Accountability, Intelligence Cooperation Integrity) and four **displacement risks** (GTD, IVD, IAD, IID): source-type errors when indirect and direct authority or agency are confused. That research vocabulary lives on the **About** page.

### Gyroscope Protocol (visitor preparation)
Destination pages use four **work categories** from the Gyroscope Protocol, not the longer THM principle names: **Governance Management**, **Information Curation**, **Inference Interaction**, **Intelligence Cooperation**. Site data keys: `gm`, `icu`, `iinter`, `ico`.

---

## The Four Domains (Our Framework)

Everything we publish maps to one of these four domains. They are our compass. When planning new content, name the domain it serves. If it does not clearly fit one, it probably does not belong on the site.

| Domain | Slug | One Line | Color | Core Question |
| --- | --- | --- | --- | --- |
| Economy | `economy` | Keep your spending in the places you visit. | `#0a6e7c` (Ocean) | Where does my money go? |
| Employment | `employment` | Respect the people whose work makes travel possible. | `#d98c2b` (Amber) | Who benefits from my visit? |
| Education | `education` | Learn before you go, and learn while you are there. | `#2f7d4c` (Leaf) | Whose knowledge am I trusting? |
| Ecology | `ecology` | Leave the land and sea better than you found them. | `#13a3b5` (Sky) | What is my impact? |

---

## Voice and Style Rules

This section is mandatory reading for anyone writing or editing content for the site.

### Tone
- Warm, calm, practical, and honest. Encourage, do not lecture.
- Plain language. Short sentences. Concrete, doable actions.
- No guilt, no doom, no greenwashing. Celebrate the joy of travel.
- Respect the reader and the places we write about. No culture as costume.
- Use "you" for the reader. Keep a global, inclusive perspective.
- Every recommendation should be something a real traveler can act on.
- Progress over perfection. "You do not need to be perfect to travel ethically. You only need to make better choices than you did last time."

### Punctuation and Formatting
- **No em dashes (—) or en dashes (–) anywhere in the text.** This is a hard rule across the whole site. Use commas, periods, or colons instead. For ranges, use "to" (for example, "15 to 25 percent", not "15–25%").
- Spell out symbols in body copy where natural (for example, "8 percent", not "8%").
- Use "and" instead of ampersands (&) in body text.

---

## What We Publish

### Domain Pages (`/domains/:slug`)
Each domain page explains the theoretical principle, provides a key stat, lists four principles, offers a practical checklist ("Put it into practice"), and links to related guides and booking partners.

### Guides (`/guides` and `/guides/:slug`)
Long-form, practical articles. Each guide belongs to one domain and can include an FAQ. The `/guides` hub lists all guides with summaries. 

**Guide building blocks** (defined in `src/data/posts.js`):
- `p`: Standard paragraph.
- `h2`, `h3`: Headings.
- `ul`: Unordered list.
- `offer`: An affiliate offer card rendered by key.
- `ai`: A styled callout suggesting how the reader can use AI to help with the specific challenge discussed in the article. It always reminds the reader to verify with real people.
- `faq`: An array of question and answer pairs that renders an accordion and FAQ rich snippet data.

### AI Prompts (`/prompts`)
Copy-ready prompts that readers paste into their own AI assistant. This is core to our direction: we help people leverage their own AI, not just read static advice.

**Prompt writing rules:**
- Keep them copy-ready. Use [BRACKETS] for the reader to fill in.
- Stay practical and kind.
- **Every prompt must start with "Please"** because courtesy costs nothing and sets the right tone for cooperation between humans and AI.
- Always include a reminder to verify AI output against official sources and real people.
- Map each prompt category to one of the four domains.

| Category | Domain |
| --- | --- |
| Plan a moral trip | Economy |
| Make friends locally and abroad | Education |
| Empower communities | Employment |
| Tread lightly on nature | Ecology |

### Resources (`/resources`)
A curated directory of trusted booking partners grouped by category, each mapped to a domain. Source: `src/data/programs.js`.

| Category | Domain |
| --- | --- |
| Stays and accommodation | Economy |
| Tours and experiences | Employment |
| Trains, buses, and transfers | Ecology |
| Connectivity (eSIM) | Ecology |
| Insurance and protection | Employment |
| Flights (when you must) | Ecology |

### About (`/about`)
Explains the lab, why an AI Safety Lab works on travel, the concept of Collective Superintelligence, The Human Mark framework, and our transparency/affiliate policy.

### Legal
Privacy Policy (`/privacy`) and Cookie Policy (`/cookies`). A cookie notice appears on first visit and dismisses on scroll.

---

## Where Content Lives (Edit these to change the site)

You can change almost all visible content by editing the files below. No component edits are needed for routine content work.

```
private/products/atlas/     Source of truth for the Ethical Travel Atlas (edit here).
  *.md                      One file per destination (slug matches filename).
  assets/*.jpg              Hero images (slug.jpg).
src/data/
  destinations/index.json   Card/list summaries (generated).
  destinations/detail/*.json Full page copy per slug (generated, code-split on the site).
  destinations.js           Thin import helper (hand-maintained).
  domains.js                The four domains: summaries, stats, principles, checklists.
  posts.js                  All guides, their content blocks, and FAQs.
  programs.js               The curated partner list on the Resources page.
  prompts.js                The copy-ready AI prompts on the AI Prompts page.
public/destinations/        Hero images copied at build time for the live site.
src/affiliate.js            Affiliate config, offers, widgets, and disclosure text.
src/site.js                 Site name, titles, tagline, brand assets, and live URL.
private/docs/
  context.md                This file. The shared brief for content and strategy.
  atlas-scaling-playbook.md Locked template for writing new Atlas destinations.
  travelpayouts.md          The monetization reference (programs, tools, tours widget maintenance).
```

---

## Build commands (site and Atlas)

Routine deploy does **not** re-parse Atlas markdown or call WeGoTrip. Run the Atlas step only when you change `private/products/atlas/` or need fresh SEO files.

| Command | When to use |
| --- | --- |
| `bun run dev` | Local development (Vite). |
| `bun run build` | Production bundle for deploy (Vite + SPA fallback only). |
| `bun run destinations` | After editing Atlas markdown or images: rebuild JSON, copy images to `public/destinations/`, regenerate `sitemap.xml` and `llms*.txt`. |
| `bun run atlas` | Same as `destinations`, plus refresh WeGoTrip city list from the network (`tours-cities` then `destinations`). |
| `bun run tours-cities` | Refresh `scripts/data/wegotrip-cities.json` only. |
| `bun run seo` | Regenerate sitemap and LLM text files from current data (no Atlas parse). |
| `bun run audit` | Static checks: routes, images, detail JSON present. |
| `bun run check:routes` | HTTP smoke test of sitemap URLs (run `bun run preview` first). |
| `bun run preview` | Serve the production build locally. |

**Typical workflows**

- **Deploy UI/code only:** `bun run build`
- **Publish Atlas content changes:** `bun run destinations` then `bun run build`
- **Refresh tour widgets after WeGoTrip updates:** `bun run atlas` then `bun run build`

Generated site data is not committed to a single giant JS file. Lists use `index.json`; each destination page loads `detail/{slug}.json` on demand so the main JavaScript bundle stays small.

---

## Site Map

- `/` Home: Hero, the four domains, how it works (3 steps), AI prompts teaser, travel search, affiliate banner, featured guides, mission strip.
- `/domains/economy`, `/employment`, `/education`, `/ecology`
- `/guides` (Hub) and each guide at `/guides/<slug>`
- `/destinations` (Atlas hub) and each destination at `/destinations/<slug>`
- `/search/flights`
- `/prompts`
- `/resources`
- `/about`
- `/privacy`, `/cookies`

---

## How to Add a New Guide (Content Workflow)

1. Pick the single domain it serves and a clear, search-friendly title.
2. Add an entry to `POSTS` in `src/data/posts.js` with a unique `slug`.
3. Write the body using `p`, `h2`, `h3`, and `ul` blocks. Place one or two `offer` blocks where a reader is genuinely ready to act.
4. Include at least one `ai` block that gives the reader a specific prompt related to the article's topic, reminding them to verify the output.
5. Add 2 or 3 FAQ pairs that answer real questions. These help search ranking.
6. Observe the voice rules strictly: no em dashes, no en dashes, plain language, no guilt.
7. Run `bun run seo` (or `bun run destinations` if you also changed Atlas data) so `public/sitemap.xml` stays current.

---

## How to Add or Update an Atlas Destination

1. Add or edit `private/products/atlas/<slug>.md` using `private/docs/atlas-scaling-playbook.md`.
2. Add hero image `private/products/atlas/assets/<slug>.jpg` (use `assets/<slug>.jpg` in the markdown image line).
3. Run `bun run destinations` (or `bun run atlas` if WeGoTrip city matching should refresh).
4. Run `bun run build` and spot-check `/destinations/<slug>` locally.

---

## How to Add a New AI Prompt

1. Identify which of the four categories the prompt belongs to in `src/data/prompts.js`.
2. Write the prompt. Start with "Please".
3. Use [BRACKETS] for variables the user needs to fill in (e.g., [DESTINATION], [NUMBER]).
4. Ensure the prompt treats AI as an indirect source (a researcher) and instructs the user to make the final judgment.
5. Double-check that no em dashes or en dashes slipped in.

---

## How We Think About Improving

- Lead with usefulness. Affiliate income follows genuinely helpful content.
- Cover real traveler questions, especially around the higher-value categories (see `travelpayouts.md`): flights, insurance, eSIM, transfers, experiences.
- Internally link guides to their domain and to related guides.
- Watch which pages earn (Content Analytics), then write more on those topics.
- Revisit this brief whenever the framework, voice, or structure changes.
```