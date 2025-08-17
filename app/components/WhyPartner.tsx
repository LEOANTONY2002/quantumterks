"use client";

import React from "react";
import Title from "./Title";

type ListProps = {
  items: string[];
};

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="text-sky-600"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      className="stroke-current"
      strokeWidth="1.5"
      fill="#e6f3ff"
    />
    <path
      d="M7.5 12.5l3 3 6-7"
      className="stroke-current"
      stroke="#0ea5e9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const BulletList = ({ items }: ListProps) => (
  <ul className="space-y-3">
    {items.map((text) => (
      <li key={text} className="flex items-start gap-3">
        <span className="mt-0.5 shrink-0">
          <CheckIcon />
        </span>
        <span className="text-slate-700 leading-relaxed">{text}</span>
      </li>
    ))}
  </ul>
);

export default function WhyPartner() {
  const employers = [
    "Reduced Time-to-Fill: Our extensive candidate networks enable faster placements",
    "Quality Assurance: Rigorous screening processes ensure qualified candidates",
    "Industry Knowledge: Deep understanding of technical and healthcare requirements",
    "Flexible Solutions: Permanent, contract, and project-based staffing options",
    "Cost-Effective: Competitive rates with transparent fee structures",
  ];

  const professionals = [
    "Career Advancement: Access to exclusive opportunities with leading organizations",
    "Industry Expertise: Guidance from recruiters who understand your field",
    "Confidential Service: Discreet job search support for employed candidates",
    "Market Insights: Salary benchmarking and industry trend information",
    "Long-term Partnership: Ongoing career support and relationship building",
  ];

  return (
    <section
      id="why-partner"
      className="relative py-20 scroll-mt-24 overflow-hidden"
    >
      {/* subtle background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-teal-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-24 h-64 w-64 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[80vw] lg:max-w-2xl text-center">
          <Title title="Why Partner With Us" />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Employers */}
          <article className="relative rounded-2xl p-6 md:p-8 bg-gradient-to-br from-white to-sky-50/60 border border-[#e6f0fb] shadow-[0_10px_30px_rgba(2,132,199,0.08)]">
            <h3 className="text-2xl font-serif font-semibold text-[#0e3e69] mb-4">
              For Employers
            </h3>
            <BulletList items={employers} />
          </article>

          {/* Professionals */}
          <article className="relative rounded-2xl p-6 md:p-8 bg-gradient-to-br from-white to-teal-50/60 border border-[#e6f7f4] shadow-[0_10px_30px_rgba(13,148,136,0.08)]">
            <h3 className="text-2xl font-serif font-semibold text-[#0e3e69] mb-4">
              For Professionals
            </h3>
            <BulletList items={professionals} />
          </article>
        </div>
      </div>
    </section>
  );
}
