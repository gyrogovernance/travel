# Project Context: Gyro Governance Ethical Travel

A single reference for what this site is, how it is built, what content exists, and how our research frameworks map to traveler-facing copy and content strategy. Paste this into any AI tool before content, strategy, or code work. **Keep it updated when routes, data, methodology, or framework language on the site change.**

**Live site:** https://travel.gyrogovernance.com  
**Stack:** React 18, Vite 5, React Router, Tailwind CSS, static deploy (GitHub Pages with SPA fallback).

**Related docs (read when relevant):**

| Doc | Use for |
| --- | --- |
| `context.md` (this file) | Audience, verification principle, boundaries, methodology, voice, site inventory, code map |
| `travelpayouts.md` | Affiliate programs, Drive script, widgets, WeGoTrip tours, marker IDs |
| `atlas-scaling-playbook.md` | Locked template and emoji rules for new Atlas destination markdown |
| `ethical-travel-atlas-rewrite-guide.md` | Editorial rules for Atlas rewrites (Gyroscope naming, step structure) |
| `references/GGG_Paper.md` | Full GGG paper: Post-AGI framing, tetrahedral formalism, simulator, aperture |
| `references/THM.md` | Canonical THM alignment principles and displacement risks (short form) |

---

## Who we are

**Gyro Governance** is an AI Safety Lab. This site, **Gyro Governance Ethical Travel: AI-Empowered Guides for Human Adventures**, applies the same careful, principled thinking we use in AI safety to the challenges travelers face. The hero line on Home is **Humans Getting Better Together**: Collective Superintelligence in plain language.

- **Mission:** Help people use AI to plan moral travel, make friends locally and abroad, and empower the communities they visit.
- **Promise:** Practical, honest guidance. No guilt, no doom, no greenwashing. Start where you are; progress over perfection.
- **Funding:** Travel affiliate links via Travelpayouts (see `travelpayouts.md`). We disclose on every monetized surface. Revenue supports AI safety research: better travel funds better research, which produces better tools for better travel.

### Title and tagline

Use the full title once per page (SEO title, home hero). Elsewhere, vary among:

- Gyro Governance Ethical Travel: AI-Empowered Guides for Human Adventures (full)
- AI-Empowered Guides for Human Adventures
- AI-Empowered Human Adventures
- AI-Empowered Ethical Travel

Always hyphenate **AI-Empowered**. Do not use "AI Guides for Human Adventures" alone.

### Brand assets (`src/assets`)

| Asset | Use |
| --- | --- |
| `GG_Travel_Icon.png`, `GG_Travel_Logo.png` | Site mark (purple G). Import with vite-imagetools (`?w=128`) for WebP output. Header, footer, favicon. |
| `gyrogovernance_logo.png`, `gyrogovernance_stamp.png` | Lab mark (green T). About page and lab references only. |
| `GG_Travel_OG.jpg` | Default social image (`public/og.jpg` for static meta in `index.html`). |
| `hero.webp`, `economy.webp`, etc. | Page heroes and domain imagery. |

Do not commit multi-MB raw SVG exports. SVGZ is avoided (host header issues).

---

## Content strategy

Rules that govern what we publish, who it is for, and what makes this site different from generic travel or AI travel tools. Read this before the methodology section if you are writing or planning content.

### Who we write for

We write for **people planning real trips** who want to travel well: thoughtfully, kindly, and with eyes open. We do **not** define the audience by budget, ideology, travel style, or prior expertise. A student on a shoestring, a family on a mid-range holiday, a remote worker on a long stay, and a traveler choosing a high-end lodge can all use the same compass. Exclude no segment by default; meet people where they are.

**Shared mindset (the through-line, not a demographic box):**

- They care about impact but may not know where to start or what "ethical" means in practice.
- They want **practical help**, not a lecture, guilt trip, or purity test.
- They are open to using AI for research but **skeptical of outsourcing judgment** to it.
- They sense that reviews, rankings, and algorithms are incomplete; they would talk to a local if they knew what to ask.
- They prefer **progress over perfection**: one better choice beats paralysis.

**Many valid entry points (do not write as if only one exists):**

