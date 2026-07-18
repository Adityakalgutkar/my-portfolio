export default function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 font-mono text-[11px] tracking-[0.12em] text-primary">
      <span className="inline-block h-px w-6 bg-primary" />
      {text}
    </div>
  );
}
