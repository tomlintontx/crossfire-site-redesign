import HeroSection from "@/components/home/HeroSection";
import MissionStrip from "@/components/home/MissionStrip";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import EventsTeaser from "@/components/home/EventsTeaser";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionStrip />
      <ProgramsPreview />
      <EventsTeaser />
      <CTABanner />
    </>
  );
}