- First-time travelers who want to "do better" on a single trip
- Repeat travelers refining habits (slow travel, local spend, labor-aware tours)
- AI-curious planners looking for copy-ready prompts they can trust
- Readers who arrive via the lab or research framing (About, GGG/THM) and want applied examples
- Educators, hosts, tour operators, or community leaders who refer others to practical resources
- Budget, mid-range, and premium spenders alike (principles apply to *where* money goes, not how much)

**What this means for tone and depth:**

- Default to plain language and concrete actions; link to About when research depth helps.
- Offer options and trade-offs at **any price point** without assuming backpacker or luxury defaults.
- Never talk down to experts or activists; never require expert knowledge from beginners.
- Match depth to page type: Atlas and guides stay actionable; About and select guides can go deeper.

### The verification principle

This is the core differentiator from other AI travel tools. State it clearly in every piece that mentions AI. It is not a disclaimer to tack on at the end; it is the **structure** of prompts, guides, Atlas Delivery steps, and AI callout blocks.

**The sequence (always in this order):**

1. **AI plans** (compares options, gathers ideas, drafts plans).
2. **You verify** with real people and official sources (locals, operators, government or venue sites, your own judgment).
3. **You decide** (booking, routing, spending, and responsibility stay human).

**Rules derived from this:**

- AI is always an **indirect source** (Indirect Authority/Agency in THM terms). Never imply AI output is sufficient on its own.
- Never frame AI as the decision-maker, authority, or autopilot ("let AI plan your trip", "the AI recommends").
- Verification is **specific**: name who or what to check (a local guide, the museum's official hours page, the operator's labor policy), not vague ("do your own research").
- Prompts start with "Please", use [BRACKETS] for user fill-ins, and embed the verify step inside the prompt body.

See also: displacement risks GTD, IVD, IAD, IID in the methodology section; Collective Superintelligence on Home and About.

### Content boundaries

What we do and do not publish. Boundaries protect trust and keep the site distinct; they are not an excuse to ignore whole customer segments.

**We do:**

- Inform about labor practices, environmental impact, and economic structures with facts and practical choices.
- Present **curated options with trade-offs** (Atlas anchor spots, partner directory, domain-specific tips).
- Serve travelers at any budget when recommendations respect the four domains.
- Link to official travel advisories and primary sources when safety or legality matters.

**We do not:**

- **Guilt or shame.** We do not tell people they are bad travelers. We offer better options and meet them where they are.
- **Political campaigning.** We do not endorse parties, candidates, or regime-change agendas. Factual context about how tourism affects workers, ecosystems, or local economies is in scope.
- **Primary safety intelligence.** We are not a travel-advisory service. Point to official government advisories; do not produce our own risk assessments or "is it safe" verdicts as main content.
- **Generic travel filler.** Every piece must connect to at least one domain (or clearly to all four). If it could run on any travel blog with our name removed, it does not belong here.
- **AI output as final answer.** Every AI-assisted suggestion is a starting point for human verification (see verification principle above).
- **Hollow rankings.** No clickbait "best of" or numbered hit-parade listicles disconnected from the framework. Ranked or numbered lists are fine when they teach a domain principle, compare trade-offs, or support Atlas prep (e.g. anchor spots with reasons).

**Affiliate rule (reinforced):** If a partner does not fit the four domains, we do not recommend it, regardless of commission.

---

## Research framework (methodology)

Travel content on this site is not generic sustainability advice. It is grounded in **Gyroscopic Global Governance (GGG)** and our AI alignment work. Use this section as the canonical map from research to traveler-facing copy. Full papers: `private/docs/references/GGG_Paper.md`, `references/THM.md`. Site copy mirrors: `src/pages/About.jsx`, `src/data/atlasMethod.js`, `src/data/domains.js`.

### Why an AI Safety Lab works on travel

Safety is not only about preventing harm from machines. It is about steering powerful systems toward outcomes that help people and the planet. Global tourism moves trillions of dollars, employs about one in ten workers worldwide, and produces around eight percent of global carbon emissions. Small changes in how we travel add up to large effects.

Our research identifies four principles that keep any cooperative system healthy, whether it is a human-AI partnership or a traveler-community relationship. We apply them across four domains of life: Economy, Employment, Education, and Ecology. When the principles break down in any domain, things go wrong. When they hold across all domains, the system works for everyone.

**Virtuous cycle (funding story):** Better travel funds better research, which produces better tools for better travel. Affiliate revenue supports the lab; never let commissions override the four domains.

### Post-AGI and Collective Superintelligence

