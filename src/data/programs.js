import { brandLink } from "../affiliate.js";

// Curated Travelpayouts programs grouped by category. These are all in
// the selected program list. We link to the real brand sites and Drive
// converts them to affiliate links on click, adding the correct partner
// id and tracking. Each gets a SubID of "resources" so we can see in
// the Performance report which clicks came from this page.
//
// All categories map to our four ethical travel domains so the page
// stays on message rather than being a generic deal dump.

function link(brandUrl) {
  return brandLink(brandUrl, "resources");
}

export const PROGRAM_CATEGORIES = [
  {
    id: "stays",
    title: "Stays and accommodation",
    domain: "Economy",
    intro:
      "Where you sleep decides how much money stays local. Favor independent and locally owned places where you can.",
    programs: [
      {
        name: "Booking.com",
        icon: "bed",
        note: "Huge inventory including many small, family-run stays.",
        url: link("https://www.booking.com"),
      },
      {
        name: "Hostelworld",
        icon: "users",
        note: "Hostels and social stays, often locally run.",
        url: link("https://www.hostelworld.com"),
      },
      {
        name: "Agoda",
        icon: "building",
        note: "Strong coverage across Asia for local properties.",
        url: link("https://www.agoda.com"),
      },
    ],
  },
  {
    id: "experiences",
    title: "Tours and experiences",
    domain: "Employment",
    intro:
      "Book experiences run by local guides who are paid fairly. Smaller groups usually mean better conditions and a better trip.",
    programs: [
      {
        name: "GetYourGuide",
        icon: "compass",
        note: "Wide range of local tours and activities.",
        url: link("https://www.getyourguide.com"),
      },
      {
        name: "Viator",
        icon: "map",
        note: "Large catalog of guided experiences worldwide.",
        url: link("https://www.viator.com"),
      },
      {
        name: "WeGoTrip",
        icon: "headphones",
        note: "AI custom audio tours and offline self-guided routes worldwide.",
        url: link("https://wegotrip.com"),
      },
      {
        name: "Tiqets",
        icon: "ticket",
        note: "Skip-the-line tickets for museums and attractions.",
        url: link("https://www.tiqets.com"),
      },
    ],
  },
  {
    id: "ground",
    title: "Trains, buses, and transfers",
    domain: "Ecology",
    intro:
      "Ground transport is usually far lower carbon than flying. Use these to plan trains, buses, and fair-priced transfers.",
    programs: [
      {
        name: "Omio",
        icon: "train",
        note: "Compare trains, buses, and ferries across Europe.",
        url: link("https://omio.com"),
      },
      {
        name: "12Go",
        icon: "bus",
        note: "Trains, buses, and ferries across Asia.",
        url: link("https://12go.asia"),
      },
      {
        name: "Welcome Pickups",
        icon: "car",
        note: "Friendly local airport transfers.",
        url: link("https://www.welcomepickups.com"),
      },
      {
        name: "Kiwitaxi",
        icon: "taxi",
        note: "Pre-booked transfers in many countries.",
        url: link("https://kiwitaxi.com"),
      },
    ],
  },
  {
    id: "connectivity",
    title: "Connectivity (eSIM)",
    domain: "Education",
    intro:
      "A travel eSIM avoids plastic SIM waste and roaming bills, and keeps you connected so you can book direct with locals.",
    programs: [
      {
        name: "Airalo",
        icon: "smartphone",
        note: "Popular eSIM marketplace with country and regional plans.",
        url: link("https://www.airalo.com"),
      },
      {
        name: "Yesim",
        icon: "wifi",
        note: "Regional and global data plans with a long booking window.",
        url: link("https://yesim.app"),
      },
      {
        name: "Saily",
        icon: "smartphone",
        note: "Simple regional and global data plans.",
        url: link("https://saily.com"),
      },
    ],
  },
  {
    id: "protection",
    title: "Insurance and protection",
    domain: "Employment",
    intro:
      "Good cover protects you and reduces the burden on local services if something goes wrong abroad.",
    programs: [
      {
        name: "EKTA",
        icon: "shield",
        note: "Travel medical insurance for international trips.",
        url: link("https://ekta.travel"),
      },
      {
        name: "AirHelp",
        icon: "scale",
        note: "Help claiming compensation for delayed or canceled flights.",
        url: link("https://www.airhelp.com"),
      },
      {
        name: "Compensair",
        icon: "receipt",
        note: "Flight delay and cancellation compensation.",
        url: link("https://compensair.com"),
      },
    ],
  },
  {
    id: "flights",
    title: "Flights (when you must)",
    domain: "Ecology",
    intro:
      "When flying is unavoidable, choose direct routes and stay longer so each flight counts for more.",
    programs: [
      {
        name: "Aviasales",
        icon: "plane",
        note: "Flight metasearch to compare fares across airlines.",
        url: link("https://aviasales.com"),
      },
      {
        name: "Kiwi.com",
        icon: "route",
        note: "Creative routings that can cut cost and layovers.",
        url: link("https://www.kiwi.com"),
      },
    ],
  },
];
