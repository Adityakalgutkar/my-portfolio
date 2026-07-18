"use client";

import { useState } from "react";

type FaqItemProps = {
  q: string;
  a: string;
};

export default function FaqItem({ q, a }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-secondary">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 bg-transparent py-[22px] text-left"
      >
        <span className="text-base font-semibold leading-snug text-foreground">
          {q}
        </span>
        <span
          className={`shrink-0 transition-all duration-250 ${
            open ? "rotate-45 text-primary" : "rotate-0 text-[#444]"
          }`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <line x1="10" y1="4" x2="10" y2="16" />
            <line x1="4" y1="10" x2="16" y2="10" />
          </svg>
        </span>
      </button>
      <div
        className="accordion-content"
        style={{
          maxHeight: open ? 200 : 0,
          opacity: open ? 1 : 0,
        }}
      >
        <p className="pb-[22px] text-sm leading-[1.8] text-muted-foreground">
          {a}
        </p>
      </div>
    </div>
  );
}
