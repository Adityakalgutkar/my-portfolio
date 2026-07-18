import SectionLabel from "@/components/ui/section-label";
import FaqItem from "@/components/ui/faq-item";
import { FAQS } from "@/lib/data";

export default function Faq() {
  return (
    <section id="faq" className="border-t border-secondary">
      <div className="mx-auto max-w-[720px] px-6 py-[100px]">
        <SectionLabel text="FAQ" />
        <h2 className="mb-14 text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-foreground">
          Common questions
        </h2>
        <div className="border-t border-secondary">
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
