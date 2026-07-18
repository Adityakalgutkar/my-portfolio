"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { GOLD } from "@/lib/chess-data";

export default function ChessContactForm() {
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
    "w-full rounded-sm border border-[#1A1A1A] bg-[#0E0E0E] px-4 py-3.5 text-sm text-[#F5F5F0] outline-none transition-colors duration-200 placeholder:text-[#444] focus:border-[var(--gold)]";

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto w-full max-w-[520px] py-12 text-center"
      >
        <div
          className="mb-4 font-mono text-[32px]"
          style={{ color: GOLD, filter: `drop-shadow(0 0 20px ${GOLD}66)` }}
        >
          ✓
        </div>
        <h3 className="font-display mb-2 text-xl text-[#F5F5F0]">
          Message sent.
        </h3>
        <p className="text-sm text-[#555]">
          I&apos;ll get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.35 }}
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-[520px] text-left"
    >
      <div
        className="rounded-md border p-6 md:p-8"
        style={{
          borderColor: `${GOLD}22`,
          background: "rgba(14,14,14,0.85)",
          boxShadow: `0 0 60px ${GOLD}08`,
        }}
      >
        <div className="mb-6 grid gap-3.5 sm:grid-cols-2">
          <input
            required
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
          <input
            required
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>

        <select
          required
          value={form.project}
          onChange={(e) => setForm({ ...form, project: e.target.value })}
          className={`${inputClass} mb-3.5 cursor-pointer`}
        >
          <option value="" disabled className="bg-[#0E0E0E] text-[#444]">
            Project type
          </option>
          <option value="Business Website" className="bg-[#0E0E0E]">
            Business Website
          </option>
          <option value="WordPress" className="bg-[#0E0E0E]">
            WordPress
          </option>
          <option value="Shopify" className="bg-[#0E0E0E]">
            Shopify
          </option>
          <option value="Landing Page" className="bg-[#0E0E0E]">
            Landing Page
          </option>
          <option value="Web App" className="bg-[#0E0E0E]">
            Web App
          </option>
          <option value="Other" className="bg-[#0E0E0E]">
            Other
          </option>
        </select>

        <textarea
          required
          rows={5}
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputClass} mb-5 resize-y`}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-sm bg-[var(--gold)] py-4 font-mono text-xs font-bold tracking-widest text-[#0A0A0A] transition-opacity duration-200 hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
          style={{ boxShadow: `0 0 40px ${GOLD}22` }}
        >
          {loading ? "SENDING..." : "SEND MESSAGE →"}
        </button>
      </div>
    </motion.form>
  );
}
