import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getDestination,
  DESTINATIONS,
  loadDestinationDetail,
} from "../data/destinations.js";
import { DOMAINS } from "../data/domains.js";
import { PREP_STEPS_HEADING } from "../data/atlasMethod.js";
import PromptCard from "../components/PromptCard.jsx";
import EthicalCompassBlock from "../components/EthicalCompassBlock.jsx";
import GyroscopePrepBlock from "../components/GyroscopePrepBlock.jsx";
import DestinationToursWidget from "../components/DestinationToursWidget.jsx";
import AudioGuidesPromo from "../components/AudioGuidesPromo.jsx";
import Seo from "../components/Seo.jsx";
import Icon from "../components/Icon.jsx";
import NotFound from "./NotFound.jsx";
import { absoluteUrl } from "../site.js";

export default function Destination() {
  const { slug } = useParams();
  const summary = getDestination(slug);
  const [dest, setDest] = useState(null);

  useEffect(() => {
    const s = getDestination(slug);
    if (!s) {
      setDest(null);
      return;
    }
    let cancelled = false;
    setDest(null);
    loadDestinationDetail(slug).then((detail) => {
      if (!cancelled) setDest(detail ?? s);
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (!summary) return <NotFound />;
  if (!dest) {
    return (
      <div className="container-content section-pad">
        <p className="text-slate-600 font-medium">Loading destination...</p>
      </div>
    );
  }

  const title = `${dest.name}, ${dest.country}`;
  const whyParas = dest.whyVisit ? dest.whyVisit.split("\n\n") : [];

  return (
    <div>
      <Seo
        title={title}
        description={dest.teaser}
        path={`/destinations/${dest.slug}`}
        image={absoluteUrl(dest.image)}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
          { name: dest.name, path: `/destinations/${dest.slug}` },
        ]}
      />

      <header className="relative overflow-hidden bg-ink text-white min-h-[280px] sm:min-h-[340px]">
        <img
          src={dest.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 hero-scrim" />
        <div className="container-content relative py-16 sm:py-20">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-200 hover:text-white"
          >
            <Icon name="arrow" className="w-4 h-4 rotate-180" />
            All destinations
          </Link>
          <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.14em] text-sky">
            Destination guide
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl leading-tight">{dest.name}</h1>
          <p className="mt-2 text-lg text-slate-200 font-medium">{dest.country}</p>
          {dest.recommendedLength ? (
            <p className="mt-4 text-sm text-slate-300 font-medium">
              Suggested length: {dest.recommendedLength}
            </p>
          ) : null}
        </div>
      </header>

      <article className="container-content section-pad max-w-3xl">
        {dest.intro ? (
          <p className="text-lg text-slate-700 font-medium leading-relaxed">{dest.intro}</p>
        ) : null}

        <section className="mt-8">
          <span className="eyebrow">Step 1: Choices</span>
          <h2 className="mt-3 text-2xl sm:text-3xl text-ink">Why visit</h2>
          {whyParas.length > 0 ? (
            <div className="mt-4 space-y-4 text-slate-700 font-medium leading-relaxed">
              {whyParas.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          ) : null}
          <EthicalCompassBlock compass={dest.ethicalCompass} />
        </section>

        <section className="mt-10">
          <span className="eyebrow">Step 2: Preparation</span>
          <h2 className="mt-3 text-2xl sm:text-3xl text-ink">Plan before you go</h2>
          <p className="mt-2 text-slate-700 font-medium">
            Work through the {PREP_STEPS_HEADING.toLowerCase()} below, then use the anchor
            spots and essentials as your skeleton itinerary.
          </p>
          <GyroscopePrepBlock prep={dest.gyroscopePrep} />

          {dest.anchorSpots?.length > 0 ? (
            <div className="mt-8">
              <h3 className="text-lg text-ink">Top 5 anchor spots</h3>
              <ol className="mt-4 space-y-3 list-decimal list-inside text-slate-700 font-medium leading-relaxed">
                {dest.anchorSpots.map((spot) => (
                  <li key={spot} className="pl-1">
                    {spot}
                  </li>
                ))}
              </ol>
            </div>
          ) : null}

          <div className="mt-8 atlas-panel p-5 sm:p-6">
            <h3 className="text-lg text-ink">Practical essentials</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 font-medium">
              {dest.recommendedLength ? (
                <li>
                  <span className="font-bold text-ink">Length: </span>
                  {dest.recommendedLength}
                </li>
              ) : null}
              <li>
                <span className="font-bold text-ink">Transport: </span>
                {dest.transportHint}
              </li>
            </ul>
          </div>
        </section>

        {dest.prompt ? (
          <section className="mt-10">
            <span className="eyebrow">Step 3: Delivery</span>
            <h2 className="mt-3 text-2xl sm:text-3xl text-ink">Your AI planning prompt</h2>
            <p className="mt-2 text-slate-700 font-medium">
              Copy this into your own AI assistant. Fill in the brackets, then verify with official
              sources and people who live in {dest.name}.
            </p>
            <div className="mt-6">
              <PromptCard title={`Plan ${dest.name}`} prompt={dest.prompt} />
            </div>
            <div className="mt-8">
              <AudioGuidesPromo
                variant="inline"
                destinationName={dest.name}
                destinationSlug={dest.slug}
              />
            </div>
          </section>
        ) : (
          <div className="mt-10">
            <AudioGuidesPromo
              variant="inline"
              destinationName={dest.name}
              destinationSlug={dest.slug}
            />
          </div>
        )}

        <aside className="mt-10 rounded-2xl bg-sand p-5 sm:p-6 ring-1 ring-black/5">
          <h2 className="text-lg text-ink">Go deeper</h2>
          <ul className="mt-3 space-y-2 text-sm font-semibold">
            <li>
              <Link to="/guides/how-to-plan-ethical-travel-with-ai" className="text-ocean hover:underline">
                How to plan ethical travel with AI
              </Link>
            </li>
            <li>
              <Link to="/prompts" className="text-ocean hover:underline">
                More AI prompts by domain
              </Link>
            </li>
            {DOMAINS.map((d) => (
              <li key={d.slug}>
                <Link to={`/domains/${d.slug}`} className="text-ocean hover:underline">
                  {d.name} domain guide
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </article>

      {dest.toursCityId ? (
        <section className="container-content section-pad pt-0">
          <DestinationToursWidget
            destinationName={dest.name}
            destinationSlug={dest.slug}
            cityId={dest.toursCityId}
          />
        </section>
      ) : null}

      <section className="bg-cream border-t border-black/5">
        <div className="container-content section-pad">
          <h2 className="text-xl text-ink">More in {dest.region}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {DESTINATIONS.filter((d) => d.region === dest.region && d.slug !== dest.slug)
              .slice(0, 8)
              .map((d) => (
                <Link
                  key={d.slug}
                  to={`/destinations/${d.slug}`}
                  className="chip bg-white hover:bg-ocean/10 text-ink font-bold"
                >
                  {d.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
