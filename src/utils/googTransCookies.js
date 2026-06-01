const EXPIRED = "Thu, 01 Jan 1970 00:00:00 GMT";

function cookieDomains() {
  const host = window.location.hostname;
  const out = new Set([""]);

  if (host) {
    out.add(host);
    if (host.startsWith("www.")) out.add(host.slice(4));
    const parts = host.split(".");
    if (parts.length >= 2) out.add(`.${parts.slice(-2).join(".")}`);
    if (parts.length >= 3) out.add(`.${parts.join(".")}`);
  }

  return [...out];
}

export function getGoogTransCookie() {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : "";
}

export function clearGoogTransCookies() {
  for (const domain of cookieDomains()) {
    const base = `googtrans=;expires=${EXPIRED};path=/`;
    document.cookie = domain ? `${base};domain=${domain}` : base;
    document.cookie = domain
      ? `${base};domain=${domain};Max-Age=0`
      : `${base};Max-Age=0`;
  }

  try {
    localStorage.removeItem("googtrans");
    sessionStorage.removeItem("googtrans");
  } catch {
    // Ignore private mode.
  }
}

export function setGoogTransCookie(value) {
  const secure = window.location.protocol === "https:" ? ";Secure" : "";
  const base = `googtrans=${value};path=/;max-age=31536000;SameSite=Lax${secure}`;

  document.cookie = base;
  for (const domain of cookieDomains()) {
    if (domain) document.cookie = `${base};domain=${domain}`;
  }
}

export function applyLanguage(code) {
  const url = new URL(window.location.href);
  url.hash = "";
  url.searchParams.delete("lang");

  clearGoogTransCookies();
  document.documentElement.classList.remove("translated-ltr", "translated-rtl");

  if (code && code !== "en") {
    setGoogTransCookie(`/en/${code}`);
    url.searchParams.set("lang", code);
  }

  window.location.replace(url.toString());
}
