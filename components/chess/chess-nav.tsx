"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { GOLD } from "@/lib/chess-data";

export default function ChessNav({ ready }: { ready: boolean }) {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (v) => setSolid(v > 60));
  }, [scrollY]);

  if (!ready) return null;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[80] flex h-[68px] items-center justify-between px-6 transition-all duration-400 md:px-12"
      style={{
        background: solid ? "rgba(8,8,8,0.92)" : "transparent",
        borderBottom: solid
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
        backdropFilter: solid ? "blur(20px)" : "none",
      }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="text-[22px]"
          style={{ filter: `drop-shadow(0 0 8px ${GOLD}88)` }}
        >
          ♔
        </span>
        <span className="font-display text-[17px] font-semibold text-[#F5F5F0]">
          Aditya Kalgutkar
        </span>
      </div>
      <div className="hide-mobile flex items-center gap-9">
        {["Work", "Skills", "Contact"].map((l) => (
          <Link
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-[13px] tracking-wide text-[#666] no-underline transition-colors duration-200 hover:text-[#F5F5F0]"
          >
            {l}
          </Link>
        ))}
        <Link
          href="#contact"
          className="rounded-sm border px-5 py-2 font-mono text-[11px] font-bold tracking-widest no-underline transition-colors duration-200 hover:bg-[rgba(201,168,76,0.09)]"
          style={{ borderColor: `${GOLD}66`, color: GOLD }}
        >
          OPEN GAME →
        </Link>
      </div>
    </motion.nav>
  );
}
