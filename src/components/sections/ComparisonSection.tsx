import React from "react";
import Section from "../global/Section";
import ComparisonTable from "../shared/ComparisonTable";
import HeaderBlock from "../shared/text-render/HeaderBlock";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { useRichT } from "@/i18n/useRichT";

export default function ComparisonSection({
  bgColor="bg-[#f1f5fa]",
  active = true,
}: {
  bgColor?: string;
  active?: boolean;
}) {
  if (!active) {
    return null;
  }
  const t = useTranslations("comparison");
  const rich = useRichT("comparison");

  return (
    <div className={clsx(bgColor)}>
      <Section padding="py-6 px-3" sectionId="comparison-section" className="">
        <div className="flex flex-col gap-12">
          <HeaderBlock
            eyebrow={{
              text: rich("header.eyebrow"),
            }}
            heading={{
              text: rich("header.title"),
            }}
            description={{
              text: rich("header.subtitle"),
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
          <ComparisonTable />
          {/* Footer */}
          <p className="text-xs text-gray-500 text-center mt-3">
            {t("footer")}
          </p>
        </div>
      </Section>
    </div>
  );
}
