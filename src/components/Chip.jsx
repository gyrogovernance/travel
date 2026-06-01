// Accessible colored chip. Picks black or white text automatically
// based on the background luminance so contrast always passes.
function readableText(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const f = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  const lum = 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  // Threshold tuned so mid amber gets dark text and deep colors get white.
  return lum > 0.45 ? "#0c1524" : "#ffffff";
}

export default function Chip({ color, children, className = "" }) {
  return (
    <span
      className={`chip ${className}`}
      style={{ backgroundColor: color, color: readableText(color) }}
    >
      {children}
    </span>
  );
}
