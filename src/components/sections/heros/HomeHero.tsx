"use client";

import React from "react";
import Section from "../../global/Section";
import HeaderBlock from "../../shared/text-render/HeaderBlock";
import HeroImage from "../../icons/hero-image";
import HeroActions from "./HeroActions";
import { useTranslations } from "next-intl";
import { useRichT } from "@/i18n/useRichT";

export default function HomeHero() {
  const t = useTranslations("heroSection");
  const rich = useRichT("heroSection");

  return (
    <Section padding="py-16 px-3" sectionId="home-hero">
      <div className="grid md:grid-cols-11 gap-12">

        {/* ========= LEFT CONTENT ========= */}

        <div className="md:col-span-6 md:order-1 order-2">
          <div className="flex flex-col justify-center h-full gap-10">

            <HeaderBlock
              heading={{
                text: rich("title", {
                  examName: "HTET 2024",
                }),
              }}
              description={{
                text: t("subtitle"),
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

        {/* ========= RIGHT IMAGE ========= */}

        <div className="md:col-span-5 w-full flex justify-center items-center md:order-2 order-1">

          {/* Desktop */}
          <div className="hidden md:block">
            <HeroImage />
          </div>

          {/* Mobile */}
          <div className="md:hidden block">
            <HeroImage size={300} />
          </div>

        </div>

      </div>
    </Section>
  );
}