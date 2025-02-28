
import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitPills from "@/components/BenefitPills";
import FeaturedCourses from "@/components/FeaturedCourses";
import ServicesSection from "@/components/ServicesSection";
import RecommendedCourses from "@/components/RecommendedCourses";
import InstructorsSection from "@/components/InstructorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <BenefitPills />
        <FeaturedCourses />
        <ServicesSection />
        <RecommendedCourses />
        <TestimonialsSection />
        <InstructorsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
