import ServiceIcon from "@/components/ui/service-icon";

const serviceItems = [
  {
    title: "WordPress Development",
    description:
      "Custom business websites, WooCommerce stores, plugin customization, theme development, website maintenance, and performance optimization.",
  },
  {
    title: "Shopify Development",
    description:
      "Theme customization, store setup, app integration, bug fixes, conversion improvements, and ongoing store maintenance.",
  },
  {
    title: "Custom Web Development",
    description:
      "Modern web applications built using React, Next.js, Angular, JavaScript, and TypeScript.",
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages designed for speed, responsiveness, and excellent user experience.",
  },
  {
    title: "Website Optimization",
    description:
      "Improve loading speed, Core Web Vitals, SEO fundamentals, accessibility, and overall website performance.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Regular updates, bug fixing, feature enhancements, backups, and long-term technical support.",
  },
];

const cardClassName =
  "relative rounded-lg border border-gray-200 bg-white/70 p-6 shadow-sm shadow-black/[0.03]";
export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2
              className="mb-4 border-y text-3xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-4xl"
              data-aos="zoom-y-out"
            >
              Services
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((service, index) => (
              <article
                key={service.title}
                className={cardClassName}
                data-aos="zoom-y-out"
                data-aos-delay={index * 75}
              >
                <ServiceIcon name={service.title} />
                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
