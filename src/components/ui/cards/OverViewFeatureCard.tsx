import Text from "@/components/shared/text-render/Text";
import { TextVariant } from "@/types/heading-block";
import { highlightTextUtil } from "@/utils/text/highlightTextUtil";
import React from "react";

type Props = {
  icon?: React.ReactNode;
  heading?: TextVariant;
  description?: TextVariant;
};

export default function OverViewFeatureCard({
  icon,
  heading,
  description,
}: Props) {
  return (
    <div className="">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          {icon ?? <div className="w-5 h-5 bg-red-400 rounded-full" />}
          <Text
          as="h5"
            variant="heading-small"
            weight="semibold"
            color="gray-normal"
          >
            {highlightTextUtil(
              heading?.text!,
              heading?.highlight,
              heading?.highlightClass,
            )}
          </Text>
        </div>
        <div>
          <Text as="p" variant="body-large" color="gray-subtle">
            {highlightTextUtil(
              description?.text!,
              description?.highlight,
              description?.highlightClass,
            )}
          </Text>
        </div>
      </div>
    </div>
  );
}
