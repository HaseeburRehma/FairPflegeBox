"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Pflegepaket bestellen", href: "/pflegepaket" },
  { label: "Produkte", href: "/produkte" },
  { label: "So funktioniert es", href: "/so-funktioniert-es" },
  { label: "Pflegebedarf", href: "/pflegebedarf" },
  { label: "Häufige Fragen", href: "/haeufige-fragen" },
];

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      // Hide on scroll-down, show on scroll-up (only after first 80px)
      if (y > 80) {
        setVisible(y < lastY.current || y < 80);
      } else {
        setVisible(true);
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-2.5 sm:pt-3 transition-all duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <header
        className={`bg-white/95 backdrop-blur-md rounded-2xl transition-all duration-300 max-w-[1320px] mx-auto ${
          scrolled
            ? "shadow-[0_4px_30px_rgba(67,53,139,0.12)]"
            : "shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-5 h-[60px] sm:h-[64px]">
          {/* Logo — icon on left, stacked wordmark + tagline on right */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0"
            aria-label="FairPflegeBox – Startseite"
          >
            <Image
              src="/logo-icon.png"
              alt=""
              width={332}
              height={266}
              priority
              unoptimized
              className="h-9 sm:h-10 w-auto object-contain select-none"
            />
            <div className="flex flex-col leading-none">
              <span className="text-[17px] sm:text-[18px] font-extrabold tracking-tight leading-[1.05]">
                <span className="text-[#43358B]">Fair</span>
                <span className="text-[#B33C8A]">Pflege</span>
                <span className="text-[#43358B]">Box</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-medium text-[#009CB4] tracking-[0.02em] mt-[3px]">
                Pflegehilfsmittel einfach &amp; fair
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-gray-600 hover:text-[#43358B] transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/jetzt-bewerben"
              className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[13px] rounded-full pl-5 pr-1.5 py-1.5 hover:bg-[#007f95] transition-all duration-200 shadow-md shadow-[#009CB4]/25 hover:shadow-lg hover:shadow-[#009CB4]/30 active:scale-[0.97]"
            >
              Jetzt bewerben
              <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-1 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            <div className="w-5 h-5 relative flex items-center justify-center">
              <span
                className={`absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300 ${
                  mobileOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-[2px] w-5 bg-current rounded-full transition-all duration-300 ${
                  mobileOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-gray-100" />
          <nav className="px-4 py-3 flex flex-col gap-0.5">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-3 text-[15px] font-medium text-gray-700 hover:text-[#43358B] hover:bg-[#F4F2FB] rounded-xl transition-all duration-200"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link
                href="/jetzt-bewerben"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-3 w-full bg-[#009CB4] text-white font-semibold text-sm rounded-full pl-5 pr-2 py-2.5 hover:bg-[#007f95] transition-colors"
              >
                Jetzt bewerben
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
