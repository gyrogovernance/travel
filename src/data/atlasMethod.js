/**
 * Shared 3-step Atlas method copy for destinations, prompts, and guides.
 *
 * GGG maps frameworks to domains: CGM (Economy), Gyroscope Protocol (Employment),
 * THM (Education), BU dual (Ecology). Visitor-facing preparation uses Gyroscope
 * work categories only (Governance Management, Information Curation, Inference
 * Interaction, Intelligence Cooperation). THM alignment principles (GMT, ICV, IIA,
 * ICI) and displacements (GTD, IVD, IAD, IID) are documented on the About page and in
 *
 * Keys gm, icu, iinter, ico match Gyroscope Protocol abbreviations (GGG Employment).
 * Visitor-facing label: PREP_STEPS_HEADING ("Four prep steps"). Do not expose
 * "Gyroscope" in UI copy; research names stay in private docs and atlas markdown headings.
 */

export const PREP_STEPS_HEADING = "Four prep steps";

/** @deprecated Use PREP_STEPS_HEADING. Kept for existing imports. */
export const GYROSCOPE_OPERATIONS_HEADING = PREP_STEPS_HEADING;

/** Operation whose prep field is prose (string), not a bullet list. */
export const GYROSCOPE_PROSE_KEY = "ico";

export const ATLAS_STEPS = [
  {
    step: 1,
    label: "Choices",
    summary: "Why this place matters and four domain questions.",
  },
  {
    step: 2,
    label: "Preparation",
    summary: `${PREP_STEPS_HEADING}, anchor spots, and practical essentials.`,
  },
  {
    step: 3,
    label: "Delivery",
    summary: "Draft your plan with AI, then verify with real people.",
  },
];

export const GYROSCOPE_OPS = [
  {
    key: "gm",
    order: 1,
    name: "Governance Management",
    question: "What assumptions should be checked?",
  },
  {
    key: "icu",
    order: 2,
    name: "Information Curation",
    question: "Which different sources provide useful perspectives?",
  },
  {
    key: "iinter",
    order: 3,
    name: "Inference Interaction",
    question: "What choices require human judgment?",
  },
  {
    key: "ico",
    order: 4,
    name: "Intelligence Cooperation",
    question:
      "How will you trust your own judgment and local advice over algorithmic suggestions when conditions change?",
  },
];

export const ETHICAL_COMPASS_DOMAINS = [
  { key: "economy", name: "Economy", slug: "economy", question: "Where does my money go?" },
  { key: "employment", name: "Employment", slug: "employment", question: "Who benefits from my visit?" },
  { key: "education", name: "Education", slug: "education", question: "Whose knowledge am I trusting?" },
  { key: "ecology", name: "Ecology", slug: "ecology", question: "What is my impact?" },
];
