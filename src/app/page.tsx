import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

import ContactSection from "@/components/ContactSection";

import TechStackSection from "@/components/TechStackSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Hero />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
