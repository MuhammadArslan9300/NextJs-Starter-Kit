"use client";

import React, { memo } from "react";
import Section from "../global/Section";
import HeaderBlock from "../shared/text-render/HeaderBlock";
import Paragraph from "../shared/text-render/Paragraph";
import { useActiveStep } from "@/hooks/useActiveStep";
import clsx from "clsx";
import ContinueFreeButton from "../ui/buttons/ContinueFreeButton";
import { useTranslations } from "next-intl";
import { useRichT } from "@/i18n/useRichT";

/* ---------------- Types ---------------- */

type StepItem = {
  id: string;
  number: number;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  desc: React.ReactNode;
  btn: React.ReactNode;
  cardTitle?: React.ReactNode;
};

/* ---------------- Component ---------------- */

export default React.memo(function HowItWorksSection({
  bgColor = "bg-white",
  active = true,
}: {
  bgColor?: string;
  active?: boolean;
}) {
  if (!active) return null;

  const t = useTranslations("howItWorks");
  const header = useRichT("howItWorks.header");
  const richStep = useRichT("howItWorks.steps");

  /* ---------- Steps (Locale-safe, NO useMemo) ---------- */

  const steps: StepItem[] = [
    {
      id: "step-1",
      number: 1,
      title: richStep("step1.title"),
      subtitle: richStep("step1.description"),
      desc: richStep("step1.details"),
      btn: richStep("step1.button"),
      cardTitle: richStep("step1.cardTitle"),
    },
    {
      id: "step-2",
      number: 2,
      title: richStep("step2.title"),
      subtitle: richStep("step2.description"),
      desc: richStep("step2.details"),
      btn: richStep("step2.button"),
      cardTitle: richStep("step2.cardTitle"),
    },
    {
      id: "step-3",
      number: 3,
      title: richStep("step3.title"),
      subtitle: richStep("step3.description"),
      desc: richStep("step3.details"),
      btn: richStep("step3.button"),
      cardTitle: richStep("step3.cardTitle"),
    },
  ];

  const activeStep = useActiveStep(steps.map((s) => s.id));

  return (
    <div className={clsx(bgColor)}>
      <Section sectionId="how-it-works-section">
        <div className="flex flex-col gap-12">
          {/* ---------- Header ---------- */}

          <HeaderBlock
            eyebrow={{ text: t("header.eyebrow") }}
            heading={{ text: header("title") }}
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
            containerClassName="mx-auto"
          />

          {/* ---------- Steps ---------- */}

          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {steps.map((step) => {
                const isActive = activeStep === step.id;

                return (
                  <div
                    id={step.id}
                    key={step.id}
                    className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-20"
                  >
                    {/* 🔹 LEFT TEXT */}

                    <div className="order-2 md:order-1">
                      <div className="flex items-start gap-3">
                        {/* MOBILE BADGE */}

                        <div className="md:hidden w-6 flex flex-col gap-2 h-full items-center">
                          <div
                            className={clsx(
                              "rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mt-1 transition",
                              isActive
                                ? "bg-brand text-white"
                                : "bg-gray-300 text-gray-700",
                            )}
                          >
                            {step.number}
                          </div>

                          <div
                            className={clsx(
                              "h-[180px] w-0.5",
                              isActive ? "bg-brand" : "bg-gray-300",
                            )}
                          />
                        </div>

                        <Content {...step} />
                      </div>
                    </div>

                    {/* 🔹 CENTER STEPPER */}

                    <div className="hidden md:flex justify-center order-2">
                      <div
                        className={clsx(
                          "w-10 h-10 rounded-full flex items-center justify-center font-bold shadow transition-all duration-300",
                          isActive
                            ? "bg-brand text-white scale-110 shadow-lg"
                            : "bg-gray-300 text-gray-600",
                        )}
                      >
                        {step.number}
                      </div>
                    </div>

                    {/* 🔹 RIGHT CARD */}

                    <div className="order-3">
                      <div
                        className={clsx(
                          "rounded-2xl p-6 transition-all duration-300",
                          isActive
                            ? "bg-blue-50 shadow-lg shadow-brand/12"
                            : "bg-gray-100",
                        )}
                      >
                        {step.cardTitle && (
                          <h4 className="text-xl font-semibold text-blue-600 mb-4">
                            {/* {step.cardTitle} */}
                          </h4>
                        )}

                        <div className="h-36 bg-white rounded-lg flex items-center justify-center text-gray-400">
                          Image / UI
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
});

/* ---------------- Content Component ---------------- */

const Content = memo(function Content({
  title,
  subtitle,
  desc,
  btn,
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  desc: React.ReactNode;
  btn: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5">
      <HeaderBlock
        heading={{ text: title }}
        description={{ text: subtitle }}
        headingOptions={{
          alignMobile: "left",
          alignDesktop: "left",
          font: "heading-2xlarge !font-semibold",
        }}
        descriptionOptions={{
          font: "heading-medium !font-semibold",
          color: "text-text-gray-normal",
          alignMobile: "left",
          alignDesktop: "left",
        }}
        headingClassName="mb-5"
      />

      <Paragraph
        text={{ text: desc }}
        textOptions={{
          font: "body-large !font-normal",
          color: "text-text-gray-muted",
          alignMobile: "left",
          alignDesktop: "left",
        }}
      />

      <div className="w-[250px]">
        <ContinueFreeButton
          variant="outlined"
          fullWidth
          text={btn}
        />
      </div>
    </div>
  );
});