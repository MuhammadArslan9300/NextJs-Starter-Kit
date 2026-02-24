import Text from "@/components/shared/text-render/Text";
import ContinueFreeButton from "@/components/ui/buttons/ContinueFreeButton";
import CardWrap from "@/components/ui/cards/CardWrap";
import Image from "next/image";
import React from "react";

export default function ReviewMainCard() {
  return (
    <CardWrap
      maxHeight="max-h-[308px]"
      height="min-h-[308px]"
      maxWidth="max-w-[364px]"
      width="min-w-[340px]"
      padding="p-0"
      border="border-none"
    >
      <div className="flex flex-col justify-center items-center gap-4 p-6 h-[308px] w-full bg-brand/12">
        <div>
          <div className="w-15 h-15 mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="user"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center flex-col gap-2">
            <h5 className="text-brand  heading-medium !font-semibold">4.9</h5>
            <Text as="p" variant="body-large" weight="semibold">
              from 1K<span className="text-brand">+</span> reviews
            </Text>
          </div>
        </div>
        <div>
          <ContinueFreeButton
            showIcon={false}
            text="Sign Up & Improve Your Score"
          />
        </div>
      </div>
    </CardWrap>
  );
}
