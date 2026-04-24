import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Impressum | FairPflegeBox",
  description:
    "Impressum und Angaben gemäß § 5 DDG der FairPflegeBox GbR.",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <main>
      {/* ══════ HERO ══════ */}
      <section className="relative pt-36 sm:pt-44 lg:pt-52 pb-24 sm:pb-32 lg:pb-40 overflow-hidden">
        <Image
          src="/hero-garden.jpg"
          alt="FairPflegeBox – Impressum"
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
            <h1 className="text-[32px] sm:text-[44px] xl:text-[56px] font-medium text-white leading-[1.08] mb-5">
              Impressum
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/85 leading-relaxed max-w-xl mx-auto">
              Angaben gemäß § 5 DDG
            </p>
          </div>
        </div>
      </section>

      {/* ══════ CONTENT ══════ */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[820px]">
            <div className="prose-legal">
              <p>
                <strong>FairPflegeBox GbR</strong>
                <br />
                Reisholzer Werftstraße 76
                <br />
                40589 Düsseldorf
                <br />
                Deutschland
              </p>

              <h2>Vertreten durch die Gesellschafter</h2>
              <p>
                Ibrahim Botnifen
                <br />
                Azzeddine Essafi
              </p>

              <h2>Kontakt</h2>
              <p>
                Telefon: <a href="tel:+4917695554394">+49 176 95554394</a>
                <br />
                E-Mail:{" "}
                <a href="mailto:info@fairpflegebox.de">info@fairpflegebox.de</a>
              </p>

              <h2>Umsatzsteuer-Identifikationsnummer</h2>
              <p>
                Die Umsatzsteuer-Identifikationsnummer gemäß § 27a
                Umsatzsteuergesetz wird nach Erteilung durch das
                Bundeszentralamt für Steuern nachgetragen.
              </p>

              <h2>Redaktionell verantwortlich</h2>
              <p>
                Ibrahim Botnifen
                <br />
                Reisholzer Werftstraße 76
                <br />
                40589 Düsseldorf
              </p>

              <h2>EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h2>Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten
                Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
                Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
                Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten
                ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
                nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden
                wir derartige Links umgehend entfernen.
              </p>

              <h2>Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                der schriftlichen Zustimmung des jeweiligen Autors bzw.
                Erstellers. Downloads und Kopien dieser Seite sind nur für den
                privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                erstellt wurden, werden die Urheberrechte Dritter beachtet.
                Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
                Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                werden, bitten wir um einen entsprechenden Hinweis. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige
                Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </section>
    </main>
  );
}
