import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Über uns – Ihr Anspruch auf Pflegehilfsmittel | FairPflegeBox",
  description:
    "Warum es die FairPflegebox gibt, was uns antreibt und wer hinter dem Unternehmen steht. Einfach erklärt: Ihr gesetzlicher Anspruch auf Pflegehilfsmittel bis zu 42 € pro Monat.",
};

const values = [
  {
    title: "Fairness",
    desc:
      "Transparente Prozesse, ehrliche Beratung und keine versteckten Kosten. Ihr Vertrauen ist uns wichtig.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Einfachheit",
    desc:
      "Wir machen komplizierte Dinge einfach – vom ersten Antrag bis zur monatlichen Lieferung.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: "Zuverlässigkeit",
    desc:
      "Pünktliche Lieferungen, konstante Qualität und ein Service, auf den Sie sich verlassen können.",
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
    title: "Vertrauen",
    desc:
      "Wir verstehen die Herausforderungen der Pflege und begleiten Sie mit Empathie und Kompetenz.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const certifications = [
  {
    title: "TÜV Saarland",
    desc: "Zertifizierte Servicequalität",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
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
  {
    title: "Mitglied des Verbands",
    desc: "Hauspflegeverband",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
];

export default function UeberUnsPage() {
  return (
    <main>
      {/* ══════ HERO — same pattern as other pages ══════ */}
      <section className="relative pt-36 sm:pt-44 lg:pt-52 pb-24 sm:pb-32 lg:pb-40 overflow-hidden">
        <Image
          src="/senior-fairpflegebox-wohnzimmer.png"
          alt="Älterer Herr mit FairPflegeBox im Wohnzimmer"
          fill
          priority
          className="object-cover object-center"
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

            {/* Trust pill */}
            <div className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
              <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
              <span className="text-[14px] font-medium text-white">
                Rechtlich festgelegt – Bis zu 42 € pro Monat
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ UNSERE MISSION ══════ */}
      <ScrollReveal>
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1200px]">
            <div className="bg-[#F5F4F8] rounded-3xl p-6 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                {/* Left: content */}
                <div>
                  <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full pl-1.5 pr-4 py-1.5 mb-5 shadow-sm">
                    <span className="w-7 h-7 rounded-lg bg-[#009CB4] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <span className="text-[13px] sm:text-sm font-semibold text-gray-800 tracking-wide">
                      Unsere Mission
                    </span>
                  </div>

                  <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-medium text-gray-900 leading-[1.15] mb-5">
                    Warum es die FairPflegebox gibt
                  </h2>

                  <div className="space-y-4 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-7">
                    <p>
                      Die FairPflegebox entstand aus einer einfachen Erkenntnis:
                      Viele pflegebedürftige Menschen und ihre Angehörigen
                      wissen nicht, dass sie Anspruch auf kostenlose
                      Pflegehilfsmittel haben – oder der Antragsprozess
                      erscheint zu kompliziert.
                    </p>
                    <p>
                      Wir haben erfahren, wie verwirrend die Kommunikation mit
                      der Pflegeversicherung sein kann, wie viel Zeit die
                      Bürokratie in Anspruch nimmt und wie schwer es ist, den
                      Überblick zu behalten. Wir wollten genau diese Hürden
                      beseitigen.
                    </p>
                    <p>
                      Unsere Mission ist klar: Wir kümmern uns um die
                      Bürokratie, übernehmen die Abrechnung mit der
                      Pflegeversicherung und sorgen dafür, dass Sie sich auf
                      das Wesentliche konzentrieren können – die Pflege Ihrer
                      Angehörigen.
                    </p>
                  </div>

                  <Link
                    href="/pflegepaket"
                    className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[14px] rounded-full pl-6 pr-2 py-2 hover:bg-[#007f95] transition-colors shadow-lg shadow-[#009CB4]/25"
                  >
                    Mehr erfahren
                    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </Link>
                </div>

                {/* Right: image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] w-full">
                  <Image
                    src="/mission-aelteres-paar-fairpflegebox.jpg"
                    alt="Älteres Paar mit FairPflegeBox auf dem Sofa"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════ UNSERE WERTE ══════ */}
      <ScrollReveal>
        <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1200px]">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-medium text-gray-900 mb-3">
                Unsere Werte
              </h2>
              <p className="text-[14px] sm:text-[15px] text-gray-500">
                Diese vier Prinzipien leiten uns in allem, was wir tun
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="border border-gray-200 rounded-2xl p-6 text-center hover:border-gray-300 transition-colors"
                >
                  <span className="w-12 h-12 rounded-xl bg-[#43358B] flex items-center justify-center mx-auto mb-4">
                    <span className="w-[22px] h-[22px] text-white">{v.icon}</span>
                  </span>
                  <h3 className="text-[17px] font-medium text-gray-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════ UNSER TEAM ══════ */}
      <ScrollReveal>
        <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left: content */}
              <div>
                <div className="inline-flex items-center gap-2.5 bg-[#E6F7FA] rounded-full px-4 py-1.5 mb-5">
                  <svg className="w-4 h-4 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="text-[13px] font-semibold text-[#009CB4]">
                    Unser Team
                  </span>
                </div>

                <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-medium text-gray-900 leading-[1.15] mb-5">
                  Menschen, die sich kümmern.
                </h2>

                <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-8">
                  Hinter der FairPflegebox steht ein Team von Pflegeexperten,
                  Kundenservice-Mitarbeitern und engagierten Mitarbeitern, die
                  alle ein gemeinsames Ziel haben: Ihr Leben einfacher zu
                  machen. Unsere Mitarbeiter bringen jahrelange Erfahrung aus
                  der häuslichen Pflege mit und verstehen die
                  Herausforderungen, denen Sie täglich gegenüberstehen. Wir
                  sind nicht nur Dienstleister – wir sind Partner auf
                  Augenhöhe.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-8">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-full bg-[#F5F4F8] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#43358B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[20px] sm:text-[22px] font-bold text-gray-900 leading-tight">
                        Über 10.000
                      </p>
                      <p className="text-[12px] text-gray-500">
                        Zufriedene Kunden
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-full bg-[#E6F7FA] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-[20px] sm:text-[22px] font-bold text-gray-900 leading-tight">
                        99 %
                      </p>
                      <p className="text-[12px] text-gray-500">Erfolgsquote</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: team photo */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] w-full">
                <Image
                  src="/team-kundenservice-mitarbeiterin.jpg"
                  alt="FairPflegebox Team – Kundenservice-Mitarbeiterin"
                  fill
                  className="object-cover object-center"
                />
              </div>
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((c) => (
                  <div
                    key={c.title}
                    className="bg-white rounded-2xl p-6 text-center"
                  >
                    <span className="w-12 h-12 rounded-xl bg-[#EFE9FA] flex items-center justify-center mx-auto mb-4">
                      <span className="w-[22px] h-[22px] text-[#43358B]">
                        {c.icon}
                      </span>
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
                    Ihre Sicherheit hat für uns Priorität:
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
