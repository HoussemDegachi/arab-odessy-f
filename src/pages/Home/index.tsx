import HotAttractionsSection from "./HotAttractionsSection";
import LandingSection from "./LandingSection";
import VisitArabiaSection from "./VisitArabiaSection";
import TopDestinationsSection from "./TopDestinationsSection";
import MostVisitedSection from "./MostVisitedSection";
import CategoriesSection from "./CategoriesSection";

export default function Home() {
  return (
    <div>
      <header>
        <LandingSection />
      </header>
      <main className="flex flex-col items-center gap-20 py-[120px]">
        <VisitArabiaSection />
        <MostVisitedSection />
        <HotAttractionsSection />
        <TopDestinationsSection />
        <CategoriesSection />
      </main>
    </div>
  );
}
