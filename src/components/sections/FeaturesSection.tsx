// components/FeaturesSection.tsx
import { useTranslations } from "next-intl";
import Section from "../global/Section";
import HeaderBlock from "../shared/text-render/HeaderBlock";
import React, { memo } from "react";

import AlarmClockIcon from "../icons/alarm-clock-icon";
import CloudIcon from "../icons/cloud-icon";
import DiscountIcon from "../icons/discount-icon";
import { useRichT } from "@/i18n/useRichT";

/* ---------------- Types ---------------- */

type IconKey = "cloud" | "flag" | "clock";

type FeatureItem = {
  id: number;
  icon: IconKey;
  heading: React.ReactNode;
  description: React.ReactNode;
};

/* ---------------- Icons Map ---------------- */

const featureIcons: Record<IconKey, React.ReactNode> = {
  cloud: <CloudIcon />,
  flag: <DiscountIcon color="#192839" type="flag" />,
  clock: <AlarmClockIcon />,
};

/* ---------------- Main Component ---------------- */

export default React.memo(function FeaturesSection({
  bgColor,
  active = true,
}: {
  bgColor?: string;
  active?: boolean;
}) {
  if (!active) return null;

  const t = useTranslations("featureSection");
  const header = useRichT("featureSection.header");
  const richFeature = useRichT("featureSection.features");

  /* ---- Features (NO useMemo → ensures locale updates) ---- */

  const features: FeatureItem[] = [
    {
      id: 1,
      icon: "cloud",
      heading: richFeature("practice.title"),
      description: richFeature("practice.description"),
    },
    {
      id: 2,
      icon: "flag",
      heading: richFeature("languages.title"),
      description: richFeature("languages.description"),
    },
    {
      id: 3,
      icon: "clock",
      heading: richFeature("free.title"),
      description: richFeature("free.description"),
    },
  ];

  return (
    <div className={bgColor ?? "bg-white"}>
      <Section
        maxWidth="max-w-[1120px]"
        sectionId="features-section"
        padding="py-16 px-3"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* ---------- LEFT: Header ---------- */}

          <div className="col-span-1 order-1 flex items-center">
            <HeaderBlock
              eyebrow={{ text: t("header.eyebrow") }}
              heading={{ text: header("title") }}
              description={{ text: t("header.subtitle") }}
              eyebrowOptions={{
                alignMobile: "center",
                alignDesktop: "left",
              }}
              headingOptions={{
                alignMobile: "center",
                alignDesktop: "left",
                font: "display-medium !font-semibold",
              }}
              descriptionOptions={{
                alignMobile: "center",
                alignDesktop: "left",
              }}
              eyebrowClassName="mb-2"
              headingClassName="mb-3"
              containerClassName="mx-auto"
            />
          </div>

          {/* ---------- RIGHT: Features ---------- */}

          <div className="col-span-1 order-2">
            <div className="flex flex-col gap-3">
              {features.map((item) => (
                <Feature
                  key={item.id}
                  icon={featureIcons[item.icon]}
                  heading={item.heading}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
});

/* ---------------- Feature Item Component ---------------- */

const Feature = memo(function Feature({
  icon,
  heading,
  description,
}: {
  icon: React.ReactNode;
  heading: React.ReactNode;
  description: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 p-2">
      {/* Icon */}
      <div className="w-14 h-14 rounded flex justify-center items-center border-2 border-gray-200 bg-white shrink-0">
        {icon}
      </div>

      {/* Text */}
      <HeaderBlock
        heading={{ text: heading }}
        description={{ text: description }}
        headingOptions={{
          alignMobile: "center",
          alignDesktop: "left",
          font: "heading-small !font-semibold",
        }}
        descriptionOptions={{
          alignMobile: "center",
          alignDesktop: "left",
          font: "body-medium",
          color: "text-text-gray-subtle",
        }}
        headingClassName="mb-1"
        containerClassName="max-w-3xl mx-auto"
      />
    </div>
  );
});