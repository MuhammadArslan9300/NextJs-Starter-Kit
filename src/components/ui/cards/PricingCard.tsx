import React, { memo } from "react";
import CardWrap from "./CardWrap";
import Text from "@/components/shared/text-render/Text";
import Paragraph from "@/components/shared/text-render/Paragraph";
import Button from "../buttons/Button";
import ContinueFreeButton from "../buttons/ContinueFreeButton";

export interface PricingPoint {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
}

export interface PricingPlan {
  id: number | string;
  title: string;
  subtitle: string;
  price: number;
  priceNote: string;
  points: PricingPoint[];
  buttonText: string;
}

interface PricingCardProps extends PricingPlan {}

export default function PricingCard({
  title,
  subtitle,
  price,
  priceNote,
  points,
  buttonText,
}: PricingCardProps) {
  return (
    <CardWrap maxWidth="max-w-[360px]" >
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 px-2">
            <Text as="h5" variant="heading-large" weight="semibold">
              {title}
            </Text>

            <Paragraph
              text={{ text: subtitle }}
              textOptions={{ font: "body-large !font-normal" }}
            />
          </div>

          {/* Price Box */}
          <div className="bg-brand/20 px-3 py-2 h-[72px] flex rounded-lg items-center justify-center  gap-5">
            <Text
              as="h6"
              variant="heading-2xlarge"
              weight="semibold"
              className="flex items-end"
            >
              <span className="body-large mb-[1px] mr-1 !font-semibold">₹</span>
              {price}
            </Text>

            <Paragraph
              textOptions={{ font: "body-small !font-semibold" }}
              text={{ text: priceNote }}
            />
          </div>

          {/* Points */}
          <div className="px-2 flex flex-col gap-2">
            {points.map((point, index) => (
              <PointCard
                key={index}
                icon={<CheckIcon />}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </div>

        {/* Button */}
        <ContinueFreeButton text={buttonText} />
      </div>
    </CardWrap>
  );
}

function CheckIcon() {
  return (
    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
      ✓
    </div>
  );
}

interface PointCardProps extends PricingPoint {}

const PointCard = memo(function PointCard({
  icon,
  title,
  description,
}: PointCardProps) {
  return (
    <div className="flex gap-4 items-start w-full">
      <div>{icon}</div>

      <div className="flex flex-col">
        <Text as="p" variant="body-large" weight="semibold" color="gray-normal">
          {title ?? ""}
        </Text>
        <Text
          as="p"
          variant="body-medium"
          className="text-text-gray-normal"
          color="gray-subtle"
        >
          {description ?? ""}
        </Text>
      </div>
    </div>
  );
});
