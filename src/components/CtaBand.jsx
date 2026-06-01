import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

// A focused conversion call to action. Use at the end of articles and
// key pages to move readers toward planning and booking.
export default function CtaBand({
  title = "Ready to plan a trip that does good?",
  body = "Use our ethical travel guides and trusted booking partners to make your next journey kinder to people and planet.",
  to = "/guides",
  ctaLabel = "Explore the guides",
}) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ocean to-leaf text-white p-8 sm:p-10">
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
      <div className="relative sm:flex sm:items-center sm:justify-between sm:gap-8">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl leading-tight">{title}</h2>
          <p className="mt-2 text-white/90 font-medium">{body}</p>
        </div>
        <Link to={to} className="btn bg-white text-ink hover:bg-slate-100 mt-5 sm:mt-0 shrink-0">
          {ctaLabel}
          <Icon name="arrow" className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
