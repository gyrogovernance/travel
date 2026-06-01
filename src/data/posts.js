// Blog and guides content. Each post supports simple paragraph and
// list blocks plus optional affiliate offer callouts by key.
export const POSTS = [
  {
    slug: "ethical-travel-starter-guide",
    title: "The Ethical Travel Starter Guide for 2026",
    date: "2026-05-20",
    domain: "economy",
    readMinutes: 7,
    excerpt:
      "A practical first trip through the four domains of ethical travel, with simple choices that make a real difference.",
    blocks: [
      { type: "p", text: "Ethical travel is not about guilt or about giving up the joy of seeing the world. It is about making choices that respect the people and places that host you. This guide walks through the four domains we use at Gyro Governance: Economy, Employment, Education, and Ecology." },
      { type: "h2", text: "Start with the money" },
      { type: "p", text: "Where your money goes shapes a destination more than almost anything else. Book a locally owned stay, eat at family run places, and hire local guides. The closer your spending stays to the ground, the more good it does." },
      { type: "offer", key: "hotels" },
      { type: "h2", text: "Respect the work" },
      { type: "p", text: "Tourism runs on the labor of drivers, cooks, cleaners, and guides. Choose operators who pay and protect their teams, and tip directly where wages are low." },
      { type: "h2", text: "Learn before you arrive" },
      { type: "p", text: "Read a little history, learn a few phrases, and check local customs. Informed travelers cause less harm and connect more deeply." },
      { type: "offer", key: "esim" },
      { type: "h2", text: "Lighten your footprint" },
      { type: "p", text: "Take the train when you can, refuse single use plastic, and never ride or feed wild animals. Small habits add up across millions of trips." },
      { type: "offer", key: "trains" },
      { type: "p", text: "Pick one change from each domain for your next trip. That is enough to travel meaningfully better without losing any of the wonder." },
    ],
  },
  {
    slug: "how-to-spot-fair-tour-operators",
    title: "How to Spot a Fair Tour Operator",
    date: "2026-05-08",
    domain: "employment",
    readMinutes: 6,
    excerpt:
      "Five honest questions that reveal whether a tour company treats its workers and communities well.",
    blocks: [
      { type: "p", text: "Marketing copy is easy to write. Fair employment is harder to fake if you ask the right questions. Here is how to tell a genuinely ethical operator from a greenwashed one." },
      { type: "h2", text: "1. Who guides the tour" },
      { type: "p", text: "Ask whether guides are local residents and whether they are employed year round or only seasonally. Local, stable employment is a strong signal." },
      { type: "h2", text: "2. How staff are paid" },
      { type: "p", text: "A trustworthy operator can explain wages, tipping policy, and whether service charges actually reach workers. Vague answers are a warning." },
      { type: "h2", text: "3. Group sizes and pace" },
      { type: "p", text: "Smaller groups usually mean less strain on staff and communities, and a better experience for you." },
      { type: "offer", key: "tours" },
      { type: "h2", text: "4. Animal and porter welfare" },
      { type: "p", text: "Avoid trips that overload animals or porters. Reputable operators publish weight limits and welfare policies." },
      { type: "h2", text: "5. Community links" },
      { type: "p", text: "The best operators reinvest in the places they visit through cooperatives, schools, or conservation. Ask where the money goes." },
    ],
  },
  {
    slug: "low-carbon-routes-that-still-feel-like-adventure",
    title: "Low Carbon Routes That Still Feel Like Adventure",
    date: "2026-04-22",
    domain: "ecology",
    readMinutes: 8,
    excerpt:
      "You can cut the carbon of a trip dramatically without cutting the magic. Here is how to plan it.",
    blocks: [
      { type: "p", text: "The single biggest lever on your travel footprint is usually transport. The good news is that lower carbon routes are often more scenic, more social, and more memorable than a quick flight." },
      { type: "h2", text: "Think in segments" },
      { type: "p", text: "Break a trip into legs and ask which can move from air to ground. A night train or coastal ferry can replace a short flight and become a highlight in itself." },
      { type: "offer", key: "trains" },
      { type: "h2", text: "Fly smart when you must" },
      { type: "p", text: "When flying is unavoidable, choose direct routes, pack light, and stay longer to make each flight count for more." },
      { type: "offer", key: "flights" },
      { type: "h2", text: "Slow down" },
      { type: "p", text: "Fewer destinations and longer stays cut emissions and deepen your experience. Slow travel is ethical travel." },
    ],
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}
