import React from "react";
import TestimonialsSection from "../sections/TestimonialsSection";
import HomeHero from "../sections/heros/HomeHero";
import CourseLogoCarousal from "../sections/CourseLogoCarousal";
import HowItWorksSection from "../sections/HowItWorksSection";
import FeaturesSection from "../sections/FeaturesSection";
import ComparisonSection from "../sections/ComparisonSection";
import FAQsSection from "../sections/FAQsSection";
import PricingSection from "../sections/PricingSection";
import SinglePricingSection from "../sections/SinglePricingSection";

export default function LandingPage() {
  return (
    <main className="flex-grow">
      <HomeHero />
      <CourseLogoCarousal />

      <FeaturesSection bgColor="bg-[#f1f5fa]" />
      <HowItWorksSection />
      <SinglePricingSection />
      <ComparisonSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQsSection />
    </main>
  );
}
