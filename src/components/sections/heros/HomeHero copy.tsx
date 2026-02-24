"use client";

import React from "react";
import Section from "../../global/Section";
import HeaderBlock from "../../shared/text-render/HeaderBlock";
import HeroImage from "../../icons/hero-image";
import HeroActions from "./HeroActions";
import { motion } from "framer-motion";
import { fadeUp, reveal, staggerContainer } from "@/lib/animations";

export default function HomeHero() {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show" // ✅ Hero should animate immediately
    >
      <Section sectionId="home-hero">
        <div className="grid md:grid-cols-11 gap-12">
          {/* LEFT CONTENT */}
          <div className="md:col-span-6 md:order-1 order-2">
            <motion.div
              className="flex flex-col justify-center h-full gap-10"
              variants={staggerContainer} // ✅ Inner stagger
            >
              <motion.div variants={fadeUp}>
                <HeaderBlock
                  heading={{
                    text: "Clear HTET 2024 exam with PYQ-based Tests, Notes & Videos",
                    highlight: ["HTET 2024"],
                  }}
                  description={{
                    text: "Practice with real exam-level questions, sectional tests & full-length papers — all in one place.",
                  }}
                  eyebrowOptions={{
                    alignMobile: "center",
                    alignDesktop: "left",
                  }}
                  headingOptions={{
                    alignMobile: "center",
                    alignDesktop: "left",
                    font: "heading-xlarge !font-semibold",
                  }}
                  descriptionOptions={{
                    alignMobile: "center",
                    alignDesktop: "left",
                  }}
                  containerClassName="max-w-3xl mx-auto"
                />
              </motion.div>
              <motion.div variants={fadeUp}>
                <HeroActions />
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="md:col-span-5 w-full flex justify-center items-center md:order-2 order-1">
            <motion.div
              variants={reveal({
                y: 60, // ✅ better direction
                duration: 0.8,
              })}
            >
              <div className="md:block hidden">
                <HeroImage />
              </div>

              <div className="block md:hidden">
                <HeroImage size={300} />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </motion.section>
  );
}
