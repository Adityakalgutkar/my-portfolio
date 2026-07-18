"use client";

import { useEffect, useState } from "react";

const LINES = [
  "$ git push origin main",
  "✓ build passed — 1.2s",
  "✓ deployed to overstitch.store",
  "✓ lighthouse score: 97",
  "▌",
];

export default function TerminalCard() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= LINES.length) return;
    const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 800 : 600);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="min-w-[320px] rounded-lg border border-border bg-card p-5 font-mono text-[13px] md:p-6">
      <div className="mb-4 flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
      </div>
      {LINES.slice(0, step).map((line, i) => (
        <div
          key={i}
          className={`mb-1.5 ${i === 0 ? "text-muted-foreground" : "text-primary"}`}
        >
          {line}
        </div>
      ))}
    </div>
  );
}
