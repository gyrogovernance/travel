import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";

export default function DomainCard({ domain }) {
  return (
    <Link
      to={`/domains/${domain.slug}`}
      className="card card-hover group overflow-hidden flex flex-col"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={domain.image}
          alt={domain.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 ease-smooth group-hover:scale-[1.03]"
        />
        <span
          className="absolute inset-0 opacity-40 mix-blend-multiply"
          style={{ backgroundColor: domain.color }}
        />
        <span className="absolute left-4 bottom-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-ink shadow">
          <Icon name={domain.icon} className="w-6 h-6" style={{ color: domain.color }} />
        </span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl text-ink">{domain.name}</h3>
        <p className="text-sm font-medium text-ocean mt-1">{domain.tagline}</p>
        <p className="text-sm text-slate-600 mt-3 leading-relaxed flex-1">{domain.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ocean">
          Explore the {domain.name} domain
          <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition" />
        </span>
      </div>
    </Link>
  );
}
