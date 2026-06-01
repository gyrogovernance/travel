import { withMarker } from "../affiliate.js";

// Curated Travelpayouts programs grouped by category. These are all in
// the selected program list and are deep linked through tp.media with
// the site marker. Each gets a SubID of "resources" so we can see in
// the Performance report which clicks came from this page.
//
// All categories map to our four ethical travel domains so the page
// stays on message rather than being a generic deal dump.
function link(brandUrl) {
  return withMarker(`https://tp.media/r?u=${encodeURIComponent(brandUrl)}`, "resources");
}

export const PROGRAM_CATEGORIES = [
  {
    id: "stays",
    title: "Stays and accommodation",
    domain: "Economy",
    intro:
      "Where you sleep decides how much money stays local. Favor independent and locally owned places where you can.",
    programs: [
      { name: "Booking.com", reward: "varies", note: "Huge inventory including many small, family run stays.", url: link("https://www.booking.com") },
      { name: "Hostelworld", reward: "up to high", note: "Hostels and social stays, often locally run.", url: link("https://www.hostelworld.com") },
      { name: "Agoda", reward: "varies", note: "Strong coverage across Asia for local properties.", url: link("https://www.agoda.com") },
    ],
  },
  {
    id: "experiences",
    title: "Tours and experiences",
    domain: "Employment",
    intro:
      "Book experiences run by local guides who are paid fairly. Smaller groups usually mean better conditions and a better trip.",
    programs: [
      { name: "GetYourGuide", reward: "up to 8%", note: "Wide range of local tours and activities.", url: link("https://www.getyourguide.com") },
      { name: "Viator", reward: "varies", note: "Large catalog of guided experiences worldwide.", url: link("https://www.viator.com") },
      { name: "WeGoTrip", reward: "up to 41.5%", note: "Self guided audio tours, low overhead and high reward.", url: link("https://wegotrip.com") },
      { name: "Tiqets", reward: "3.5 to 8%", note: "Skip the line tickets for museums and attractions.", url: link("https://www.tiqets.com") },
    ],
  },
  {
    id: "ground",
    title: "Trains, buses, and transfers",
    domain: "Ecology",
    intro:
      "Ground transport is usually far lower carbon than flying. Use these to plan trains, buses, and fair priced transfers.",
    programs: [
      { name: "Omio", reward: "varies", note: "Compare trains, buses, and ferries across Europe.", url: link("https://omio.com") },
      { name: "12Go", reward: "varies", note: "Trains, buses, and ferries across Asia.", url: link("https://12go.asia") },
      { name: "Welcome Pickups", reward: "8 to 9%", note: "Friendly local airport transfers.", url: link("https://www.welcomepickups.com") },
      { name: "Kiwitaxi", reward: "9 to 11%", note: "Pre booked transfers in many countries.", url: link("https://kiwitaxi.com") },
    ],
  },
  {
    id: "connectivity",
    title: "Connectivity (eSIM)",
    domain: "Ecology",
    intro:
      "A travel eSIM avoids plastic SIM waste and roaming bills, and keeps you connected to book directly with locals.",
    programs: [
      { name: "Airalo", reward: "12%", note: "Popular eSIM marketplace with country and regional plans.", url: link("https://www.airalo.com") },
      { name: "Yesim", reward: "18%", note: "High reward and a long 90 day cookie.", url: link("https://yesim.app") },
      { name: "Saily", reward: "15%", note: "Simple regional and global data plans.", url: link("https://saily.com") },
    ],
  },
  {
    id: "protection",
    title: "Insurance and protection",
    domain: "Employment",
    intro:
      "Good cover protects you and reduces the burden on local services if something goes wrong abroad.",
    programs: [
      { name: "EKTA", reward: "25%", note: "Travel medical insurance, strong reward rate.", url: link("https://ekta.travel") },
      { name: "AirHelp", reward: "15 to 16.6%", note: "Help claiming compensation for delayed or canceled flights.", url: link("https://www.airhelp.com") },
      { name: "Compensair", reward: "fixed fee", note: "Flight delay and cancellation compensation.", url: link("https://compensair.com") },
    ],
  },
  {
    id: "flights",
    title: "Flights (when you must)",
    domain: "Ecology",
    intro:
      "When flying is unavoidable, choose direct routes and stay longer so each flight counts for more.",
    programs: [
      { name: "Aviasales", reward: "up to 40%", note: "Flight metasearch with the highest reward in the network.", url: link("https://aviasales.com") },
      { name: "Kiwi.com", reward: "3%", note: "Creative routings that can cut cost and layovers.", url: link("https://www.kiwi.com") },
    ],
  },
];
