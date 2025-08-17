"use client";

import React from "react";

type TitleProps = {
  title: string;
  // Pass an SVG/React node for the icon. If not provided, a default desktop icon is used.
  icon?: React.ReactNode;
  className?: string;
};

const DefaultIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="text-white/90"
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="12"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M8 20h8"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 16v4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Title pill matching: assets/images/Group 514595891.png
 * - Layered rounded rectangles with teal→blue gradient
 * - Soft left icon chip
 * - Bold white title text
 */
export default function Title({ title, icon, className = "" }: TitleProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      {/* Back layer (offset) */}
      <span
        aria-hidden
        className="
          absolute 
          rounded-2xl
          -rotate-12
          bg-gradient-to-r from-teal-100 to-sky-100
          opacity-90
          blur-[0.2px]
          w-[80%]
          h-[100px]
        "
      />
      {/* Main pill */}
      <div
        className="
          relative z-[1]
          flex items-center gap-3
          rounded-2xl
          bg-gradient-to-r from-teal-400 to-sky-500
          text-white
          px-5 sm:px-6 py-3
          shadow-[0_10px_25px_rgba(32,146,220,0.35)]
          h-[60px]
        "
      >
        {/* Icon chip */}
        {icon && (
          <div
            className="
            inline-flex items-center justify-center
            h-9 w-9 sm:h-10 sm:w-10
            rounded-xl
            bg-white/20
            ring-1 ring-white/25
            backdrop-blur-[2px]
            shrink-0
          "
          >
            {icon ?? <DefaultIcon />}
          </div>
        )}

        {/* Title */}
        <span className="whitespace-nowrap font-semibold sm:font-bold text-base sm:text-lg">
          {title}
        </span>
      </div>
    </div>
  );
}
