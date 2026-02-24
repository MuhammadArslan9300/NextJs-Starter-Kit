import React, { memo } from "react";
import CardWrap from "./CardWrap";
import Image from "next/image";
import Badge from "../Badge";
import Paragraph from "@/components/shared/text-render/Paragraph";
import ContinueFreeButton from "../buttons/ContinueFreeButton";
import StarIcon from "@/components/icons/star-icon";
import Button from "../buttons/Button";
import clsx from "clsx";

interface Course {
  name: string;
  state: string;
  rating: string;
  ratingText: string;
  image: {
    src: string;
    alt: string;
  };
}
interface BadgeDetails {
  text: string;
  bgColor: string;
  color: string;
}

type Props = {
  course?: Course;
  badge?: BadgeDetails;

  viewDetailsClick?: () => void;
};

export default function CourseCard({ course, badge, viewDetailsClick }: Props) {
  return (
    <CardWrap
      maxWidth="max-w-[370px]"
      padding="md:p-4 p-2"
      rounded="rounded-2xl"
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-6">
          <div className="w-[104px] h-[104px]">
            {/* course Logo  */}
            <Image
              src={course?.image?.src ?? "/icons/Logo-48x48.png"}
              className="w-[104px] h-[104px]"
              alt={course?.image?.alt ?? "Logo"}
              width={104}
              height={104}
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-2">
              <Badge
                maxWidth="max-w-[170px]"
                text={badge?.text ?? "Course + Test Series"}
                bgColor={badge?.bgColor ?? "bg-text-green-subtle"}
                font="body-medium !font-normal"
                color={badge?.color ?? "text-text-green-normal"}
                border="border-none"
              />
              <div>
                <Paragraph
                  as={"h4"}
                  textOptions={{
                    font: "heading-large !font-semibold",
                  }}
                  text={{ text: course?.name ?? "HTET 2025" }}
                />
                <Paragraph
                  textOptions={{
                    font: "body-medium !font-normal",
                  }}
                  text={{ text: course?.state ?? "Haryana" }}
                />
              </div>
              <CourseRating
                ratingText={course?.ratingText ?? "(1.2k+ ratings)"}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ContinueFreeButton
            fullWidth
            size="md"
            showIcon={false}
            text="Start for FREE"
          />
          <Button
            onClick={viewDetailsClick}
            fullWidth
            size="md"
            variant="outlined"
            rounded="50px"
            padding="7px 4px"
          >
            View More Details
          </Button>
        </div>
      </div>
    </CardWrap>
  );
}

export const CourseRating = memo(
  ({
    ratingText,

    icon,
    iconGap = "gap-2",
    textGap = "gap-1",
    ratingTextClass,
  }: {
  
    ratingText: React.ReactNode;
    ratingTextClass?: {
      color?: string;
      font?: string;
      alignMobile?: "left" | "center" | "right";
      alignDesktop?: "left" | "center" | "right";
    };
    iconGap?: string;
    textGap?: string;
    icon?: React.ReactNode;
  }) => {
    return (
      <div className={clsx("flex items-center w-full", iconGap)}>
        <div>{icon ?? <StarIcon />}</div>
        <div className={clsx("flex items-center ", textGap)}>
         
          <Paragraph
            text={{
              text: ratingText,
            }}
            textOptions={{
              color: ratingTextClass?.color ?? "text-text-gray-normal",
              font: ratingTextClass?.font ?? "body-small !font-normal",
              alignMobile: ratingTextClass?.alignMobile,
              alignDesktop: ratingTextClass?.alignDesktop,
            }}
          />
        </div>
      </div>
    );
  },
);
