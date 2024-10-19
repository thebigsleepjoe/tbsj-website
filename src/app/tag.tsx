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

const colorClassesLight: Record<TagColor, string> = {
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

const colorClassesDark: Record<TagColor, string> = {
  gray: "bg-gradient-to-r from-gray-700 to-gray-900",
  red: "bg-gradient-to-r from-red-500 to-red-900",
  yellow: "bg-gradient-to-r from-yellow-600 to-yellow-900",
  green: "bg-gradient-to-r from-green-600 to-green-900",
  blue: "bg-gradient-to-r from-blue-500 to-blue-900",
  indigo: "bg-gradient-to-r from-indigo-700 to-indigo-900",
  purple: "bg-gradient-to-r from-purple-600 to-purple-900",
  pink: "bg-gradient-to-r from-pink-700 to-pink-900",
  orange: "bg-gradient-to-r from-orange-600 to-orange-800",
  teal: "bg-gradient-to-r from-teal-700 to-teal-900",
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

export const Tag = (
  { children, color = "gray", size = "normal" }: {
    children: any;
    color: TagColor;
    size: TextSize;
  },
) => {
  const sizeClass = sizeClasses[size];
  const colorClass = colorClassesLight[color];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-medium ${sizeClass} ${colorClass}`}
    >
      {children}
    </span>
  );
};

export const TagDark = (
  { children, color = "gray", size = "normal" }: {
    children: any;
    color: TagColor;
    size: TextSize;
  },
) => {
  const sizeClass = sizeClasses[size];
  const colorClass = colorClassesDark[color];

  return (
    <div className={`inline-flex p-[2px] ${colorClass} rounded-full ${sizeClass}`}>
      <div
        className={`bg-black h-full w-full rounded-full px-2.5 py-0.5 font-medium`}
      >
        {children}
      </div>
    </div>
  );
};

export default Tag;
