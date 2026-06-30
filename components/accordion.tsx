"use client";

import { useState } from "react";

type AccordionProps = {
  children: React.ReactNode;
  title: string;
  id: string;
  active?: boolean;
};

export default function Accordion({
  children,
  title,
  id,
  active = false,
}: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState(active);

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md">
      <h2>
        <button
          id={`accordion-title-${id}`}
          type="button"
          className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-gray-900 transition-colors duration-200 hover:text-blue-600"
          onClick={() => setAccordionOpen((prev) => !prev)}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span>{title}</span>

          <span className="ml-6 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
            <svg
              className={`h-3 w-3 fill-gray-500 transition-transform duration-300 ${
                accordionOpen ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 6"
              aria-hidden="true"
            >
              <path d="M2 .586 5 3.586 8 .586 9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z" />
            </svg>
          </span>
        </button>
      </h2>

      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 leading-7 text-gray-600">{children}</p>
        </div>
      </div>
    </div>
  );
}