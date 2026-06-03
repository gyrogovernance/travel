import {
  ArrowRight,
  Bed,
  BookOpen,
  Building2,
  Bus,
  Car,
  CarTaxiFront,
  Check,
  ChevronDown,
  Coins,
  Compass,
  Copy,
  Handshake,
  Headphones,
  House,
  Info,
  Languages,
  Leaf,
  Mail,
  Map,
  Plane,
  Receipt,
  Route,
  Scale,
  Shield,
  Smartphone,
  Sparkles,
  Ticket,
  TrainFront,
  Users,
  Wifi,
} from "lucide-react";

const ICONS = {
  bed: Bed,
  building: Building2,
  bus: Bus,
  car: Car,
  coins: Coins,
  compass: Compass,
  handshake: Handshake,
  headphones: Headphones,
  book: BookOpen,
  leaf: Leaf,
  map: Map,
  plane: Plane,
  receipt: Receipt,
  route: Route,
  scale: Scale,
  shield: Shield,
  smartphone: Smartphone,
  spark: Sparkles,
  taxi: CarTaxiFront,
  ticket: Ticket,
  train: TrainFront,
  users: Users,
  wifi: Wifi,
  arrow: ArrowRight,
  check: Check,
  copy: Copy,
  mail: Mail,
  home: House,
  about: Info,
  chevron: ChevronDown,
  languages: Languages,
};

/** Semantic icons used across the site (domains, nav, CTAs). Brand logos: SocialIcon. */
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
