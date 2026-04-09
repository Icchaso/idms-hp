import { Hero } from "@/components/sections/Hero";
import { BusinessPillars } from "@/components/sections/BusinessPillars";
import { StatsSection } from "@/components/sections/StatsSection";
import { VisionPreview } from "@/components/sections/VisionPreview";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessPillars />
      <StatsSection />
      <VisionPreview />
      <CtaBanner />
    </>
  );
}
