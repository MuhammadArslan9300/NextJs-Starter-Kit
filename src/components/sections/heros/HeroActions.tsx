"use client";

import React from "react";
import Button from "../../ui/buttons/Button";
import Text from "../../shared/text-render/Text";
import StarIcon from "../../icons/star-icon";
import { useTranslations } from "next-intl";

export default function HeroActions() {
  const t = useTranslations("heroSection");

  return (
    <div className="flex flex-col items-center md:items-start gap-4">

      {/* ========= CTA BUTTON ========= */}

      <Button rounded="50px" size="lg" color="primary">
        {t("cta.primary")}
      </Button>

      {/* ========= TRIAL BADGE + RATING ========= */}

      <div className="flex flex-col md:flex-row items-center gap-4">

        {/* Trial Badge */}

        <div className="px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-semibold">
          {t("cta.badge", { trialDays: 3 })}
        </div>

        {/* Rating */}

        <div className="flex items-center gap-2 text-sm text-gray-700">

          <StarIcon variant="without-border" type="filled" />

          <span className="font-semibold">
            {t("rating.value", { rating: "4.9" })}
          </span>

          <span className="text-gray-500">
            {t("rating.text")}
          </span>

        </div>

      </div>

      {/* ========= NOTE ========= */}

      <Text
        as="p"
        variant="body-small"
        className="text-gray-500 text-center md:text-left"
      >
        {t("cta.note")}
      </Text>

    </div>
  );
}