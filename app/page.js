import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Qualifications from "@/components/Qualifications";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStats />
      <About />
      <Services limit={3} />
      <Experience />
      <Qualifications />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}