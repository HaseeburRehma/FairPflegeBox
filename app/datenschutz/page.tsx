import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | FairPflegeBox",
  description:
    "Datenschutzerklärung der FairPflegeBox GbR gemäß DSGVO und TDDDG.",
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <main>
      {/* ══════ HERO ══════ */}
      <section className="relative pt-36 sm:pt-44 lg:pt-52 pb-24 sm:pb-32 lg:pb-40 overflow-hidden">
        <Image
          src="/hero-garden.jpg"
          alt="FairPflegeBox – Datenschutzerklärung"
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
              Datenschutzerklärung
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/85 leading-relaxed max-w-xl mx-auto">
              Informationen zur Verarbeitung personenbezogener Daten gemäß
              DSGVO und TDDDG.
            </p>
          </div>
        </div>
      </section>

      {/* ══════ CONTENT ══════ */}
      <ScrollReveal>
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[820px]">
            <div className="prose-legal">

              {/* ── 1. ── */}
              <h2>1. Datenschutz auf einen Blick</h2>

              <h3>Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter
                diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3>Datenerfassung auf dieser Website</h3>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              </p>
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                „Hinweis zur Verantwortlichen Stelle“ in dieser
                Datenschutzerklärung entnehmen.
              </p>

              <p>
                <strong>Wie erfassen wir Ihre Daten?</strong>
              </p>
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben oder die Sie uns im Rahmen der
                Bestellung einer Pflegebox bzw. einer Beantragung von
                Pflegehilfsmitteln nach § 40 Abs. 2 SGB XI übermitteln.
              </p>
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung
                beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                sind vor allem technische Daten (z. B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                dieser Daten erfolgt automatisch, sobald Sie diese Website
                betreten.
              </p>

              <p>
                <strong>Wofür nutzen wir Ihre Daten?</strong>
              </p>
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gewährleisten. Andere Daten
                können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                Sofern über die Website Verträge geschlossen oder angebahnt
                werden können, werden die übermittelten Daten auch für
                Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen
                verarbeitet.
              </p>

              <p>
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
              </p>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
                können Sie diese Einwilligung jederzeit für die Zukunft
                widerrufen. Außerdem haben Sie das Recht, unter bestimmten
                Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
              <p>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können
                Sie sich jederzeit an uns wenden.
              </p>

              {/* ── 2. ── */}
              <h2>2. Hosting</h2>

              <h3>Externes Hosting</h3>
              <p>
                Diese Website wird extern gehostet. Die personenbezogenen Daten,
                die auf dieser Website erfasst werden, werden auf den Servern
                des Hosters / der Hoster gespeichert. Hierbei kann es sich
                v. a. um IP-Adressen, Kontaktanfragen, Meta- und
                Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
                Websitezugriffe und sonstige Daten, die über eine Website
                generiert werden, handeln.
              </p>
              <p>
                Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
                gegenüber unseren potenziellen und bestehenden Kunden (Art. 6
                Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen
                und effizienten Bereitstellung unseres Online-Angebots durch
                einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
                die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1
                lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung
                die Speicherung von Cookies oder den Zugriff auf Informationen
                im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne
                des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p>
                Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit
                verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
                erforderlich ist, und unsere Weisungen in Bezug auf diese Daten
                befolgen.
              </p>
              <p>Wir setzen folgende(n) Hoster ein:</p>
              <p>[Name und vollständige Anschrift des Hosters einfügen]</p>

              <h3>Auftragsverarbeitung</h3>
              <p>
                Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur
                Nutzung des oben genannten Dienstes geschlossen. Hierbei
                handelt es sich um einen datenschutzrechtlich vorgeschriebenen
                Vertrag, der gewährleistet, dass dieser die personenbezogenen
                Daten unserer Websitebesucher nur nach unseren Weisungen und
                unter Einhaltung der DSGVO verarbeitet.
              </p>

              {/* ── 3. ── */}
              <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3>Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                persönlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend der
                gesetzlichen Datenschutzvorschriften sowie dieser
                Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene
                personenbezogene Daten erhoben. Personenbezogene Daten sind
                Daten, mit denen Sie persönlich identifiziert werden können.
                Die vorliegende Datenschutzerklärung erläutert, welche Daten
                wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
                und zu welchem Zweck das geschieht.
              </p>
              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet
                (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
                aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                Zugriff durch Dritte ist nicht möglich.
              </p>

              <h3>Hinweis zur verantwortlichen Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <p>
                <strong>FairPflegeBox GbR</strong>
                <br />
                Reisholzer Werftstraße 76
                <br />
                40589 Düsseldorf
                <br />
                Deutschland
              </p>
              <p>
                Vertretungsberechtigte Gesellschafter: Ibrahim Botnifen,
                Azzeddine Essafi
                <br />
                Telefon:{" "}
                <a href="tel:+4917695554394">+49 176 95554394</a>
                <br />
                E-Mail:{" "}
                <a href="mailto:info@fairpflegebox.de">info@fairpflegebox.de</a>
              </p>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische
                Person, die allein oder gemeinsam mit anderen über die Zwecke
                und Mittel der Verarbeitung von personenbezogenen Daten (z. B.
                Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>

              <h3>Speicherdauer</h3>
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder
                eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre
                Daten gelöscht, sofern wir keine anderen rechtlich zulässigen
                Gründe für die Speicherung Ihrer personenbezogenen Daten haben
                (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
                letzteren Fall erfolgt die Löschung nach Fortfall dieser
                Gründe.
              </p>

              <h3>
                Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
                auf dieser Website
              </h3>
              <p>
                Sofern Sie in die Datenverarbeitung eingewilligt haben,
                verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
                Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO,
                sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung
                in die Übertragung personenbezogener Daten in Drittstaaten
                erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
                49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von
                Cookies oder in den Zugriff auf Informationen in Ihr Endgerät
                (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt
                die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1
                TDDDG. Die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p>
                Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
                Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
                Weiteren verarbeiten wir Ihre Daten, sofern diese zur
                Erfüllung einer rechtlichen Verpflichtung erforderlich sind,
                auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
                Datenverarbeitung kann ferner auf Grundlage unseres
                berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO
                erfolgen. Über die jeweils im Einzelfall einschlägigen
                Rechtsgrundlagen wird in den folgenden Absätzen dieser
                Datenschutzerklärung informiert.
              </p>

              <h3>Empfänger von personenbezogenen Daten</h3>
              <p>
                Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit
                verschiedenen externen Stellen zusammen. Dabei ist teilweise
                auch eine Übermittlung von personenbezogenen Daten an diese
                externen Stellen erforderlich. Wir geben personenbezogene Daten
                nur dann an externe Stellen weiter, wenn dies im Rahmen einer
                Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu
                verpflichtet sind (z. B. Weitergabe von Daten an
                Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art.
                6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine
                sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim
                Einsatz von Auftragsverarbeitern geben wir personenbezogene
                Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags
                über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen
                Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung
                geschlossen.
              </p>
              <p>
                Bei der Bestellung einer Pflegebox nach § 40 Abs. 2 SGB XI
                werden Ihre Daten — soweit für die Abrechnung erforderlich —
                auch an Ihre gesetzliche Pflegekasse übermittelt. Die
                Übermittlung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                und c DSGVO sowie Art. 9 Abs. 2 lit. h DSGVO i. V. m. §§ 40,
                94 SGB XI.
              </p>

              <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                ausdrücklichen Einwilligung möglich. Sie können eine bereits
                erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom
                Widerruf unberührt.
              </p>

              <h3>
                Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
                sowie gegen Direktwerbung (Art. 21 DSGVO)
              </h3>
              <p className="uppercase tracking-wide">
                Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit.
                e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus
                Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen
                die Verarbeitung Ihrer personenbezogenen Daten Widerspruch
                einzulegen; dies gilt auch für ein auf diese Bestimmungen
                gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen
                eine Verarbeitung beruht, entnehmen Sie dieser
                Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden
                wir Ihre betroffenen personenbezogenen Daten nicht mehr
                verarbeiten, es sei denn, wir können zwingende schutzwürdige
                Gründe für die Verarbeitung nachweisen, die Ihre Interessen,
                Rechte und Freiheiten überwiegen oder die Verarbeitung dient
                der Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).
              </p>
              <p className="uppercase tracking-wide">
                Werden Ihre personenbezogenen Daten verarbeitet, um
                Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit
                Widerspruch gegen die Verarbeitung Sie betreffender
                personenbezogener Daten zum Zwecke derartiger Werbung
                einzulegen; dies gilt auch für das Profiling, soweit es mit
                solcher Direktwerbung in Verbindung steht. Wenn Sie
                widersprechen, werden Ihre personenbezogenen Daten
                anschließend nicht mehr zum Zwecke der Direktwerbung verwendet
                (Widerspruch nach Art. 21 Abs. 2 DSGVO).
              </p>

              <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen
                ein Beschwerderecht bei einer Aufsichtsbehörde zu. Für die
                FairPflegeBox GbR ist dies:
              </p>
              <p>
                <strong>
                  Landesbeauftragte für Datenschutz und Informationsfreiheit
                  Nordrhein-Westfalen
                </strong>
                <br />
                Kavalleriestraße 2–4, 40213 Düsseldorf
                <br />
                Tel.: 0211/38424-0
                <br />
                E-Mail: poststelle@ldi.nrw.de
              </p>
              <p>
                Das Beschwerderecht besteht unbeschadet anderweitiger
                verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>

              <h3>Recht auf Datenübertragbarkeit</h3>
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format auszuhändigen zu lassen. Sofern Sie
                die direkte Übertragung der Daten an einen anderen
                Verantwortlichen verlangen, erfolgt dies nur, soweit es
                technisch machbar ist.
              </p>

              <h3>Auskunft, Berichtigung und Löschung</h3>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung und ggf. ein
                Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
                zu weiteren Fragen zum Thema personenbezogene Daten können Sie
                sich jederzeit an uns wenden.
              </p>

              <h3>Recht auf Einschränkung der Verarbeitung</h3>
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Hierzu können Sie sich
                jederzeit an uns wenden. Das Recht auf Einschränkung der
                Verarbeitung besteht in folgenden Fällen:
              </p>
              <ul>
                <li>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                  personenbezogenen Daten bestreiten, benötigen wir in der
                  Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung
                  haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten
                  unrechtmäßig geschah / geschieht, können Sie statt der
                  Löschung die Einschränkung der Datenverarbeitung verlangen.
                </li>
                <li>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen,
                  Sie sie jedoch zur Ausübung, Verteidigung oder
                  Geltendmachung von Rechtsansprüchen benötigen, haben Sie das
                  Recht, statt der Löschung die Einschränkung der Verarbeitung
                  Ihrer personenbezogenen Daten zu verlangen.
                </li>
                <li>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                  eingelegt haben, muss eine Abwägung zwischen Ihren und
                  unseren Interessen vorgenommen werden. Solange noch nicht
                  feststeht, wessen Interessen überwiegen, haben Sie das Recht,
                  die Einschränkung der Verarbeitung Ihrer personenbezogenen
                  Daten zu verlangen.
                </li>
              </ul>
              <p>
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
                abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
                Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
                der Rechte einer anderen natürlichen oder juristischen Person
                oder aus Gründen eines wichtigen öffentlichen Interesses der
                Europäischen Union oder eines Mitgliedstaats verarbeitet
                werden.
              </p>

              <h3>SSL- bzw. TLS-Verschlüsselung</h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel
                Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
                senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie daran, dass die Adresszeile des
                Browsers von „http://“ auf „https://“ wechselt und an dem
                Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p>
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können
                die Daten, die Sie an uns übermitteln, nicht von Dritten
                mitgelesen werden.
              </p>

              {/* ── 4. ── */}
              <h2>4. Datenerfassung auf dieser Website</h2>

              <h3>Cookies</h3>
              <p>
                Unsere Internetseiten verwenden so genannte „Cookies“. Cookies
                sind kleine Datenpakete und richten auf Ihrem Endgerät keinen
                Schaden an. Sie werden entweder vorübergehend für die Dauer
                einer Sitzung (Session-Cookies) oder dauerhaft (permanente
                Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden
                nach Ende Ihres Besuchs automatisch gelöscht. Permanente
                Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese
                selbst löschen oder eine automatische Löschung durch Ihren
                Webbrowser erfolgt.
              </p>
              <p>
                Cookies können von uns (First-Party-Cookies) oder von
                Drittunternehmen stammen (sog. Third-Party-Cookies).
                Third-Party-Cookies ermöglichen die Einbindung bestimmter
                Dienstleistungen von Drittunternehmen innerhalb von Webseiten
                (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
              </p>
              <p>
                Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
                technisch notwendig, da bestimmte Websitefunktionen ohne diese
                nicht funktionieren würden (z. B. die Warenkorbfunktion oder
                die Anzeige von Videos). Andere Cookies können zur Auswertung
                des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
              </p>
              <p>
                Cookies, die zur Durchführung des elektronischen
                Kommunikationsvorgangs, zur Bereitstellung bestimmter, von
                Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion)
                oder zur Optimierung der Website (z. B. Cookies zur Messung
                des Webpublikums) erforderlich sind (notwendige Cookies),
                werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                gespeichert, sofern keine andere Rechtsgrundlage angegeben
                wird. Der Websitebetreiber hat ein berechtigtes Interesse an
                der Speicherung von notwendigen Cookies zur technisch
                fehlerfreien und optimierten Bereitstellung seiner Dienste.
                Sofern eine Einwilligung zur Speicherung von Cookies und
                vergleichbaren Wiedererkennungstechnologien abgefragt wurde,
                erfolgt die Verarbeitung ausschließlich auf Grundlage dieser
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
                TDDDG); die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p>
                Sie können Ihren Browser so einstellen, dass Sie über das
                Setzen von Cookies informiert werden und Cookies nur im
                Einzelfall erlauben, die Annahme von Cookies für bestimmte
                Fälle oder generell ausschließen sowie das automatische
                Löschen der Cookies beim Schließen des Browsers aktivieren.
                Bei der Deaktivierung von Cookies kann die Funktionalität
                dieser Website eingeschränkt sein.
              </p>
              <p>
                Welche Cookies und Dienste auf dieser Website eingesetzt
                werden, können Sie dieser Datenschutzerklärung entnehmen.
              </p>

              <h3>Einwilligung mit Consent-Management-Tool</h3>
              <p>
                Unsere Website nutzt ein Consent-Management-Tool, um Sie bei
                Ihrem ersten Besuch unserer Website um Ihre Einwilligung zur
                Speicherung bestimmter Cookies in Ihrem Endgerät oder zum
                Einsatz bestimmter Technologien zu bitten und diese
                datenschutzkonform zu dokumentieren. Die Rechtsgrundlage für
                den Einsatz dieser Technologie ist Art. 6 Abs. 1 lit. c DSGVO.
              </p>
              <p>
                [Name und Anbieter des Consent-Tools eintragen — z. B.
                Cookiebot, Usercentrics, Borlabs Cookie, Real Cookie Banner].
                Eine Datenübertragung in die USA oder Drittstaaten kann je
                nach Tool stattfinden; Einzelheiten entnehmen Sie bitte der
                Datenschutzerklärung des Anbieters.
              </p>

              <h3>Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
                Fällen beruht die Verarbeitung auf unserem berechtigten
                Interesse an der effektiven Bearbeitung der an uns gerichteten
                Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese
                abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z. B. nach abgeschlossener
                Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen
                – insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>

              <h3>Anfrage per E-Mail, Telefon oder WhatsApp</h3>
              <p>
                Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren,
                wird Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                Bearbeitung Ihres Anliegens bei uns gespeichert und
                verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
                eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
                Fällen beruht die Verarbeitung auf unserem berechtigten
                Interesse an der effektiven Bearbeitung der an uns gerichteten
                Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese
                abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
              </p>

              <h3>Bestellung einer Pflegebox nach § 40 Abs. 2 SGB XI</h3>
              <p>
                Zur Bestellung einer monatlichen Pflegehilfsmittel-Box
                verarbeiten wir folgende Datenkategorien: Vor- und Nachname
                des/der Pflegebedürftigen, Anschrift, Geburtsdatum, Pflegegrad,
                Name der Pflegekasse, Versichertennummer sowie ggf.
                Kontaktdaten einer bevollmächtigten Person (z. B. pflegender
                Angehöriger). Hierbei handelt es sich teilweise um
                Gesundheitsdaten i. S. d. Art. 9 Abs. 1 DSGVO.
              </p>
              <p>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO (Vertragserfüllung) sowie Art. 9 Abs. 2 lit. h DSGVO
                i. V. m. § 22 Abs. 1 Nr. 1 lit. b BDSG und § 40 Abs. 2 SGB XI.
                Die Daten werden an Ihre gesetzliche Pflegekasse übermittelt,
                soweit dies für die Abrechnung der Pflegehilfsmittel
                erforderlich ist.
              </p>
              <p>
                Die Daten werden gelöscht, sobald der Zweck der Verarbeitung
                entfällt und keine gesetzlichen Aufbewahrungspflichten
                (insbesondere aus dem SGB, HGB und AO – i. d. R. 6 bzw. 10
                Jahre) mehr bestehen.
              </p>

              {/* ── 5. ── */}
              <h2>5. Analyse-Tools und Werbung</h2>

              <h3>Google Analytics 4</h3>
              <p>
                Diese Website nutzt Funktionen des Webanalysedienstes Google
                Analytics 4. Anbieter ist die Google Ireland Limited
                („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p>
                Google Analytics ermöglicht es dem Websitebetreiber, das
                Verhalten der Websitebesucher zu analysieren. Hierbei erhält
                der Websitebetreiber verschiedene Nutzungsdaten, wie z. B.
                Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und
                Herkunft des Nutzers. Diese Daten werden in einer User-ID
                zusammengefasst und dem jeweiligen Endgerät des
                Websitebesuchers zugeordnet.
              </p>
              <p>
                Des Weiteren können wir mit Google Analytics 4 u. a. Ihre Maus-
                und Scrollbewegungen und Klicks aufzeichnen. Ferner verwendet
                Google Analytics 4 verschiedene Modellierungsansätze, um die
                erfassten Datensätze zu ergänzen, und setzt
                Machine-Learning-Technologien bei der Datenanalyse ein.
              </p>
              <p>
                Google Analytics nutzt Technologien, die die Wiedererkennung
                des Nutzers zum Zwecke der Analyse des Nutzerverhaltens
                ermöglichen (z. B. Cookies oder Device-Fingerprinting). Die
                von Google erfassten Informationen über die Benutzung dieser
                Website werden in der Regel an einen Server von Google in den
                USA übertragen und dort gespeichert.
              </p>
              <p>
                Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer
                Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
                TDDDG. Die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p>
                Die Datenübertragung in die USA wird auf die
                Standardvertragsklauseln der EU-Kommission gestützt. Details
                finden Sie hier:{" "}
                <a
                  href="https://privacy.google.com/businesses/controllerterms/mccs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://privacy.google.com/businesses/controllerterms/mccs/
                </a>
                . Google LLC ist unter dem EU-US Data Privacy Framework
                zertifiziert.
              </p>

              <h3>IP-Anonymisierung</h3>
              <p>
                Die IP-Anonymisierung von Google Analytics 4 ist standardmäßig
                aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb
                von Mitgliedstaaten der Europäischen Union oder in anderen
                Vertragsstaaten des Abkommens über den Europäischen
                Wirtschaftsraum vor der Übermittlung in die USA gekürzt.
              </p>

              <h3>Auftragsverarbeitung</h3>
              <p>
                Wir haben mit Google einen Vertrag zur Auftragsverarbeitung
                abgeschlossen und setzen die strengen Vorgaben der deutschen
                Datenschutzbehörden bei der Nutzung von Google Analytics
                vollständig um.
              </p>

              <h3>Google Tag Manager</h3>
              <p>
                Wir setzen den Google Tag Manager ein. Anbieter ist die Google
                Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p>
                Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir
                Tracking- oder Statistik-Tools und andere Technologien auf
                unserer Website einbinden können. Der Google Tag Manager
                selbst erstellt keine Nutzerprofile, speichert keine Cookies
                und nimmt keine eigenständigen Analysen vor. Er dient lediglich
                der Verwaltung und Ausspielung der über ihn eingebundenen
                Tools. Der Google Tag Manager erfasst jedoch Ihre IP-Adresse,
                die auch an das Mutterunternehmen von Google in die Vereinigten
                Staaten übertragen werden kann.
              </p>
              <p>
                Der Einsatz des Google Tag Managers erfolgt auf Grundlage von
                Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                berechtigtes Interesse an einer schnellen und unkomplizierten
                Einbindung und Verwaltung verschiedener Tools auf seiner
                Website. Sofern eine entsprechende Einwilligung abgefragt
                wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage
                von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG; die
                Einwilligung ist jederzeit widerrufbar.
              </p>

              <h3>Meta-Pixel (ehemals Facebook-Pixel)</h3>
              <p>
                Diese Website nutzt zur Konversionsmessung den
                Besucheraktions-Pixel von Facebook/Meta. Anbieter dieses
                Dienstes ist die Meta Platforms Ireland Limited, Merrion Road,
                Dublin 4, D04 X2K5, Irland. Die erfassten Daten werden nach
                Aussage von Meta jedoch auch in die USA und in andere
                Drittländer übertragen.
              </p>
              <p>
                So kann das Verhalten der Seitenbesucher nachverfolgt werden,
                nachdem diese durch Klick auf eine Facebook-/Instagram-Werbeanzeige
                auf die Website des Anbieters weitergeleitet wurden. Dadurch
                können die Wirksamkeit der Werbeanzeigen für statistische und
                Marktforschungszwecke ausgewertet und zukünftige
                Werbemaßnahmen optimiert werden.
              </p>
              <p>
                Die erhobenen Daten sind für uns als Betreiber dieser Website
                anonym, wir können keine Rückschlüsse auf die Identität der
                Nutzer ziehen. Die Daten werden aber von Meta gespeichert und
                verarbeitet, sodass eine Verbindung zum jeweiligen
                Nutzerprofil möglich ist und Meta die Daten für eigene
                Werbezwecke, entsprechend der Meta-Datenverwendungsrichtlinie
                verwenden kann. Dadurch kann Meta das Schalten von
                Werbeanzeigen auf Seiten von Facebook sowie außerhalb von
                Facebook ermöglichen. Diese Verwendung der Daten kann von uns
                als Seitenbetreiber nicht beeinflusst werden.
              </p>
              <p>
                Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer
                Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
                TDDDG. Die Einwilligung ist jederzeit widerrufbar.
              </p>
              <p>
                Die Datenübertragung in die USA wird auf die
                Standardvertragsklauseln der EU-Kommission gestützt. Details
                finden Sie hier:{" "}
                <a
                  href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/legal/EU_data_transfer_addendum
                </a>{" "}
                und{" "}
                <a
                  href="https://de-de.facebook.com/help/566994660333381"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://de-de.facebook.com/help/566994660333381
                </a>
                . Meta Platforms, Inc. ist unter dem EU-US Data Privacy
                Framework zertifiziert.
              </p>

              <h3>Gemeinsame Verantwortlichkeit (Joint Controllership)</h3>
              <p>
                Soweit mithilfe des hier beschriebenen Tools personenbezogene
                Daten auf unserer Website erfasst und an Meta weitergeleitet
                werden, sind wir und die Meta Platforms Ireland Limited
                gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26
                DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich
                dabei ausschließlich auf die Erfassung der Daten und deren
                Weitergabe an Meta. Die nach der Weiterleitung erfolgende
                Verarbeitung durch Meta ist nicht Teil der gemeinsamen
                Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen
                wurden in einer Vereinbarung über gemeinsame Verarbeitung
                festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:{" "}
                <a
                  href="https://www.facebook.com/legal/controller_addendum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/legal/controller_addendum
                </a>
                . Laut dieser Vereinbarung sind wir für die Erteilung der
                Datenschutzinformationen beim Einsatz des Meta-Tools und für
                die datenschutzrechtlich sichere Implementierung des Tools auf
                unserer Website verantwortlich. Für die Datensicherheit der
                Meta-Produkte ist Meta verantwortlich. Betroffenenrechte (z.
                B. Auskunftsersuchen) hinsichtlich der bei Meta verarbeiteten
                Daten können Sie direkt bei Meta geltend machen.
              </p>

              <h3>Meta Conversions API (CAPI)</h3>
              <p>
                Soweit eingesetzt, nutzen wir zusätzlich zum Meta-Pixel die
                Meta Conversions API. Dabei werden Ereignisdaten (z. B.
                Seitenaufrufe, Formularabsendungen, Bestellungen) direkt
                serverseitig an Meta übermittelt, um die Qualität der Messung
                zu verbessern. Sofern personenbezogene Daten (z. B.
                E-Mail-Adresse) übertragen werden, erfolgt die Übermittlung
                ausschließlich in gehashter (irreversibel verschlüsselter)
                Form. Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs.
                1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist
                jederzeit widerrufbar.
              </p>

              <h3>Google Ads / Google Conversion-Tracking</h3>
              <p>
                Soweit wir Google Ads einsetzen, nutzen wir das Google
                Conversion-Tracking. Anbieter ist die Google Ireland Limited,
                Gordon House, Barrow Street, Dublin 4, Irland. Mit Hilfe von
                Google-Conversion-Tracking können Google und wir erkennen, ob
                der Nutzer bestimmte Aktionen durchgeführt hat. So können wir
                beispielsweise auswerten, welche Buttons auf unserer Website
                wie häufig geklickt oder welche Produkte besonders oft
                angesehen oder gekauft wurden.
              </p>
              <p>
                Die Nutzung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art.
                6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung
                ist jederzeit widerrufbar.
              </p>

              {/* ── 6. ── */}
              <h2>6. Newsletter</h2>

              <h3>Newsletter-Daten</h3>
              <p>
                Wenn Sie den auf der Website angebotenen Newsletter beziehen
                möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie
                Informationen, welche uns die Überprüfung gestatten, dass Sie
                der Inhaber der angegebenen E-Mail-Adresse sind und mit dem
                Empfang des Newsletters einverstanden sind. Weitere Daten
                werden nicht bzw. nur auf freiwilliger Basis erhoben. Für die
                Abwicklung der Newsletter nutzen wir Newsletterdiensteanbieter,
                die nachfolgend beschrieben werden.
              </p>
              <p>
                [Sofern Newsletter versendet werden: Namen des Tools angeben —
                z. B. Brevo (Sendinblue), Mailchimp, CleverReach, rapidmail.
                Einwilligungsverfahren: Double-Opt-In. Rechtsgrundlage: Art. 6
                Abs. 1 lit. a DSGVO. Widerruf jederzeit über den
                Abmelde-Link.]
              </p>

              {/* ── 7. ── */}
              <h2>7. Plugins und Tools</h2>

              <h3>Google Fonts</h3>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von
                Schriftarten so genannte Google Fonts, die von Google
                bereitgestellt werden. Wir haben die Google Fonts lokal
                eingebunden [alternativ: werden über einen Google-Server in
                den USA geladen]. Eine Verbindung zu Servern von Google findet
                dabei [nicht / gegebenenfalls] statt.
              </p>
              <p>
                [Bei Einbindung über CDN: Rechtsgrundlage ist Art. 6 Abs. 1
                lit. a DSGVO i. V. m. § 25 Abs. 1 TDDDG (Einwilligung).]
              </p>

              <h3>Google reCAPTCHA</h3>
              <p>
                Wir nutzen „Google reCAPTCHA“ (im Folgenden „reCAPTCHA“) auf
                dieser Website. Anbieter ist die Google Ireland Limited,
                Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p>
                Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf
                dieser Website (z. B. in einem Kontaktformular) durch einen
                Menschen oder durch ein automatisiertes Programm erfolgt.
                Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers
                anhand verschiedener Merkmale. Diese Analyse beginnt
                automatisch, sobald der Websitebesucher die Website betritt.
              </p>
              <p>
                Die Speicherung und Analyse der Daten erfolgt auf Grundlage
                von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                berechtigtes Interesse daran, seine Webangebote vor
                missbräuchlicher automatisierter Ausspähung und vor SPAM zu
                schützen. Sofern eine entsprechende Einwilligung abgefragt
                wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage
                von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
              </p>

              <h3>WhatsApp Business</h3>
              <p>
                Wir nutzen WhatsApp Business für die Kommunikation mit unseren
                Kunden und Interessenten. Anbieter ist die WhatsApp Ireland
                Limited, 4 Grand Canal Square, Dublin 2, Irland, ein
                Tochterunternehmen der Meta Platforms, Inc.
              </p>
              <p>
                Wenn Sie über WhatsApp mit uns kommunizieren, werden Ihre
                Telefonnummer und die von Ihnen übermittelten
                Nachrichteninhalte von WhatsApp verarbeitet. Rechtsgrundlage
                ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktive
                Kontaktaufnahme) bzw. Art. 6 Abs. 1 lit. b DSGVO
                (Vertragsanbahnung/-erfüllung). Details zur Datenverarbeitung
                durch WhatsApp finden Sie in der Datenschutzrichtlinie von
                WhatsApp:{" "}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy-eea"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.whatsapp.com/legal/privacy-policy-eea
                </a>
                .
              </p>

              {/* ── 8. ── */}
              <h2>8. Eigene Dienste</h2>

              <h3>Umgang mit Bewerberdaten</h3>
              <p>
                Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben
                (z. B. per E-Mail, postalisch oder via
                Online-Bewerberformular). Im Folgenden informieren wir Sie
                über Umfang, Zweck und Verwendung Ihrer im Rahmen des
                Bewerbungsprozesses erhobenen personenbezogenen Daten. Wir
                versichern, dass die Erhebung, Verarbeitung und Nutzung Ihrer
                Daten in Übereinstimmung mit dem geltenden Datenschutzrecht
                und allen weiteren gesetzlichen Bestimmungen erfolgt und Ihre
                Daten streng vertraulich behandelt werden.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
