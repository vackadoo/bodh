import AboutSeriesSection from "@/components/home/AboutSeriesSection";
import HeroSection from "@/components/home/HeroSection";
import IntroductionSection from "@/components/home/IntroductionSection";
import LocationsSection from "@/components/home/LocationsSection";
import Objectives from "@/components/home/Objectives";
import ThemeAndFocusArea from "@/components/home/ThemeAndFocusArea";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <IntroductionSection />
      <AboutSeriesSection />
      <ThemeAndFocusArea />
      <LocationsSection />
      <Objectives />
    </div>
  );
}
