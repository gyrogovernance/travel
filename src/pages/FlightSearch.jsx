import { useEffect } from "react";
import Seo from "../components/Seo.jsx";
import TravelWidget from "../components/TravelWidget.jsx";
import { FLIGHT_META_SEARCH, mountFlightMetaSearch } from "../affiliate.js";
import "../styles/flight-search-tpwl.css";

function loadPopularDestinationWeedles(container) {
  if (!container || container.dataset.weedlesLoaded === "1") return;

  const extra = window.TPWL_EXTRA;
  const { weedle, trs, shmarker, locale, currency } = FLIGHT_META_SEARCH;
  const host = weedle.widgetHost.replace(/\/$/, "");

  const params = extra
    ? {
        currency: String(extra.currency || currency).toLowerCase(),
        trs: extra.trs || trs,
        shmarker: extra.marker || shmarker,
        target_host: extra.domain || "",
        locale: extra.locale || locale,
        primary: extra.link_color ? `%23${extra.link_color}` : `%23${weedle.linkColor}`,
      }
    : {
        currency: currency.toLowerCase(),
        trs,
        shmarker,
        target_host: "www.aviasales.com",
        locale,
        primary: `%23${weedle.linkColor}`,
      };

  FLIGHT_META_SEARCH.popularDestinations.forEach((destination) => {
    const slot = container.querySelector(`[data-destination="${destination}"]`);
    if (!slot || slot.dataset.weedleLoaded === "1") return;

    slot.dataset.weedleLoaded = "1";
    const script = document.createElement("script");
    script.async = true;
    const q = new URLSearchParams({
      currency: params.currency,
      trs: params.trs,
      shmarker: params.shmarker,
      destination,
      target_host: params.target_host,
      locale: params.locale,
      limit: String(weedle.limit),
      powered_by: "false",
      primary: params.primary,
      promo_id: weedle.promoId,
      campaign_id: weedle.campaignId,
    });
    script.src = `${host}/content?${q.toString()}`;
    slot.appendChild(script);
  });

  container.dataset.weedlesLoaded = "1";
}

export default function FlightSearch() {
  useEffect(() => {
    mountFlightMetaSearch();

    const weedleRoot = document.getElementById("tpwl-widget-weedles");
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      if (window.TPWL_EXTRA || attempts > 40) {
        loadPopularDestinationWeedles(weedleRoot);
        window.clearInterval(timer);
      }
    }, 400);

    return () => window.clearInterval(timer);
  }, []);

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
          <div
            id="tpwl-widget-weedles"
            className="tpwl-weedles mt-8"
          >
            {FLIGHT_META_SEARCH.popularDestinations.map((code) => (
              <div
                key={code}
                className="tpwl-weedle rounded-2xl bg-cream ring-1 ring-black/5 overflow-hidden"
                data-destination={code}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="container-content section-pad border-t border-black/5">
        <div className="max-w-xl">
          <TravelWidget widgetKey="flightCompensation" />
        </div>
      </section>
    </div>
  );
}
