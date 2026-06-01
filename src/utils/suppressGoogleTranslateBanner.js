// Google Translate adds a top banner and shifts body down after translation.
// Hide the banner and reset layout so our sticky header stays usable.
export function suppressGoogleTranslateBanner() {
  if (typeof document === "undefined") return;

  const html = document.documentElement;
  const body = document.body;
  if (!body) return;

  html.style.setProperty("margin-top", "0", "important");
  body.style.setProperty("top", "0", "important");
  body.style.setProperty("margin-top", "0", "important");
  body.style.setProperty("padding-top", "0", "important");
  body.style.setProperty("position", "static", "important");

  const hideEl = (el) => {
    el.style.setProperty("display", "none", "important");
    el.style.setProperty("visibility", "hidden", "important");
    el.style.setProperty("height", "0", "important");
    el.style.setProperty("max-height", "0", "important");
    el.style.setProperty("width", "0", "important");
    el.style.setProperty("overflow", "hidden", "important");
    el.style.setProperty("pointer-events", "none", "important");
    el.style.setProperty("position", "absolute", "important");
    el.style.setProperty("left", "-9999px", "important");
  };

  const isOurs = (el) => {
    const root = document.getElementById("root");
    return root?.contains(el) || el.closest(".google-translate-engine");
  };

  const hide =
    ".goog-te-banner-frame, iframe.goog-te-banner-frame, .goog-te-ftab, " +
    "#goog-gt-vt, #goog-gt-tt, .goog-te-balloon-frame";

  document.querySelectorAll(hide).forEach(hideEl);

  document.querySelectorAll("body > iframe, body > .skiptranslate").forEach((el) => {
    const name = el.className?.toString() || "";
    if (
      name.includes("goog-te") ||
      name.includes("skiptranslate") ||
      el.id === "goog-gt-vt"
    ) {
      hideEl(el);
    }
  });

  // Floating Google widget (VIpgJd-*), e.g. corner "Translate" chip over the logo.
  document.querySelectorAll('[class*="VIpgJd-"]').forEach((el) => {
    if (!isOurs(el)) hideEl(el);
  });
}

export function watchGoogleTranslateBanner() {
  suppressGoogleTranslateBanner();

  const observer = new MutationObserver(suppressGoogleTranslateBanner);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"],
  });

  return () => observer.disconnect();
}
