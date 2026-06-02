import { Link } from "react-router-dom";
import { PROMPT_CATEGORIES } from "../data/prompts.js";
import GyroscopeOpsOverview from "../components/GyroscopeOpsOverview.jsx";
import PromptCard from "../components/PromptCard.jsx";
import CtaBand from "../components/CtaBand.jsx";
import Icon from "../components/Icon.jsx";
import Seo from "../components/Seo.jsx";

const domainColors = {
  Economy: "#0a6e7c",
  Employment: "#d98c2b",
  Education: "#2f7d4c",
  Ecology: "#13a3b5",
};

export default function Prompts() {
  return (
    <div>
      <Seo
        title="AI Travel Prompts"
        description="Copy ready AI prompts that help you plan ethical trips, make friends locally and abroad, and empower the communities you visit."
        path="/prompts"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "AI Travel Prompts", path: "/prompts" },
        ]}
      />

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-ocean/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-sky/20 blur-3xl" />
        <div className="container-content py-20 relative">
          <span className="eyebrow bg-white/10 text-white">AI Prompts</span>
          <h1 className="mt-4 text-4xl sm:text-6xl leading-tight">
            Let AI plan your <span className="text-sky">kindest trip</span>
          </h1>
          <p className="mt-4 text-lg text-slate-200 max-w-2xl font-medium">
            Copy these prompts into your own AI assistant to build moral travel plans, connect with
            people respectfully, and support the places you visit. Fill in the parts in brackets and
            make them yours.
          </p>
        </div>
      </section>

      <section className="container-content section-pad space-y-14">
        <div className="card p-6 sm:p-8 bg-cream ring-1 ring-black/5">
          <span className="eyebrow">How our prompts are built</span>
          <GyroscopeOpsOverview className="mt-3" />
          <p className="mt-5 text-sm text-slate-600 font-medium">
            Destination pages include these checks with local detail.{" "}
            <Link to="/destinations" className="text-ocean font-bold hover:underline">
              Open the Atlas
            </Link>
            {" or "}
            <Link
              to="/guides/how-to-plan-ethical-travel-with-ai"
              className="text-ocean font-bold hover:underline"
            >
              read the full 3-step method
            </Link>
            .
          </p>
        </div>

        {PROMPT_CATEGORIES.map((cat) => (
          <div key={cat.id} id={cat.id} className="scroll-mt-24">
            <div className="flex items-center gap-3">
              <span className="chip" style={{ backgroundColor: domainColors[cat.domain] }}>
                {cat.domain}
              </span>
              <h2 className="text-2xl sm:text-3xl text-ink">{cat.title}</h2>
            </div>
            <p className="mt-2 text-slate-700 font-medium max-w-3xl">{cat.intro}</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item) => (
                <PromptCard key={item.title} title={item.title} prompt={item.prompt} />
              ))}
            </div>
          </div>
        ))}

        <div className="card p-6 flex items-start gap-4 bg-cream">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean/10 text-ocean">
            <Icon name="spark" className="w-5 h-5" />
          </span>
          <div>
            <h2 className="text-lg text-ink">A note on using AI well</h2>
            <p className="mt-1 text-sm text-slate-700 font-medium leading-relaxed">
              AI is a helpful planning partner, not the final word. Always check opening times,
              prices, visa rules, and safety advice against official sources, and let local people
              guide you once you arrive. Treat every suggestion as a starting point for your own
              judgment.
            </p>
          </div>
        </div>

        <CtaBand
          title="Want the thinking behind the prompts?"
          body="Read our guides to understand the four domains, then use these prompts to put them into action."
          ctaLabel="Read the guides"
          to="/guides"
        />
      </section>
    </div>
  );
}
