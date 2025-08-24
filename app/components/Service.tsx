"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { services } from "./data/serviceSlides";
import Title from "./Title";

export default function Service() {
  // Carousel state like About.tsx
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const total = services.length; // expect 2: IT and Healthcare

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

  useEffect(() => {
    startTimer();
    return () => clearTimer();
  }, [startTimer]);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % total) + total) % total);
    },
    [total]
  );

  // Build slides track
  const track = useMemo(
    () => (
      <div
        className="w-full py-10 overflow-hidden"
        aria-roledescription="carousel"
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {services.map((svc) => (
            <div key={svc.name} className="min-w-full px-6">
              {/* Slide heading */}
              <div className="mx-auto max-w-3xl text-center">
                <h3 className="text-4xl font-serif font-semibold text-[#0e3e69]">
                  {svc.name}
                </h3>
              </div>
              <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 lg:max-w-6xl md:grid-cols-2 lg:grid-cols-3">
                {svc.children.map((group, i) => (
                  <div
                    key={group.name}
                    className={`relative rounded-2xl p-6 transition-all duration-300 ease-out opacity-95 hover:opacity-100 transform hover:scale-[1.02] hover:-translate-y-0.5 bg-gradient-to-br from-sky-50 to-teal-20 shadow-[5px_5px_30px_#0000001a] hover:shadow-[8px_8px_40px_#00000026]`}
                    style={{ transitionDelay: `${i * 90}ms` }}
                  >
                    <h4 className="text-lg font-semibold text-[#0e3e69]">
                      {group.name}
                    </h4>
                    {Array.isArray((group as any).children) && (
                      <ul
                        role="list"
                        className="mt-3 space-y-2 text-sm leading-6 text-gray-700"
                      >
                        {(group as any).children.map(
                          (item: { name: string }) => (
                            <li key={item.name} className="flex gap-x-3">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden
                                className="mt-0.5"
                              >
                                <path
                                  d="M19.2803 6.76264C19.5732 7.05553 19.5732 7.53041 19.2803 7.8233L9.86348 17.2402C9.57058 17.533 9.09571 17.533 8.80282 17.2402L4.71967 13.157C4.42678 12.8641 4.42678 12.3892 4.71967 12.0963C5.01256 11.8035 5.48744 11.8035 5.78033 12.0963L9.33315 15.6492L18.2197 6.76264C18.5126 6.46975 18.9874 6.46975 19.2803 6.76264Z"
                                  fill="#323544"
                                />
                              </svg>
                              <span>{item.name}</span>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    [index]
  );

  useEffect(() => {
    const section = document.getElementById("services");
    if (!section) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-inview");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    section.querySelectorAll<HTMLElement>(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="services" className="relative  py-24 scroll-mt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto">
        <div className="mx-auto max-w-[80vw] mb-7 lg:max-w-2xl text-center">
          <Title title="Our Services" />
        </div>

        {/* Carousel track */}
        <div
          className="relative"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
            startTimer();
          }}
        >
          {track}

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
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
              {services.map((s, i) => (
                <button
                  key={s.name}
                  onClick={() => {
                    goTo(i);
                    startTimer();
                  }}
                  aria-label={`Go to ${s.name}`}
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
      </div>
    </section>
  );
}