**Post-AGI** means human-AI cooperation is already operational, not a future threshold. LLMs and related systems already mediate hiring, legal drafting, medical reasoning, education, and travel booking. The primary risk is not a future machine takeover but **present, cumulative displacement** of human authority: poverty, unemployment, misinformation, and ecological degradation are downstream coordination failures.

**Collective Superintelligence** (site-facing term) is not another AI model. It is humans getting better together: humans and AI cooperate with clear principles, and **humans keep the final say**. AI does research; you verify and decide. The whole system becomes smarter than either part alone.

**Artificial Superintelligence (ASI)** in our research is not a runaway autonomous agent. It is a regime where human-AI systems maintain the four alignment principles at a measurable equilibrium (aperture A* ≈ 0.0207 in CGM). That is research vocabulary; use **Collective Superintelligence** on the public site unless writing for a research audience.

Applied to travel: use AI to plan kinder trips, then check with official sources and people who live there. Neither AI nor human judgment alone is enough.

### Constitutional foundation (Common Source Consensus)

All Artificial categories of Authority and Agency are **Indirect**, originating from Human Intelligence.

**Critical rule:** Authority and Agency denote **source-type categories** in information flows (Direct versus Indirect), not titles for a system, platform, or person. Misapplying them as entity identifiers ("the AI is the authority", "the app decides") is the generative mechanism of all four displacement risks.

| Term | Definition |
| --- | --- |
| **Direct Authority** | A direct source of information on a subject, providing information for inference and intelligence (e.g. a local guide, an official site, your own observation). |
| **Indirect Authority** | An indirect source of information (e.g. AI output, platform ranking, aggregated reviews). |
| **Direct Agency** | A human subject capable of receiving information for inference and intelligence (you, a local resident). |
| **Indirect Agency** | An artificial subject capable of processing information (an AI assistant, a booking algorithm). |
| **Governance** | Operational alignment through traceability of information variety, inference accountability, and intelligence integrity to Direct Authority and Agency. |

**Three epistemic operations** (non-commutative; order matters):

| Operation | Role |
| --- | --- |
| **Information** | The variety of Authority: sources exist and differ. |
| **Inference** | The accountability of information through Agency: to infer is to render accountable. |
| **Intelligence** | The integrity of accountable information through alignment of Authority to Agency. |

Governance maintains traceability through these three operations. GMT, ICV, IIA, and ICI are not policy preferences. They are constitutive conditions for coherent governance.

### Research paper series (how the frameworks relate)

GGG is the overarching four-domain framework. Three prior papers supply its layers:

| Paper | Role | Governs domain |
| --- | --- | --- |
| **Common Governance Model (CGM)** | Modal and geometric account of Governance, Information, Inference, Intelligence | **Economy** |
| **✋ The Human Mark (THM)** | Taxonomy of AI and socio-technical failures as displacement patterns | **Education** |
| **Gyroscope Protocol** | Refines principles into categories of human work in interactive settings | **Employment** |
| **GGG (Gyroscopic Global Governance)** | Integrates all three across Economy, Employment, Education, Ecology | All four |

Ecology closes the loop via the **BU dual**: it aggregates Economy (CGM), Employment (Gyroscope), and Education (THM) into systemic health and displacement.

### GGG four-domain architecture

Everything we publish should map to one domain. If it fits none, it probably does not belong.

| Domain | Slug | Color | Core question | CGM stage | Framework | Structural role |
| --- | --- | --- | --- | --- | --- | --- |
| Economy | `economy` | Ocean `#0a6e7c` | Where does my money go? | CS (Common Source) | CGM | Systemic operations: circulation of valid epistemic operations |
| Employment | `employment` | Amber `#d98c2b` | Who benefits from my visit? | UNA (Unity-Non-Absolute) | Gyroscope Protocol | Work actions: how people contribute in practice |
| Education | `education` | Leaf `#2f7d4c` | Whose knowledge am I trusting? | ONA (Opposition-Non-Absolute) | THM | Human capacities: what people understand and sustain |
| Ecology | `ecology` | Sky `#13a3b5` | What is my impact? | BU (Balance-Universal) | CGM-Gyroscope-THM dual | Safety and displacement: upstream failures accumulate here |

**Closed governance loop:** Educational capacities (THM) shape economic potentials (CGM), which structure employment activities (Gyroscope), which reproduce educational capacities. Ecology aggregates all three and reveals degradation as downstream accumulation of upstream governance failures.

