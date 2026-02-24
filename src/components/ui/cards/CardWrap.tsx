'use client';
import clsx from "clsx";
import React from "react";

type CardWrapProps = {
  as?: React.ElementType;

  children: React.ReactNode;
  className?: string;

  padding?: string;
  bgColor?: string;

  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;

  border?: string;
  borderColor?: string;
  rounded?: string;

  display?: string;
  overflow?: string;

  onClick?: () => void;
};

export default function CardWrap({
  as: Component = "div",

  children,
  className,

  padding = "p-4",
  bgColor = "bg-white",

  width = "w-full",
  height,
  maxWidth,
  maxHeight,

  border = "border",
  borderColor = "border-gray-200",
  rounded = "rounded-lg",

  display,
  overflow = "overflow-hidden",

  onClick,
}: CardWrapProps) {
  return (
    <Component
      onClick={onClick}
      className={clsx(
        padding,
        bgColor,
        width,
        height,
        maxWidth,
        maxHeight,
        border,
        borderColor,
        rounded,
        display,
        overflow,
        className,
      )}
    >
      {children}
    </Component>
  );
}
