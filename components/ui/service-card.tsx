"use client";

import { useState } from "react";

type ServiceCardProps = {
  num: string;
  title: string;
  desc: string;
};

export default function ServiceCard({ num, title, desc }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`cursor-default rounded-lg border p-7 transition-all duration-250 md:p-8 ${
        hovered
          ? "border-[#333] bg-card"
          : "border-secondary bg-transparent"
      }`}
    >
      <div className="mb-4 font-mono text-[11px] tracking-[0.08em] text-primary">
        {num}
      </div>
      <h3 className="mb-3 text-lg font-bold text-foreground">{title}</h3>
      <p className="text-sm leading-[1.7] text-muted-foreground">{desc}</p>
    </div>
  );
}
