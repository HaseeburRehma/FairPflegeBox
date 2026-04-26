"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    stat: "300+",
    title: "Pflegeboxen geliefert",
    desc: "FairPflegeBox hilft Haushalten, regelmäßig essentielle Pflegeprodukte zu erhalten, wodurch die tägliche Bestellung einfacher und zuverlässiger wird.",
    image: "/pflegeboxen-geliefert.png",
  },
  {
    stat: "42 €",
    title: "Monatliches Budget",
    desc: "Nutzen Sie Ihr monatliches Pflegehilfsmittel-Budget von bis zu 42 Euro vollständig aus – flexibel und bedarfsgerecht.",
    image: "/pflegebox-lieferung-zuhause-senior.jpg",
  },
  {
    stat: "100%",
    title: "Kostenlos über Pflegekasse",
    desc: "Alle Pflegehilfsmittel werden vollständig über die gesetzliche Pflegekasse abgerechnet – ohne Zuzahlungen oder versteckte Kosten.",
    image: "/unboxing-fairpflegebox-seniorenpaar-kueche.jpg",
  },
];

export default function Features() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 4000; // ms per slide
  const TICK = 30; // progress update interval

  const goTo = useCallback((index: number) => {
    setActive(index);
    setProgress(0);
  }, []);

  // Auto-advance with smooth progress bar
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((prev) =>
        Math.min(prev + (TICK / SLIDE_DURATION) * 100, 100)
      );
    }, TICK);
    return () => clearInterval(id);
  }, []);

  // When progress fills, advance to the next slide. Kept separate from the
  // progress tick to avoid React strict-mode double-invocation skipping slides.
  useEffect(() => {
    if (progress < 100) return;
    const t = setTimeout(() => {
      setActive((a) => (a + 1) % slides.length);
      setProgress(0);
    }, 30);
    return () => clearTimeout(t);
  }, [progress]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px]">

        {/* ══════ HEADER ══════ */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          {/* Tag pill — matches other sections */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full pl-1.5 pr-4 py-1.5 shadow-sm">
              <span className="w-7 h-7 rounded-lg bg-[#009CB4] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </span>
              <span className="text-[13px] sm:text-sm font-semibold text-gray-800 tracking-wide">
                Warum FairPflegeBox
              </span>
            </div>
          </div>

          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-medium text-gray-900 leading-[1.15] mb-4">
            Monatliche Lieferung von{" "}
            <span className="inline sm:block">Pflegeprodukten einfach gestalten</span>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed max-w-xl mx-auto">
            Erhalten Sie jeden Monat essentielle Pflegeprodukte in einer
            praktischen Box. Einfach zu beantragen, flexibel anzupassen und
            direkt zu Ihnen nach Hause geliefert.
          </p>
        </div>

        {/* ══════ BENTO GRID ══════
            Mobile  → single column stack
            Tablet  → right pair becomes 2×1, purple card below
            Desktop → full bento layout (left hero + right 2×2) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-4">

          {/* ══════ LEFT: Image slider card ══════ */}
          <div className="relative rounded-3xl overflow-hidden min-h-[420px] sm:min-h-[480px] lg:min-h-[540px]">
            {/* Crossfade background images */}
            {slides.map((slide, i) => (
              <Image
                key={i}
                src={slide.image}
                alt={slide.title}
                fill
                priority={i === 0}
                className={`object-cover object-center transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

            {/* Slide text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <div className="relative min-h-[100px] sm:min-h-[120px]">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-500 ease-in-out ${
                      i === active
                        ? "opacity-100 translate-y-0 relative"
                        : "opacity-0 translate-y-3 absolute inset-0"
                    }`}
                  >
                    <p className="text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-white leading-tight mb-2">
                      {slide.stat} {slide.title}
                    </p>
                    <p className="text-[12.5px] sm:text-[13px] text-white/70 leading-relaxed max-w-md">
                      {slide.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              <div className="flex items-center gap-1.5 sm:gap-2 mt-5 sm:mt-6">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Slide ${i + 1}`}
                    className="h-[4px] flex-1 rounded-full overflow-hidden bg-white/20"
                  >
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width:
                          i === active
                            ? `${progress}%`
                            : i < active
                            ? "100%"
                            : "0%",
                        backgroundColor:
                          i === active || i < active
                            ? "#009CB4"
                            : "transparent",
                        transition:
                          i === active
                            ? "width 30ms linear"
                            : "width 300ms ease",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ══════ RIGHT: 2×2 sub-grid ══════ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* ── Top-left: Keine Papierformulare (tooltip-style info card) ── */}
            <div className="bg-[#F6F6F8] rounded-3xl p-6 sm:p-7 flex flex-col justify-center min-h-[200px]">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-5">
                <Image
                  src="/keine-papierformulare.png"
                  alt="Keine Papierformulare"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-[18px] sm:text-[20px] font-medium text-gray-900 leading-snug mb-1.5">
                Keine<br className="hidden sm:block" /> Papierformulare
              </h3>
              <p className="text-[13px] text-gray-400 font-medium">
                Einfache Online-Bewerbung
              </p>
            </div>

            {/* ── Top-right: Delivery image ── */}
            <div className="relative rounded-3xl overflow-hidden min-h-[200px]">
              <Image
                src="/stressfreier-prozess.png"
                alt="FairPflegeBox Lieferung"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* ── Bottom: Purple card spanning both columns on sm+ ── */}
            <div className="sm:col-span-2 bg-[#43358B] rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
              <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-medium text-white leading-snug">
                Flexible Produkte,<br className="hidden sm:block" /> monatlich geliefert
              </h3>
              <p className="text-[13.5px] sm:text-[14px] text-white/65 leading-relaxed max-w-lg">
                Wählen Sie die Pflegeprodukte, die Ihren Bedürfnissen
                entsprechen, und aktualisieren Sie Ihre Box jederzeit.
                FairPflegeBox macht die regelmäßige Lieferung einfach,
                praktisch und stressfrei.
              </p>
              <div className="mt-2">
                <Link
                  href="/produkte"
                  className="inline-flex items-center gap-3 border border-white/30 text-white font-semibold text-[13px] rounded-full pl-5 pr-1.5 py-1.5 hover:border-white/60 transition-colors"
                >
                  Erfahren Sie mehr
                  <span className="w-8 h-8 bg-[#009CB4] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
