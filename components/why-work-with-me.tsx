import SectionLabel from "@/components/ui/section-label";
import { WHY_WORK_ITEMS } from "@/lib/data";

export default function WhyWorkWithMe() {
  return (
    <section id="experience" className="border-t border-secondary bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6 py-[100px]">
        <SectionLabel text="WHY WORK WITH ME" />
        <h2 className="mb-14 text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-foreground">
          Quality that shows
          <br />
          in the details.
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_WORK_ITEMS.map((item) => (
            <div
              key={item.label}
              className="border-t border-secondary py-7"
            >
              <div className="mb-3.5 text-2xl">{item.icon}</div>
              <h3 className="mb-2.5 text-base font-bold text-foreground">
                {item.label}
              </h3>
              <p className="text-sm leading-[1.7] text-[#555]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
