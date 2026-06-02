import { useEffect } from "react";
import Seo from "../components/Seo.jsx";
import TravelWidget from "../components/TravelWidget.jsx";
import TravelpayoutsScript from "../components/TravelpayoutsScript.jsx";
import {
  buildPopularDestinationsWidgetSrc,
  mountFlightMetaSearch,
} from "../affiliate.js";
import "../styles/flight-search-tpwl.css";

export default function FlightSearch() {
  useEffect(() => {
    mountFlightMetaSearch();
  }, []);

  const popularDestinationsSrc = buildPopularDestinationsWidgetSrc();

  return (
    <div className="flight-search-page">
      <Seo
        title="Search Flights"
        description="Search hundreds of travel sites at once to compare flight prices. Ethical travel planning from Gyro Governance."
        path="/search/flights"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Search flights", path: "/search/flights" },
        ]}
      />

      <section className="bg-cream border-b border-black/5">
        <div className="container-content py-10 sm:py-12">
          <span className="eyebrow">Search and book</span>
          <h1 className="mt-3 text-3xl sm:text-5xl text-ink leading-tight text-balance">
            Search flights
          </h1>
          <p className="mt-3 text-lg text-slate-700 font-medium max-w-2xl leading-relaxed">
            We search hundreds of travel sites at once to help you compare fares. Fly
            direct when you can and stay longer to make each flight count.
          </p>
        </div>
      </section>

      <section className="bg-[var(--tpwl-search-form-background)] border-b border-black/5">
        <div className="container-content py-6 sm:py-8">
          <div id="tpwl-search" className="tpwl-search-slot" />
        </div>
      </section>

      <section className="bg-[var(--tpwl-search-result-background)]">
        <div className="container-content py-8 sm:py-10">
          <div id="tpwl-tickets" className="tpwl-tickets-slot" />
        </div>

        <div className="container-content pb-12 sm:pb-14">
          <h2 className="text-2xl sm:text-3xl text-ink text-center">Popular destinations</h2>
          <TravelpayoutsScript
            src={popularDestinationsSrc}
            className="tpwl-popular-destinations mt-8"
            stripPoweredBy
          />
          <div className="mt-6">
            <TravelWidget widgetKey="flightCompensation" />
          </div>
        </div>
      </section>
    </div>
  );
}
