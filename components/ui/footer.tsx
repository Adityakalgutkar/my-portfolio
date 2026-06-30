import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="border-t border-gray-200 bg-white">
    <div className="mx-auto max-w-6xl px-6 py-16">
  
      <div className="flex flex-col items-center text-center">
  
        <Logo />
  
        <h2 className="mt-6 text-3xl font-bold text-gray-900">
          Let's Build Something Great
        </h2>
  
        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          I help businesses, startups, and creators build fast,
          modern, and conversion-focused websites using
          WordPress, Shopify, React and Next.js.
        </p>
  
        <Link
          href="#contact"
          className="mt-8 rounded-xl bg-gray-900 px-8 py-3 text-sm font-medium text-white transition hover:bg-black"
        >
          Start a Project
        </Link>
  
      </div>
  
      {/* Divider */}
  
      <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
  
      {/* Links */}
  
      <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium">
  
        <Link
          href="#about"
          className="text-gray-600 transition hover:text-black"
        >
          About
        </Link>
  
        <Link
          href="#services"
          className="text-gray-600 transition hover:text-black"
        >
          Services
        </Link>
  
        <Link
          href="#projects"
          className="text-gray-600 transition hover:text-black"
        >
          Projects
        </Link>
  
        <Link
          href="#experience"
          className="text-gray-600 transition hover:text-black"
        >
          Experience
        </Link>
  
        <Link
          href="#contact"
          className="text-gray-600 transition hover:text-black"
        >
          Contact
        </Link>
  
      </div>
  
      {/* Social */}
  
      <div className="mt-10 flex items-center justify-center gap-8">
  
        <Link
        href="https://github.com/Adityakalgutkar"
          target="_blank"
          className="text-gray-500 transition hover:text-black"
        >
          GitHub
        </Link>
  
        <Link
          href="https://linkedin.com/in/aditya-kalgutkar"
          target="_blank"
          className="text-gray-500 transition hover:text-black"
        >
          LinkedIn
        </Link>
  
        <Link
          href="mailto:kalgutkar789@gmail.com"
          className="text-gray-500 transition hover:text-black"
        >
          Email
        </Link>
  
      </div>
  
      {/* Bottom */}
  
      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 md:flex-row">
  
        <p>
          © {new Date().getFullYear()} Aditya Kalgutkar. All rights reserved.
        </p>
  
        <p>
          Designed & Developed with Next.js & Tailwind CSS
        </p>
  
      </div>
  
    </div>
  </footer>
  );
}
