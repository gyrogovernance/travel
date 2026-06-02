/** Inject a Travelpayouts widget script into a container (static-site safe). */
export function injectTravelpayoutsScript(container, src) {
  if (!container || !src) return () => {};

  if (container.dataset.tpLoaded === "1") return () => {};

  container.dataset.tpLoaded = "1";
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  script.charset = "utf-8";
  container.appendChild(script);

  return () => {
    container.innerHTML = "";
    delete container.dataset.tpLoaded;
  };
}

/** Inject a script tag into document.head (White Label main loader). */
export function injectHeadScript(src, attrs = {}) {
  if (!src) return () => {};

  const existing = document.querySelector(`script[data-tp-head="${src}"]`);
  if (existing) return () => {};

  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  script.charset = "utf-8";
  script.dataset.tpHead = src;
  Object.entries(attrs).forEach(([key, value]) => {
    if (value != null) script.setAttribute(key, value);
  });
  document.head.appendChild(script);

  return () => {
    script.remove();
  };
}
