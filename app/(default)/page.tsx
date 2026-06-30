export const metadata = {
  title: "Home - Simple",
  description: "Page description",
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