Domain page copy (principles, practices, stats): `src/data/domains.js`. Do not contradict those principles in guides or Atlas entries.

### THM alignment principles (Education domain)

THM names four **alignment capacities**. Each has a corresponding **displacement risk** when source types are confused.

| Principle | Abbrev | Capacity (what to uphold) | Displacement risk | Abbrev | Error pattern |
| --- | --- | --- | --- | --- | --- |
| Governance Management Traceability | GMT | Maintain the chain of authority from human sources to outputs; AI is Indirect Authority and Agency traceable to human data | Governance Traceability Displacement | GTD | Approaching Indirect Authority and Agency as Direct |
| Information Curation Variety | ICV | Recognize and preserve diversity in sources; humans are necessary for all effects from AI outputs | Information Variety Displacement | IVD | Approaching Indirect Authority without Agency as Direct |
| Inference Interaction Accountability | IIA | Accept full human responsibility for conclusions and decisions; AI inference is Indirect Agency without Direct Authority | Inference Accountability Displacement | IAD | Approaching Indirect Agency without Authority as Direct |
| Intelligence Cooperation Integrity | ICI | Maintain coherent reasoning over time; each provider and receiver keeps responsibility for their decisions | Intelligence Integrity Displacement | IID | Approaching Direct Authority and Agency as Indirect |

**Travel examples (from About; reuse in guides, not Atlas prep headings):**

| Risk | Travel pattern |
| --- | --- |
| GTD | Booking systems seem to decide for you; treating a platform or AI as an autonomous decision-maker |
| IVD | A single AI answer replaces checking official sites; treating generated text as if you had verified it yourself |
| IAD | Responsibility for a plan is attributed to the tool rather than the traveler |
| IID | Overriding local knowledge because an app or algorithm said otherwise |

The same patterns that break AI alignment break ethical travel.

### Gyroscope Protocol work categories (Employment domain)

Destination **Preparation** steps use these four **work categories** (not THM suffixes). Keys in data: `gm`, `icu`, `iinter`, `ico`.

| Category | Key | Prep question (atlasMethod) | What it covers in research |
| --- | --- | --- | --- |
| Governance Management | `gm` | What assumptions should be checked? | Leadership, oversight, administration, strategic planning, resource allocation |
| Information Curation | `icu` | Which different sources provide useful perspectives? | Research, editing, data stewardship, artistic creation, measurement design |
| Inference Interaction | `iinter` | What choices require human judgment? | Negotiation, care, teaching, legal defence, human-AI interaction |
| Intelligence Cooperation | `ico` | How will you trust your own judgment and local advice over algorithmic suggestions when conditions change? | Engineering, infrastructure, institution building, cultural preservation (prose field in Atlas, not bullets) |

THM and Gyroscope are related but not identical. THM names **capacities** and **displacement risks**. Gyroscope names **work categories** for how people contribute in practice. Destination pages use Gyroscope categories; THM explains the research behind them.

### Ecology: displacement aggregation

Ecology is structural closure, not an external environment. Each displacement dimension aggregates the corresponding stage across CGM, Gyroscope, and THM:

| Displacement | Aggregates | Measures |
| --- | --- | --- |
| GTD | Gov + GM + GMT | Deviation in governance operations, work, and capacity |
| IVD | Info + ICu + ICV | Deviation in information operations, work, and capacity |
| IAD | Infer + IInter + IIA | Deviation in inference operations, work, and capacity |
| IID | Int + ICo + ICI | Deviation in intelligence operations, work, and capacity |

In travel copy: Ecology asks whether choices **add up to regeneration or degradation**. Frame ecological harm as displacement generated upstream (economy, employment, education), not only as a separate "green" checklist.

### Visitor-facing vs research vocabulary

| Layer | Where it appears | What it uses | Do not |
| --- | --- | --- | --- |
| **Ethical Compass** | Atlas Step 1, domain pages | Four domains + core questions | Mention THM, CGM, displacement abbreviations |
| **Four Gyroscope operations** | Atlas Step 2 | GM, ICu, IInter, ICo by full name | Append Traceability/Variety/Accountability/Integrity; use THM suffixes |
| **THM principles + displacements** | About page (research section), `references/THM.md`, deep guides | GMT, ICV, IIA, ICI; GTD, IVD, IAD, IID | Put THM names in Atlas prep headings |
| **Collective Superintelligence** | Home, About, prompts intro | Human-AI cooperation, humans decide | Call AI "the authority" or imply autonomous agency |
| **Post-AGI / ASI / aperture** | Research docs, optional deep content | Technical framing | Lead with jargon on Home or Atlas |

