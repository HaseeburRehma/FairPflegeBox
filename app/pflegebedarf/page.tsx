import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Pflegebedarf – Was sind Pflegehilfsmittel? | FairPflegeBox",
  description:
    "Erfahren Sie alles \u00fcber verbrauchsabh\u00e4ngige Pflegehilfsmittel: Schutzhandschuhe, Desinfektionsmittel, Gesichtsmasken und mehr. Bis zu 40\u20ac monatlich kostenlos \u00fcber die Pflegekasse.",
};

const categories = [
  {
    title: "Schutzhandschuhe",
    description:
      "Hochwertige Einmalhandschuhe in verschiedenen Gr\u00f6\u00dfen f\u00fcr hygienische Pflege.",
    icon: (
      <svg className="w-6 h-6 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
  {
    title: "Desinfektionsmittel",
    description:
      "H\u00e4nde- und Fl\u00e4chendesinfektion f\u00fcr maximale Sicherheit im Pflegealltag.",
    icon: (
      <svg className="w-6 h-6 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Gesichtsmasken",
    description:
      "Medizinische Mund-Nasen-Schutzmasken f\u00fcr den t\u00e4glichen Pflegebedarf.",
    icon: (
      <svg className="w-6 h-6 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Schutzkleidung",
    description:
      "Einmalsch\u00fcrzen und Schutzkleidung f\u00fcr die t\u00e4gliche Pflegesituation.",
    icon: (
      <svg className="w-6 h-6 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Bettenschutz",
    description:
      "Bettschutzeinlagen und Unterlagen zum Schutz vor Verunreinigungen.",
    icon: (
      <svg className="w-6 h-6 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Weitere Verbrauchsmittel",
    description:
      "Zus\u00e4tzliche Pflegehilfsmittel f\u00fcr individuelle Bed\u00fcrfnisse.",
    icon: (
      <svg className="w-6 h-6 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

const trustBadges = [
  { title: "T\u00dcV Saarland", subtitle: "Gepr\u00fcfte Qualit\u00e4t" },
  { title: "Trustpilot", subtitle: "4.9 von 5 Sternen" },
  { title: "DSGVO-konform", subtitle: "Datenschutz garantiert" },
  { title: "Mitglied des Verbands", subtitle: "Zertifizierter Anbieter" },
];

export default function PflegebedarfPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#43358B] pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#43358B] to-[#352878] opacity-90" />
        <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px] relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-7 h-7 rounded-lg bg-[#009CB4] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-white tracking-wide">
                Pflegebedarf
              </span>
            </div>
            <h1 className="text-[32px] sm:text-[42px] xl:text-[52px] font-bold text-white leading-[1.1] mb-5">
              Pflegehilfsmittel f{"\u00fc"}r den t{"\u00e4"}glichen Bedarf
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/70 leading-relaxed max-w-xl">
              Erfahren Sie, welche Pflegehilfsmittel Ihnen zustehen und wie Sie
              diese einfach und kostenlos {"\u00fc"}ber die Pflegekasse erhalten.
            </p>
          </div>
        </div>
      </section>

      {/* Was sind verbrauchsabhängige Pflegehilfsmittel? */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-white" aria-label="Was sind Pflegehilfsmittel">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm mb-6 w-fit">
                  <span className="w-7 h-7 rounded-lg bg-[#009CB4] flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-gray-800 tracking-wide">
                    Wissenswertes
                  </span>
                </div>

                <h2 className="text-[26px] sm:text-[34px] xl:text-[40px] font-bold text-gray-900 leading-[1.1] mb-5">
                  Was sind verbrauchsabh{"\u00e4"}ngige Pflegehilfsmittel?
                </h2>

                <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed mb-6">
                  Verbrauchsabh{"\u00e4"}ngige Pflegehilfsmittel sind Produkte, die im
                  Pflegealltag regelm{"\u00e4"}{"\u00df"}ig ben{"\u00f6"}tigt und nach Gebrauch entsorgt
                  werden. Sie dienen der Hygiene, dem Infektionsschutz und der
                  allgemeinen Pflege von pflegebed{"\u00fc"}rftigen Personen.
                </p>

                <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed mb-8">
                  Personen mit Pflegegrad 1 bis 5 haben Anspruch auf monatliche
                  Pflegehilfsmittel im Wert von bis zu 40{"\u20ac"}, die von der
                  Pflegekasse {"\u00fc"}bernommen werden {"\u2013"} ganz ohne Zuzahlung.
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Einmalhandschuhe",
                    "H\u00e4ndedesinfektion",
                    "Fl\u00e4chendesinfektion",
                    "Mundschutz",
                    "Schutzsch\u00fcrzen",
                    "Bettschutzeinlagen",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#F5F4F8] text-[#43358B] text-[13px] font-medium rounded-full px-4 py-1.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/pflegebox-mutter-tochter-gluecklich.png"
                  alt="Pflegerin hilft Seniorin mit Pflegehilfsmitteln"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Was wird finanziert? */}
      <ScrollReveal>
        <section
          className="py-16 sm:py-20 bg-[#F5F4F8]"
          aria-label="Was wird finanziert"
        >
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px]">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm mb-6">
                <span className="w-7 h-7 rounded-lg bg-[#009CB4] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-gray-800 tracking-wide">
                  Kostenerstattung
                </span>
              </div>
              <h2 className="text-[26px] sm:text-[34px] xl:text-[40px] font-bold text-gray-900 leading-[1.1] mb-4">
                Was wird finanziert?
              </h2>
              <p className="text-[14px] sm:text-[15px] text-gray-500 max-w-2xl mx-auto">
                Diese Produktkategorien werden von der Pflegekasse mit bis zu
                40{"\u20ac"} pro Monat {"\u00fc"}bernommen.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-white rounded-2xl p-6 shadow-[0_2px_16px_rgba(67,53,139,0.06)] hover:shadow-[0_8px_32px_rgba(67,53,139,0.12)] transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F0FAFB] flex items-center justify-center mb-4">
                    {cat.icon}
                  </div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Vertrauen durch Qualität */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-white" aria-label="Vertrauen durch Qualit\u00e4t">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px]">
            <div className="text-center mb-12">
              <h2 className="text-[26px] sm:text-[34px] xl:text-[40px] font-bold text-gray-900 leading-[1.1] mb-4">
                Vertrauen durch Qualit{"\u00e4"}t
              </h2>
              <p className="text-[14px] sm:text-[15px] text-gray-500 max-w-2xl mx-auto">
                Unsere Produkte und Prozesse sind gepr{"\u00fc"}ft und zertifiziert.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {trustBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="bg-[#F5F4F8] rounded-2xl p-5 sm:p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <svg className="w-7 h-7 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-[13px] text-gray-500">{badge.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Security Notice Banner */}
      <ScrollReveal>
        <section className="pb-16 sm:pb-20 bg-white">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px]">
            <div className="bg-[#F0FAFB] border border-[#009CB4]/15 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg className="w-7 h-7 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-[16px] font-bold text-gray-900 mb-1">
                  Sicher &amp; vertraulich
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  Alle Ihre Daten werden SSL-verschl{"\u00fc"}sselt {"\u00fc"}bertragen und
                  gem{"\u00e4"}{"\u00df"} DSGVO verarbeitet. Wir geben Ihre Daten niemals an
                  Dritte weiter.
                </p>
              </div>
              <Link
                href="/pflegepaket"
                className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[14px] rounded-full pl-6 pr-2 py-2 hover:bg-[#007f95] transition-all duration-200 shadow-lg shadow-[#009CB4]/30 active:scale-[0.97] flex-shrink-0"
              >
                Jetzt bestellen
                <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
