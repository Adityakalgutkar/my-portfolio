"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "Business Website",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),
    });

    if (res.ok) {
      toast.success(
        "Thanks for reaching out! I'll reply as soon as possible.",
     
      );      setForm({
        name: "",
        email: "",
        project: "",
        message: "",
      });
    } else {
      toast.error(
       "Couldn't send your inquiry. Please try again.",
      );    }

    setLoading(false);
  };
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-3xl bg-gray-900 shadow-2xl"
          data-aos="zoom-y-out"
        >
          {/* Background Glow */}
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-full h-72 w-[700px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
          </div>

          <div className="relative grid gap-16 px-8 py-14 md:grid-cols-2 md:px-14 md:py-20">
            {/* Left Side */}

            <div>
              <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
                Let's Connect
              </span>

              <h2 className="mt-6 text-4xl font-bold text-white">
                Have a project in mind?
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Whether you need a WordPress website, Shopify store, landing
                page, or a custom web application, I'd love to hear about your
                project.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-400">
                    Email
                  </p>

                  <a
                    href="mailto:kalgutkar789@gmail.com"
                    className="mt-1 block text-lg font-medium text-white hover:text-blue-400"
                  >
kalgutkar789@gmail.com                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-400">
                    Based In
                  </p>

                  <p className="mt-1 text-lg text-white">India</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-400">
                    Availability
                  </p>

                  <p className="mt-1 text-lg text-green-400">
                    Available for Freelance
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div>
                <label className="mb-2 block text-sm text-gray-300">Name</label>

                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Email
                </label>

                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Project Type
                </label>

                <select
                  required
                  value={form.project}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      project: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-blue-500"
                >
                  <option className="text-black" value="Business Website">
                    Business Website
                  </option>
                  <option className="text-black" value="WordPress Website">
                    WordPress Website
                  </option>
                  <option className="text-black" value="Shopify Store">
                    Shopify Store
                  </option>
                  <option className="text-black" value="Landing Page">
                    Landing Page
                  </option>
                  <option className="text-black" value="Web Application">
                    Web Application
                  </option>
                  <option className="text-black" value="Other">
                    Other
                  </option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message: e.target.value,
                    })
                  }
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-gray-500 outline-none transition focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
