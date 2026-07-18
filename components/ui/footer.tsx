export default function Footer() {
  return (
    <footer className="border-t border-secondary">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-8">
        <span className="font-mono text-xs text-[#333]">
          © {new Date().getFullYear()} Aditya Kalgutkar
        </span>
        <span className="font-mono text-[11px] text-[#333]">
          Built with Next.js &amp; Tailwind CSS
        </span>
      </div>
    </footer>
  );
}
