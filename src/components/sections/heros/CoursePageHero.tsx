"use client";
import React, { useMemo } from "react";
import Section from "../../global/Section";
import ContinueFreeButton from "../../ui/buttons/ContinueFreeButton";
import HeaderBlock from "../../shared/text-render/HeaderBlock";
import OverViewFeatureCard from "../../ui/cards/OverViewFeatureCard";
import HeroRatingCard from "../../ui/cards/HeroRatingCard";
import FreeTrialBadge from "../../ui/buttons/FreeTrialBadge";
import Text from "../../shared/text-render/Text";
import HeroActions from "./HeroActions";
import VerificationBadgeIcon from "@/components/icons/verification-badge-icon";

export default function CoursePageHero() {
  const featureItem = useMemo(() => {
    return [
      {
        id: 1,
        icon: <VerificationBadgeIcon />,
        heading: "Clear HTET 2024 exam",
        description:
          "Practice with real exam-level questions, sectional tests & full-length papers — all in one place.",
      },
      {
        id: 2,
        icon: <VerificationBadgeIcon />,
        heading: "Clear HTET 2024 exam",
        description:
          "Practice with real exam-level questions, sectional tests & full-length papers — all in one place.",
      },
      {
        id: 3,
        icon: <VerificationBadgeIcon />,
        heading: "Clear HTET 2024 exam",
        description:
          "Practice with real exam-level questions, sectional tests & full-length papers — all in one place.",
      },
    ];
  }, []);

  return (
    <Section sectionId="course-page-hero">
      {" "}
      <div className="grid md:grid-cols-11 gap-12">
        <div className="md:col-span-6">
          <div className="flex flex-col justify-center h-full gap-10">
            <HeaderBlock
              heading={{
                text: "Clear HTET 2024 exam",
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
            <HeroActions />
          </div>
        </div>
        <div className="md:col-span-5  w-full flex flex-col justify-center items-left space-y-2">
          {featureItem.map((item, index) => (
            <OverViewFeatureCard
              key={item.id}
              icon={item.icon}
              heading={{
                text: item.heading,
              }}
              description={{
                text: item.description,
              }}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
