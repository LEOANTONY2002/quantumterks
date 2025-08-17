"use client";

import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";

type Step = { title: string; desc: string };

type ColumnProps = {
  heading: string;
  steps: Step[];
  accent?: "sky" | "teal";
};

const StepItem = ({
  index,
  step,
  accent = "sky",
  inView = false,
  delayMs = 0,
}: {
  index: number;
  step: Step;
  accent?: "sky" | "teal";
  inView?: boolean;
  delayMs?: number;
}) => {
  const railGradientStyle =
    accent === "sky"
      ? {
          backgroundImage:
            "linear-gradient(180deg, #38bdf8 0%, #3b82f6 50%, #0ea5e9 100%)",
        }
      : {
          backgroundImage:
            "linear-gradient(180deg, #2dd4bf 0%, #14b8a6 50%, #0d9488 100%)",
        };

  const badgeRing = accent === "sky" ? "ring-sky-300/60" : "ring-teal-300/60";

  return (
    <li
      className={`relative pl-14 transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {/* Number badge (glossy) */}
      <span
        className={`absolute left-0 top-0 z-[1] inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/30 backdrop-blur-[2px] text-[#0e3e69] font-semibold ring-1 ${badgeRing} shadow-[0_4px_14px_rgba(0,0,0,0.08)]`}
      >
        {index}
      </span>

      {/* Step content card (minimal) */}
      <div className="rounded-xl bg-white/70 backdrop-blur-[2px] border border-white/60 p-4">
        <h4 className="text-base md:text-lg font-semibold text-[#0e3e69]">
          {step.title}
        </h4>
        <p className="text-slate-700 text-sm leading-relaxed mt-1">
          {step.desc}
        </p>
      </div>
    </li>
  );
};

const Column = ({ heading, steps, accent = "sky" }: ColumnProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If section is already in view on mount (e.g., user refreshed mid-section), set immediately
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh * 0.9 && rect.bottom > 0) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <article ref={ref as any} className="relative">
      {/* Full rail */}
      <span
        aria-hidden
        className={`absolute left-[15px] top-4 bottom-4 w-[6px] rounded-full origin-top transition-transform duration-700 ease-out ${
          inView ? "scale-y-100" : "scale-y-0"
        } animate-rail-gradient z-0 pointer-events-none`}
        style={
          accent === "sky"
            ? {
                backgroundImage:
                  "linear-gradient(180deg, #7dd3fc 0%, #38bdf8 50%, #3b82f6 100%)",
              }
            : {
                backgroundImage:
                  "linear-gradient(180deg, #5eead4 0%, #2dd4bf 50%, #14b8a6 100%)",
              }
        }
      />

      <h3 className="ml-10 text-2xl font-serif font-semibold text-[#0e3e69]">
        {heading}
      </h3>

      <ol className="mt-5 space-y-5">
        {steps.map((s, i) => (
          <StepItem
            key={s.title}
            index={i + 1}
            step={s}
            accent={accent}
            inView={inView}
            delayMs={i * 120}
          />
        ))}
      </ol>
    </article>
  );
};

export default function Process() {
  const employers: Step[] = [
    {
      title: "Consultation & Requirements Gathering",
      desc: "We meet with your team to understand your specific needs, company culture, and technical requirements.",
    },
    {
      title: "Candidate Sourcing & Screening",
      desc: "Our recruiters leverage extensive networks and databases to identify qualified candidates, conducting thorough interviews and skill assessments.",
    },
    {
      title: "Candidate Presentation",
      desc: "We present only pre-qualified candidates with detailed profiles, including technical assessments and cultural fit evaluations.",
    },
    {
      title: "Interview Coordination",
      desc: "We facilitate the interview process, providing feedback and guidance to both parties throughout.",
    },
    {
      title: "Offer Management & Onboarding Support",
      desc: "We assist with offer negotiations and support the onboarding process to ensure successful placements.",
    },
  ];

  const seekers: Step[] = [
    {
      title: "Initial Consultation",
      desc: "We discuss your career goals, experience, and preferences to understand your ideal opportunity.",
    },
    {
      title: "Profile Development",
      desc: "We help optimize your professional profile and provide market insights for your skill set.",
    },
    {
      title: "Opportunity Matching",
      desc: "We match you with positions that align with your skills, experience, and career objectives.",
    },
    {
      title: "Interview Preparation",
      desc: "We provide coaching and insights about potential employers to help you succeed in interviews.",
    },
    {
      title: "Career Support",
      desc: "We offer ongoing career guidance and maintain relationships for future opportunities.",
    },
  ];

  return (
    <section
      id="process"
      className="relative py-20 scroll-mt-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-24 h-64 w-64 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[80vw] lg:max-w-2xl text-center">
          <Title title="Our Process" />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Column heading="For Employers" steps={employers} accent="sky" />
          <Column heading="For Job Seekers" steps={seekers} accent="teal" />
        </div>
      </div>
    </section>
  );
}
