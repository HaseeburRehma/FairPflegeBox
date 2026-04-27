"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Maria S.",
    role: "Pflegebedürftige Kundin",
    quote:
      `\u201eDie Bewerbung war sehr einfach, und die Box kam schnell an. Die Produkte sind praktisch, von hoher Qualit\u00e4t und machen die monatliche Bestellung f\u00fcr uns viel einfacher.\u201c`,
    avatar: "/desktop-02.png",
    portrait: "/7d0378f83f29680a409114d8aba85c16563199cf.png",
    stars: 5,
  },
  {
    name: "Heda B.",
    role: "Pflegebedürftige Kundin",
    quote:
      `\u201eDie Bestellung war sehr einfach und die Boxen kamen schnell. Die Produkte sind praktisch und ich bin sehr zufrieden! Die Qualität und auch der Inhalt dieser Box gefallen mir sehr.\u201c`,
    avatar: "/testimonial-avatar-1.png",
    portrait: "/image-Wrapper.png",
    stars: 5,
  },
  {
    name: "Thomas R.",
    role: "Pflegender Angehöriger",
    quote:
      `\u201eFairPflegeBox hat uns den Alltag enorm erleichtert. Kein Papierkram, keine Apotheken-Besuche \u2013 alles kommt pünktlich nach Hause. Ein großartiger Service für pflegende Familien.\u201c`,
    avatar: "/testimonial-avatar-2.png",
    portrait: "/pflegebox-lieferung-zuhause-senior.jpg",
    stars: 5,
  },
  {
    name: "Helga K.",
    role: "Pflegende Angehörige",
    quote:
      `\u201eIch bin begeistert von der einfachen Bestellung und der schnellen Lieferung. Die Produkte sind hochwertig und genau das, was wir brauchen. Absolut empfehlenswert!\u201c`,
    avatar: "/desktop-02.png",
    portrait: "/ecc395604dfa0fb936e6d06621ac1be119a2d329.png",
    stars: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < count ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="relative bg-[#43358B] overflow-hidden">
      {/* ── Top teal accent line ── */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#009CB4] via-[#009CB4] to-[#43358B]" />

      <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px] pt-14 sm:pt-20 pb-16 sm:pb-24">

        {/* ══════ HEADER AREA ══════ */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-14">

          {/* Left: Tag + Heading */}
          <div>
            {/* Kundenbewertungen pill — white with teal icon, matches other sections */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full pl-1.5 pr-4 py-1.5 shadow-sm mb-5 sm:mb-6">
              <span className="w-7 h-7 rounded-lg bg-[#009CB4] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <span className="text-[13px] sm:text-sm font-semibold text-gray-800 tracking-wide">
                Kundenbewertungen
              </span>
            </div>

            <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] xl:text-[50px] font-medium text-white leading-[1.08]">
              Was unsere<br className="hidden sm:block" />{" "}
              Kunden sagen
            </h2>
          </div>

          {/* Right: Description — now pure white per request */}
          <p className="text-[14px] sm:text-[15px] text-white leading-relaxed max-w-xs lg:pb-1">
            Vertraut von Familien, die einen einfacheren
            Weg suchen, monatliche Pflegeprodukte zu
            erhalten.
          </p>
        </div>

        {/* ══════ TESTIMONIAL AREA ══════ */}
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-0">

          {/* ── Avatar pill (vertical) ── */}
          <div className="flex md:flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full p-2.5 flex-shrink-0 mb-6 md:mb-0 md:mr-5 self-center">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 ${i === active
                    ? "w-14 h-14 ring-[3px] ring-[#009CB4] ring-offset-2 ring-offset-[#43358B] scale-105"
                    : "w-12 h-12 opacity-60 hover:opacity-90"
                  }`}
                aria-label={t.name}
              >
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* ── Portrait + Quote card ── */}
          <div className="flex flex-col sm:flex-row items-stretch flex-1 min-w-0">

            {/* Large portrait */}
            <div className="relative w-full sm:w-[280px] lg:w-[320px] xl:w-[360px] flex-shrink-0 rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none overflow-hidden min-h-[280px] sm:min-h-[340px]">
              {testimonials.map((t, i) => (
                <Image
                  key={i}
                  src={t.portrait}
                  alt={t.name}
                  fill
                  unoptimized
                  className={`object-cover object-center transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}
            </div>

            {/* Quote card */}
            <div className="bg-[#F5F4F8] rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none p-7 sm:p-8 lg:p-10 flex flex-col justify-center flex-1 min-w-0">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${i === active
                      ? "opacity-100 relative"
                      : "opacity-0 absolute pointer-events-none"
                    }`}
                >
                  <Stars count={t.stars} />

                  <blockquote className="mt-5 mb-6">
                    <p className="text-[16px] sm:text-[17px] lg:text-[18px] text-gray-800 leading-relaxed font-medium">
                      {t.quote}
                    </p>
                  </blockquote>

                  <p className="font-bold text-gray-900 text-[15px]">
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
