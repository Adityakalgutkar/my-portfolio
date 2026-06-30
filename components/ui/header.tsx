import Link from "next/link";
import Logo from "./logo";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "faq", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between rounded-2xl bg-white/90 px-6 shadow-lg shadow-black/5 backdrop-blur-xl border border-gray-200">

          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Let's Talk
          </Link>

        </div>
      </div>
    </header>
  );
}