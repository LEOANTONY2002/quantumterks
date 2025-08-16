"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { aboutSlides } from "./data/aboutSlides";

export default function About() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const total = aboutSlides.length;
  const current = aboutSlides[index];

  const goTo = useCallback(
    (i: number) => {
      setIndex((prev) => {
        const next = ((i % total) + total) % total; // clamp wrap
        return next;
      });
    },
    [total]
  );

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);
  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Build slider track only for right content
  const track = useMemo(
    () => (
      <div
        className="w-full overflow-hidden rounded-2xl bg-white h-full align-center justify-center"
        aria-roledescription="carousel"
      >
        <div
          className="flex transition-transform duration-500 ease-out h-full align-center justify-center flex flex-column items-center"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {aboutSlides.map((slide) => (
            <article
              key={slide.key}
              className="min-w-full p-5 sm:p-6 md:p-7"
              aria-label={slide.label}
            >
              <div className="inline-flex mb-3 items-center rounded-md bg-sky-500 text-white px-6 py-3 text-xl font-bold shadow">
                {slide.title}
              </div>
              <div className="rounded-md border border-sky-400 p-4 md:p-5 bg-sky-50">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {slide.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    ),
    [index]
  );

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = useCallback(() => {
    if (total <= 1) return;
    clearTimer();
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setIndex((prev) => (prev + 1) % total);
      }
    }, 5000);
  }, [total]);

  // Autoplay every 5 seconds, loop, managed via refs
  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, [startTimer]);

  return (
    <section
      id="about"
      className="w-full py-12 sm:py-16 lg:py-20 relative z-[2] scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Two-column content */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
            startTimer();
          }}
        >
          {/* Left: Static visual tile */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100 min-h-[280px]">
            <div className="absolute inset-0 bg-[url('../assets/images/about.png')] bg-cover bg-center" />
            <div className="relative flex items-center justify-center text-center h-full p-8 md:p-10">
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white/95 drop-shadow-sm">
                About
                <br /> Us
              </h2>
            </div>
          </div>

          {/* Right: Sliding content only */}
          {track}
        </div>

        {/* Indicator below both columns with arrows */}
        <div className="mt-6 flex items-center justify-center gap-4 relative z-[2] pointer-events-auto">
          <button
            onClick={() => {
              prev();
              startTimer();
            }}
            aria-label="Previous slide"
            type="button"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            ‹
          </button>
          <div className="flex items-center gap-2">
            {aboutSlides.map((s, i) => (
              <button
                key={s.key}
                onClick={() => {
                  goTo(i);
                  startTimer();
                }}
                aria-label={`Go to ${s.label}`}
                type="button"
                className={
                  i === index
                    ? "h-2.5 w-6 rounded-full bg-sky-500"
                    : "h-2.5 w-2 rounded-full bg-slate-400 hover:bg-slate-500"
                }
              />
            ))}
          </div>
          <button
            onClick={() => {
              next();
              startTimer();
            }}
            aria-label="Next slide"
            type="button"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
