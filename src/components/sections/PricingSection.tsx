import React, { use } from "react";
import Section from "../global/Section";
import HeaderBlock from "../shared/text-render/HeaderBlock";
import Paragraph from "../shared/text-render/Paragraph";
import { CourseRating } from "../ui/cards/CourseCard";
import StarIcon from "../icons/star-icon";
import PricingCard, { PricingPlan } from "../ui/cards/PricingCard";
import { useTranslations } from "next-intl";
import { useRichT } from "@/i18n/useRichT";
import { brandClass } from "@/i18n/richTags";

export default function PricingSection({
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
  const card = useTranslations("pricingSection.plans.card");

  const header = useRichT("pricingSection.header");

  const richCard = useRichT("pricingSection.plans.card.features");
  const richState = useRichT("pricingSection.stats");

  const pricingPlans: PricingPlan[] = [
    {
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
    },
    {
      id: 2,
      title: "CTET 2024",
      subtitle: card("tagline"),
      price: 500,
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
    },
    {
      id: 3,
      title: "CTET 2024",
      subtitle: card("tagline"),
      price: 499,
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
    },
  ];

  return (
    <Section sectionId="pricing-section">
      <div className="flex flex-col gap-12">
        <HeaderBlock
          eyebrow={{ text: t("header.eyebrow") }}
          heading={{
            text: header("titleForAll"),
          }}
          description={{
            text: t("header.subtitle"),
          }}
          eyebrowOptions={{
            alignMobile: "center",
            alignDesktop: "center",
          }}
          headingOptions={{
            alignMobile: "center",
            alignDesktop: "center",
            font: "display-small md:display-medium !font-semibold",
          }}
          descriptionOptions={{
            alignMobile: "center",
            alignDesktop: "center",
          }}
          containerClassName="mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
          {pricingPlans.slice(0, 3).map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>

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
    </Section>
  );
}
