import Accordion from "@/components/accordion";
const faqItems = [
  {
    id: "faq-1",
    question: "What types of websites do you build?",
    answer:
      "I build business websites, landing pages, portfolios, e-commerce stores, blogs, and custom web applications tailored to your requirements.",
  },
  {
    id: "faq-2",
    question: "Which technologies do you work with?",
    answer:
      "I specialize in React, Next.js, WordPress, Shopify, HTML, CSS, JavaScript, Tailwind CSS, and modern frontend development.",
  },
  {
    id: "faq-3",
    question: "Can you redesign my existing website?",
    answer:
      "Yes. I can refresh your website with a modern design, improve responsiveness, optimize performance, and enhance the overall user experience while preserving your existing content.",
  },
  {
    id: "faq-4",
    question: "How long does a website take to build?",
    answer:
      "The timeline depends on the project's complexity. Simple websites usually take 1–2 weeks, while larger or custom projects may require several weeks.",
  },
  {
    id: "faq-5",
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every website I build is fully responsive and optimized for desktops, tablets, and mobile devices.",
  },
  {
    id: "faq-6",
    question: "Do you optimize websites for SEO?",
    answer:
      "Yes. I implement SEO best practices such as clean code, fast loading speeds, proper metadata, semantic HTML, and mobile optimization.",
  },
  {
    id: "faq-7",
    question: "Do you provide website maintenance?",
    answer:
      "Yes. I offer ongoing maintenance, security updates, bug fixes, content updates, and feature enhancements after your website goes live.",
  },
  {
    id: "faq-8",
    question: "Can you integrate payment gateways or third-party services?",
    answer:
      "Yes. I can integrate payment gateways, contact forms, booking systems, analytics, CRM tools, email marketing platforms, and various third-party APIs.",
  },
  {
    id: "faq-9",
    question: "How much does a website cost?",
    answer:
      "Pricing depends on the project's scope, features, and complexity. Contact me with your requirements, and I'll provide a transparent quote.",
  },
  {
    id: "faq-10",
    question: "How do we get started?",
    answer:
      "Simply reach out through the contact form with your project details. We'll discuss your goals, define the requirements, and begin once everything is finalized.",
  },
];
export default function Faq() {
  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2
              className="mb-4 border-y text-3xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-4xl"
              data-aos="zoom-y-out"
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div
            className="mx-auto max-w-3xl space-y-3"
            data-aos="zoom-y-out"
            data-aos-delay={150}
          >
            {faqItems.map((item, index) => (
              <Accordion
                key={item.id}
                id={item.id}
                title={item.question}
                active={index === 0}
              >
                {item.answer}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
