"use client";

import { motion } from "framer-motion";
import ChessBoard from "@/components/chess/chess-board";
import { GOLD, INITIAL_BOARD } from "@/lib/chess-data";

export default function KonamiBoard({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[500] flex flex-col items-center justify-center gap-8 bg-black/97"
    >
      <div className="font-mono text-[11px] tracking-[0.2em] text-[var(--gold)]">
        🎮 KONAMI CODE UNLOCKED · SECRET BOARD
      </div>
      <ChessBoard board={INITIAL_BOARD} size={400} tilt={false} />
      <p className="font-display text-lg italic text-[#666]">
        The board reveals all secrets.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="cursor-none rounded-sm border border-[#222] bg-transparent px-6 py-2.5 font-mono text-[11px] tracking-widest text-[#444] transition-colors duration-200 hover:border-[#444] hover:text-[#F5F5F0]"
      >
        CLOSE · ESC
      </button>
    </motion.div>
  );
}
