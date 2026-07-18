import SectionLabel from "@/components/ui/section-label";
import ProjectCard from "@/components/ui/project-card";
import { PROJECTS } from "@/lib/data";

export default function FeaturedProjects() {
  return (
    <section id="work" className="border-t border-secondary">
      <div className="mx-auto max-w-[1200px] px-6 py-[100px]">
        <SectionLabel text="SELECTED WORK" />
        <div className="mb-14 flex items-end justify-between">
          <h2 className="text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-foreground">
            Featured projects
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
