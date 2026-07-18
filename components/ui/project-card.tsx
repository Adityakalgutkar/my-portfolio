"use client";

import { useState } from "react";
import type { PROJECTS } from "@/lib/data";

type Project = (typeof PROJECTS)[number];

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`overflow-hidden rounded-lg border transition-colors duration-250 ${
        hovered ? "border-[#333]" : "border-secondary"
      }`}
    >
      <div
        className="flex h-[200px] items-center justify-center border-b border-secondary transition-colors duration-300"
        style={{
          background: `linear-gradient(135deg, ${project.color}18 0%, ${project.color}06 100%)`,
        }}
      >
        <span
          className="font-mono text-[32px] font-bold transition-opacity duration-300"
          style={{
            color: project.color,
            opacity: hovered ? 1 : 0.6,
          }}
        >
          {project.name.slice(0, 2).toUpperCase()}
        </span>
      </div>
      <div className="p-6 pb-7">
        <div className="mb-2.5 flex items-start justify-between">
          <div>
            <h3 className="mb-1 text-xl font-bold text-foreground">
              {project.name}
            </h3>
            <span className="font-mono text-[11px] tracking-[0.05em] text-[#555]">
              {project.type}
            </span>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#444] transition-colors duration-200 hover:text-current"
            style={{ ["--tw-text-opacity" as string]: 1 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = project.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#444";
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 15L15 3M7 3h8v8" />
            </svg>
          </a>
        </div>
        <p className="mb-4 text-sm leading-[1.7] text-muted-foreground">
          {project.desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-sm border border-border px-2 py-0.5 font-mono text-[10px] tracking-[0.04em] text-[#555]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
