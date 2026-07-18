"use client";

import { motion } from "framer-motion";
import type { MOVES } from "@/lib/chess-data";
import { GOLD } from "@/lib/chess-data";

type Move = (typeof MOVES)[number];

export default function MoveSection({
  move,
  children,
  id,
}: {
  move: Move;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="relative flex min-h-screen flex-col justify-center py-[120px]"
    >
      <div className="mobile-pad mx-auto w-full max-w-[1200px] px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex items-center gap-4"
        >
          <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--gold)]">
            {move.label}
          </span>
          <div
            className="h-px w-12"
            style={{
              background: `linear-gradient(90deg, ${GOLD}, transparent)`,
            }}
          />
          <span className="font-mono text-[11px] tracking-[0.12em] text-[#444]">
            {move.notation}
          </span>
          <span
            className="ml-1 text-xl"
            style={{ filter: `drop-shadow(0 0 6px ${GOLD}88)` }}
          >
            {move.piece}
          </span>
        </motion.div>
        {children}
      </div>

      <div className="hide-mobile absolute right-12 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2 opacity-25">
        <div
          className="h-[60px] w-px"
          style={{
            background: `linear-gradient(180deg, transparent, ${GOLD})`,
          }}
        />
        <span
          className="font-mono text-[9px] tracking-[0.2em] text-[var(--gold)]"
          style={{ writingMode: "vertical-rl" }}
        >
          {move.name.toUpperCase()}
        </span>
        <div
          className="h-[60px] w-px"
          style={{
            background: `linear-gradient(180deg, ${GOLD}, transparent)`,
          }}
        />
      </div>
    </section>
  );
}
