"use client";

import React from "react";
import Text from "./text-render/Text";
import MainAppLogo from "../icons/main-app-logo";
import { useTranslations } from "next-intl";
import { useRichT } from "@/i18n/useRichT";
import { brandClass } from "@/i18n/richTags";

/* ---------- Icons ---------- */

const CrossIcon = () => (
  <svg
    className="h-5 w-5 text-red-500 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-green-500 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path d="M5 13l4 4L19 7" strokeLinecap="round" />
  </svg>
);

/* ---------- Component ---------- */

export default function ComparisonTable() {
  const t = useTranslations("comparison");
  const rich = useRichT("comparison");

  /* ---------- Rows (data-driven) ---------- */

  const rows = [
    "pricing",
    "subjects",
    "practice",
    "refund",
    "ready",
    "validity",
    "extras",
  ] as const;

  return (
    <div className="w-full overflow-x-auto">
      {/* This div MUST be wider than mobile screen */}
      <div className="min-w-[720px] mx-auto max-w-[950px] bg-[#f8fafc] rounded-2xl px-2 py-3">
        <div className="flex w-full px-0 rounded-xl">
          {/* ---------- Column 1 ---------- */}
          <Column
            title={t("columns.comparison")}
            justify="justify-center"
            rounded="rounded-l-xl"
            rows={rows.map((key) => ({
              text:
                rich(`rows.${key}.label`, {
                  brand: brandClass("text-black !font-semibold"),
                }) || t(`rows.${key}.label`),
              icon: <CheckIcon />,
            }))}
          />

          {/* ---------- Column 2 ---------- */}
          <Column
            title={t("columns.coaching")}
            rows={rows.map((key) => ({
              text: t(`rows.${key}.coaching`),
              icon: <CrossIcon />,
            }))}
          />

          {/* ---------- Column 3 ---------- */}
          <div className="flex-[1_1_35%] min-w-[240px] rounded-xl outline-4 outline-blue-500">
            <div className="mb-2 flex justify-center">
              <MainAppLogo width={200} height={48} />
            </div>

            <Column
              rounded="rounded-r-xl"
              rows={rows.map((key) => ({
                text: rich(`rows.${key}.app`, {
                  brand: brandClass("text-black !font-semibold"),
                }),
                icon: <CheckIcon />,
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Column ---------- */

function Column({
  title,
  rows,
  rounded,
  justify = "justify-left",
}: {
  title?: string;
  rows: { text: React.ReactNode; icon: React.ReactNode }[];
  rounded?: string;
  justify?: string;
}) {
  return (
    <div className="flex-[1_1_35%] min-w-[180px]">
      {title && (
        <Text
          as="h2"
          variant="heading-large"
          weight="semibold"
          className="text-center mb-4 h-[42px] flex items-end justify-center"
        >
          {title}
        </Text>
      )}

      <div className={`bg-white py-2  ${rounded}`}>
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-center space-x-3 min-h-15 px-2 lg:px-6 text-gray-700 heading-small ${justify} ${
              i !== 0 ? "border-t border-gray-200" : ""
            }`}
          >
            {row.icon}
            <Text as="p" variant="heading-small">
              {row.text}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
