// The four ethical travel domains that define the Gyro Governance framework.
import economyImg from "../assets/economy.jpg";
import employmentImg from "../assets/employment.jpg";
import educationImg from "../assets/education.jpg";
import ecologyImg from "../assets/ecology.jpg";

export const DOMAINS = [
  {
    slug: "economy",
    name: "Economy",
    tagline: "Keep your spending in the places you visit.",
    color: "#0a6e7c",
    icon: "coins",
    image: economyImg,
    stat: "Up to 80%",
    statLabel:
      "of all-inclusive package spending can leak out of the host country",
    summary:
      "Travel money is power. Where it lands decides whether a destination thrives or hollows out. The Economy domain is about steering more of your spending toward local hands and away from extractive chains.",
    principles: [
      {
        title: "Spend close to the ground",
        body: "Choose locally owned guesthouses, family restaurants, markets, and independent guides. A larger share of every euro then stays in the community rather than leaving through global chains.",
      },
      {
        title: "Pay a fair price, willingly",
        body: "Aggressive haggling over small sums pushes hard on people who already earn little. Agree a fair rate, tip honestly, and treat price as a relationship rather than a contest.",
      },
      {
        title: "Skip the middleman",
        body: "All-inclusive resorts and prepaid foreign packages often send most of the money abroad. When you can, book the pieces of your trip directly with local providers instead.",
      },
      {
        title: "Spread the benefit",
        body: "Visit lesser-known towns and travel in shoulder seasons. This relieves pressure on overcrowded hotspots and brings income to places that need it.",
      },
    ],
    practices: [
      "Carry small local cash for markets and tips.",
      "Book at least one experience directly with a local cooperative.",
      "Eat where local people eat, not only where tourists gather.",
      "Buy crafts from makers, not mass-produced souvenirs.",
      "Ask your AI assistant to find locally owned alternatives before you book through a platform.",
    ],
    offerKeys: ["hotels", "tours"],
    widgetKey: "hotelSearch",
  },
  {
    slug: "employment",
    name: "Employment",
    tagline: "Respect the people whose work makes travel possible.",
    color: "#d98c2b",
    icon: "handshake",
    image: employmentImg,
    stat: "1 in 10",
    statLabel: "jobs worldwide are linked to travel and tourism",
    summary:
      "Behind every smooth trip are drivers, cleaners, cooks, porters, and guides. The Employment domain asks whether their work is safe, fairly paid, and freely chosen.",
    principles: [
      {
        title: "Fair wages and tips",
        body: "Look for operators that state how they pay staff and guides. Tip directly and generously where wages are low, and ask whether service charges actually reach workers.",
      },
      {
        title: "Safe and dignified conditions",
        body: "Avoid activities that rely on exhausting or unsafe labor, such as overloaded animal rides or porters carrying unreasonable weight at altitude.",
      },
      {
        title: "No exploitation",
        body: "Steer clear of operations linked to child labor, trafficking, or forced work. If something feels coercive, it usually is. Choose certified and transparent providers.",
      },
      {
        title: "Local hiring first",
        body: "Favor companies that employ and train people from the destination rather than importing all senior staff from elsewhere.",
      },
    ],
    practices: [
      "Ask tour operators how they pay and protect their teams.",
      "Tip guides, drivers, and housekeeping directly when possible.",
      "Avoid attractions with clear signs of animal or human overwork.",
      "Prefer guides who are local residents, not seasonal outsiders only.",
      "Use AI to draft a short message asking operators about their labor practices before you commit.",
    ],
    offerKeys: ["tours", "insurance"],
    widgetKey: "toursSearch",
  },
  {
    slug: "education",
    name: "Education",
    tagline: "Learn before you go, and learn while you are there.",
    color: "#2f7d4c",
    icon: "book",
    image: educationImg,
    stat: "10 phrases",
    statLabel: "of a local language can transform how you are welcomed",
    summary:
      "Informed travelers cause less harm and gain far more. The Education domain is about cultural literacy, honest history, and curiosity that respects boundaries.",
    principles: [
      {
        title: "Understand the context",
        body: "Read about the history, customs, and current issues of a place before you arrive. A little reading prevents many accidental insults.",
      },
      {
        title: "Respect cultural norms",
        body: "Learn dress codes, greetings, and a few words of the language. Ask before photographing people, sacred sites, or ceremonies.",
      },
      {
        title: "Support honest interpretation",
        body: "Choose museums, guides, and community projects that tell history truthfully, including difficult chapters, rather than sanitized versions for tourists.",
      },
      {
        title: "Pass it on",
        body: "Share what you learn responsibly. Credit local sources and avoid turning a culture into a costume or a backdrop.",
      },
    ],
    practices: [
      "Learn ten useful phrases in the local language.",
      "Read one book or long article about the destination first.",
      "Always ask before photographing people.",
      "Choose community-led tours over scripted tourist shows.",
      "Ask AI for a quick cultural briefing, then verify what it tells you with people who live there.",
    ],
    offerKeys: ["tours", "esim"],
    widgetKey: "toursSearch",
  },
  {
    slug: "ecology",
    name: "Ecology",
    tagline: "Leave the land and sea better than you found them.",
    color: "#13a3b5",
    icon: "leaf",
    image: ecologyImg,
    stat: "Around 8%",
    statLabel: "of global carbon emissions come from tourism",
    summary:
      "Travel touches fragile ecosystems quickly. The Ecology domain is about cutting carbon, protecting wildlife, and reducing the waste your trip leaves behind.",
    principles: [
      {
        title: "Choose lower-carbon transport",
        body: "Take trains and buses for shorter distances, fly direct when you must fly, and combine destinations to reduce the number of flights overall.",
      },
      {
        title: "Protect wildlife",
        body: "Never touch, feed, or ride wild animals. Avoid attractions built on captivity. Observe from a respectful distance and follow local conservation rules.",
      },
      {
        title: "Cut waste",
        body: "Carry a refillable bottle, refuse single-use plastics, and pack out what you pack in. Small habits multiply across millions of travelers.",
      },
      {
        title: "Tread lightly in nature",
        body: "Stay on marked trails, respect protected areas, and pay park fees that fund conservation and ranger jobs.",
      },
    ],
    practices: [
      "Pick ground transport for trips under five hours where realistic.",
      "Carry a reusable bottle, cup, and bag.",
      "Refuse wildlife selfies and captive animal rides.",
      "Pay entry fees that fund parks and reserves.",
      "Use AI to compare the carbon cost of flying versus taking the train for your route.",
    ],
    offerKeys: ["trains", "flights"],
    widgetKey: "flightSearch",
  },
];

export function getDomain(slug) {
  return DOMAINS.find((d) => d.slug === slug);
}