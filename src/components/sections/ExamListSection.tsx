"use client";
import React from "react";
import Section from "../global/Section";
import HeaderBlock from "../shared/text-render/HeaderBlock";
import CourseCard, { CourseRating } from "../ui/cards/CourseCard";
import Paragraph from "../shared/text-render/Paragraph";
import StarIcon from "../icons/star-icon";
import { useTranslations } from "next-intl";
import { useRichT } from "@/i18n/useRichT";
import { brandClass } from "@/i18n/richTags";

export default function ExamListSection({
  bgColor,
  active = true,
}: {
  bgColor?: string;
  active?: boolean;
}) {
  if (!active) {
    return null;
  }
  const t = useTranslations("pricingSection");

  const richState = useRichT("pricingSection.stats");

  return (
    <Section maxWidth="max-w-[1200px]" sectionId="exam-list-section">
      <div className="flex flex-col gap-12">
        <HeaderBlock
          eyebrow={{
            text: "Prepare for All Teaching Exams",
          }}
          heading={{
            text: "All Teaching Exams at One Place!",
            highlight: ["Teaching Exams"],
          }}
          description={{
            text: "Explore Complete Courses & Test Series for All Teaching Exams and get started for FREE.",
          }}
          eyebrowOptions={{
            alignMobile: "center",
            alignDesktop: "center",
          }}
          headingOptions={{
            alignMobile: "center",
            alignDesktop: "center",
            font: "display-medium !font-semibold",
          }}
          descriptionOptions={{
            alignMobile: "center",
            alignDesktop: "center",
          }}
          containerClassName="mx-auto"
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <div className="flex flex-col gap-8">
          <Paragraph
            text={{
              text: "Used by 10,000+ students to clear TET exams.",
              highlight: ["10,000"],
            }}
            textOptions={{
              alignMobile: "center",
              alignDesktop: "center",
              font: "heading-large !font-semibold",
            }}
          />
          <Paragraph
            text={{
              text: "Join thousands of successful TET aspirants who chose smart, affordable learning over expensive coaching!",
            }}
            textOptions={{
              alignMobile: "center",
              alignDesktop: "center",
              font: "body-medium !font-normal",
            }}
          />

          <div className="flex max-w-lg mx-auto flex-col gap-8">
            <Paragraph
              text={{
                text: richState("studentsUsed", {
                  count: 10000 + "+",
                  examName: "TET",
                }),
              }}
              textOptions={{
                alignMobile: "center",
                alignDesktop: "center",
                font: "heading-large !font-semibold",
              }}
            />
            <Paragraph
              text={{
                text: richState("description", { examName: "TET" }),
              }}
              textOptions={{
                alignMobile: "center",
                alignDesktop: "center",
                font: "body-medium !font-normal",
              }}
            />

            <div className="flex w-full justify-center">
              <CourseRating
                icon={<StarIcon variant="without-border" type="filled" />}
                ratingText={richState("averageRating", {
                  rating: "4.9+",
                  brand: brandClass("text-black font-semibold text-xl"),
                })}
                ratingTextClass={{
                  font: "body-large !font-normal",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
