import { SOCIAL_LINKS } from "../site.js";
import SocialIcon from "./SocialIcon.jsx";

const VARIANTS = {
  footer: {
    list: "flex items-center gap-3",
    link: "inline-flex rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white",
    icon: "h-5 w-5",
  },
  nav: {
    list: "flex items-center gap-0.5",
    link: "inline-flex rounded-full p-1.5 text-slate-300 transition hover:bg-white/10 hover:text-white",
    icon: "h-5 w-5",
  },
};

export default function SocialLinks({ className = "", variant = "footer" }) {
  const styles = VARIANTS[variant] ?? VARIANTS.footer;

  return (
    <ul
      className={`${styles.list} ${className}`.trim()}
      aria-label="Social media"
    >
      {SOCIAL_LINKS.map(({ id, label, href }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`${label} (opens in new tab)`}
          >
            <SocialIcon name={id} className={styles.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
