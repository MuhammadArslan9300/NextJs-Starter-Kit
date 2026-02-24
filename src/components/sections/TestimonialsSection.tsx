"use client";

import React, { useMemo } from "react";
import Section from "../global/Section";
import HeaderBlock from "../shared/text-render/HeaderBlock";
import ReviewCarousal from "../features/reviews/ReviewCarousal";
import Image from "next/image";
import ReviewMainCard from "../features/reviews/ReviewMainCard";
import Text from "../shared/text-render/Text";
import clsx from "clsx";
import CloudIcon from "../icons/cloud-icon";
import AlarmClockIcon from "../icons/alarm-clock-icon";
import { useTranslations } from "next-intl";
import { useRichT } from "@/i18n/useRichT";

export default React.memo(function TestimonialsSection({
  bgColor = "bg-[#f1f5fa]",
  active = true,
}: {
  bgColor?: string;
  active?: boolean;
}) {
  if (!active) return null;

  const t = useTranslations("successStoriesSection");
  const rich = useRichT("successStoriesSection");

  /* ---------- Static Reviews (can be localized later) ---------- */

  const reviews = useMemo(() => {
    return Array.from({ length: 6 }).map(() => ({
      profile: (
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
          alt="user"
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      ),
      name: "John Doe",
      reviewHighLight: ["96% marks"],
      role: "Student",
      review:
        "I was struggling to clear my exam. With this platform, I scored 96% marks. It was a game-changer!",
    }));
  }, []);

  return (
    <div className={clsx(bgColor)}>
      <Section
        padding="py-4"
        maxWidth="max-w-full"
        sectionId="testimonials-section"
      >
        <div className="flex flex-col">

          {/* ========= HEADER ========= */}

          <div className="flex flex-col gap-12">
            <HeaderBlock
              eyebrow={{ text: t("header.eyebrow") }}
              heading={{
                text: rich("header.title"),
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
                font: "display-medium !font-semibold",
              }}
              descriptionOptions={{
                alignMobile: "center",
                alignDesktop: "center",
              }}
              containerClassName="mx-auto px-2"
            />

            {/* ========= CAROUSELS ========= */}

            <div className="flex flex-col gap-4">
              {reviews.length > 0 && (
                <ReviewCarousal reviews={reviews} />
              )}

              {reviews.length > 0 && (
                <ReviewCarousal direction="right" reviews={reviews} />
              )}
            </div>
          </div>

          {/* ========= MAIN CARD + STATS ========= */}

          <div className="px-3 space-y-4 flex flex-col items-center -mt-[120px] z-[1]">

            <ReviewMainCard />

            {/* -------- Stats -------- */}

            <div className="flex md:gap-16 text-center">

              {/* Students Count */}

              <div className="p-5 flex flex-col gap-2 items-center w-full">
                <div className="flex gap-2 items-center">
                  <CloudIcon type="download" />
                  <Text as="h3" variant="heading-large" weight="semibold">
                    10K<span className="text-brand">+</span>
                  </Text>
                </div>

                <Text as="p" variant="body-medium">
                  {t("stats.students.label")}
                </Text>
              </div>

              {/* Rank */}

              <div className="p-5 flex flex-col gap-2 items-center w-full">
                <div className="flex gap-2 items-center">
                  <AlarmClockIcon />
                  <Text as="h3" variant="heading-large" weight="semibold">
                    #<span className="text-brand">1</span>
                  </Text>
                </div>

                <Text as="p" variant="body-medium">
                  {t("stats.rank.label")}
                </Text>
              </div>

            </div>
          </div>

        </div>
      </Section>
    </div>
  );
});