export const GA_MEASUREMENT_ID = "G-GXH2PHP7B2";

/** Send a GA4 page view for client-side route changes (React Router). */
export function trackPageView(pagePath) {
  if (typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}
