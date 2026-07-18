export const metadata = {
  title: "Aditya Kalgutkar — Web Developer",
  description:
    "Freelance web developer specializing in WordPress, Shopify, React, and Next.js.",
};

import Hero from "@/components/hero-home";
import About from "@/components/about";
import Services from "@/components/services";
import FeaturedProjects from "@/components/featured-projects";
import WhyWorkWithMe from "@/components/why-work-with-me";
import Faq from "@/components/faq";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <WhyWorkWithMe />
      <Faq />
      <Contact />
    </>
  );
}
