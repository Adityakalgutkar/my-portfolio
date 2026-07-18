"use client";

import { useRef } from "react";
import { GOLD_LIGHT } from "@/lib/chess-data";

export default function Particles({ count = 30 }: { count?: number }) {
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.1,
    })),
  ).current;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            bottom: `-${p.size}px`,
            width: p.size,
            height: p.size * 3,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${GOLD_LIGHT}, transparent)`,
            opacity: p.opacity,
            animation: `float-particle ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
