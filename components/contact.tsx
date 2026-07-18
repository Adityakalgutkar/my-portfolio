"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import SectionLabel from "@/components/ui/section-label";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        project: form.project,
        message: form.message,
      }),
    });

    if (res.ok) {
      setSent(true);
      toast.success("Thanks for reaching out! I'll reply within 24 hours.");
      setForm({ name: "", email: "", project: "", message: "" });
    } else {
      toast.error("Couldn't send your inquiry. Please try again.");
    }

    setLoading(false);
  };

  const inputClass =
    "w-full rounded-md border border-border bg-card px-4 py-3.5 text-sm text-foreground outline-none transition-colors duration-200 focus:border-primary";

  return (
    <section id="contact" className="border-t border-secondary bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1200px] px-6 py-[100px]">
        <SectionLabel text="CONTACT" />
        <div className="grid items-start gap-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-[clamp(32px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-0.025em] text-foreground">
              Let&apos;s build something worth visiting.
            </h2>
            <p className="mb-12 text-[15px] leading-[1.8] text-muted-foreground">
              Whether you have a fully scoped project or just an idea — get in
              touch. I&apos;ll send a clear proposal within 24 hours.
            </p>
            <div className="flex flex-col gap-5">
              <div>
                <div className="mb-1.5 font-mono text-[10px] tracking-[0.1em] text-[#555]">
                  EMAIL
                </div>
                <a
                  href="mailto:kalgutkar789@gmail.com"
                  className="text-[15px] font-medium text-foreground no-underline transition-colors duration-200 hover:text-primary"
                >
                  kalgutkar789@gmail.com
                </a>
              </div>
              <div>
                <div className="mb-1.5 font-mono text-[10px] tracking-[0.1em] text-[#555]">
                  LOCATION
                </div>
                <span className="text-[15px] text-muted-foreground">
                  India
                </span>
              </div>
              <div>
                <div className="mb-1.5 font-mono text-[10px] tracking-[0.1em] text-[#555]">
                  STATUS
                </div>
                <span className="inline-block rounded-sm border border-primary px-2.5 py-1 font-mono text-[11px] tracking-wide text-primary">
                  AVAILABLE NOW
                </span>
              </div>
              <div className="flex gap-4 pt-2">
                {[
                  {
                    label: "GitHub",
                    url: "https://github.com/Adityakalgutkar",
                  },
                  {
                    label: "LinkedIn",
                    url: "https://linkedin.com/in/aditya-kalgutkar",
                  },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    className="font-mono text-[11px] tracking-wide text-[#555] no-underline transition-colors duration-200 hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="py-[60px] text-center">
                <div className="mb-4 font-mono text-[32px] text-primary">
                  ✓
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  Message sent.
                </h3>
                <p className="text-sm text-muted-foreground">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3.5"
              >
                <div className="grid gap-3.5 sm:grid-cols-2">
                  <input
                    required
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className={inputClass}
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className={inputClass}
                  />
                </div>
                <select
                  required
                  value={form.project}
                  onChange={(e) =>
                    setForm({ ...form, project: e.target.value })
                  }
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="" disabled>
                    Project type
                  </option>
                  <option value="Business Website">Business Website</option>
                  <option value="WordPress">WordPress</option>
                  <option value="Shopify">Shopify</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Web App">Web App</option>
                  <option value="Other">Other</option>
                </select>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={`${inputClass} resize-y`}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="self-start rounded-md bg-primary px-8 py-4 font-mono text-xs font-bold tracking-widest text-primary-foreground transition-opacity duration-200 hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "SENDING..." : "SEND MESSAGE →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
