"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GOLD } from "@/lib/chess-data";

export default function IntroScreen({ onDone }: { onDone: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const knightRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      boardRef.current,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" },
    )
      .to(knightRef.current, {
        filter: `drop-shadow(0 0 20px ${GOLD}) drop-shadow(0 0 40px ${GOLD}88)`,
        duration: 0.6,
        ease: "power2.out",
      })
      .to(
        boardRef.current,
        { scale: 1.12, duration: 1.2, ease: "power1.inOut" },
        "-=0.2",
      )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
      )
      .to(
        knightRef.current,
        { x: 120, y: -40, rotation: 8, duration: 0.35, ease: "power3.out" },
        "+=1.2",
      )
      .to(knightRef.current, {
        x: 80,
        y: 0,
        rotation: 0,
        duration: 0.25,
        ease: "bounce.out",
      })
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          setVisible(false);
          onDone();
        },
      }, "+=0.6");

    return () => {
      tl.kill();
    };
  }, [onDone]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-12 bg-black"
    >
      <div
        ref={boardRef}
        className="opacity-0"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 60px)",
          gridTemplateRows: "repeat(3, 60px)",
          border: `1px solid ${GOLD}44`,
          boxShadow: "0 0 80px rgba(201,168,76,0.12)",
        }}
      >
        {["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"].map((p, i) => (
          <div
            key={i}
            style={{
              width: 60,
              height: 60,
              background:
                i % 2 === 0
                  ? "rgba(212,197,169,0.12)"
                  : "rgba(78,52,42,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: 36,
                color: "#1A1009",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
              }}
            >
              {p}
            </span>
          </div>
        ))}
        {[null, "♟", null, "♟", null, "♟", null, "♟"].map((p, i) => (
          <div
            key={i + 8}
            style={{
              width: 60,
              height: 60,
              background:
                i % 2 === 1
                  ? "rgba(212,197,169,0.12)"
                  : "rgba(78,52,42,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {p && (
              <span style={{ fontSize: 36, color: "#1A1009" }}>{p}</span>
            )}
          </div>
        ))}
        {[null, null, null, "♙", null, null, null, null].map((p, i) => (
          <div
            key={i + 16}
            style={{
              width: 60,
              height: 60,
              background:
                i % 2 === 0
                  ? "rgba(212,197,169,0.12)"
                  : "rgba(78,52,42,0.8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {p && (
              <span
                ref={i === 3 ? knightRef : undefined}
                className="inline-block"
                style={{
                  fontSize: 40,
                  color: "#F5F0E8",
                  filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.8))",
                }}
              >
                {p}
              </span>
            )}
          </div>
        ))}
      </div>

      <div ref={textRef} className="text-center opacity-0">
        <p className="font-display mb-3 text-[clamp(22px,3vw,36px)] italic tracking-wide text-[#F5F5F0]">
          Every masterpiece begins with the first move.
        </p>
        <div
          className="mx-auto h-px w-[60px]"
          style={{
            background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          }}
        />
      </div>
    </div>
  );
}
