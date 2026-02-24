// utils/highlightTextUtil.ts

/**
 * Splits a heading and wraps the highlighted words with a className.
 *
 * @param heading - The full heading text
 * @param highlightText - Word(s) to highlight (string | string[])
 * @param highlightClass - CSS/Tailwind class to apply on highlighted text
 * @returns An array of React nodes with highlighted spans
 */
import { Align } from "@/types/textType";
import clsx from "clsx";
import React from "react";

export function highlightTextUtil(
  heading: string,
  highlightText?: string | string[],
  highlightClass: string = "text-[#0083ff]"
): React.ReactNode[] {
  if (!highlightText) return [heading];

  const highlights = Array.isArray(highlightText)
    ? highlightText
    : [highlightText];

  const regex = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = heading.split(regex);

  return parts.map((part, index) =>
    highlights.includes(part) ? (
      <span key={index} className={highlightClass}>
        {part}
      </span>
    ) : (
      part
    )
  );
}




export const getAlignmentClasses = (mobile?: Align, desktop?: Align) => {
  const mobileMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const desktopMap = {
    left: "md:text-left",
    center: "md:text-center",
    right: "md:text-right",
  };

  return clsx(mobile && mobileMap[mobile], desktop && desktopMap[desktop]);
};
