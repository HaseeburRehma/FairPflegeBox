import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Pflichtangaben \u2013 Sterillium\u00ae | FairPflegeBox",
  description:
    "Pflichtangaben gem\u00e4\u00df Arzneimittelgesetz f\u00fcr Sterillium\u00ae H\u00e4ndedesinfektionsmittel. Zusammensetzung, Anwendungsgebiete und Hinweise.",
};

export default function PflichtangabenPage() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-white tracking-wide">
                Pflichtangaben
              </span>
            </div>
            <h1 className="text-[32px] sm:text-[42px] xl:text-[52px] font-bold text-white leading-[1.1] mb-5">
              Pflichtangaben
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/70 leading-relaxed max-w-xl">
              Pflichtangaben gem{"\u00e4"}{"\u00df"} Arzneimittelgesetz f{"\u00fc"}r in unseren
              Pflegeboxen enthaltene Produkte.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[900px]">

            {/* Sterillium */}
            <article className="mb-14">
              <div className="bg-[#F5F4F8] rounded-2xl p-6 sm:p-8 mb-8">
                <h2 className="text-[22px] sm:text-[28px] font-bold text-gray-900 mb-2">
                  Sterillium{"\u00ae"}
                </h2>
                <p className="text-[14px] text-gray-500">
                  H{"\u00e4"}ndedesinfektionsmittel {"\u2013"} Arzneimittel
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                    Zusammensetzung
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    100 g L{"\u00f6"}sung enthalten: Wirkstoffe: Propan-2-ol 45,0 g,
                    Propan-1-ol 30,0 g, Mecetroniumetilsulfat 0,2 g. Sonstige
                    Bestandteile: Glycerol 85 %, Tetradecan-1-ol, Duftstoffe
                    (enthalten u.a. Hexyl cinnamal, Linalool), Patentblau V 85
                    (E131), Gereinigtes Wasser.
                  </p>
                </div>

                <div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                    Anwendungsgebiete
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Zur hygienischen und chirurgischen H{"\u00e4"}ndedesinfektion.
                    Sterillium{"\u00ae"} wird in der medizinischen und pflegerischen
                    Praxis zur Vermeidung von Infektions{"\u00fc"}bertragungen
                    eingesetzt.
                  </p>
                </div>

                <div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                    Gegenanzeigen
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Nicht anwenden bei bekannter {"\u00dc"}berempfindlichkeit gegen
                    einen der Wirkstoffe oder einen der sonstigen Bestandteile.
                    Nicht auf Schleimh{"\u00e4"}uten, offenen Wunden oder in der
                    N{"\u00e4"}he der Augen anwenden.
                  </p>
                </div>

                <div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                    Nebenwirkungen
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Gelegentlich kann es zu Hautreizungen, Hautr{"\u00f6"}tungen oder
                    Hauttrockenheit kommen. In seltenen F{"\u00e4"}llen k{"\u00f6"}nnen
                    allergische Reaktionen auftreten. Bei anhaltenden
                    Beschwerden wenden Sie sich an Ihren Arzt oder Apotheker.
                  </p>
                </div>

                <div>
                  <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                    Pharmazeutischer Unternehmer
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    HARTMANN AG, Paul-Hartmann-Stra{"\u00df"}e 12, 89522 Heidenheim,
                    Deutschland
                  </p>
                </div>
              </div>
            </article>

            {/* Disclaimer Banner */}
            <div className="bg-[#FFF7ED] border border-orange-200/50 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-gray-900 mb-2">
                    F{"\u00fc"}r Risiken und Nebenwirkungen
                  </h3>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Zu Risiken und Nebenwirkungen lesen Sie die Packungsbeilage
                    und fragen Sie Ihren Arzt oder Apotheker. Sterillium{"\u00ae"} ist
                    ein eingetragenes Warenzeichen der HARTMANN AG.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