**Rule of thumb:** Atlas and prompts stay practical. About and select guides carry research depth. Run `bun run sync-private-md` only when intentionally realigning Gyroscope headings across private markdown.

### Three-step Atlas method (Choices → Preparation → Delivery)

Used on every destination page and echoed on Home / Atlas intro:

1. **Choices:** Why visit + Ethical Compass (four domain bullets, destination-specific).
2. **Preparation:** Four Gyroscope operations, top 5 anchor spots, practical essentials (length, transport).
3. **Delivery:** Copy-ready AI prompt (starts with "Please") + reminder to verify with real people.

Atlas embodies Collective Superintelligence: AI assists research, humans make decisions, locals remain Direct Authority, travelers retain accountability.

Link hub guide: `/guides/how-to-plan-ethical-travel-with-ai`. Editorial locks: `atlas-scaling-playbook.md`, `ethical-travel-atlas-rewrite-guide.md`.

### Content design checklist (new guides, prompts, partners)

Before publishing, confirm (see **Content strategy** above for audience, verification, and boundaries):

1. **Domain:** Maps to exactly one of Economy, Employment, Education, Ecology (or clearly spans all four in a hub piece).
2. **Principles:** Does not contradict `domains.js` principles or practices for that domain.
3. **Verification principle:** Follows AI plans → you verify → you decide; AI as indirect source only.
4. **Displacement awareness:** Avoids GTD/IVD/IAD/IID patterns in recommended behavior.
5. **Audience:** Practical for beginners; not exclusionary by budget or travel style; no guilt or purity tests.
6. **Monetization:** Partner fits the four domains; disclosure present; commissions do not override principles.
7. **Formatting:** No em/en dashes; hyphenate AI-Empowered; prompts start with "Please" and use [BRACKETS] for user fill-ins.

### Prompts as Collective Superintelligence

Prompts (`src/data/prompts.js`) implement the **verification principle**: copy, fill in details, paste into any assistant. Four prompt categories align to the four domains (see Site inventory).

---

## Voice and style (mandatory)

### Tone

Warm, calm, practical, honest. Encourage, do not lecture. Plain language, short sentences, concrete actions. Respect places and people; no culture as costume. Progress over perfection.

### Hard formatting rules

- **No em dashes (—) or en dashes (–)** anywhere. Use commas, periods, or colons. Ranges: "15 to 25 percent", not "15–25%".
- Spell out "percent" in body copy where natural.
- Use "and" instead of "&" in body text.
- Atlas files: follow emoji and heading locks in `atlas-scaling-playbook.md`.

---

## Site inventory (what exists today)

### All routes

| Path | Page | Main content |
| --- | --- | --- |
| `/` | Home | Hero, domain chips/stats, framework cards, how-it-works (3 steps), Atlas intro, featured destinations strip, AI prompts CTA, travel search widgets, affiliate banner, all guides grid, mission strip |
| `/domains/:slug` | Domain | Hero, stat, principles, practice checklist, related guides, **featured Atlas destinations** (curated per domain), domain-specific Travelpayouts widget, affiliate banner |
| `/guides` | Guides hub | Links to destinations, resources, articles; four domain cards; full guide list (`#articles`) |
| `/guides/:slug` | Guide article | Long-form post, FAQs, optional offer cards, AI callouts |
| `/destinations` | Atlas hub | 100 destinations, filter by region (Asia, Africa, Europe, Americas, Oceania) |
| `/destinations/:slug` | Atlas destination | Hero, 3-step content, per-destination AI prompt, optional WeGoTrip tours widget, regional links |
| `/prompts` | AI Prompts | Four categories, multiple copy-ready prompts each |
| `/resources` | Travel Resources | Partner directory by category (`programs.js`) |
| `/search/flights` | Flight search | Travelpayouts white-label meta-search + popular-destination weedles |
| `/about` | About | Lab story, Collective Superintelligence, GGG/THM/Gyroscope research (authority, agency, displacements), prompts, affiliate transparency, `#principles` |
| `/privacy`, `/cookies` | Legal | Policies |
| `*` | 404 | Not found |

