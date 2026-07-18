"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const solid = scrollY > 40;

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-border bg-background/92 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <Link href="#" className="no-underline">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[13px] font-medium tracking-wide text-muted-foreground no-underline transition-colors duration-200 hover:text-foreground"
            >
              {l}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded bg-primary px-[18px] py-2 font-mono text-xs font-bold tracking-widest text-primary-foreground no-underline transition-opacity duration-200 hover:opacity-85"
          >
            LET&apos;S TALK
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="cursor-pointer border-none bg-transparent p-1 text-foreground md:hidden"
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <>
                <line
                  x1="4"
                  y1="4"
                  x2="18"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="18"
                  y1="4"
                  x2="4"
                  y2="18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </>
            ) : (
              <>
                <line
                  x1="3"
                  y1="7"
                  x2="19"
                  y2="7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <line
                  x1="3"
                  y1="15"
                  x2="19"
                  y2="15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          {NAV_LINKS.map((l) => (
            <Link
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block border-b border-secondary py-3 text-[15px] font-medium text-foreground no-underline"
            >
              {l}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded bg-primary py-3 text-center font-mono text-xs font-bold tracking-widest text-primary-foreground no-underline"
          >
            LET&apos;S TALK
          </Link>
        </div>
      )}
    </header>
  );
}
