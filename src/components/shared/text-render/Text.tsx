import React, { ReactNode } from "react";
import clsx from "clsx";

/* ---------- Types ---------- */

export type TextElement =
  | "div"
  | "p"
  | "span"
  | "label"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

export type TextVariant =
  /* Display */
  | "display-xlarge"
  | "display-large"
  | "display-medium"
  | "display-small"
  /* Headings */
  | "heading-2xxlarge"
  | "heading-2xlarge"
  | "heading-xlarge"
  | "heading-large"
  | "heading-medium"
  | "heading-small"
  /* Body */
  | "body-large"
  | "body-medium"
  | "body-small"
  | "body-xsmall";

export type FontWeight = "normal" | "medium" | "semibold" | "bold";

export type TextColor =
  /* Gray */
  | "gray-normal"
  | "gray-subtle"
  | "gray-muted"
  | "gray-disabled"

  /* Primary */
  | "primary-normal"
  | "primary-dark"
  | "white";

/* ---------- Props ---------- */

export interface TextProps {
  children: ReactNode;
  as?: TextElement;
  variant?: TextVariant;
  weight?: FontWeight;
  color?: TextColor;
  className?: string;
}

/* ---------- Internal Maps ---------- */

const weightClassMap: Record<FontWeight, string> = {
  normal: "!font-normal",
  medium: "!font-medium",
  semibold: "!font-semibold",
  bold: "!font-bold",
};

const colorClassMap: Record<TextColor, string> = {
  /* Gray */
  "gray-normal": "text-text-gray-normal",
  "gray-subtle": "text-text-gray-subtle",
  "gray-muted": "text-text-gray-muted",
  "gray-disabled": "text-text-gray-disabled",

  /* Primary */
  "primary-normal": "text-color-brand",
  "primary-dark": "text-color-brand-dark",
  "white": "text-white",
};

/* ---------- Component ---------- */

export default function Text({
  children,
  as = "span",
  variant = "body-medium",
  weight = "normal",
  color = "gray-normal",
  className,
}: TextProps) {
  if (!children) return null;

  const Component = as;

  return (
    <Component
      className={clsx(
        className,
        variant,
        weightClassMap[weight],
        colorClassMap[color],
      )}
    >
      {children}
    </Component>
  );
}