**Navigation:** Header **Guides** dropdown groups Destinations, Travel guides (`/guides`), Travel Resources, and links to domain pages. **Google Translate** in navbar (`GoogleTranslate.jsx`). Footer: domains, explore links, disclosure.

### Guides (9 articles, `src/data/posts.js`)

| Slug | Domain (approx.) |
| --- | --- |
| `how-to-plan-ethical-travel-with-ai` | Education |
| `where-does-your-travel-money-actually-go` | Economy |
| `how-to-tell-if-a-tour-benefits-local-workers` | Employment |
| `why-you-should-talk-to-locals-not-just-read-reviews` | Education |
| `practical-guide-to-lowering-your-travel-carbon-footprint` | Ecology |
| `what-ethical-travel-actually-means` | Economy |
| `five-ways-to-spend-local-on-your-next-trip` | Economy |
| `slow-travel-why-staying-longer-changes-everything` | Ecology |
| `fair-work-and-fair-play-tourism-done-right` | Employment |

**Guide block types:** `p`, `h2`, `h3`, `ul`, `offer` (affiliate card by key), `ai` (styled AI-use callout), plus top-level `faq` array for accordion + schema.

### Ethical Travel Atlas (100 destinations)

- **Source (edit here):** `private/products/atlas/<slug>.md` + `private/products/atlas/assets/<slug>.jpg`
- **Generated (do not hand-edit):** `src/data/destinations/index.json` (list/card fields), `src/data/destinations/detail/<slug>.json` (full page), `public/destinations/*.jpg`
- **Runtime:** List data in main bundle; each destination page **lazy-loads** its detail JSON (keeps JS small)
- **Per page includes:** intro, why visit, ethical compass, gyroscope prep (`gm`/`icu`/`iinter`/`ico`), 5 anchor spots, transport/length, destination-specific prompt, optional `toursCityId` (WeGoTrip via Travelpayouts; ~84/100 matched, gaps are expected)
- **Featured on home:** `FEATURED_SLUGS` in generated catalog
- **Featured on domain pages:** `src/data/domainDestinations.js` (manual curation per domain)

### AI Prompts (`src/data/prompts.js`)

Four categories aligned to domains:

| Category | Domain |
| --- | --- |
| Plan a moral trip | Economy |
| Make friends locally and abroad | Education |
| Empower communities | Employment |
| Tread lightly on nature | Ecology |

Each category has multiple prompts. **Every prompt starts with "Please"** and should instruct verification with official sources and real people.

### Resources (`src/data/programs.js`)

Curated partners by category (each mapped to a domain): stays, tours/experiences, trains/buses/transfers, eSIM, insurance, flights.

### Monetization and booking surfaces

| Surface | Location | Config |
| --- | --- | --- |
| Travelpayouts **Drive** | `index.html` (auto-converts brand links) | Project marker `535198` |
| **Affiliate offers** | `src/affiliate.js` → `OfferCard`, banners | `AFFILIATE_OFFERS`, `DISCLOSURE` |
| **Search widgets** | Home, domain pages, `/search/flights` | `WIDGETS`, `FLIGHT_META_SEARCH` |
| **Per-destination tours** | Destination pages when `toursCityId` set | `TOURS_WIDGET`, `DestinationToursWidget.jsx` |

Empty widget `src` values are intentional fallbacks (styled link to offer). Details: `travelpayouts.md`.

### SEO and discoverability

- **Per-page meta:** `Seo.jsx` (title, description, canonical, OG, optional breadcrumbs, JSON-LD)
- **Generated:** `public/sitemap.xml`, `public/llms.txt`, `public/llms-full.txt` (`bun run seo` or `bun run destinations`)
- **Analytics:** Google Analytics `G-GXH2PHP7B2` in `index.html`
- **Deploy:** `public/CNAME`, `dist/404.html` copy of `index.html` for deep links (`copy-spa-fallback.mjs`)

### UX and compliance

- Skip-to-content link, scroll-to-top on route change
- Cookie notice (dismiss on scroll) → `/cookies`, `/privacy`
- Affiliate disclosure in footer and near widgets
- `suppressGoogleTranslateBanner.js` hides Google Translate chrome clutter

