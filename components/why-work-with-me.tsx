import Image from "next/image";
import WhyWorkImg from "@/public/images/why-work-with-me.jpg";

const reasons = [
  "Mobile-first, responsive development",
  "Clean, maintainable code",
  "Fast-loading websites",
  "Strong attention to UI/UX",
  "Clear communication throughout the project",
  "Reliable post-launch support",
];

export default function WhyWorkWithMe() {
  return (
    <section className="relative" id="experience">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2
              className="mb-4 border-y text-3xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-4xl"
              data-aos="zoom-y-out"
            >
              Why Work With Me?
            </h2>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div
              className="relative overflow-hidden rounded-2xl shadow-xl"
              data-aos="zoom-y-out"
            >
              <Image
                src={WhyWorkImg}
                alt="Team collaborating on a web development project"
                width={900}
                height={600}
                className="aspect-[3/2] w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <ul
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              {reasons.map((reason) => (
                <li
                key={reason}
                className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                >
                  <path d="M10.28 2.28 3.989 8.575 1.695 6.28A1 1 0 0 0 .28 7.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28 2.28Z" />
                </svg>
              
                <span className="text-sm leading-6 text-gray-700">
                  {reason}
                </span>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
