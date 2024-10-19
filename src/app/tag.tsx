import React from "react";

type TagColor =
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "orange"
  | "teal";

const colorClasses: Record<TagColor, string> = {
  gray: "bg-gray-200 text-gray-800",
  red: "bg-red-200 text-red-800",
  yellow: "bg-yellow-200 text-yellow-800",
  green: "bg-green-200 text-green-800",
  blue: "bg-blue-200 text-blue-800",
  indigo: "bg-indigo-200 text-indigo-800",
  purple: "bg-purple-200 text-purple-800",
  pink: "bg-pink-200 text-pink-800",
  orange: "bg-orange-200 text-orange-800",
  teal: "bg-teal-200 text-teal-800",
};

type TextSize = "xs" | "sm" | "normal" | "lg" | "xl";

// Define all possible size combinations
const sizeClasses = {
  xs: "text-xs md:text-xs",
  sm: "text-xs md:text-sm",
  normal: "text-xs md:text-base",
  lg: "text-sm md:text-lg",
  xl: "text-base md:text-xl",
};

const Tag = (
  { children, color = "gray", size = "normal" }: {
    children: any;
    color: TagColor;
    size: TextSize;
  },
) => {
  const sizeClass = sizeClasses[size];
  const colorClass = colorClasses[color];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-medium ${sizeClass} ${colorClass}`}
    >
      {children}
    </span>
  );
};

export default Tag;