---

## Where content and code live

```
private/products/atlas/          Atlas source: *.md + assets/*.jpg
private/docs/                    Strategy, playbooks, this file, travelpayouts.md
src/
  pages/                         One React page per route (see Site inventory)
  components/                    UI blocks (Atlas, Gyroscope, widgets, SEO, etc.)
  data/
    atlasMethod.js               ATLAS_STEPS, GYROSCOPE_OPS, shared headings
    destinations.js              Imports index.json; loadDestinationDetail(slug)
    destinations/index.json      Generated catalog (summaries)
    destinations/detail/*.json   Generated full copy per slug
    domains.js                   Four domains + widget/offer keys
    domainDestinations.js        Featured Atlas slugs per domain page
    posts.js                     All guides
    prompts.js                   AI prompt library
    programs.js                  Resources page partners
    guidesMenu.js                Guides nav + hub card copy
  affiliate.js                   Travelpayouts config (single place)
  site.js                        Site name, URL, brand asset imports
scripts/
  build-destinations.mjs         Atlas markdown → JSON + public images
  generate-seo-files.mjs         sitemap, llms.txt
  fetch-wegotrip-cities.mjs      WeGoTrip city list for tour matching
  site-audit.mjs                 Static integrity checks
  check-routes-http.mjs          Sitemap URL smoke test (needs preview)
  sync-private-markdown-gyroscope.mjs  Bulk heading alignment in private markdown
  copy-spa-fallback.mjs          GitHub Pages SPA deep links
public/destinations/             Hero images (generated copy from atlas assets)
```

**Hand-maintained vs generated:** Edit atlas markdown and `src/data/*.js` content files. Regenerate JSON with `bun run destinations`. Do not edit `index.json` or `detail/*.json` by hand.

---

## Build, deploy, and QA

| Command | When to use |
| --- | --- |
| `bun run dev` | Local development |
| `bun run build` | Production bundle only (Vite + SPA fallback) |
| `bun run destinations` | After Atlas edits: rebuild JSON, images, sitemap, llms files |
| `bun run atlas` | `tours-cities` + `destinations` (network) |
| `bun run tours-cities` | Refresh WeGoTrip city cache only |
| `bun run seo` | Regenerate sitemap/llms from current data |
| `bun run audit` | Routes, images, detail JSON checks |
| `bun run check:routes` | HTTP 2xx on all sitemap paths (run `preview` first) |
| `bun run preview` | Serve production build locally |
| `bun run sync-private-md` | Align Gyroscope headings in private markdown |
| `bun run favicons` | Regenerate favicon assets |

**Typical workflows**

- **UI/code deploy:** `bun run build`
- **Atlas content publish:** `bun run destinations` → `bun run build`
- **Refresh tour city matching:** `bun run atlas` → `bun run build`

---

## Content workflows

### New or updated Atlas destination

1. Edit `private/products/atlas/<slug>.md` per `atlas-scaling-playbook.md` (hero: `assets/<slug>.jpg`).
2. Add or update `private/products/atlas/assets/<slug>.jpg`.
3. `bun run destinations` (or `bun run atlas` for WeGoTrip refresh).
4. `bun run build`; check `/destinations/<slug>`.

### New guide

1. Pick one domain; add entry to `POSTS` in `src/data/posts.js` (unique `slug`).
2. Use block types; include `ai` block and 2 to 3 FAQs; place `offer` blocks sparingly.
3. `bun run seo`; link from domain page / related guides.

### New AI prompt

1. Add to a category in `src/data/prompts.js`.
2. Start with "Please"; use [BRACKETS]; require human verification.
3. Match category to domain; no em/en dashes.

### New resource partner

1. Add to `src/data/programs.js` with domain mapping.
2. Prefer plain brand URLs in copy; Drive converts at click time (see `affiliate.js`).

---

## How we improve the site

- Lead with usefulness; affiliate income follows trust.
- Every piece of content should trace to a domain and, where relevant, uphold THM principles (avoid displacement patterns).
- Cover high-intent topics (flights, insurance, eSIM, transfers, experiences) without breaking principles.
- Internal link: guides ↔ domains ↔ Atlas ↔ prompts ↔ About (research depth).
- Use Travelpayouts Content Analytics to see what earns; double down thoughtfully.
- Update **this file** when adding routes, data files, or changing framework language on the site.
