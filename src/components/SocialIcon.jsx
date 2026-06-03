import { getSocialIcon } from "../icons/social.js";

/**
 * Renders a brand logo from the social icon library (Simple Icons paths).
 */
export default function SocialIcon({ name, className = "w-5 h-5", style }) {
  const icon = getSocialIcon(name);
  if (!icon) return null;

  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      role="img"
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
