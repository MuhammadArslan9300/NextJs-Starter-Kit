import React from "react";
import TestimonialsSection from "../sections/TestimonialsSection";
import HomeHero from "../sections/heros/HomeHero";
import CourseLogoCarousal from "../sections/CourseLogoCarousal";
import CoursePageHero from "../sections/heros/CoursePageHero";
import ExamListSection from "../sections/ExamListSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import FeaturesSection from "../sections/FeaturesSection";
import ComparisonSection from "../sections/ComparisonSection";
import FAQsSection from "../sections/FAQsSection";
import PricingSection from "../sections/PricingSection";


export default function CoursePage() {
  return (
    <main className="flex-grow">

      <CoursePageHero />
      <CourseLogoCarousal />
      <FeaturesSection />
      <TestimonialsSection />
      <ExamListSection />
      <HowItWorksSection />
      <ComparisonSection />
      <FAQsSection />
      <PricingSection />
    </main>
  );
}
