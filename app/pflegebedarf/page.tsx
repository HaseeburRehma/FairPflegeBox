import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Pflegebedarf – Ihr Anspruch auf Pflegehilfsmittel | FairPflegeBox",
  description:
    "Was sind verbrauchsabhängige Pflegehilfsmittel? Welche Produktkategorien finanziert die Pflegekasse? Einfach erklärt – bis zu 42 € pro Monat gesetzlich festgelegt.",
};

/* ════════════════════════════════════
   DATA
   ════════════════════════════════════ */

const typischeBeispiele = [
  {
    label: "Einweg-Handschuhe",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    label: "Desinfektionsmittel",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M12 2.25c-3 5.25-6 8.25-6 12a6 6 0 0012 0c0-3.75-3-6.75-6-12z"
        />
      </svg>
    ),
  },
  {
    label: "FFP2-Masken",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M3 12h2l2-3 4 6 4-6 2 3h4"
        />
      </svg>
    ),
  },
  {
    label: "Schutzschürzen",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    label: "Bettunterlagen",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M3 12V8a2 2 0 012-2h14a2 2 0 012 2v4m-18 0v4a2 2 0 002 2h14a2 2 0 002-2v-4M3 12h18M7 10V8h4v2"
        />
      </svg>
    ),
  },
  {
    label: "Gesichtsmasken",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

const produktkategorien = [
  {
    title: "Schutzhandschuhe",
    items: [
      "Einweg-Handschuhe aus Latex, Nitril oder Vinyl",
      "In verschiedenen Größen erhältlich",
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Desinfektionsmittel",
    items: ["Händedesinfektionsmittel", "Flächendesinfektionsmittel"],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M12 2.25c-3 5.25-6 8.25-6 12a6 6 0 0012 0c0-3.75-3-6.75-6-12z"
        />
      </svg>
    ),
  },
  {
    title: "Gesichtsmasken",
    items: [
      "FFP2-Masken",
      "Medizinische Gesichtsmasken",
      "Chirurgische Masken",
    ],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M3 12h2l2-3 4 6 4-6 2 3h4"
        />
      </svg>
    ),
  },
  {
    title: "Schutzkleidung",
    items: ["Einweg-Schutzschürzen", "Einweg-Schutzkleidung"],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    title: "Bettenschutz",
    items: ["Saugfähige Bettunterlagen", "Einweg-Unterlagen"],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M3 12V8a2 2 0 012-2h14a2 2 0 012 2v4m-18 0v4a2 2 0 002 2h14a2 2 0 002-2v-4M3 12h18M7 10V8h4v2"
        />
      </svg>
    ),
  },
  {
    title: "Weitere Verbrauchsmaterialien",
    items: ["Fingerlinge", "Zungenspatel", "Einweg-Lätzchen"],
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
];

