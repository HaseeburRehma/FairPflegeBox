import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Pflichtangaben – Sterillium® | FairPflegeBox",
  description:
    "Pflichtangaben gemäß dem deutschen Arzneimittelgesetz, Heilmittelwerbegesetz (HWG) und der Verordnung über Biozidprodukte für in FairPflegeBox enthaltene Produkte.",
};

export default function PflichtangabenPage() {
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
        {/* Subtle base tint + brand gradient fading from clear top to solid purple bottom */}
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
            <h1 className="text-[30px] sm:text-[40px] xl:text-[48px] font-medium text-white leading-[1.1] mb-5">
              Pflichtangaben gemäß dem
              <br className="hidden sm:block" /> deutschen Arzneimittelgesetz
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/85 leading-relaxed max-w-xl mx-auto">
              Werbegesetz (HWG) und Verordnung über Biozidprodukte
            </p>
          </div>
        </div>
      </section>

      {/* ══════ CONTENT ══════ */}
      <ScrollReveal>
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[860px]">

            {/* Sterillium block */}
            <article className="text-center">
              <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-medium text-gray-900 mb-8">
                Sterillium<sup className="text-[0.55em] -top-[0.5em] relative ml-0.5">®</sup>
              </h2>

              <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.9] text-center sm:text-justify">
                <strong className="text-gray-900">Sterillium</strong>, Lösung
                zur kutanen Anwendung. <strong className="text-gray-900">Wirkstoffe:</strong>{" "}
                Propan-2-ol, Propan-1-ol, Mecetroniumetilsulfat.{" "}
                <strong className="text-gray-900">Zusammensetzung:</strong> 100 g
                Lösung enthalten: Wirkstoffe: Propan-2-ol 45,0 g, Propan-1-ol
                30,0 g, Mecetroniumetilsulfat 0,2 g. Weitere Inhaltsstoffe:
                Glycerol 85 %, Tetradecan-1-ol, Patentblau V 85 %, gereinigtes
                Wasser, Benzylalkohol, Citral, Citronellol, Coumarin, Eugenol,
                Farnesol, Geraniol, Hydroxycitronellal, Limonen und Linalool.{" "}
                <strong className="text-gray-900">Indikationen:</strong> Für
                hygienische und chirurgische Händedesinfektion. Zur
                Hautdesinfektion vor Injektionen und Punktionen.{" "}
                <strong className="text-gray-900">Gegenanzeigen:</strong> Nicht
                zur Desinfektion von Schleimhäuten geeignet. Nicht in
                unmittelbarer Nähe der Augen oder offener Wunden anwenden.
                Überempfindlichkeit (Allergie) gegen einen der Wirkstoffe oder
                andere Inhaltsstoffe.{" "}
                <strong className="text-gray-900">Nebenwirkungen:</strong>{" "}
                Gelegentlich kann es zu leichter Trockenheit oder Reizung der
                Haut kommen. In solchen Fällen wird empfohlen, die allgemeine
                Hautpflege zu intensivieren. Allergische Reaktionen sind
                selten. Dieses Arzneimittel enthält einen Duftstoff mit
                Benzylalkohol, Citral, Citronellol, Coumarin, Eugenol,
                Farnesol, Geraniol, Hydroxycitronellal, Limonen und Linalool.
                Duftstoffe können allergische Reaktionen hervorrufen.
                Benzylalkohol kann leichte Reizungen verursachen.{" "}
                <strong className="text-gray-900">Warnhinweise:</strong>{" "}
                Enthält einen Duftstoff mit Benzylalkohol, Citral, Citronellol,
                Coumarin, Eugenol, Farnesol, Geraniol, Hydroxycitronellal,
                Limonen und Linalool.{" "}
                <strong className="text-gray-900">Zulassungsinhaber:</strong>{" "}
                BODE Chemie GmbH, Melanchthonstraße 27, 22525 Hamburg,
                Deutschland.
              </p>

              <p className="mt-8 text-[13px] text-gray-400 text-center">
                (Status: 03/2021)
              </p>

              <p className="mt-6 text-[14px] sm:text-[15px] text-gray-700 italic text-center max-w-2xl mx-auto leading-relaxed">
                Für Risiken und Nebenwirkungen lesen Sie die Packungsbeilage
                und fragen Sie Ihren Arzt oder Apotheker.
              </p>
            </article>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
