import { OpenBanner } from "@/components/open-banner";
import { ScrollProgress } from "@/components/scroll-progress";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { TechTicker } from "@/components/tech-ticker";
import { Highlights } from "@/components/highlights";
import { Awards } from "@/components/awards";
import { Certifications } from "@/components/certifications";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";
import { SideDecor } from "@/components/side-decor";
import { Contact } from "@/components/contact";
import { Hatch } from "@/components/column";

export default function Page() {
  return (
    <>
      <SideDecor />
      <Navigation />
      <ScrollProgress />
      <OpenBanner />
      <main>
        <Hero />
        <TechTicker />
        <Hatch />
        <Highlights />
        <Hatch />
        <Journey />
        <Hatch />
        <Certifications />
        <Hatch />
        <Awards />
        <Hatch />
        <Projects />
        <Hatch />
        <Contact />
      </main>
    </>
  );
}
