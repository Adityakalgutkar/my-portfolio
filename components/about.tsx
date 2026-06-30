import Image from "next/image";
import AboutProfile from "@/public/images/aditya.png";

const services = [
  "Business Websites",
  "WordPress Development",
  "Shopify Development",
  "React & Next.js Applications",
  "Angular Frontend Development",
  "Landing Pages",
  "Website Performance Optimization",
  "Website Maintenance & Bug Fixes",
  "Third-party Integrations (Meta Pixel, WhatsApp, Payment Gateways)",
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2
              className="mb-4 border-y text-3xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-4xl"
              data-aos="zoom-y-out"
            >
              About Me
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-[minmax(260px,320px)_1fr] lg:gap-16">
            <div
              className="mx-auto w-full max-w-xs lg:max-w-none"
              data-aos="zoom-y-out"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl before:pointer-events-none before:absolute before:-inset-3 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-3 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <Image
                  src={AboutProfile}
                  alt="Aditya Kalgutkar, Web Developer"
                  width={320}
                  height={400}
                  className="aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 320px, 320px"
                />
              </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
              <div
                className="space-y-6"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                <p className="text-lg text-gray-700">
                  I&apos;m a Web Developer with over two years of professional
                  experience building responsive websites, e-commerce stores,
                  and modern web applications.
                </p>
                <p className="text-lg text-gray-700">
                  Throughout my journey, I&apos;ve worked with businesses to
                  create custom WordPress websites, customize Shopify stores,
                  build interactive frontend applications using React, Next.js,
                  and Angular, and integrate services such as Meta Pixel,
                  WhatsApp, and payment solutions.
                </p>
                <p className="text-lg text-gray-700">
                  My focus goes beyond writing code. I believe every website
                  should be fast, responsive, user-friendly, and designed with
                  real business goals in mind.
                </p>
                <p className="text-lg text-gray-700">
                  Whether it&apos;s launching a new website, improving an
                  existing one, fixing technical issues, or optimizing
                  performance, I enjoy turning ideas into reliable digital
                  products.
                </p>
              </div>

              <div data-aos="zoom-y-out" data-aos-delay={300}>
                <h3 className="mb-6 text-xl font-bold text-gray-900 md:text-2xl">
                  What I Can Help You With
                </h3>
                <ul className="grid gap-3 sm:grid-cols-1">
                  {services.map((service) => (
                    <li
                      key={service}
                      className="relative flex items-start gap-3 rounded-lg border border-gray-200 bg-white/70 px-4 py-3 shadow-sm shadow-black/[0.03]"
                    >
                      <svg
                        className="mt-1 shrink-0 fill-blue-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.28 2.28 3.989 8.575 1.695 6.28A1 1 0 0 0 .28 7.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28 2.28Z" />
                      </svg>

                      <span className="text-sm text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
