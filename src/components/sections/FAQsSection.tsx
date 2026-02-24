"use client";

import React, { memo } from "react";
import Section from "../global/Section";
import HeaderBlock from "../shared/text-render/HeaderBlock";
import clsx from "clsx";
import { motion } from "framer-motion";
import FAQAccordion, { AccordionItem } from "../shared/FAQAccordion";
import { useTranslations } from "next-intl";
import { useRichT } from "@/i18n/useRichT";

/* ---------- Types ---------- */

type FAQKey = "refund" | "general" | "courses" | "payments" | "mentorship";

/* ---------- Component ---------- */

export default function FAQsSection({
  bgColor,
  active = true,
}: {
  bgColor?: string;
  active?: boolean;
}) {
  if (!active) return null;

  const t = useTranslations("faqSection");
  const rich = useRichT("faqSection");

  const [activeTab, setActiveTab] = React.useState<FAQKey>("refund");

  /* ---------- Tabs from i18n ---------- */

  const filters: { label: string; key: FAQKey }[] = [
    { label: t("categories.refund"), key: "refund" },
    { label: t("categories.general"), key: "general" },
    { label: t("categories.courses"), key: "courses" },
    { label: t("categories.payments"), key: "payments" },
    { label: t("categories.mentorship"), key: "mentorship" },
  ];

  /* ---------- FAQs from i18n ---------- */

  const faqs = t.raw("questions") as Record<FAQKey, { q: string; a: string }[]>;

  const items: AccordionItem[] = (faqs[activeTab] || []).map((faq, index) => ({
    id: `${activeTab}-${index}`,
    title: faq.q,
    content: <p>{faq.a}</p>,
  }));

  return (
    <div className={clsx(bgColor ?? "bg-white")}>
      <Section padding="py-6 px-3" sectionId="faqs-section">
        <div className="flex flex-col gap-6">
          {/* ========= HEADER ========= */}

          <HeaderBlock
            eyebrow={{ text: t("header.eyebrow") }}
            heading={{ text: rich("header.title") }}
            description={{ text: t("header.subtitle") }}
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
            containerClassName="max-w-3xl mx-auto"
          />

          {/* ========= FEATURED CARD ========= */}

          <ExplanationCard />

          {/* ========= TABS ========= */}

          <div className="max-w-3xl md:mx-auto">
            <div className="flex bg-brand/7 py-1 overflow-x-auto -mx-2 px-1 rounded-sm relative">
              {filters.map((filter) => {
                const isActive = activeTab === filter.key;

                return (
                  <button
                    key={filter.key}
                    onClick={() => setActiveTab(filter.key)}
                    className="relative px-4 py-2 rounded-sm whitespace-nowrap z-10 cursor-pointer"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white rounded-sm shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}

                    <span
                      className={`relative ${
                        isActive ? "text-black" : "text-black/70"
                      }`}
                    >
                      {filter.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ========= ACCORDION ========= */}

          <FAQAccordion items={items} defaultOpenId={items[0]?.id} />
        </div>
      </Section>
    </div>
  );
}

/* ---------- Featured Explanation Card ---------- */

const ExplanationCard = memo(function ExplanationCard() {
  const t = useTranslations("faqSection");

  const featured = t.raw("featured") as {
    title: string;
    description: string;
    points: string[];
  };

  if (!featured) return null;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
      <h3 className="font-semibold text-lg">{featured.title}</h3>

      <p className="text-gray-600">{featured.description}</p>

      <ul className="space-y-2 list-disc pl-5 text-gray-700">
        {featured.points?.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
});
