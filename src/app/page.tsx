import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import MarketingSection from "@/components/MarketingSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialSection from "@/components/TestimonialSection";
import NewsSection from "@/components/NewsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <MarketingSection />
      <PortfolioSection />
      <TestimonialSection />
      <NewsSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
