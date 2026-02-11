import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Certifications } from "@/components/certifications";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="lg:ml-56">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Certifications />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
