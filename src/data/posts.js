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
    faq: [
      {
        q: "Is taking the train really better for the climate than flying?",
        a: "For most short and medium distances, yes. A train trip typically emits a small fraction of the carbon of the same journey by plane, and it often drops you in the city center with no airport transfer needed.",
      },
      {
        q: "How do I find ground transport routes across countries?",
        a: "Booking platforms like Omio and rail and bus search tools let you compare trains, buses, and ferries across borders in one place, so you can see when ground travel is realistic.",
      },
    ],
  },
  {
    slug: "best-travel-esim-for-ethical-travelers",
    title: "The Best Travel eSIM Setup for Ethical Travelers",
    date: "2026-05-26",
    domain: "ecology",
    readMinutes: 6,
    excerpt:
      "Stay connected without roaming waste or buying a throwaway SIM in every country. Here is a simple, low impact approach.",
    blocks: [
      { type: "p", text: "Staying connected helps you travel more responsibly. You can check train times, message local guides, translate menus, and avoid getting lost. The question is how to do it without waste or runaway roaming bills." },
      { type: "h2", text: "Why an eSIM beats a stack of plastic SIMs" },
      { type: "p", text: "A travel eSIM is installed digitally, so there is no plastic card, no packaging, and no plastic SIM to throw away when you leave. One eSIM app can cover many countries, which is ideal for slow, multi country trips." },
      { type: "offer", key: "esim" },
      { type: "h2", text: "Buy only the data you need" },
      { type: "p", text: "Pick a regional or country plan sized to your trip rather than a giant global bundle you will not use. Smaller, right sized plans cost less and reduce waste." },
      { type: "h2", text: "Keep your home number for security" },
      { type: "p", text: "An eSIM lets you add travel data while keeping your normal number active for bank codes and two factor messages. That is safer than swapping out your main SIM." },
      { type: "h2", text: "Connectivity supports the local economy" },
      { type: "p", text: "Being online makes it easier to book directly with local guesthouses, cooperatives, and guides rather than defaulting to big global chains. Good connectivity is quietly an Economy domain tool." },
    ],
    faq: [
      {
        q: "Will an eSIM work with my phone?",
        a: "Most phones from the last few years support eSIM. Check your phone settings for an option to add a mobile or cellular plan, or look up your exact model before you buy.",
      },
      {
        q: "Is an eSIM cheaper than roaming?",
        a: "Usually, yes. A local or regional eSIM plan is normally far cheaper than standard roaming rates, and you control exactly how much data you buy.",
      },
      {
        q: "Can I keep WhatsApp and my usual number?",
        a: "Yes. An eSIM adds a second line for data, so your primary number stays active for calls, texts, and security codes.",
      },
    ],
  },
  {
    slug: "travel-insurance-for-responsible-trips",
    title: "Travel Insurance for Responsible Trips: A Plain Guide",
    date: "2026-05-14",
    domain: "employment",
    readMinutes: 7,
    excerpt:
      "Good insurance protects you, the people who depend on you, and the local workers who would otherwise carry the cost of an emergency.",
    blocks: [
      { type: "p", text: "Insurance is not the most exciting part of trip planning, but it is one of the most responsible. When something goes wrong abroad, the right cover protects your finances and reduces the burden on local hospitals, rescue teams, and workers." },
      { type: "h2", text: "Why insurance is an ethical choice" },
      { type: "p", text: "An uninsured traveler in a serious accident can strain a local health system that already serves residents. Carrying proper cover means you pay your own way rather than relying on stretched public services." },
      { type: "offer", key: "insurance" },
      { type: "h2", text: "What to look for" },
      { type: "ul", items: [
        "Medical cover with emergency evacuation, especially for remote or mountain trips.",
        "Coverage that matches your real activities, such as hiking, diving, or cycling.",
        "Clear claims process and 24 hour assistance you can actually reach.",
        "Trip cancellation if losing prepaid local bookings would hurt providers.",
      ] },
      { type: "h2", text: "Match the policy to the trip" },
      { type: "p", text: "A city break and a high altitude trek need different cover. Read what is excluded, not just what is included, and pick a policy that fits how you actually travel." },
      { type: "h2", text: "Protect the people who rely on you" },
      { type: "p", text: "Insurance is also care for the people back home. It means a problem on the road does not become a financial crisis for your family." },
    ],
    faq: [
      {
        q: "Do I really need travel insurance for a short trip?",
        a: "Even short trips carry risk of illness, injury, or cancellation. A modest policy can prevent a large unexpected bill and reduce the load on local services if something goes wrong.",
      },
      {
        q: "What is the most important coverage to have?",
        a: "Emergency medical care and evacuation are usually the most important, because those are the costs that can become very large very quickly abroad.",
      },
    ],
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug);
}
