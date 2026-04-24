"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    stat: "300+",
    label: "Unterstützte Personen",
    sub: "Für Familien und Einzelpersonen.",
  },
  {
    stat: "100%",
    label: "Kostenlos erhalten",
    sub: "Über die gesetzliche Pflegekasse.",
  },
  {
    stat: "40 €",
    label: "Monatliches Budget",
    sub: "Für Pflegehilfsmittel zum Verbrauch.",
  },
];

const SLIDE_DURATION = 4000; // ms per slide
const TICK = 30; // progress refresh rate (ms)

export default function Hero() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setProgress(0);
  }, []);

  // Auto-advance — tick the progress bar smoothly, then jump to the next slide
  useEffect(() => {
    const id = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActive((a) => (a + 1) % slides.length);
          return 0;
        }
        return prev + (TICK / SLIDE_DURATION) * 100;
      });
    }, TICK);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[100svh] overflow-hidden" aria-label="Startseite Hero">
      {/* Mobile background — elderly couple with FairPflegeBox box visible */}
      <Image
        src="/mission-aelteres-paar-fairpflegebox.jpg"
        alt="Älteres Paar mit FairPflegeBox auf dem Sofa"
        fill
        priority
        unoptimized
        className="object-cover object-center sm:hidden"
      />
      {/* Desktop background — nurse supporting senior */}
      <Image
        src="/hero-nurse.jpg"
        alt="FairPflegeBox Pflegerin betreut Seniorin zu Hause"
        fill
        priority
        unoptimized
        className="hidden sm:block object-cover object-center"
      />

      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#43358B]/95 via-[#43358B]/70 to-[#43358B]/20 sm:from-[#43358B]/90 sm:via-[#43358B]/55 lg:via-[#43358B]/45 lg:to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col justify-end pb-10 sm:pb-16 lg:pb-20 pt-24 sm:pt-28">
        <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-end">
            {/* Left: text + CTA */}
            <div className="max-w-lg">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[44px] xl:text-[52px] font-medium text-white leading-[1.08] mb-5">
                <span className="block whitespace-nowrap">Qualitäts-</span>
                <span className="block whitespace-nowrap">Pflegeprodukte</span>
                <span className="block whitespace-nowrap">bequem geliefert</span>
              </h1>
              <p className="text-[14px] sm:text-[15px] text-white/75 leading-relaxed mb-8 max-w-md">
                Wir helfen Familien und Pflegekräften, die notwendigen
                Pflegeartikel schneller zu erhalten. Qualitätsprodukte,
                reibungslose Lieferung und ein stressfreies Erlebnis jedes Mal.
              </p>
              <Link
                href="/jetzt-bewerben"
                className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[14px] rounded-full pl-6 pr-2 py-2 hover:bg-[#007f95] transition-all duration-200 shadow-xl shadow-[#009CB4]/40 active:scale-[0.97]"
              >
                Jetzt bewerben
                <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Right: stats slider card — larger, generous padding, rounded image inset */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-[28px] shadow-2xl shadow-black/20 w-full max-w-[560px] flex gap-5 p-5 sm:p-6">
                {/* Left column: pagination bars + stat text */}
                <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                  {/* Top-left pagination bars — smooth-filling progress animation */}
                  <div className="flex items-center gap-2 mb-8 sm:mb-10">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Statistik ${i + 1}`}
                        className="h-[4px] w-12 rounded-full overflow-hidden bg-gray-200"
                      >
                        <div
                          className="h-full rounded-full"
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
                  {/* Stat block — crossfades as slides advance */}
                  <div className="relative min-w-0 min-h-[130px] sm:min-h-[150px]">
                    {slides.map((slide, i) => (
                      <div
                        key={i}
                        className={`transition-all duration-500 ease-in-out ${
                          i === active
                            ? "opacity-100 translate-y-0 relative"
                            : "opacity-0 translate-y-2 absolute inset-0 pointer-events-none"
                        }`}
                      >
                        <p className="text-[44px] sm:text-[52px] font-bold text-gray-900 leading-none mb-4 whitespace-nowrap">
                          {slide.stat}
                        </p>
                        <p className="text-[18px] sm:text-[20px] font-semibold text-gray-900 mb-2 leading-tight">
                          {slide.label}
                        </p>
                        <p className="text-[14px] text-gray-400 leading-snug">
                          {slide.sub}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Right column: portrait image — rounded corners, inset from card edges */}
                <div className="relative w-[180px] sm:w-[210px] flex-shrink-0 rounded-2xl overflow-hidden self-stretch">
                  <Image
                    src="/image-wrapper.png"
                    alt="Zufriedene Pflegebedürftige Person zu Hause"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
