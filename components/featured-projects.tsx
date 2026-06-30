import Image from "next/image";
import Link from "next/link";

import OverstitchImg from "@/public/images/projects/overstitch.png";
import BelleHeleneImg from "@/public/images/projects/belle-helene.png";
import InfoAcctsImg from "@/public/images/projects/infoaccts.png";
import TravcoImg from "@/public/images/projects/travco.png";

const projects = [
  {
    title: "Overstitch",
    category: "Shopify Store",
    subtitle: "Premium Fashion E-commerce",
    description:
      "Contributed to the development and enhancement of a modern Shopify fashion store by implementing responsive layouts, customizing theme sections, improving user experience, fixing frontend issues, and optimizing performance across devices.",
    image: OverstitchImg,
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
    ],
    contributions: [
      "Responsive Development",
      "Theme Customization",
      "UI Enhancements",
      "Performance Optimization",
      "Cross-browser Compatibility",
      "Bug Fixes",
      "Section Development",
      "Frontend Maintenance",
    ],
    live: "https://overstitch.store",
  },
  {
    title: "La Belle Hélène",
    category: "Luxury Hospitality",
    subtitle: "Luxury Resort & Hospitality Website",
    description:
      "Developed and refined responsive pages with smooth animations, elegant layouts, and performance improvements while ensuring a seamless browsing experience across devices.",
    image: BelleHeleneImg,
    technologies: [
      "WordPress",
      "JavaScript",
      "HTML",
      "CSS",
      "PHP",
      "GSAP",
    ],
    contributions: [
      "Frontend Development",
      "Responsive UI",
      "Animations",
      "Performance Optimization",
      "Cross-browser Compatibility",
      "Bug Fixes",
      "UI Refinements",
      "Page Development",
    ],
    live: "https://bellehelene.com",
  },
  {
    title: "Infoaccts",
    category: "Corporate Website",
    subtitle: "Accounting & Financial Services Platform",
    description:
      "Built and maintained responsive business pages with modern layouts, interactive sections, and optimized frontend performance while ensuring consistency across the website.",
    image: InfoAcctsImg,
    technologies: [
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
    ],
    contributions: [
      "Frontend Development",
      "Responsive Design",
      "Page Development",
      "Performance Optimization",
      "Animations",
      "UI Improvements",
      "Bug Fixes",
      "Website Maintenance",
    ],
    live: "https://www.infoaccts.com/",
  },
  {
    title: "Travco Education",
    category: "Education Website",
    subtitle: "International Education Consultancy",
    description:
      "Developed responsive landing pages with interactive animations, optimized layouts, and improved user experience while maintaining high performance and accessibility.",
    image: TravcoImg,
    technologies: [
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
      "GSAP",
    ],
    contributions: [
      "Responsive Development",
      "Landing Page Development",
      "Animations",
      "Performance Optimization",
      "Accessibility Improvements",
      "Bug Fixes",
      "UI Enhancements",
      "Frontend Maintenance",
    ],
    live: "https://travcoeducation.com/",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="relative py-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Portfolio
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            A selection of commercial projects I've contributed to,
            ranging from Shopify stores and WordPress websites to
            custom frontend applications.
          </p>
        </div>

        <div className="space-y-16">

          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* Image */}

              <div className="overflow-hidden rounded-3xl border bg-white shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}

              <div>

                <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-700">
                  {project.category}
                </span>

                <h3 className="mt-5 text-3xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-2 text-lg font-medium text-gray-500">
                  {project.subtitle}
                </p>

                <p className="mt-6 leading-8 text-gray-600">
                  {project.description}
                </p>

                {/* Contributions */}

                <div className="mt-8">

                  <h4 className="mb-4 font-semibold text-gray-900">
                    My Contributions
                  </h4>

                  <div className="grid gap-3 sm:grid-cols-2">

                    {project.contributions.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                          ✓
                        </div>

                        <span className="text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>

                {/* Tech */}

                <div className="mt-8 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-10 flex gap-4">

                  <Link
                    href={project.live}
                    target="_blank"
                    className="rounded-xl bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-black"
                  >
                    Live Website
                  </Link>

                  <Link
                    href="#contact"
                    className="rounded-xl border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
                  >
                    Start Similar Project
                  </Link>

                </div>

                {/* <p className="mt-6 text-sm text-gray-400">
                  Developed as part of the engineering team at Designway.
                </p> */}

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}