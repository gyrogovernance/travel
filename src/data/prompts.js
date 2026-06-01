// AI prompts that readers can copy into their own AI assistant to plan
// ethical, community minded trips. Each prompt maps to one of our four
// domains so the page stays on message. Keep the voice practical and
// kind, and never use em dashes or en dashes.
//
// Add new prompts by appending to a category's "items" array.

export const PROMPT_CATEGORIES = [
  {
    id: "plan-a-moral-trip",
    title: "Plan a moral trip",
    domain: "Economy",
    intro:
      "Turn a rough idea into an itinerary that keeps money in local hands and avoids extractive tourism.",
    items: [
      {
        title: "Build a locally rooted itinerary",
        prompt:
          "Act as an ethical travel planner. I am visiting [DESTINATION] for [NUMBER] days in [MONTH]. Build a day by day itinerary that keeps as much of my spending as possible with locally owned businesses. For each day, suggest a family run place to stay, two locally owned places to eat, and one experience led by a local cooperative or guide. Avoid large international chains and all inclusive resorts. Explain briefly why each choice supports the local economy.",
      },
      {
        title: "Spot and avoid economic leakage",
        prompt:
          "I am considering this trip: [PASTE PLAN OR LINKS]. Review it and flag anything where most of my money would leave the local economy, such as foreign owned resorts or prepaid foreign packages. For each issue, suggest a locally owned alternative of similar quality and price.",
      },
      {
        title: "Shoulder season and lesser known towns",
        prompt:
          "I want to avoid overtourism in [REGION]. Suggest three lesser known towns near the popular spots that would benefit from visitors, the best shoulder season month to go, and one reason each place is worth my time. Keep it realistic for someone using public transport.",
      },
    ],
  },
  {
    id: "make-friends",
    title: "Make friends locally and abroad",
    domain: "Education",
    intro:
      "Connect with people respectfully, learn a little of the language, and understand local customs before you arrive.",
    items: [
      {
        title: "Learn ten useful phrases",
        prompt:
          "Teach me ten useful phrases in [LANGUAGE] for a respectful first visit to [PLACE]. Include greetings, please and thank you, asking for help, and one phrase to show I am trying to learn. Add a simple phonetic guide for each, and one note on a common politeness custom I should know.",
      },
      {
        title: "Respectful ways to meet locals",
        prompt:
          "I want to meet local people in [PLACE] in a respectful, non touristy way. Suggest five settings where travelers and locals genuinely mix, such as community events, language exchanges, markets, or volunteering. For each, give one tip on etiquette and one thing to avoid so I do not come across as intrusive.",
      },
      {
        title: "Cultural context briefing",
        prompt:
          "Give me a short, honest briefing on [PLACE] before I visit: key history I should understand, current social issues to be sensitive about, dress and photography norms, and topics that are welcome or best avoided in conversation. Keep it balanced and avoid stereotypes.",
      },
    ],
  },
  {
    id: "empower-communities",
    title: "Empower communities",
    domain: "Employment",
    intro:
      "Choose operators and activities that pay people fairly and reinvest in the places you visit.",
    items: [
      {
        title: "Vet a tour operator",
        prompt:
          "Help me judge whether this tour operator is ethical: [PASTE NAME OR LINK]. Give me five specific questions to ask them about how they pay and protect guides and staff, group sizes, animal and porter welfare, and how they reinvest in the community. Tell me what good and bad answers sound like.",
      },
      {
        title: "Find community led experiences",
        prompt:
          "Suggest community led or cooperative run experiences in [PLACE] where the people doing the work clearly benefit, such as homestays, craft workshops, or guided walks run by residents. For each, note how to tell it is genuinely community based rather than marketed that way.",
      },
      {
        title: "Tip and pay fairly",
        prompt:
          "Explain fair tipping and pricing norms in [PLACE] for guides, drivers, and hospitality staff. Tell me when tipping helps, when it is unusual, and how to pay people directly and respectfully where wages are low.",
      },
    ],
  },
  {
    id: "tread-lightly",
    title: "Tread lightly on nature",
    domain: "Ecology",
    intro:
      "Cut the carbon of your trip, protect wildlife, and reduce the waste you leave behind.",
    items: [
      {
        title: "Plan a lower carbon route",
        prompt:
          "Plan the lowest carbon realistic route for a trip from [ORIGIN] to [DESTINATION] and back. Prefer trains, buses, and ferries for legs where they are practical, and only use flights where there is no reasonable alternative. Show the route as segments with rough travel times, and note one scenic highlight of the ground travel.",
      },
      {
        title: "Wildlife the right way",
        prompt:
          "I want to see wildlife in [PLACE] responsibly. Recommend ethical ways to observe animals in the wild, warn me about attractions that rely on captivity or feeding, and give me three questions to ask before booking any wildlife experience.",
      },
      {
        title: "Low waste packing list",
        prompt:
          "Create a low waste packing list for a [NUMBER] day trip to [PLACE] in [SEASON]. Focus on reusable items that cut single use plastic, keep it light enough for ground travel, and note anything specific to the local climate or customs.",
      },
    ],
  },
];
