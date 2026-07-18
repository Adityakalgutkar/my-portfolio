import SectionLabel from "@/components/ui/section-label";
import { SKILLS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="border-t border-secondary">
      <div className="mx-auto max-w-[1200px] px-6 py-[100px]">
        <SectionLabel text="ABOUT" />
        <div className="grid items-start gap-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-foreground">
              Every site should earn its place on the web.
            </h2>
            <p className="mb-4 text-[15px] leading-[1.8] text-muted-foreground">
              I&apos;m Aditya Kalgutkar — a freelance web developer based in
              India with over two years of professional experience building
              performant, accessible, and visually considered websites.
            </p>
            <p className="mb-8 text-[15px] leading-[1.8] text-muted-foreground">
              My philosophy: every site should be fast, responsive,
              user-friendly, and designed with real business goals in mind. No
              bloat. No templates for the sake of templates. Just clean,
              purposeful work.
            </p>
            <div className="inline-block rounded-sm border border-primary px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] text-primary">
              AVAILABLE FOR FREELANCE
            </div>
          </div>
          <div>
            <div className="mb-5 text-[13px] font-semibold tracking-wide text-foreground">
              Skills &amp; Technologies
            </div>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {SKILLS.map((s) => (
                <div
                  key={s}
                  className="cursor-default rounded border border-muted bg-card px-3 py-2.5 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors duration-200 hover:border-primary hover:text-primary"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
