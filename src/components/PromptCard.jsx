import { useState } from "react";
import Icon from "./Icon.jsx";

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to execCommand when permission or context blocks the API.
    }
  }

  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.top = "0";
  ta.style.left = "0";
  ta.style.width = "1px";
  ta.style.height = "1px";
  ta.style.padding = "0";
  ta.style.border = "0";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus({ preventScroll: true });
  ta.select();
  ta.setSelectionRange(0, text.length);

  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
}

// A copyable AI prompt. The reader copies it into their own AI tool.
export default function PromptCard({ title, prompt }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (event) => {
    event.preventDefault();
    event.stopPropagation();

    void copyText(prompt).then((ok) => {
      if (!ok) return;
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="card p-6 flex flex-col notranslate">
      <h3 className="text-lg text-ink">{title}</h3>
      <p className="mt-3 flex-1 rounded-2xl bg-sand p-4 text-sm text-slate-700 font-medium leading-relaxed whitespace-pre-wrap">
        {prompt}
      </p>
      <button
        type="button"
        onClick={handleCopy}
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
