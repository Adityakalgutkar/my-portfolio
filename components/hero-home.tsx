import Link from "next/link";
import TagRotator from "@/components/ui/tag-rotator";
import TerminalCard from "@/components/ui/terminal-card";
import { HERO_STATS } from "@/lib/data";

export default function HeroHome() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-[100px] pt-[140px]">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_420px]">
        <div>
          <TagRotator />
          <h1 className="mb-7 text-[clamp(44px,6vw,76px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-foreground">
            I build websites
            <br />
            <span className="text-primary">that do the work</span>
            <br />
            for your business.
          </h1>
          <p className="mb-10 max-w-[480px] text-[17px] leading-[1.7] text-muted-foreground">
            Freelance web developer with 2+ years of experience delivering
            fast, responsive, conversion-focused digital experiences — from
            Shopify stores to custom React apps.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link
              href="#work"
              className="rounded-md bg-primary px-7 py-3.5 font-mono text-xs font-bold tracking-widest text-primary-foreground no-underline transition-opacity duration-200 hover:opacity-85"
            >
              VIEW WORK
            </Link>
            <Link
              href="#contact"
              className="rounded-md border border-[#333] px-7 py-3.5 font-mono text-xs font-bold tracking-widest text-foreground no-underline transition-colors duration-200 hover:border-[#555]"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
        <div className="flex justify-end">
          <TerminalCard />
        </div>
      </div>

      <div className="mt-20 flex flex-wrap gap-px border-t border-secondary pt-10 max-md:flex-col max-md:gap-6">
        {HERO_STATS.map((s) => (
          <div key={s.label} className="flex-1 pr-6">
            <div className="mb-1 font-mono text-[32px] font-bold text-foreground">
              {s.val}
            </div>
            <div className="text-[13px] text-[#555]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
