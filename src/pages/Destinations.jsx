import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  DESTINATIONS,
  REGIONS,
  destinationsByRegion,
} from "../data/destinations.js";
import DestinationCard from "../components/DestinationCard.jsx";
import Seo from "../components/Seo.jsx";
import Icon from "../components/Icon.jsx";

export default function Destinations() {
  const [region, setRegion] = useState("all");

  const shown = useMemo(() => {
    if (region === "all") return DESTINATIONS;
    return destinationsByRegion(region);
  }, [region]);

  return (
    <div>
      <Seo
        title="Destinations"
        description="Ethical Travel Atlas: 100 mainstream destinations with anchor spots, practical essentials, and copy-ready AI planning prompts."
        path="/destinations"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
        ]}
      />

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-ocean/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-leaf/30 blur-3xl" />
        <div className="container-content py-20 relative">
          <span className="eyebrow bg-white/10 text-white">Ethical Travel Atlas</span>
          <h1 className="mt-4 text-4xl sm:text-6xl leading-tight">
            100 destinations worth the <span className="text-sky">journey</span>
          </h1>
          <p className="mt-4 text-lg text-slate-200 max-w-2xl font-medium">
            Iconic places with ethical context, five anchor spots each, and a
            destination-specific AI prompt you can copy into your own assistant.
          </p>
          <Link to="/prompts" className="btn-accent mt-8 inline-flex">
            Browse general AI prompts
            <Icon name="arrow" className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="container-content section-pad">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setRegion("all")}
            className={`chip transition ${
              region === "all" ? "bg-ocean text-white" : "bg-sand text-ink hover:bg-ocean/10"
            }`}
          >
            All ({DESTINATIONS.length})
          </button>
          {REGIONS.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={`chip transition ${
                region === r ? "bg-ocean text-white" : "bg-sand text-ink hover:bg-ocean/10"
              }`}
            >
              {r} ({destinationsByRegion(r).length})
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((d) => (
            <DestinationCard key={d.slug} destination={d} />
          ))}
        </div>
      </section>
    </div>
  );
}
