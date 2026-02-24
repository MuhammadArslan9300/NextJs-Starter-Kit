"use client";

import React from "react";
import Section from "../global/Section";
import HeaderBlock from "../shared/text-render/HeaderBlock";
import Paragraph from "../shared/text-render/Paragraph";
import { CourseRating } from "../ui/cards/CourseCard";
import StarIcon from "../icons/star-icon";
import PricingCard, { PricingPlan } from "../ui/cards/PricingCard";
import { useTranslations } from "next-intl";
import { useRichT } from "@/i18n/useRichT";
import { brandClass } from "@/i18n/richTags";
import Text from "../shared/text-render/Text";
import AccordionIcon from "../icons/accordion-icon";
import GuaranteeBadgeIcon from "../icons/guarantee-badge-icon";

export default React.memo(function SinglePricingSection({
  bgColor,
  active = true,
}: {
  bgColor?: string;
  active?: boolean;
}) {
  if (!active) return null;

  const t = useTranslations("pricingSection");
  const card = useTranslations("pricingSection.plans.card");

  const guarantee = useRichT("pricingSection.guarantee");
  const header = useRichT("pricingSection.header");
  const richCard = useRichT("pricingSection.plans.card.features");
  const richState = useRichT("pricingSection.stats");

  const pricingPlans: PricingPlan = {
    id: 1,
    title: "CTET 2024",
    subtitle: card("tagline"),
    price: 599,
    priceNote: card("billing"),
    buttonText: "Enroll Now",
    points: [
      {
        title: richCard("feedback.title") ?? "",
        description: richCard("feedback.description") ?? "",
      },
      {
        title: richCard("analytics.title") ?? "",
        description: richCard("analytics.description") ?? "",
      },
      {
        title: richCard("leaderboard.title") ?? "",
        description: richCard("leaderboard.description") ?? "",
      },
      {
        title: richCard("roadmap.title") ?? "",
        description: richCard("roadmap.description") ?? "",
      },
      {
        title: richCard("updates.title") ?? "",
        description: richCard("updates.description") ?? "",
      },
    ],
  };

  return (
    <div className={bgColor ?? "bg-white"}>
      <Section maxWidth="max-w-[1000px]" sectionId="pricing-section">
        {/* ===== Responsive Grid ===== */}

        <div className="grid gap-12 md:grid-cols-10 items-center">
          {/* ========= LEFT CONTENT ========= */}

          <div className="max-w-xl mx-auto lg:mx-0 md:col-span-6 flex flex-col justify-between h-full py-6">
            <HeaderBlock
              eyebrow={{ text: t("header.eyebrow") }}
              heading={{ text: header("titleForAll") }}
              description={{ text: t("header.subtitle") }}
              eyebrowOptions={{
                alignMobile: "center",
                alignDesktop: "left",
              }}
              headingOptions={{
                alignMobile: "center",
                alignDesktop: "left",
                font: "display-small md:display-medium !font-semibold",
              }}
              descriptionOptions={{
                alignMobile: "center",
                alignDesktop: "left",
              }}
            />

            <div className="px-1 py-6 md:p-6 flex items-center gap-5">
              <div>
               <GuaranteeBadgeIcon />
              </div>
              <div>
                <Text as="p" variant="body-medium" weight="semibold">
                  {guarantee("text")}
                </Text>
                <Text as="p" variant="body-medium" weight="semibold">
                  {guarantee("subtext")}
                </Text>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-6">
              <Paragraph
                text={{
                  text: richState("studentsUsed", {
                    count: "10,000+",
                    examName: "TET",
                  }),
                }}
                textOptions={{
                  alignMobile: "center",
                  alignDesktop: "left",
                  font: "heading-large !font-semibold",
                }}
              />

              <Paragraph
                text={{
                  text: richState("description", {
                    examName: "TET",
                  }),
                }}
                textOptions={{
                  alignMobile: "center",
                  alignDesktop: "left",
                  font: "body-medium",
                }}
              />

              {/* Rating */}

              <div className="flex justify-center lg:justify-start">
                <CourseRating
                  icon={<StarIcon variant="without-border" type="filled" />}
                  ratingText={richState("averageRating", {
                    rating: "4.9+",
                    brand: brandClass("text-black font-semibold text-xl"),
                  })}
                  iconGap="gap-2"
                  ratingTextClass={{
                    font: "body-large",
                    alignDesktop: "left",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ========= RIGHT CARD ========= */}

          <div className="w-full max-w-md flex justify-end md:col-span-4">
            <PricingCard {...pricingPlans} />
          </div>
        </div>
      </Section>
    </div>
  );
});
