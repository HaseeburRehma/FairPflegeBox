"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Online in Minuten bewerben",
    description:
      "Füllen Sie das Antragsformular schnell und einfach von zu Hause aus aus.",
  },
  {
    title: "Wählen Sie Ihre Produkte",
    description:
      "Wählen Sie aus unserem breiten Sortiment die Pflegehilfsmittel aus, die genau zu Ihren Bedürfnissen passen.",
  },
  {
    title: "Monatliche Lieferung erhalten",
    description:
      "Erhalten Sie Ihre Pflegebox jeden Monat pünktlich und zuverlässig direkt an Ihre Haustür geliefert.",
  },
];

export default function HowItWorks() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#F5F4F8]">
      <div className="container mx-auto px-6 xl:px-12 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ══════ LEFT: Image ══════ */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[600px] w-full">
            <Image
              src="/pflegebox-mutter-tochter-sofa.jpg"
              alt="Mutter und Tochter mit FairPflegeBox auf dem Sofa – Pflegehilfsmittel einfach erhalten"
              fill
              className="object-cover object-center"
            />
            {/* Subtle bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F4F8]/40 to-transparent" />
          </div>

          {/* ══════ RIGHT: Content ══════ */}
          <div>
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </span>
              <span className="text-sm font-semibold text-gray-800 tracking-wide">
                So funktioniert es
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[30px] sm:text-[36px] xl:text-[42px] font-medium text-gray-900 leading-[1.1] mb-4">
              Ihre FairPflegeBox zu<br />erhalten ist einfach
            </h2>

            {/* Subtitle */}
            <p className="text-[15px] text-gray-500 leading-relaxed mb-8 max-w-md">
              Ein klarer und einfacher Prozess, der Ihnen hilft, Ihre monatlichen
              Pflegeprodukte ohne Probleme zu erhalten.
            </p>

            {/* ── Accordion Steps ── */}
            <div className="flex flex-col gap-3 mb-8">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`rounded-2xl transition-all duration-300 ${
                    openIndex === i
                      ? "bg-white shadow-[0_2px_16px_rgba(67,53,139,0.08)]"
                      : "bg-white/60 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                  >
                    <span
                      className={`font-bold text-[15px] leading-snug transition-colors duration-200 ${
                        openIndex === i ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {step.title}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                        openIndex === i
                          ? "bg-[#009CB4] text-white"
                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                      }`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openIndex === i ? "rotate-0" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {openIndex === i ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M20 12H4"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M12 4v16m8-8H4"
                          />
                        )}
                      </svg>
                    </span>
                  </button>

                  {/* Expandable content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-5 pb-5 text-[14px] text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/jetzt-bewerben"
              className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[14px] rounded-full pl-6 pr-2 py-2 hover:bg-[#007f95] transition-colors shadow-lg shadow-[#009CB4]/30"
            >
              Jetzt bewerben
              <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-[#009CB4]"
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
    </section>
  );
}
