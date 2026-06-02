import {
  ArrowRight,
  BookOpen,
  Check,
  Coins,
  Compass,
  Copy,
  Handshake,
  Leaf,
  Mail,
  Plane,
  Shield,
  Sparkles,
} from "lucide-react";

const ICONS = {
  coins: Coins,
  handshake: Handshake,
  book: BookOpen,
  leaf: Leaf,
  plane: Plane,
  compass: Compass,
  shield: Shield,
  arrow: ArrowRight,
  check: Check,
  copy: Copy,
  spark: Sparkles,
  mail: Mail,
};

/** Semantic icons used across the site (domains, nav, CTAs). */
export default function Icon({
  name,
  className = "w-6 h-6",
  strokeWidth = 1.75,
  style,
}) {
  const LucideIcon = ICONS[name];
  if (!LucideIcon) return null;

  return (
    <LucideIcon
      className={className}
      style={style}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    />
  );
}