const certifications = [
  {
    title: "Trustpilot",
    desc: "Ausgezeichnete Bewertungen",
    icon: (
      <svg fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
  {
    title: "DSGVO-konform",
    desc: "Höchste Datensicherheit",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
];

export default function PflegebedarfPage() {
  return (
    <main>
      {/* ══════ HERO ══════ */}
      <section className="relative pt-36 sm:pt-44 lg:pt-52 pb-24 sm:pb-32 lg:pb-40 overflow-hidden">
        <Image
          src="/hero-garden.jpg"
          alt="Älterer Herr mit FairPflegeBox im Wohnzimmer"
          fill
          priority
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#43358B]/25" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(67, 53, 139, 0) 0%, #43358B 100%)",
          }}
        />

        <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px] relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[30px] sm:text-[42px] xl:text-[52px] font-medium text-white leading-[1.08] mb-5">
              Ihr gesetzlicher Anspruch
              <br className="hidden sm:block" /> auf Pflegehilfsmittel
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/85 leading-relaxed max-w-xl mx-auto mb-7">
              Einfach erklärt: Worauf Sie Anspruch haben, wie Sie es beantragen
              und was Sie wissen müssen.
            </p>

            <div className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
              <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <span className="text-[14px] font-medium text-white">
                Rechtlich festgelegt – Bis zu 42 € pro Monat
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ WAS SIND PFLEGEHILFSMITTEL ══════ */}
      <ScrollReveal>
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1200px]">
            <div className="border border-gray-200 rounded-3xl p-6 sm:p-10 lg:p-12">
              {/* Top row: heading/description on left, image on right */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8 sm:mb-10">

                {/* Left: content */}
                <div>
                  <span className="w-11 h-11 rounded-xl bg-[#EFE9FA] flex items-center justify-center mb-5">
                    <svg className="w-5 h-5 text-[#43358B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8h.01M11 12h1v4h1" />
                    </svg>
                  </span>

                  <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] font-medium text-gray-900 leading-[1.15] mb-4">
                    Was sind verbrauchsabhängige Pflegehilfsmittel?
                  </h2>

                  <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                    Verbrauchsabhängige Pflegehilfsmittel sind Produkte, die im
                    Alltag der häuslichen Pflege benötigt und nach einmaligem
                    Gebrauch entsorgt werden. Sie dienen dem Schutz, der
                    Hygiene und der Erleichterung der Pflege zu Hause.
                  </p>
                </div>

                {/* Right: image (landscape) */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] lg:aspect-[16/11] w-full">
                  <Image
                    src="/seniorin-betreuerin-fairpflegebox-garten.png"
                    alt="Seniorin und Betreuerin mit FairPflegeBox im Garten"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Full-width "Typische Beispiele" box below */}
              <div className="bg-[#F5F4F8] border border-gray-100 rounded-2xl p-5 sm:p-6">
                <p className="text-[14px] font-semibold text-gray-900 mb-4">
                  Typische Beispiele:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {typischeBeispiele.map((b) => (
                    <div
                      key={b.label}
                      className="bg-white border border-gray-100 rounded-xl px-4 py-3 flex items-center gap-2.5"
                    >
                      <span className="w-4 h-4 text-[#009CB4] flex-shrink-0">
                        {b.icon}
                      </span>
                      <span className="text-[13px] font-medium text-gray-800">
                        {b.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════ WAS WIRD FINANZIERT ══════ */}
      <ScrollReveal>
        <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1200px]">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-medium text-gray-900 mb-3">
                Was wird finanziert?
              </h2>
              <p className="text-[14px] sm:text-[15px] text-gray-500">
                Die Pflegeversicherung übernimmt die Kosten für folgende
                Produktkategorien:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {produktkategorien.map((cat) => (
                <div
                  key={cat.title}
                  className="border border-gray-200 rounded-2xl p-7 sm:p-8 hover:border-gray-300 transition-colors"
                >
                  <div className="flex items-center gap-3.5 mb-6">
                    <span className="w-12 h-12 rounded-2xl bg-[#EFE9FA] flex items-center justify-center flex-shrink-0">
                      <span className="w-[22px] h-[22px] text-[#43358B]">
                        {cat.icon}
                      </span>
                    </span>
                    <h3 className="text-[18px] font-medium text-gray-900">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[14px] text-gray-600 leading-relaxed"
                      >
                        {/* Teal outlined circle-check icon */}
                        <svg
                          className="w-[18px] h-[18px] text-[#009CB4] flex-shrink-0 mt-[2px]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.5 12.5l2.5 2.5 4.5-5"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════ VERTRAUEN DURCH QUALITÄT ══════ */}
      <ScrollReveal>
        <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1200px]">
            <div className="bg-[#F5F4F8] rounded-3xl p-6 sm:p-10 lg:p-12">
              <div className="text-center mb-10">
                <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-medium text-gray-900 mb-3">
                  Vertrauen durch Qualität
                </h2>
                <p className="text-[14px] sm:text-[15px] text-gray-500">
                  Unsere Auszeichnungen und Zertifikate sprechen für sich.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                {certifications.map((c) => (
                  <div key={c.title} className="bg-white rounded-2xl p-6 text-center">
                    <span className="w-12 h-12 rounded-xl bg-[#EFE9FA] flex items-center justify-center mx-auto mb-4">
                      <span className="w-[22px] h-[22px] text-[#43358B]">{c.icon}</span>
                    </span>
                    <h3 className="text-[15px] font-medium text-gray-900 mb-1.5">
                      {c.title}
                    </h3>
                    <p className="text-[12px] text-gray-500 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Security banner */}
              <div className="mt-8 bg-white border border-[#009CB4]/20 rounded-2xl p-5 sm:p-6 flex items-start gap-3 max-w-3xl mx-auto">
                <svg className="w-5 h-5 text-[#009CB4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">
                    Ihre Sicherheit hat für uns oberste Priorität:
                  </strong>{" "}
                  Alle Produkte sind als Pflegehilfsmittel zugelassen, unsere
                  Prozesse sind zertifiziert und Ihre Daten sind nach höchsten
                  Sicherheitsstandards geschützt.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
