import { Link } from "react-router-dom";
import { SITE } from "../site.js";

export default function SiteLogo({ className = "", onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Gyro Governance Ethical Travel home"
      className={`flex items-center gap-2.5 shrink-0 ${className}`.trim()}
    >
      <img
        src={SITE.travelIcon}
        alt=""
        width={40}
        height={40}
        className="size-10 shrink-0 rounded-full"
      />
      {/* Added whitespace-nowrap to prevent the text from wrapping */}
      <span className="flex flex-col translate-y-[3.5px] text-left whitespace-nowrap">
        <span className="text-[8px] font-extrabold uppercase tracking-[0.15em] text-white/55 leading-none">
          Gyro Governance
        </span>
        <span className="font-display text-[14px] text-slate-200 leading-[1.5] -mt-0.5">
          Ethical Travel
        </span>
      </span>
    </Link>
  );
}