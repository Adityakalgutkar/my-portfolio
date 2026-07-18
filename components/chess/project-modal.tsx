"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ChessProject } from "@/lib/chess-data";
import { GOLD } from "@/lib/chess-data";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: ChessProject;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/88 p-6 backdrop-blur-xl"
    >
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.94 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[600px] rounded-lg border bg-[#111] p-10 md:p-14"
        style={{
          borderColor: `${GOLD}33`,
          boxShadow: `0 40px 120px rgba(0,0,0,0.8), 0 0 60px rgba(201,168,76,0.06)`,
        }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 cursor-none border-none bg-transparent text-xl text-[#555] transition-colors duration-200 hover:text-[#F5F5F0]"
        >
          ✕
        </button>

        <div className="mb-8 flex items-center gap-4">
          <span
            className="text-5xl"
            style={{ filter: `drop-shadow(0 0 16px ${project.color}88)` }}
          >
            {project.piece}
          </span>
          <div>
            <div className="mb-1 font-mono text-[10px] tracking-[0.18em] text-[var(--gold)]">
              {project.role.toUpperCase()} · {project.type.toUpperCase()}
            </div>
            <h2 className="font-display text-[32px] text-[#F5F5F0]">
              {project.title}
            </h2>
          </div>
        </div>

        <div
          className="mb-7 h-px"
          style={{
            background: `linear-gradient(90deg, ${GOLD}44, transparent)`,
          }}
        />

        <p className="mb-7 text-[15px] leading-[1.8] text-[#999]">
          {project.desc}
        </p>

        <div className="mb-9 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-sm border px-3 py-1.5 font-mono text-[11px] tracking-wide text-[var(--gold)]"
              style={{ borderColor: `${GOLD}33` }}
            >
              {s}
            </span>
          ))}
        </div>

        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-sm bg-[var(--gold)] px-7 py-3.5 font-mono text-xs font-bold tracking-widest text-[#0A0A0A] no-underline transition-opacity duration-200 hover:opacity-85"
        >
          VIEW PROJECT →
        </Link>
      </motion.div>
    </motion.div>
  );
}
