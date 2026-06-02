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

### The Human Mark (THM)
The four domains are grounded in a framework called The Human Mark (THM). THM classifies all failures in cooperative systems as **displacement**: when an indirect source gets treated as if it were direct, or when a direct source gets treated as if it were indirect. 

In AI safety, this explains jailbreaks and deceptive alignment. In travel, it explains what goes wrong when tourists trust algorithms over locals, or when booking platforms take money out of communities. THM identifies four displacement risks, which correspond directly to our four domains:

1. **Governance Management Traceability** maps to **Economy**: Can you trace where your money goes, or does it vanish into indirect systems that have no stake in the place you visit?
2. **Inference Interaction Accountability** maps to **Employment**: Does responsibility for the effects of tourism stay with the humans who do the work, or does it get displaced onto systems that cannot be held accountable?
3. **Information Curation Variety** maps to **Education**: Do you learn from diverse, direct sources, or do you rely on a single indirect source that compresses everything into the most popular answer?
4. **Intelligence Cooperation Integrity** maps to **Ecology**: Do you take responsibility for your impact, or do you treat your own judgment as less important than convenience?

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
src/
  data/
    domains.js     The four domains: summaries, stats, principles, checklists.
    posts.js       All guides, their content blocks, and FAQs.
    programs.js    The curated partner list on the Resources page.
    prompts.js     The copy-ready AI prompts on the AI Prompts page.
  affiliate.js     Affiliate config, offers, widgets, and disclosure text.
  site.js          Site name, titles, tagline, brand assets, and live URL.
docs/
  context.md       This file. The shared brief for content and strategy.
  travelpayouts.md The monetization reference (programs, tools, playbook).
```

---

## Site Map

- `/` Home: Hero, the four domains, how it works (3 steps), AI prompts teaser, travel search, affiliate banner, featured guides, mission strip.
- `/domains/economy`, `/employment`, `/education`, `/ecology`
- `/guides` (Hub) and each guide at `/guides/<slug>`
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
7. Add the new URL to `public/sitemap.xml`.

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