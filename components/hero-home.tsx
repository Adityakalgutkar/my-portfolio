import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import BrowserMockup from "@/components/ui/browser-mockup";
import TechIcon from "@/components/ui/tech-icon";
import HeroPreview from "@/public/images/hero-preview.jpg";

const techStack = ["WordPress", "Shopify", "React", "Next.js", "Angular"];

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y py-3 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="flex flex-wrap items-center justify-center gap-4">
                {techStack.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600"
                  >
                    <TechIcon name={tech} />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <h1
              className="mb-4 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Hi, I&apos;m Aditya Kalgutkar
            </h1>
            <p
              className="mx-auto mb-6 max-w-4xl text-xl font-medium text-gray-800 md:text-2xl"
              data-aos="zoom-y-out"
              data-aos-delay={225}
            >
              Web Developer specializing in WordPress, Shopify &amp; Modern Web
              Applications
            </p>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                I help businesses, startups, and creators build fast, responsive,
                and conversion-focused websites. From custom WordPress and Shopify
                development to React and Next.js applications, I create digital
                experiences that look great, perform well, and scale with your
                business.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#work"
                  >
                    <span className="relative inline-flex items-center">
                      View My Work{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#contact"
                  >
                    Let&apos;s Build Your Website
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <BrowserMockup
              src={HeroPreview}
              alt="Website analytics dashboard preview"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
