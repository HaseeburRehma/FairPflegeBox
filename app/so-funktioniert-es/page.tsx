"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ════════════════════════════════════
   STEP DATA
   ════════════════════════════════════ */

type Step = {
  id: number;
  label: string;
  duration: string;
  title: string;
  description: string;
  todo: string;
  benefit: string;
  icon: ReactNode;
};

const DocIcon = (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M9 8l2 2 4-4"
    />
  </svg>
);

const SearchIcon = (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"
    />
  </svg>
);

const CheckIcon = (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const TruckIcon = (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M3 7a2 2 0 012-2h9a2 2 0 012 2v10H3V7z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M16 10h4l2 3v4h-6v-7z"
    />
    <circle cx="7.5" cy="18.5" r="1.8" strokeWidth={1.6} />
    <circle cx="17.5" cy="18.5" r="1.8" strokeWidth={1.6} />
  </svg>
);

const steps: Step[] = [
  {
    id: 1,
    label: "Schritt 1",
    duration: "3 Minuten",
    title: "Füllen Sie die Online-Anmeldung aus",
    description:
      "Vervollständigen Sie unser einfaches Online-Formular. Sie benötigen Ihre persönlichen Daten, Ihren Pflegegrad und Informationen zu Ihrer Pflegeversicherung.",
    todo: "Füllen Sie das Formular online aus und senden Sie es ab.",
    benefit: "Kein Papierkram, keine komplizierten Formulare.",
    icon: DocIcon,
  },
  {
    id: 2,
    label: "Schritt 2",
    duration: "1–2 Werktage",
    title: "Wir prüfen Ihren Antrag",
    description:
      "Unser Team prüft Ihre Angaben, stellt sicher, dass alle Voraussetzungen erfüllt sind, und kümmert sich um die gesamte Kommunikation mit Ihrer Pflegekasse.",
    todo: "Nichts – lehnen Sie sich zurück, wir übernehmen alles.",
    benefit: "Kein Stress mit Behörden oder Formularen.",
    icon: SearchIcon,
  },
  {
    id: 3,
    label: "Schritt 3",
    duration: "2–5 Werktage",
    title: "Bestätigung durch Ihre Pflegekasse",
    description:
      "Ihre Pflegekasse bestätigt den Antrag und genehmigt die monatliche Lieferung Ihrer Pflegehilfsmittel. Sie erhalten eine schriftliche Bestätigung per E-Mail.",
    todo: "Behalten Sie Ihr Postfach im Blick – die Bestätigung kommt per E-Mail.",
    benefit: "Ab sofort bis zu 42 € pro Monat kostenlos.",
    icon: CheckIcon,
  },
  {
    id: 4,
    label: "Schritt 4",
    duration: "Jeden Monat",
    title: "Monatliche Lieferung direkt nach Hause",
    description:
      "Ihre FairPflegeBox wird jeden Monat pünktlich an Ihre Haustür geliefert – portofrei, diskret verpackt und mit den Produkten, die Sie ausgewählt haben.",
    todo: "Paket entgegennehmen – fertig.",
    benefit: "Immer versorgt, ohne Nachbestellung oder Sorgen.",
    icon: TruckIcon,
  },
];

/* ════════════════════════════════════
   PAGE
   ════════════════════════════════════ */

export default function SoFunktioniertEsPage() {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <main>
      {/* ══════ HERO — same photo + purple overlay as Pflegepaket ══════ */}
      <section className="relative pt-36 sm:pt-44 lg:pt-52 pb-24 sm:pb-32 lg:pb-40 overflow-hidden">
        <Image
          src="/senior-fairpflegebox-wohnzimmer.png"
          alt="Älterer Herr mit FairPflegeBox im Wohnzimmer"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#43358B]/85 via-[#43358B]/75 to-[#352878]/90" />

        <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px] relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[32px] sm:text-[42px] xl:text-[54px] font-bold text-white leading-[1.08] mb-5">
              Von der Bewerbung bis
              <br className="hidden sm:block" /> zu Ihnen nach Hause
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/85 leading-relaxed max-w-xl mx-auto mb-7">
              Wir machen es Ihnen so einfach wie möglich – nur 4 Schritte zu
              Ihrer kostenlosen Pflegebox.
            </p>

            {/* Trust pill */}
            <div className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
              <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M1.5 13l4 4L13 9" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M9 17l1.5 1.5L22 7" />
              </svg>
              <span className="text-[14px] font-medium text-white">
                100 % digital und papierlos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ STEP STRIP + DETAIL ══════ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1100px]">

          {/* Step icon strip */}
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8 sm:mb-12">
              {steps.map((s, i) => (
                <div
                  key={s.id}
                  className={`flex items-center ${
                    i < steps.length - 1 ? "flex-1" : "flex-initial"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`${s.label}: ${s.title}`}
                    className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#43358B] focus-visible:ring-offset-2 rounded-2xl"
                  >
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        i === active
                          ? "bg-[#43358B] shadow-[0_10px_25px_rgba(67,53,139,0.25)]"
                          : "bg-[#EFE9FA] hover:bg-[#E3DAF5]"
                      }`}
                    >
                      <span
                        className={`w-6 h-6 sm:w-7 sm:h-7 ${
                          i === active ? "text-white" : "text-[#43358B]"
                        }`}
                      >
                        {s.icon}
                      </span>
                    </div>
                  </button>

                  {i < steps.length - 1 && (
                    <div
                      className={`h-[2px] flex-1 mx-2 sm:mx-3 transition-colors duration-300 ${
                        i < active ? "bg-[#43358B]" : "bg-[#E3DAF5]"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Step content card */}
          <ScrollReveal>
            <article className="border border-gray-200 rounded-[20px] p-6 sm:p-8 transition-all duration-300">
              {/* Label + duration */}
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[12px] font-bold text-gray-500 tracking-[0.15em] uppercase">
                  {current.label}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[12px] text-gray-500">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 7v5l3 2" />
                  </svg>
                  {current.duration}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-[22px] sm:text-[26px] font-bold text-gray-900 leading-snug mb-3">
                {current.title}
              </h2>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Two mini cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-[#F5F4F8] rounded-xl p-4 sm:p-5">
                  <p className="text-[12px] font-semibold text-gray-500 mb-1.5">
                    Was Sie tun müssen:
                  </p>
                  <p className="text-[14px] text-gray-800 leading-relaxed">
                    {current.todo}
                  </p>
                </div>
                <div className="bg-[#43358B] rounded-xl p-4 sm:p-5">
                  <p className="text-[12px] font-semibold text-white/70 mb-1.5">
                    Ihr Vorteil:
                  </p>
                  <p className="text-[14px] text-white leading-relaxed">
                    {current.benefit}
                  </p>
                </div>
              </div>

              {/* Step nav */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setActive(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className={`inline-flex items-center gap-3 font-semibold text-[14px] rounded-full pl-1.5 pr-5 py-1.5 transition-colors ${
                    active === 0
                      ? "opacity-0 pointer-events-none"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                  </span>
                  Vorheriger Schritt
                </button>

                <button
                  type="button"
                  onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
                  disabled={active === steps.length - 1}
                  className={`inline-flex items-center gap-3 font-semibold text-[14px] rounded-full pl-5 pr-1.5 py-1.5 transition-colors ml-auto ${
                    active === steps.length - 1
                      ? "opacity-0 pointer-events-none"
                      : "bg-[#009CB4] text-white shadow-lg shadow-[#009CB4]/30 hover:bg-[#007f95]"
                  }`}
                >
                  Nächster Schritt
                  <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════ IHRE VORTEILE — content left, portrait right ══════ */}
      <section className="bg-[#F5F4F8] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left: content */}
            <ScrollReveal>
              {/* Tag pill */}
              <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full pl-1.5 pr-4 py-1.5 mb-5 shadow-sm">
                <span className="w-7 h-7 rounded-lg bg-[#009CB4] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <span className="text-[13px] sm:text-sm font-semibold text-gray-800 tracking-wide">
                  So funktioniert es
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold text-gray-900 leading-[1.1] mb-7 sm:mb-8 max-w-md">
                Ihre Vorteile auf einen Blick
              </h2>

              {/* Feature pills */}
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  {
                    label: "Kein Papierkram",
                    icon: (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Keine Warteschleife",
                    icon: (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Kostenlose Lieferung",
                    icon: (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    ),
                  },
                  {
                    label: "Jederzeit anpassbar",
                    icon: (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    label: "Jederzeit k\u00fcndbar",
                    icon: (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="bg-white rounded-full px-4 py-3 flex items-center gap-3 shadow-[0_2px_10px_rgba(67,53,139,0.05)]"
                  >
                    <span className="w-9 h-9 rounded-full bg-[#009CB4] flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </span>
                    <span className="text-[14px] sm:text-[15px] font-medium text-gray-900">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <Link
                href="/pflegepaket"
                className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[14px] rounded-full pl-6 pr-2 py-2 hover:bg-[#007f95] transition-colors shadow-lg shadow-[#009CB4]/25"
              >
                Jetzt bewerben
                <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </ScrollReveal>

            {/* Right: portrait image */}
            <ScrollReveal>
              <div className="relative rounded-[28px] overflow-hidden aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] max-h-[620px] w-full">
                <Image
                  src="/pflegebox-mutter-tochter-gluecklich.png"
                  alt="Gl\u00fcckliche Mutter und Tochter mit FairPflegeBox Pflegehilfsmitteln"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════ FAQ SECTION ══════ */}
      <FAQSection />

      {/* ══════ CTA BANNER ══════ */}
      <section
        className="py-12 sm:py-16 lg:py-20"
        style={{ backgroundColor: "rgba(244, 245, 246, 1)" }}
      >
        <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px]">
          <div className="relative rounded-3xl overflow-hidden min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]">
            <Image
              src="/pflegebox-seniorin-betreuerin-garten.png"
              alt="Seniorin und Betreuerin freuen sich \u00fcber FairPflegeBox im Garten"
              fill
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(12, 32, 26, 0) 32%, rgba(12, 32, 26, 0.71) 74.04%, #0C201A 100%)",
              }}
            />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] p-6 sm:p-10 lg:p-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-end">
                <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-bold text-white leading-[1.1]">
                  Bereit f\u00fcr Ihre<br /> kostenlose Pflegebox?
                </h2>
                <div className="flex flex-col items-start gap-5 md:max-w-[360px] md:justify-self-end">
                  <p className="text-[14px] sm:text-[15px] text-white leading-relaxed">
                    Starten Sie jetzt Ihre Bewerbung – in nur 3 Minuten
                    ausgef\u00fcllt und ohne Papierkram.
                  </p>
                  <Link
                    href="/pflegepaket"
                    className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[14px] rounded-full pl-6 pr-2 py-2 hover:bg-[#007f95] transition-colors shadow-lg shadow-black/30"
                  >
                    Jetzt Bewerbung starten
                    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ════════════════════════════════════
   FAQ — sub-component with local state
   ════════════════════════════════════ */

const faqs = [
  {
    question: "Wer kann eine FairPflegeBox erhalten?",
    answer:
      "Menschen mit einem anerkannten Pflegegrad k\u00f6nnen Anspruch auf Pflegeprodukte im Rahmen des monatlichen Budgets haben.",
  },
  {
    question: "Wie viel kostet die Pflegebox?",
    answer:
      "F\u00fcr Versicherte mit anerkanntem Pflegegrad ist die FairPflegeBox vollst\u00e4ndig kostenlos. Die Pflegekasse \u00fcbernimmt die Kosten bis zu 42 \u20ac monatlich.",
  },
  {
    question: "Kann ich meine Produkte ausw\u00e4hlen?",
    answer:
      "Ja, Sie k\u00f6nnen aus unserem breiten Sortiment die Pflegehilfsmittel ausw\u00e4hlen, die am besten zu Ihren Bed\u00fcrfnissen passen. Ihre Auswahl k\u00f6nnen Sie jederzeit anpassen.",
  },
  {
    question: "Wie oft wird die Box geliefert?",
    answer:
      "Die FairPflegeBox wird einmal im Monat geliefert. Das Lieferdatum l\u00e4sst sich flexibel anpassen.",
  },
  {
    question: "Kann ich meine Box jederzeit \u00e4ndern?",
    answer:
      "Ja, \u00c4nderungen, die bis zum 20. des Vormonats eingehen, werden im n\u00e4chsten Liefermonat ber\u00fccksichtigt.",
  },
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14">

          {/* Left: heading + helper card */}
          <ScrollReveal>
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full pl-1.5 pr-4 py-1.5 mb-5 shadow-sm">
              <span className="w-7 h-7 rounded-lg bg-[#009CB4] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
                </svg>
              </span>
              <span className="text-[13px] sm:text-sm font-semibold text-gray-800 tracking-wide">
                H\u00e4ufige Fragen
              </span>
            </div>

            <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold text-gray-900 leading-[1.1] mb-8 max-w-md">
              Fragen? Wir sind hier um zu helfen
            </h2>

            {/* Helper card */}
            <div className="bg-[#F5F4F8] rounded-2xl p-6 max-w-md">
              <h3 className="text-[16px] font-bold text-gray-900 mb-1.5">
                Haben Sie noch Fragen?
              </h3>
              <p className="text-[13px] text-gray-500 mb-5 leading-relaxed">
                Wir sind hier, um den Prozess einfach zu gestalten.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2.5 bg-[#009CB4] text-white font-semibold text-[13px] rounded-full pl-5 pr-1.5 py-1.5 hover:bg-[#007f95] transition-colors"
              >
                E-Mail senden
                <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right: FAQ accordion */}
          <ScrollReveal>
            <div className="flex flex-col gap-3">
              {faqs.map((f, i) => {
                const open = openIndex === i;
                return (
                  <div
                    key={f.question}
                    className="bg-[#F5F4F8] rounded-2xl transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      aria-expanded={open}
                      className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
                    >
                      <span className="text-[14px] sm:text-[15px] font-bold text-gray-900 leading-snug">
                        {f.question}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                          open ? "bg-[#009CB4] text-white" : "bg-white text-gray-500"
                        }`}
                      >
                        {open ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                          </svg>
                        )}
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        open ? "max-h-[260px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="px-5 sm:px-6 pb-5 text-[13.5px] sm:text-[14px] text-gray-500 leading-relaxed">
                        {f.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
