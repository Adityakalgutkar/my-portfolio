import SectionLabel from "@/components/ui/section-label";
import ServiceCard from "@/components/ui/service-card";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="border-t border-secondary">
      <div className="mx-auto max-w-[1200px] px-6 py-[100px]">
        <SectionLabel text="SERVICES" />
        <div className="mb-14 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="max-w-[480px] text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-foreground">
            What I can build for you
          </h2>
          <p className="max-w-[300px] text-right text-sm leading-[1.7] text-[#555] lg:text-right">
            End-to-end development across the most impactful platforms and
            frameworks.
          </p>
        </div>
        <div className="grid overflow-hidden rounded-lg border border-secondary sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
