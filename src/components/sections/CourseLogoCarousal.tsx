"use client";

import React from "react";
import Section from "../global/Section";
import Text from "../shared/text-render/Text";
import Button from "../ui/buttons/Button";
import LogoCarousel from "./LogoCarousel";
import { useTranslations } from "next-intl";
import { highlightTextUtil } from "@/utils/text/highlightTextUtil";
import { useRichT } from "@/i18n/useRichT";

export default function CourseLogoCarousal({
  bgColor,
  active = true,
}: {
  bgColor?: string;
  active?: boolean;
}) {
  if (!active) return null;

  const t = useTranslations("trustedExamsSection");

  /* ---------- Logo Data ---------- */
  // (Replace with real exam logos later)

  const logos = [
    { src: "/logos/htet.svg", title: "HTET", subtitle: "Haryana" },
    { src: "/logos/reet.svg", title: "REET", subtitle: "Rajasthan" },
    { src: "/logos/ctet.svg", title: "CTET", subtitle: "India" },
    { src: "/logos/btet.svg", title: "BTET", subtitle: "Bihar" },
    { src: "/logos/mptet.svg", title: "MPTET", subtitle: "Madhya Pradesh" },
    { src: "/logos/hptet.svg", title: "HPTET", subtitle: "Himachal Pradesh" },
    { src: "/logos/uptet.svg", title: "UPTET", subtitle: "Uttar Pradesh" },
    { src: "/logos/ptet.svg", title: "PTET", subtitle: "Punjab" },
  ];

  /* ---------- Translated Header ---------- */

  const headerText = t("header.title", {
    count: "10,000+",
    examName: "TET",
  });

  const header = useRichT("trustedExamsSection");

  return (
    <div className={bgColor ?? "bg-white"}>
      <Section
        padding="py-8"
        maxWidth="max-w-screen"
        sectionId="course-logo-carousal"
      >
        <div className="flex flex-col gap-6">
          {/* ========= HEADER ========= */}

          <Text
            as="h6"
            variant="heading-large"
            weight="semibold"
            className="text-center"
          >
            {header("header.title", {
              count: "10,000+",
              examName: "TET",
            })}
          </Text>

          {/* ========= LOGO CAROUSEL ========= */}

          <LogoCarousel
            logos={logos}
            speed={60}
            direction="left"
            pauseOnHover
            className="mx-auto"
          />

          {/* ========= FOOTER ========= */}

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-14">
            <Text
              as="h6"
              variant="heading-small"
              weight="semibold"
              className="text-center"
            >
              {header("footer.text", {
              count: "10,000+",
              examName: "TET",
            })}
            </Text>

            <Button size="sm" rounded="50px" variant="outlined" color="primary">
              {t("footer.cta")}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
