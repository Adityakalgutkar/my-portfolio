"use client";

import { useEffect, useRef } from "react";
import type { Board } from "@/lib/chess-data";
import { GOLD } from "@/lib/chess-data";

type ChessBoardProps = {
  board: Board;
  size?: number;
  highlighted?: [number, number][];
  animated?: [number, number] | null;
  onPieceClick?: (r: number, c: number) => void;
  tilt?: boolean;
};

export default function ChessBoard({
  board,
  size = 480,
  highlighted = [],
  animated = null,
  onPieceClick,
  tilt = true,
}: ChessBoardProps) {
  const boardRef = useRef<HTMLDivElement>(null);
  const sq = size / 8;

  const isLight = (r: number, c: number) => (r + c) % 2 === 0;
  const isHighlighted = (r: number, c: number) =>
    highlighted.some(([hr, hc]) => hr === r && hc === c);

  useEffect(() => {
    if (!tilt) return;
    const el = boardRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      el.style.transform = `perspective(1200px) rotateX(${-dy * 6}deg) rotateY(${dx * 6}deg) rotateZ(-3deg)`;
    };
    const handleLeave = () => {
      el.style.transform =
        "perspective(1200px) rotateX(8deg) rotateY(-3deg) rotateZ(-3deg)";
    };

    window.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [tilt]);

  return (
    <div
      ref={boardRef}
      className="overflow-hidden rounded"
      style={{
        width: size,
        height: size,
        display: "grid",
        gridTemplateColumns: `repeat(8, ${sq}px)`,
        gridTemplateRows: `repeat(8, ${sq}px)`,
        transform: tilt
          ? "perspective(1200px) rotateX(8deg) rotateY(-3deg) rotateZ(-3deg)"
          : "none",
        transition: "transform 0.15s ease",
        boxShadow: `0 40px 120px rgba(0,0,0,0.8), 0 0 0 2px ${GOLD}44, 0 0 60px rgba(201,168,76,0.08)`,
        border: `2px solid ${GOLD}66`,
      }}
    >
      {board.flatMap((row, r) =>
        row.map((piece, c) => {
          const light = isLight(r, c);
          const hl = isHighlighted(r, c);
          const isAnimated = animated && animated[0] === r && animated[1] === c;
          const isWhitePiece =
            piece !== null &&
            "♔♕♖♗♘♙".includes(piece);

          return (
            <div
              key={`${r}-${c}`}
              onClick={() => piece && onPieceClick?.(r, c)}
              style={{
                width: sq,
                height: sq,
                background: hl
                  ? "rgba(201,168,76,0.45)"
                  : light
                    ? "rgba(212,197,169,0.85)"
                    : "rgba(78,52,42,0.95)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                cursor: piece ? "none" : "default",
                transition: "background 0.3s",
              }}
            >
              {hl && (
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(201,168,76,0.5) 0%, transparent 70%)",
                    animation: "chess-pulse 2s ease-in-out infinite",
                  }}
                />
              )}
              {piece && (
                <span
                  className="chess-piece relative z-[1] select-none"
                  style={{
                    fontSize: sq * 0.65,
                    lineHeight: 1,
                    color: isWhitePiece ? "#F5F0E8" : "#1A1009",
                    filter: isAnimated
                      ? `drop-shadow(0 0 16px ${GOLD}) drop-shadow(0 4px 8px rgba(0,0,0,0.6))`
                      : "drop-shadow(0 2px 6px rgba(0,0,0,0.5))",
                    transition: "filter 0.3s",
                  }}
                >
                  {piece}
                </span>
              )}
            </div>
          );
        }),
      )}
    </div>
  );
}
