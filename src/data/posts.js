/**
 * Guide posts. Each one is tied to a domain and contains
 * real practical content organized as blocks.
 *
 * Block types: h2, h3, p, ul, offer, ai
 * The "ai" block renders as a styled callout suggesting
 * how AI can help with the challenge discussed.
 */
export const POSTS = [
  {
    slug: "how-to-plan-ethical-travel-with-ai",
    title: "How to Plan Ethical Travel with AI: The 3-Step Method",
    excerpt:
      "Choices, Preparation, Delivery. A simple loop for partnering with AI on research while you keep judgment and verification.",
    domain: "education",
    date: "2026-06-02",
    readMinutes: 8,
    blocks: [
      { type: "h2", text: "Why a method matters" },
      {
        type: "p",
        text:
          "Most travel AI advice stops at \"paste this prompt and get an itinerary.\" That works for speed, but it skips the part that makes travel ethical: deciding what matters, checking your assumptions, and verifying with real people. A simple three-step loop keeps AI useful while you stay accountable.",
      },
      { type: "h2", text: "Step 1: Choices" },
      {
        type: "p",
        text:
          "Before you book anything, clarify why you are going and what trade-offs you accept. Ask four questions about the place you are visiting:",
      },
      {
        type: "ul",
        items: [
          "Economy: Where does tourist money go in this place?",
          "Employment: Who works in tourism here, and who benefits?",
          "Education: What do most visitors misunderstand?",
          "Ecology: What environmental pressure matters most?",
        ],
      },
      {
        type: "p",
        text:
          "Our destination pages spell these out city by city so you are not starting from a blank page. The goal is not a perfect score on all four. It is knowing which trade-offs matter to you before money changes hands.",
      },
      { type: "h2", text: "Step 2: Preparation" },
      {
        type: "p",
        text:
          "Preparation is where human-AI cooperation pays off. Let AI gather options fast, then check what matters locally. Work through four checks before you ask for an itinerary:",
      },
      {
        type: "ul",
        items: [
          "Governance Management: What rules, permits, seasons, and booking assumptions must you verify?",
          "Information Curation: Which different sources should you consult, not just one blog or one AI answer?",
          "Inference Interaction: Which choices are yours alone (pace, tours, spending, sensitive sites)?",
          "Intelligence Cooperation: How will you trust your own judgment and local advice over algorithmic suggestions when conditions change?",
        ],
      },
      {
        type: "p",
        text:
          "Pull together five anchor spots and practical essentials (how long to stay, how to get around) so the trip has bones before you open an AI chat. Our destination pages list these for each city.",
      },
      { type: "h2", text: "Step 3: Delivery" },
      {
        type: "p",
        text:
          "Once you know what matters and what to verify, ask AI to draft a day-by-day plan. Use a prompt that walks through the same three steps: clarify your choices, run the four prep checks, then build the itinerary. Fill in your dates, travel companions, budget, and interests.",
      },
      {
        type: "p",
        text:
          "Whatever comes back is a starting point, not a final plan. Check visas, safety, opening hours, and bookings on official sites. Ask one local person (a guide, host, or shopkeeper) whether your plan makes sense before you commit.",
      },
      { type: "h2", text: "What to do next" },
      {
        type: "ul",
        items: [
          "Pick a destination that matches your trip.",
          "Read the ethical context and prep notes on that page before you copy the prompt.",
          "Paste the prompt into your AI tool, fill in the brackets, then verify on official sites.",
          "Ask one local person whether your plan makes sense.",
        ],
      },
      {
        type: "ai",
        text:
          "Want a domain-focused prompt instead of a city-specific one? Browse our AI Prompts page. Each prompt follows the same verification rule: AI plans, you decide, locals confirm.",
      },
    ],
    faq: [
      {
        q: "Do I need to use AI to follow this method?",
        a:
          "No. The three steps work on paper too. AI speeds up research for Preparation and Delivery, but Choices and verification are always human.",
      },
    ],
  },
  {
    slug: "where-does-your-travel-money-actually-go",
    title: "Where Does Your Travel Money Actually Go?",
    excerpt:
      "Most tourist spending leaves the local economy before it reaches the people who live there. Here is how to keep more of it local.",
    domain: "economy",
    date: "2026-06-10",
    readMinutes: 6,
    blocks: [
      { type: "h2", text: "The leaky bucket" },
      {
        type: "p",
        text:
          "For every dollar a tourist spends in a developing country, as little as 33 cents stays in the local economy. The rest flows out through international hotel chains, foreign-owned tour operators, imported goods, and online booking platforms that take their cut before the host ever sees the payment.",
      },
      {
        type: "p",
        text:
          "This is not because travelers are careless. Most people assume that spending money in a place automatically benefits that place. But the structure of the tourism industry makes that assumption wrong more often than not. The question is not whether you spend, but where your spending lands.",
      },
      { type: "h2", text: "Three ways money leaks" },
      {
        type: "ul",
        items: [
          "Platform commissions: Booking sites typically take 15 to 25 percent of what you pay. The hotel or guesthouse receives only the remainder. When you book direct, the host gets the full amount.",
          "Imported goods: Many resorts and restaurants import food, drinks, and supplies to match tourist expectations. Your dinner at an international hotel chain may contain almost nothing produced locally.",
          "Foreign ownership: When a hotel or tour company is owned by an overseas corporation, profits leave the country. The wages stay, but the profit, which is the larger share, does not.",
        ],
      },
      { type: "h2", text: "What you can do" },
      {
        type: "ul",
        items: [
          "Book accommodation directly with the property. Email or call them. Many smaller places offer a discount for direct bookings because they save on platform fees too.",
          "Eat at restaurants that source locally. Ask where the ingredients come from. If the answer is specific and local, you are in the right place.",
          "Buy souvenirs from the people who made them. Skip the mass-produced items that look the same in every shop. Find the workshop, meet the maker, pay the maker.",
          "Choose locally owned transport. A driver who lives in the community spends their earnings in the community.",
        ],
      },
      { type: "h2", text: "Why it matters" },
      {
        type: "p",
        text:
          "When tourism revenue stays local, it funds schools, hospitals, and infrastructure. When it leaks out, it funds shareholder dividends in another country. The same trip, the same spending, can have wildly different effects depending on where the money lands. You have more control over this than you think.",
      },
      {
        type: "ai",
        text:
          "Not sure if your itinerary leaks money? Copy this into your AI assistant: \"Please review my trip plan for [destination] and flag any bookings where most of my spending would leave the local economy. For each one, suggest a locally owned alternative of similar quality and price.\" Then verify the suggestions with people who know the place.",
      },
    ],
    faq: [
      {
        q: "Does booking direct really make a difference?",
        a:
          "Yes. On a $100 per night room, a booking platform might take $20 to $25. The host receives $75 to $80. If you book direct, the host gets $100. Over a week-long stay, that is $140 to $175 more in local hands. For a small guesthouse, that is significant.",
      },
      {
        q: "Is it safe to book direct?",
        a:
          "In most cases, yes. Many independent properties have their own websites with secure payment. If you are unsure, book the first night through a platform and ask the host about direct booking for the rest of your stay. They will usually be happy to help.",
      },
      {
        q: "What if local options are more expensive?",
        a:
          "Sometimes they are, especially for accommodation. But local restaurants, transport, and activities are often cheaper than international alternatives. Balance your budget by saving on food and experiences while spending a bit more on a locally owned place to stay.",
      },
    ],
  },
  {
    slug: "how-to-tell-if-a-tour-benefits-local-workers",
    title: "How to Tell if a Tour Benefits Local Workers",
    excerpt:
      "A tour can look responsible while exploiting the people who run it. Here are the questions to ask and the red flags to watch for.",
    domain: "employment",
    date: "2026-06-08",
    readMinutes: 7,
    blocks: [
      { type: "h2", text: "The gap between appearance and reality" },
      {
        type: "p",
        text:
          "A tour company can have a beautiful website, glowing reviews, and professional guides and still underpay its staff, rely on seasonal contracts with no benefits, or import workers from elsewhere while locals get only the lowest-paid roles. Appearance is easy to manufacture. Fairness takes effort.",
      },
      { type: "h2", text: "Questions to ask before you book" },
      {
        type: "ul",
        items: [
          "Are your guides local residents? How long have they worked here?",
          "Do you provide training and career development for your staff?",
          "What percentage of your team is hired from the local community?",
          "Do your guides and staff receive a salary, or do they depend on tips?",
          "What are your working conditions like during peak season? How many hours do guides work per day?",
          "Do you offer year-round employment, or only seasonal contracts?",
          "How do you ensure fair wages compared to the local cost of living?",
        ],
      },
      { type: "h2", text: "Red flags" },
      {
        type: "ul",
        items: [
          "Guides who seem overworked or rushed through the tour schedule",
          "Staff who cannot answer questions about their own employment terms",
          "Companies that highlight their sustainability certifications but say nothing about labor",
          "Volunteer programs that replace what should be paid work",
          "Reviews that mention staff by first name only, suggesting high turnover",
        ],
      },
      { type: "h2", text: "Green flags" },
      {
        type: "ul",
        items: [
          "Guides who speak with deep personal knowledge of the area, not memorized scripts",
          "Companies that feature their staff on their website with real stories",
          "Tour operators that are themselves local, not just locally based branches of foreign companies",
          "Clear statements about wages, training programs, and career paths",
          "Evidence of long-term staff retention and promotion from within",
        ],
      },
      {
        type: "p",
        text:
          "Fair employment is not charity. It is the foundation of a tourism industry that actually makes places better. When workers are treated well, they share their knowledge generously, take pride in their work, and build the kind of experiences that travelers remember. Everyone wins.",
      },
      {
        type: "ai",
        text:
          "Not sure what to ask a tour operator? Try this: \"Please help me judge whether a tour operator is ethical. Give me five specific questions to ask about how they pay and protect guides and staff, group sizes, animal and porter welfare, and how they reinvest in the community. Tell me what good and bad answers sound like.\" Bring those questions to the operator directly.",
      },
    ],
    faq: [
      {
        q: "Is it rude to ask about wages and working conditions?",
        a:
          "No. Asking shows you care about more than just your own experience. Frame it positively: ask about local hiring, training programs, and career development. Most good operators are proud to talk about how they treat their staff.",
      },
      {
        q: "What if all the tours I find seem similar?",
        a:
          "Look beyond the major booking platforms. Search for community tourism associations, local cooperatives, and social enterprises. These are often smaller and harder to find but offer better employment practices and more authentic experiences.",
      },
    ],
  },
  {
    slug: "why-you-should-talk-to-locals-not-just-read-reviews",
    title: "Why You Should Talk to Locals, Not Just Read Reviews",
    excerpt:
      "Online reviews and AI summaries are useful, but they are secondhand. Real knowledge comes from people with lived experience. Here is how to find it.",
    domain: "education",
    date: "2026-06-05",
    readMinutes: 5,
    blocks: [
      { type: "h2", text: "The problem with secondhand advice" },
      {
        type: "p",
        text:
          "When you read a travel blog, an AI-generated summary, or a thousand online reviews, you are reading someone else's account of a place. That is useful, but it is not the same as knowing something directly from the people who live there.",
      },
      {
        type: "p",
        text:
          "Secondhand sources have a specific weakness: they compress reality into what is popular. The restaurant with the most reviews is not necessarily the best one. It is the most reviewed one. The experience that shows up first in search results is not the most meaningful. It is the most optimized for search.",
      },
      { type: "h2", text: "What locals know that algorithms do not" },
      {
        type: "ul",
        items: [
          "Which neighborhoods are actually safe at night, not just statistically safe",
          "Where the food is genuinely local, not just marketed as local",
          "What events and festivals are happening this week that no website has listed yet",
          "Which tourist attractions are worth visiting and which are overpriced traps",
          "How to navigate cultural norms that are too nuanced for any guidebook",
        ],
      },
      { type: "h2", text: "How to have better conversations" },
      {
        type: "ul",
        items: [
          "Ask open questions: What do you love about living here? What should I know that the guidebooks miss?",
          "Listen more than you talk. You are there to learn, not to share your opinions.",
          "Avoid questions that treat the person as a free tour guide. Be genuinely curious about their life, not just their recommendations.",
          "Accept that some people do not want to talk to tourists. That is fine. Move on and try someone else.",
          "Follow up. If someone mentions a place or an event, go there and then tell them what you thought. That is how conversations become relationships.",
        ],
      },
      {
        type: "p",
        text:
          "The richest travel experiences come from direct human connection. No algorithm can replicate the feeling of being invited to a family dinner because you asked the right question at the market. That kind of moment requires presence, curiosity, and respect. Start there.",
      },
      {
        type: "ai",
        text:
          "AI is a great starting point, not the final word. Use it to prepare, then verify with real people. Try: \"Please give me a short, honest briefing on [place]: key history I should understand, current social issues to be sensitive about, dress and photography norms, and topics that are welcome or best avoided in conversation.\" Then check what the AI tells you against what locals say when you arrive.",
      },
    ],
    faq: [
      {
        q: "What if I do not speak the local language?",
        a:
          "Learn a few phrases before you arrive. Hello, thank you, please, and I do not understand go a long way. Use translation apps for longer conversations. The effort matters more than the accuracy.",
      },
      {
        q: "How do I know if a local is giving me good advice or just promoting their friend's business?",
        a:
          "Cross-reference. If one person recommends something, ask another. If multiple independent sources agree, the recommendation is probably genuine. Also, consider the motivation: a shopkeeper recommending their own cousin's restaurant is not necessarily dishonest, but knowing the connection helps you judge.",
      },
    ],
  },
  {
    slug: "practical-guide-to-lowering-your-travel-carbon-footprint",
    title: "A Practical Guide to Lowering Your Travel Carbon Footprint",
    excerpt:
      "Tourism accounts for 8% of global emissions. You will not fix that alone, but you can fly less, stay longer, and make choices that count.",
    domain: "ecology",
    date: "2026-06-02",
    readMinutes: 7,
    blocks: [
      { type: "h2", text: "The honest starting point" },
      {
        type: "p",
        text:
          "Flying is the single biggest source of tourism emissions. A round-trip flight from London to Bangkok produces about 1.6 tonnes of CO2. That is roughly the same as driving a car for six months. No amount of towel reuse or plastic refusal offsets a long-haul flight.",
      },
      {
        type: "p",
        text:
          "So the first and most important thing you can do is fly less. Not never. Just less. And when you do fly, stay longer so the carbon cost per day drops. A weekend trip to another continent is hard to justify. A month in the same place is easier.",
      },
      { type: "h2", text: "Transport choices that matter" },
      {
        type: "ul",
        items: [
          "Short-haul flights are the most carbon-intensive per kilometer. A train for the same route typically produces 90% less CO2.",
          "Overnight buses and ferries are low-carbon alternatives for medium distances.",
          "If you must fly, choose direct routes. Takeoffs and landings use the most fuel.",
          "Economy class has a lower per-person footprint than business or first class because more people share the same space.",
        ],
      },
      { type: "h2", text: "Where you stay matters" },
      {
        type: "ul",
        items: [
          "Large resorts consume enormous amounts of energy for air conditioning, pools, and landscaping. Small guesthouses typically have a much lower footprint.",
          "Look for hotels with recognized eco-certifications, not just marketing language about being green.",
          "Staying in one place longer reduces the transport emissions of moving between destinations.",
        ],
      },
      { type: "h2", text: "Small choices that add up" },
      {
        type: "ul",
        items: [
          "Carry a reusable water bottle, especially in places where tap water is safe or filtered water is available.",
          "Say no to daily towel and sheet changes at hotels. You do not change your towels every day at home.",
          "Walk or cycle instead of taking taxis for short distances. It is better for you and for the air.",
          "Eat less meat while traveling. Plant-based meals have a significantly lower carbon footprint.",
          "Buy carbon offsets for flights you cannot avoid. Look for certified programs with verified projects.",
        ],
      },
      {
        type: "p",
        text:
          "You do not need to be perfect. You need to be honest about the impact and willing to reduce it where you can. That is what responsibility looks like.",
      },
      {
        type: "ai",
        text:
          "Let AI do the carbon math. Try: \"Please plan the lowest-carbon realistic route from [origin] to [destination] and back. Prefer trains, buses, and ferries for legs where they are practical, and only use flights where there is no reasonable alternative. Show the route as segments with rough travel times and estimated CO2 for each.\" Then book the ground segments through our trusted partners.",
      },
    ],
    faq: [
      {
        q: "Do carbon offsets actually work?",
        a:
          "Some do, some do not. Look for offsets certified by Gold Standard or Verified Carbon Standard. These programs verify that the emissions reductions are real, additional, and permanent. Avoid cheap offsets that feel too good to be true. They probably are.",
      },
      {
        q: "Is it better to travel domestically than internationally?",
        a:
          "Not always. A domestic flight of 500 km produces more CO2 per kilometer than a long-haul flight of 5000 km. The key factor is distance and mode of transport, not whether you cross a border. Train travel is almost always the lowest-carbon option for distances under 1000 km.",
      },
    ],
  },
  {
    slug: "what-ethical-travel-actually-means",
    title: "What Ethical Travel Actually Means",
    excerpt:
      "It is not about being perfect. It is about making better choices than you did last time, guided by four clear principles.",
    domain: "economy",
    date: "2026-05-28",
    readMinutes: 5,
    blocks: [
      { type: "h2", text: "Beyond the buzzword" },
      {
        type: "p",
        text:
          "Ethical travel has become a marketing term. Hotels claim to be sustainable because they reuse towels. Tour companies call themselves responsible because they plant a tree for every booking. These gestures are not worthless, but they are not the whole picture either.",
      },
      {
        type: "p",
        text:
          "Genuinely ethical travel comes down to four questions, one for each domain. Where does my money go? Who benefits from my visit? Whose knowledge am I trusting? What is my impact on this place? If you can answer those questions honestly, you are already traveling more ethically than most.",
      },
      { type: "h2", text: "The four-domain compass" },
      {
        type: "p",
        text:
          "We organize ethical travel into four domains because they cover the full picture. Economy is about where your spending lands. Employment is about whether the people who serve you are treated fairly. Education is about whether you learn from real people or just algorithms. Ecology is about whether you leave the place in better shape than you found it.",
      },
      {
        type: "p",
        text:
          "You do not need to score perfectly on all four. Start with one change per domain and build from there. Maybe this trip you book direct. Next trip you ask about labor practices. The trip after that you talk to a stranger instead of reading another review. Progress, not perfection.",
      },
      { type: "h2", text: "Why AI matters" },
      {
        type: "p",
        text:
          "AI can help you plan better trips. It can compare carbon footprints, find locally owned businesses, and translate conversations. It works from patterns in data, not lived experience. Let it draft options, then check with real people before you book. That is cooperation done right: machine speed, human judgment.",
      },
      {
        type: "ai",
        text:
          "Put the four questions into action. Try: \"Please act as an ethical travel planner. I am visiting [destination] for [number] days. Build a day-by-day itinerary that addresses four goals: keep spending local, support fair work, learn from diverse sources, and lower environmental impact. For each day, explain which domain each choice serves.\" Then adjust based on what locals tell you.",
      },
    ],
    faq: [
      {
        q: "Is ethical travel only for wealthy travelers?",
        a:
          "No. Many of the most impactful choices cost nothing or even save money. Booking direct, eating at local restaurants, staying longer in one place, and walking instead of taking taxis are all budget-friendly. Ethical travel is about awareness, not spending more.",
      },
      {
        q: "Can one person's choices really make a difference?",
        a:
          "Individually, the impact is small. Collectively, it shapes markets. When enough travelers ask about labor practices, companies start publishing their policies. When enough people book direct, platforms lower their commissions. Your choice is a signal. Signals accumulate.",
      },
    ],
  },
  {
    slug: "five-ways-to-spend-local-on-your-next-trip",
    title: "5 Ways to Spend Local on Your Next Trip",
    excerpt:
      "Practical, specific things you can do on any trip to keep more of your money in the community you are visiting.",
    domain: "economy",
    date: "2026-05-22",
    readMinutes: 4,
    blocks: [
      { type: "h2", text: "1. Book accommodation direct" },
      {
        type: "p",
        text:
          "Find the hotel or guesthouse you like on a booking platform, then go to their own website or contact them directly. Most independent properties offer the same rate or better when you skip the middleman. The host keeps the full payment instead of losing 15 to 25 percent to a platform.",
      },
      { type: "h2", text: "2. Eat where locals eat" },
      {
        type: "p",
        text:
          "Skip the restaurants in the main tourist square. Walk a few blocks into a residential neighborhood and look for places full of local people. The food is usually better, the prices are lower, and the money goes to a local family instead of a franchise.",
      },
      { type: "h2", text: "3. Buy from makers, not resellers" },
      {
        type: "p",
        text:
          "When you buy a souvenir, ask who made it. If the person selling it also made it, you are in the right place. If they bought it from a factory, look elsewhere. Workshops and studios often sell directly and are happy to show you how things are made.",
      },
      { type: "h2", text: "4. Hire local guides" },
      {
        type: "p",
        text:
          "A local guide knows the stories that are not in any book. They know which paths are safe, which views are secret, and which restaurants are actually good. They also spend their earnings in the community. Look for guides who are residents, not seasonal workers brought in from elsewhere.",
      },
      { type: "h2", text: "5. Use local transport" },
      {
        type: "p",
        text:
          "Taxis owned by local drivers, buses run by local companies, bike rentals from neighborhood shops. Every time you choose local transport over an international ride-hailing app, you keep money in the community and usually get a more interesting journey.",
      },
      {
        type: "ai",
        text:
          "Finding locally owned options takes time. Let AI speed it up: \"Please list five locally owned guesthouses, five family-run restaurants, and three independent guides in [destination]. For each, include the name, what makes it local, and how to book direct.\" Then call or email the places yourself to confirm they are still operating.",
      },
    ],
    faq: [
      {
        q: "What if I cannot find locally owned options?",
        a:
          "In some heavily developed destinations, almost everything is a chain. In those cases, look for franchises that are locally operated, tip generously, and spend more on experiences than on accommodation. You can also choose less-visited destinations where local ownership is still the norm.",
      },
    ],
  },
  {
    slug: "slow-travel-why-staying-longer-changes-everything",
    title: "Slow Travel: Why Staying Longer Changes Everything",
    excerpt:
      "Spending more time in one place is better for the environment, better for local businesses, and better for you.",
    domain: "ecology",
    date: "2026-05-18",
    readMinutes: 5,
    blocks: [
      { type: "h2", text: "The math is simple" },
      {
        type: "p",
        text:
          "A flight from New York to Rome produces about 1.2 tonnes of CO2. If you stay for a weekend, that is roughly 600 kg per day. If you stay for two weeks, it drops to about 86 kg per day. If you stay for a month, it is 40 kg per day. The flight is the same. The impact per day is not.",
      },
      { type: "h2", text: "Benefits beyond carbon" },
      {
        type: "ul",
        items: [
          "Local businesses benefit more from a traveler who stays two weeks than from two travelers who stay one week each. You build relationships, become a regular, and your spending compounds in the community.",
          "You learn more. A weekend gives you highlights. A month gives you understanding. You notice patterns, meet the same people twice, and start to belong a little.",
          "You stress less. Rushing between cities to tick off a list is exhausting. Staying put gives you space to be bored, which is where the best ideas come from.",
          "You spend less overall. Weekly apartment rentals cost far less per night than hotels. Cooking some of your own meals saves money and reduces packaging waste.",
        ],
      },
      { type: "h2", text: "How to start" },
      {
        type: "p",
        text:
          "Pick one destination for your next trip and stay twice as long as you normally would. Skip the second city. Rent an apartment instead of a hotel. Go to the same coffee shop every morning. Shop at the local market. Walk instead of taking transit. Let the place come to you instead of chasing it.",
      },
      {
        type: "ai",
        text:
          "Planning a slow trip is different from planning a quick one. Try: \"Please plan a two-week slow travel itinerary for [destination]. I want to stay in one neighborhood, shop at local markets, eat at the same few restaurants, and take day trips by train or bus. Suggest a home base, a weekly market routine, and three easy day trips. Prioritize locally owned everything.\"",
      },
    ],
    faq: [
      {
        q: "I only get two weeks of vacation. Can I still slow travel?",
        a:
          "Yes. Spend all two weeks in one place instead of splitting them between three cities. Even that small change makes a real difference in your carbon footprint per day and in the depth of your experience.",
      },
    ],
  },
  {
    slug: "fair-work-and-fair-play-tourism-done-right",
    title: "Fair Work and Fair Play: Tourism Done Right",
    excerpt:
      "When tourism creates good jobs instead of exploitative ones, everyone benefits: workers, travelers, and destinations alike.",
    domain: "employment",
    date: "2026-05-14",
    readMinutes: 6,
    blocks: [
      { type: "h2", text: "The hidden workforce" },
      {
        type: "p",
        text:
          "Behind every hotel check-in, every guided tour, every restaurant meal, there is a person doing that work. Tourism employs roughly 330 million people worldwide. Many of them earn low wages, work long hours during peak season, and receive no benefits during the off-season. Your trip depends on their labor. Their wellbeing should matter to you.",
      },
      { type: "h2", text: "What fair tourism work looks like" },
      {
        type: "ul",
        items: [
          "A living wage, not just a legal minimum. In many countries, the minimum wage is not enough to live on. Fair employers pay enough for their staff to support a family.",
          "Year-round employment or severance support. Seasonal work is common in tourism, but dumping workers without support for the off-season is not.",
          "Training and advancement. Good employers teach skills that transfer, not just task-specific routines. They promote from within.",
          "Safe conditions. Heat, chemicals, heavy lifting, boat safety: these are real risks in tourism work. Responsible operators invest in safety equipment and training.",
        ],
      },
      { type: "h2", text: "Your role as a traveler" },
      {
        type: "ul",
        items: [
          "Ask questions before you book. A company that treats its workers well is usually happy to talk about it.",
          "Tip directly and generously where tipping is the norm. Make sure the tip reaches the person who served you.",
          "Write reviews that mention staff treatment, not just your own comfort. This creates accountability.",
          "Choose community-based tourism where workers are also owners or decision-makers.",
        ],
      },
      {
        type: "ai",
        text:
          "Researching labor practices is hard. AI can draft the questions for you: \"Please write a short, polite email I can send to a tour operator in [destination] asking about their labor practices. Cover local hiring, wages relative to cost of living, working hours, seasonal contracts, and training. Keep the tone friendly but specific.\" Then send it and see how they respond. A good answer tells you a lot.",
      },
    ],
    faq: [
      {
        q: "How do I know if a company treats workers fairly if they do not advertise it?",
        a:
          "Look for signs. Do staff members seem relaxed and knowledgeable, or rushed and scripted? Do you see the same faces on repeat visits, suggesting low turnover? Does the company feature staff stories on its website? These are better indicators than any certification label.",
      },
    ],
  },
];

export function getPost(slug) {
  return POSTS.find((p) => p.slug === slug) || null;
}