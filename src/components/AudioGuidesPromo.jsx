import audioGuidesImg from "../assets/audio_guides.webp";
import { wegotripLink } from "../affiliate.js";
import Icon from "./Icon.jsx";

function WeGoTripCta({ href, label, className = "btn-primary" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener sponsored nofollow"
      className={`${className} inline-flex`}
    >
      {label}
      <Icon name="arrow" className="w-4 h-4" />
    </a>
  );
}

/** WeGoTrip AI audio tour CTAs. Drive handles affiliate tracking on outbound links. */
export default function AudioGuidesPromo({
  variant = "featured",
  destinationName,
  destinationSlug,
  subId,
}) {
  const href = wegotripLink(
    subId ||
      (variant === "featured"
        ? "home-audio-promo"
        : destinationSlug
          ? `destination-${destinationSlug}-audio`
          : "audio-promo")
  );

  if (variant === "featured") {
    return (
      <section
        className="overflow-hidden rounded-4xl bg-cream ring-1 ring-black/5"
        aria-labelledby="audio-guides-promo-heading"
      >
        <div className="relative w-full aspect-[2/1] sm:aspect-[5/2] min-h-[180px] sm:min-h-[220px]">
          <img
            src={audioGuidesImg}
            alt="Traveler with a smartphone on a city street near the Eiffel Tower"
            className="absolute inset-0 h-full w-full object-cover object-[42%_center]"
            loading="lazy"
          />
        </div>
        <div className="p-6 sm:p-8 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">On the ground</span>
            <h2
              id="audio-guides-promo-heading"
              className="mt-3 text-2xl sm:text-3xl text-ink leading-tight"
            >
              Walk your plan with a{" "}
              <span className="gradient-text">self-guided audio tour</span>
            </h2>
          </div>
          <WeGoTripCta
            href={href}
            label="Explore WeGoTrip"
            className="btn-primary mt-5 sm:mt-0 shrink-0"
          />
        </div>
      </section>
    );
  }

  if (variant === "banner") {
    return (
      <div className="overflow-hidden rounded-3xl bg-cream ring-1 ring-black/5 grid sm:grid-cols-[1fr_min(38%,240px)]">
        <div className="p-6 sm:p-7 flex flex-col items-start justify-center">
          <span className="eyebrow w-fit">Audio tours</span>
          <h2 className="mt-3 text-xl sm:text-2xl text-ink leading-tight">
            6000+ Audio Tours and Museums Tickets for your favorite destinations.
          </h2>
          <WeGoTripCta href={href} label="WeGoTrip" className="btn-primary mt-5 w-fit" />
        </div>
        <div className="relative min-h-[140px] sm:min-h-0 sm:h-full">
          <img
            src={audioGuidesImg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[42%_center]"
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    const title = destinationName
      ? `Ready to explore ${destinationName}?`
      : "Ready to explore on foot?";
    return (
      <aside className="rounded-2xl overflow-hidden ring-1 ring-ocean/15 bg-gradient-to-br from-ocean/5 to-cream">
        <div className="flex flex-col sm:flex-row">
          <div className="relative sm:w-36 shrink-0 aspect-[16/10] sm:aspect-auto sm:min-h-[140px]">
            <img
              src={audioGuidesImg}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-5 sm:p-6 flex-1 min-w-0">
            <div className="flex items-center gap-2 text-ocean">
              <Icon name="headphones" className="w-4 h-4 shrink-0" />
              <span className="text-xs font-extrabold uppercase tracking-[0.12em]">
                Self-guided audio
              </span>
            </div>
            <h3 className="mt-2 text-lg text-ink leading-snug">{title}</h3>
            <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
              Personalize your experience with an AI-driven tour creator.
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener sponsored nofollow"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ocean hover:underline"
            >
              Create Personalized Audio Tours on WeGoTrip
              <Icon name="arrow" className="w-4 h-4" />
            </a>
          </div>
        </div>
      </aside>
    );
  }

  // compact
  return (
    <div className="card p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 bg-cream">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ocean text-white">
        <Icon name="headphones" className="w-5 h-5" />
      </span>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg text-ink">From prompt to pavement</h3>
        <p className="mt-1 text-sm text-slate-600 font-medium leading-relaxed">
          After your AI draft is ready, build a personalized audio tour on WeGoTrip and
          download it for offline exploring.
        </p>
      </div>
      <WeGoTripCta
        href={href}
        label="WeGoTrip"
        className="btn-ghost shrink-0 w-full sm:w-auto justify-center"
      />
    </div>
  );
}
