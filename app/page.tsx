import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeBanner from "@/components/MarqueeBanner";
import BrandStory from "@/components/BrandStory";
import PerformancePillars from "@/components/PerformancePillars";
import EquipmentShowcase from "@/components/EquipmentShowcase";
import RecoverySection from "@/components/RecoverySection";
import AthleteLife from "@/components/AthleteLife";
import PerformanceDashboard from "@/components/PerformanceDashboard";
import SportsSection from "@/components/SportsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <BrandStory />
      <PerformancePillars />
      <EquipmentShowcase />
      <MarqueeBanner dark />
      <RecoverySection />
      <AthleteLife />
      <PerformanceDashboard />
      <SportsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
