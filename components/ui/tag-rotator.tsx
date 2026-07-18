"use client";

import { useEffect, useState } from "react";
import { TECH_TAGS } from "@/lib/data";

export default function TagRotator() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % TECH_TAGS.length),
      2000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {TECH_TAGS.map((tag, i) => (
        <span
          key={tag}
          className={`rounded-sm border px-2.5 py-1 font-mono text-[11px] font-medium tracking-[0.05em] transition-all duration-400 ${
            i === active
              ? "border-primary text-primary"
              : "border-border text-[#444]"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
