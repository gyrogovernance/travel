import { useState } from "react";
import Icon from "./Icon.jsx";

// A copyable AI prompt. The reader copies it into their own AI tool.
export default function PromptCard({ title, prompt }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
      // Fallback for browsers without clipboard access.
      const ta = document.createElement("textarea");
      ta.value = prompt;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* ignore */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card p-6 flex flex-col">
      <h3 className="text-lg text-ink">{title}</h3>
      <p className="mt-3 flex-1 rounded-2xl bg-sand p-4 text-sm text-slate-700 font-medium leading-relaxed whitespace-pre-wrap">
        {prompt}
      </p>
      <button
        onClick={copy}
        className="btn-primary mt-4 self-start"
        aria-live="polite"
      >
        {copied ? (
          <>
            <Icon name="check" className="w-4 h-4" strokeWidth={2.4} />
            Copied
          </>
        ) : (
          <>
            <Icon name="copy" className="w-4 h-4" />
            Copy prompt
          </>
        )}
      </button>
    </div>
  );
}
