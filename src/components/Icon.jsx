// Lightweight inline SVG icon set. Stroke based so they inherit color.
const paths = {
  coins: (
    <>
      <ellipse cx="8" cy="6" rx="5" ry="2.4" />
      <path d="M3 6v4c0 1.3 2.2 2.4 5 2.4s5-1.1 5-2.4V6" />
      <ellipse cx="16" cy="14" rx="5" ry="2.4" />
      <path d="M11 14v4c0 1.3 2.2 2.4 5 2.4s5-1.1 5-2.4v-4" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 11l4-4 4 3 3-2 4 4" />
      <path d="M7 14l3 3 2-2 3 3" />
      <path d="M21 7l-4 4" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 012-2h6v16H6a2 2 0 00-2 2V5z" />
      <path d="M20 5a2 2 0 00-2-2h-6v16h6a2 2 0 012 2V5z" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C5 11 11 5 19 5c0 8-6 14-14 14z" />
      <path d="M5 19c4-4 8-6 11-7" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12l4 4 10-10" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
};

export default function Icon({ name, className = "w-6 h-6", strokeWidth = 1.7, style }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {paths[name] || null}
    </svg>
  );
}
