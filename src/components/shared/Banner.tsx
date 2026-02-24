'use client';
import React from "react";
import DiscountIcon from "../icons/discount-icon";
import Counter from "./Counter";
import TimerDotes from "../icons/TimerDotes";
import clsx from "clsx";
import Text from "./text-render/Text";

type BannerProps = {
  icon?: React.ReactNode;
  text?: string;
  button?: React.ReactNode;
  height?: string;
  padding?: string;
  bgColor?: string;
};

export default function Banner({
  icon,
  text = "This is a banner text example ",
  button,
  height = "min-h-8",
  padding="p-2 md:p-0",
  bgColor='bg-brand-dark'
}: BannerProps) {
  return (
    <div className={`${bgColor} ${height} ${padding}`}>
      <div className={clsx("flex md:flex-row flex-col items-center justify-center gap-1 md:gap-4",height)}>
        {/* icon  */}
        <div className="flex items-center gap-2">
          <div>{icon ?? <DiscountIcon />}</div>
          <Text as="p" variant="body-medium" color="white">
            {text}
          </Text>
        </div>
        <div className="flex items-center gap-1 ">
          <Counter
            rounded="rounded-sm"
            width="w-5"
            height="h-5"
            bgColor="bg-white"
          />
          <TimerDotes height={12} gap={8} color="white" />{" "}
          <Counter
            rounded="rounded-sm"
            width="w-5"
            height="h-5"
            bgColor="bg-white"
          />
          <TimerDotes height={12} gap={8} color="white" />{" "}
          <Counter
            rounded="rounded-sm"
            width="w-5"
            height="h-5"
            bgColor="bg-white"
          />
        </div>
      </div>
    </div>
  );
}
