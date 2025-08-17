"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import logo from "../../assets/images/logo.png";

export default function Header() {
  const items = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About Us" },
      { id: "services", label: "Our Services" },
      { id: "process", label: "Our Process" },
      { id: "contact", label: "Contact Us" },
    ],
    []
  );
  const [active, setActive] = useState<string>("home");
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  useEffect(() => {
    const sectionIds = items.map((i) => i.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const headerEl = document.querySelector("header");
    const headerOffset = (headerEl?.getBoundingClientRect().height ?? 72) + 8;

    const observer = new IntersectionObserver(
      (entries) => {
        const inter = entries.filter((e) => e.isIntersecting);
        if (!inter.length) return;

        // Prefer sections whose top is at/under the header line (>= 0 relative to header)
        inter.sort((a, b) => {
          const aDelta = a.boundingClientRect.top - headerOffset;
          const bDelta = b.boundingClientRect.top - headerOffset;
          const aBelow = aDelta >= 0 ? 0 : 1;
          const bBelow = bDelta >= 0 ? 0 : 1;
          if (aBelow !== bBelow) return aBelow - bBelow; // prefer below/at header
          const aDist = Math.abs(aDelta);
          const bDist = Math.abs(bDelta);
          if (aDist !== bDist) return aDist - bDist; // closer to header line
          return b.intersectionRatio - a.intersectionRatio; // tie-breaker
        });

        const top = inter[0];
        const id = (top.target as HTMLElement).id;
        if (id) setActive(id);
      },
      {
        root: null,
        // Offset top by header height so 'home' stays active until its top passes header line
        rootMargin: `-${Math.round(headerOffset)}px 0px -55% 0px`,
        threshold: [0.05, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  // When scrolled to page bottom, force last nav item active (e.g., contact)
  useEffect(() => {
    const onScroll = () => {
      // Top guard: when near the very top, force 'home'
      const nearTop = window.scrollY <= 2;
      if (nearTop) {
        if (active !== "home") setActive("home");
        return;
      }

      const nearBottom =
        window.innerHeight + window.scrollY >=
        (document.scrollingElement?.scrollHeight ??
          document.body.scrollHeight) -
          2;
      if (nearBottom) {
        const last = items[items.length - 1]?.id;
        if (last && active !== last) setActive(last);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [items, active]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      setActive(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Mobile: close on ESC and lock body scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      document.addEventListener("keydown", onKey);
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", onKey);
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  const handleMobileLink = (id: string) => (e: React.MouseEvent) => {
    handleClick(id)(e);
    setMobileOpen(false);
  };

  return (
    <header
      className={
        `w-full fixed top-0 left-0 right-0 z-50 border-b border-black/5 ` +
        (mobileOpen
          ? `bg-white`
          : `bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60`)
      }
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            className="w-[200px] h-[50px] object-cover"
          />
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleClick(item.id)}
              aria-current={active === item.id ? "page" : undefined}
              className={
                (active === item.id
                  ? "text-sky-600 font-semibold after:w-full"
                  : "text-black/80 hover:text-black") +
                " relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-current after:w-0 after:transition-all after:duration-200"
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Socials + CTA on mobile */}
        <div className="flex items-center gap-3">
          {/* Simple social icon placeholders */}
          <a
            aria-label="Facebook"
            href="#"
            className="hidden sm:inline-flex h-8 w-8 rounded-full bg-sky-50 text-sky-600 items-center justify-center hover:bg-sky-100"
          >
            f
          </a>
          <a
            aria-label="Instagram"
            href="#"
            className="hidden sm:inline-flex h-8 w-8 rounded-full bg-rose-50 text-rose-600 items-center justify-center hover:bg-rose-100"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.6672 12C8.6672 10.1591 10.1591 8.6664 12 8.6664C13.8409 8.6664 15.3336 10.1591 15.3336 12C15.3336 13.8409 13.8409 15.3336 12 15.3336C10.1591 15.3336 8.6672 13.8409 8.6672 12ZM6.86512 12C6.86512 14.836 9.164 17.1349 12 17.1349C14.836 17.1349 17.1349 14.836 17.1349 12C17.1349 9.164 14.836 6.86512 12 6.86512C9.164 6.86512 6.86512 9.164 6.86512 12ZM16.1382 6.66152C16.1381 6.89886 16.2084 7.13089 16.3401 7.32829C16.4719 7.52568 16.6593 7.67956 16.8785 7.77047C17.0977 7.86138 17.339 7.88525 17.5718 7.83904C17.8046 7.79283 18.0185 7.67862 18.1863 7.51087C18.3542 7.34311 18.4686 7.12934 18.515 6.89658C18.5614 6.66382 18.5377 6.42253 18.447 6.20322C18.3563 5.98392 18.2025 5.79644 18.0052 5.6645C17.808 5.53257 17.576 5.4621 17.3386 5.462H17.3382C17.02 5.46215 16.715 5.58856 16.49 5.81347C16.265 6.03837 16.1384 6.34339 16.1382 6.66152ZM7.96 20.1398C6.98504 20.0954 6.45512 19.933 6.10296 19.7958C5.63608 19.614 5.30296 19.3975 4.95272 19.0478C4.60248 18.698 4.38568 18.3652 4.20472 17.8983C4.06744 17.5463 3.90504 17.0162 3.86072 16.0413C3.81224 14.9872 3.80256 14.6706 3.80256 12.0001C3.80256 9.3296 3.81304 9.01384 3.86072 7.95888C3.90512 6.98392 4.06872 6.45488 4.20472 6.10184C4.38648 5.63496 4.60296 5.30184 4.95272 4.9516C5.30248 4.60136 5.63528 4.38456 6.10296 4.2036C6.45496 4.06632 6.98504 3.90392 7.96 3.8596C9.01408 3.81112 9.33072 3.80144 12 3.80144C14.6693 3.80144 14.9862 3.81192 16.0412 3.8596C17.0162 3.904 17.5452 4.0676 17.8982 4.2036C18.3651 4.38456 18.6982 4.60184 19.0485 4.9516C19.3987 5.30136 19.6147 5.63496 19.7965 6.10184C19.9338 6.45384 20.0962 6.98392 20.1405 7.95888C20.189 9.01384 20.1986 9.3296 20.1986 12.0001C20.1986 14.6706 20.189 14.9863 20.1405 16.0413C20.0961 17.0162 19.9329 17.5462 19.7965 17.8983C19.6147 18.3652 19.3982 18.6983 19.0485 19.0478C18.6987 19.3972 18.3651 19.614 17.8982 19.7958C17.5462 19.933 17.0162 20.0954 16.0412 20.1398C14.9871 20.1882 14.6705 20.1979 12 20.1979C9.32952 20.1979 9.01376 20.1882 7.96 20.1398ZM7.8772 2.06056C6.81264 2.10904 6.0852 2.27784 5.44992 2.52504C4.792 2.78032 4.23504 3.1228 3.67848 3.67848C3.12192 4.23416 2.78032 4.792 2.52504 5.44992C2.27784 6.0856 2.10904 6.81264 2.06056 7.8772C2.01128 8.94344 2 9.28432 2 12C2 14.7157 2.01128 15.0566 2.06056 16.1228C2.10904 17.1874 2.27784 17.9144 2.52504 18.5501C2.78032 19.2076 3.122 19.7661 3.67848 20.3215C4.23496 20.877 4.792 21.219 5.44992 21.475C6.0864 21.7222 6.81264 21.891 7.8772 21.9394C8.944 21.9879 9.28432 22 12 22C14.7157 22 15.0566 21.9887 16.1228 21.9394C17.1874 21.891 17.9144 21.7222 18.5501 21.475C19.2076 21.219 19.765 20.8772 20.3215 20.3215C20.8781 19.7658 21.219 19.2076 21.475 18.5501C21.7222 17.9144 21.8918 17.1874 21.9394 16.1228C21.9879 15.0558 21.9992 14.7157 21.9992 12C21.9992 9.28432 21.9879 8.94344 21.9394 7.8772C21.891 6.81256 21.7222 6.0852 21.475 5.44992C21.219 4.7924 20.8772 4.23504 20.3215 3.67848C19.7658 3.12192 19.2076 2.78032 18.5509 2.52504C17.9144 2.27784 17.1874 2.10824 16.1236 2.06056C15.0574 2.01208 14.7165 2 12.0008 2C9.28512 2 8.944 2.01128 7.8772 2.06056Z"
                fill="red"
              />
              <path
                d="M8.6672 12C8.6672 10.1591 10.1591 8.6664 12 8.6664C13.8409 8.6664 15.3336 10.1591 15.3336 12C15.3336 13.8409 13.8409 15.3336 12 15.3336C10.1591 15.3336 8.6672 13.8409 8.6672 12ZM6.86512 12C6.86512 14.836 9.164 17.1349 12 17.1349C14.836 17.1349 17.1349 14.836 17.1349 12C17.1349 9.164 14.836 6.86512 12 6.86512C9.164 6.86512 6.86512 9.164 6.86512 12ZM16.1382 6.66152C16.1381 6.89886 16.2084 7.13089 16.3401 7.32829C16.4719 7.52568 16.6593 7.67956 16.8785 7.77047C17.0977 7.86138 17.339 7.88525 17.5718 7.83904C17.8046 7.79283 18.0185 7.67862 18.1863 7.51087C18.3542 7.34311 18.4686 7.12934 18.515 6.89658C18.5614 6.66382 18.5377 6.42253 18.447 6.20322C18.3563 5.98392 18.2025 5.79644 18.0052 5.6645C17.808 5.53257 17.576 5.4621 17.3386 5.462H17.3382C17.02 5.46215 16.715 5.58856 16.49 5.81347C16.265 6.03837 16.1384 6.34339 16.1382 6.66152ZM7.96 20.1398C6.98504 20.0954 6.45512 19.933 6.10296 19.7958C5.63608 19.614 5.30296 19.3975 4.95272 19.0478C4.60248 18.698 4.38568 18.3652 4.20472 17.8983C4.06744 17.5463 3.90504 17.0162 3.86072 16.0413C3.81224 14.9872 3.80256 14.6706 3.80256 12.0001C3.80256 9.3296 3.81304 9.01384 3.86072 7.95888C3.90512 6.98392 4.06872 6.45488 4.20472 6.10184C4.38648 5.63496 4.60296 5.30184 4.95272 4.9516C5.30248 4.60136 5.63528 4.38456 6.10296 4.2036C6.45496 4.06632 6.98504 3.90392 7.96 3.8596C9.01408 3.81112 9.33072 3.80144 12 3.80144C14.6693 3.80144 14.9862 3.81192 16.0412 3.8596C17.0162 3.904 17.5452 4.0676 17.8982 4.2036C18.3651 4.38456 18.6982 4.60184 19.0485 4.9516C19.3987 5.30136 19.6147 5.63496 19.7965 6.10184C19.9338 6.45384 20.0962 6.98392 20.1405 7.95888C20.189 9.01384 20.1986 9.3296 20.1986 12.0001C20.1986 14.6706 20.189 14.9863 20.1405 16.0413C20.0961 17.0162 19.9329 17.5462 19.7965 17.8983C19.6147 18.3652 19.3982 18.6983 19.0485 19.0478C18.6987 19.3972 18.3651 19.614 17.8982 19.7958C17.5462 19.933 17.0162 20.0954 16.0412 20.1398C14.9871 20.1882 14.6705 20.1979 12 20.1979C9.32952 20.1979 9.01376 20.1882 7.96 20.1398ZM7.8772 2.06056C6.81264 2.10904 6.0852 2.27784 5.44992 2.52504C4.792 2.78032 4.23504 3.1228 3.67848 3.67848C3.12192 4.23416 2.78032 4.792 2.52504 5.44992C2.27784 6.0856 2.10904 6.81264 2.06056 7.8772C2.01128 8.94344 2 9.28432 2 12C2 14.7157 2.01128 15.0566 2.06056 16.1228C2.10904 17.1874 2.27784 17.9144 2.52504 18.5501C2.78032 19.2076 3.122 19.7661 3.67848 20.3215C4.23496 20.877 4.792 21.219 5.44992 21.475C6.0864 21.7222 6.81264 21.891 7.8772 21.9394C8.944 21.9879 9.28432 22 12 22C14.7157 22 15.0566 21.9887 16.1228 21.9394C17.1874 21.891 17.9144 21.7222 18.5501 21.475C19.2076 21.219 19.765 20.8772 20.3215 20.3215C20.8781 19.7658 21.219 19.2076 21.475 18.5501C21.7222 17.9144 21.8918 17.1874 21.9394 16.1228C21.9879 15.0558 21.9992 14.7157 21.9992 12C21.9992 9.28432 21.9879 8.94344 21.9394 7.8772C21.891 6.81256 21.7222 6.0852 21.475 5.44992C21.219 4.7924 20.8772 4.23504 20.3215 3.67848C19.7658 3.12192 19.2076 2.78032 18.5509 2.52504C17.9144 2.27784 17.1874 2.10824 16.1236 2.06056C15.0574 2.01208 14.7165 2 12.0008 2C9.28512 2 8.944 2.01128 7.8772 2.06056Z"
                fill="red"
              />
            </svg>
          </a>
          <a
            aria-label="LinkedIn"
            href="#"
            className="hidden sm:inline-flex h-8 w-8 rounded-full bg-[#4A71FB15] text-red-600 items-center justify-center hover:bg-[#4A71FB30]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z"
                fill="#4A71FB"
              />
            </svg>
          </a>
          <a
            aria-label="YouTube"
            href="#"
            className="hidden sm:inline-flex h-8 w-8 rounded-full bg-red-50 text-red-600 items-center justify-center hover:bg-red-100"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5806 7.19355C21.3548 6.32258 20.6774 5.64516 19.8065 5.41935C18.2581 5 12 5 12 5C12 5 5.74194 5 4.19355 5.41935C3.32258 5.64516 2.64516 6.32258 2.41935 7.19355C2 8.77419 2 12 2 12C2 12 2 15.2581 2.41935 16.8065C2.64516 17.6774 3.32258 18.3548 4.19355 18.5806C5.74194 19 12 19 12 19C12 19 18.2581 19 19.8065 18.5806C20.6774 18.3548 21.3548 17.6774 21.5806 16.8065C22 15.2581 22 12 22 12C22 12 22 8.77419 21.5806 7.19355ZM10 15V9L15.1935 12L10 15Z"
                  fill="red"
                />
              </svg>
            </svg>
          </a>
          <button
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-black/10"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((p) => !p)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu overlay + panel */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-[999]"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <div
            id="mobile-menu"
            className="absolute right-0 top-0 h-full w-72 max-w-[85vw] bg-white  border-l border-black/10 p-6 flex flex-col gap-6 animate-[slideIn_.2s_ease]"
          >
            <div className="flex items-center justify-end">
              <button
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10"
                onClick={() => setMobileOpen(false)}
              >
                ×
              </button>
            </div>
            <nav className="flex flex-col bg-white gap-4 text-base">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleMobileLink(item.id)}
                  className={
                    active === item.id
                      ? "text-sky-600 font-medium"
                      : "text-black/80 hover:text-black"
                  }
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          {/* Simple CSS animation keyframes via Tailwind plugin not available, use utility alternative if present */}
        </div>
      )}
    </header>
  );
}
