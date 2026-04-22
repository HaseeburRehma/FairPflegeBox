"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ════════════════════════════════════
   ICONS
   ════════════════════════════════════ */

const MedalIcon = (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="9" r="5" strokeWidth={1.6} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
  </svg>
);

const BoxIcon = (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const CardIcon = (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth={1.6} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 10h18" />
  </svg>
);

const InfoIcon = (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" strokeWidth={1.6} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 8h.01M11 12h1v4h1" />
  </svg>
);

/* ════════════════════════════════════
   FAQ DATA
   ════════════════════════════════════ */

type FAQ = { q: string; a: string };

type Category = {
  title: string;
  icon: ReactNode;
  faqs: FAQ[];
};

const categories: Category[] = [
  {
    title: "Anspruch & Berechtigung",
    icon: MedalIcon,
    faqs: [
      {
        q: "Wer hat Anspruch auf kostenlose Pflegehilfsmittel?",
        a: "Jede Person mit einem anerkannten Pflegegrad (1–5), die zu Hause von Angehörigen, Bekannten oder ehrenamtlichen Helfern gepflegt wird, hat Anspruch auf Pflegehilfsmittel zum Verbrauch im Wert von bis zu 42 € pro Monat.",
      },
      {
        q: "Welche Pflegegrade sind berechtigt?",
        a: "Alle Pflegegrade von 1 bis 5 sind berechtigt. Voraussetzung ist lediglich ein anerkannter Pflegegrad der zuständigen Pflegekasse.",
      },
      {
        q: "Was bedeutet 'Pflege durch eine Privatperson'?",
        a: "Die pflegebedürftige Person wird zu Hause von Angehörigen, Bekannten oder ehrenamtlichen Helfern unterstützt – also nicht ausschließlich von einem professionellen Pflegedienst.",
      },
      {
        q: "Gilt der Anspruch auch für ambulante Pflegedienste?",
        a: "Ja. Auch wenn zusätzlich ein ambulanter Pflegedienst tätig ist, bleibt der Anspruch auf die monatlichen Pflegehilfsmittel bestehen, solange die Pflege teilweise zu Hause erfolgt.",
      },
      {
        q: "Was passiert, wenn sich mein Pflegegrad ändert?",
        a: "Der Anspruch bleibt bestehen, solange ein Pflegegrad vorliegt. Änderungen melden Sie uns einfach – wir passen Ihren Antrag entsprechend an.",
      },
      {
        q: "Kann ich als Pflegekraft bestellen?",
        a: "Ja. Angehörige und pflegende Privatpersonen können die FairPflegeBox stellvertretend für die pflegebedürftige Person bestellen.",
      },
    ],
  },
  {
    title: "Bestellung & Lieferung",
    icon: BoxIcon,
    faqs: [
      {
        q: "Wie bestelle ich die Pflegebox?",
        a: "Füllen Sie unser Online-Formular in rund 3 Minuten aus. Wir kümmern uns anschließend um den gesamten Antrag bei Ihrer Pflegekasse.",
      },
      {
        q: "Wie lange dauert die Bearbeitung meines Antrags?",
        a: "In der Regel liegt die Bestätigung der Pflegekasse innerhalb von 2–5 Werktagen vor. Sobald alles freigegeben ist, starten wir mit der Lieferung.",
      },
      {
        q: "Wie oft wird die Pflegebox geliefert?",
        a: "Die FairPflegeBox wird einmal im Monat pünktlich an Ihre Haustür geliefert – portofrei und diskret verpackt.",
      },
      {
        q: "Muss ich jeden Monat neu bestellen?",
        a: "Nein. Nach der einmaligen Anmeldung läuft die Lieferung automatisch weiter, bis Sie sie ändern oder beenden.",
      },
      {
        q: "Kann ich die Produkte in meiner Box ändern?",
        a: "Ja. Änderungen, die bis zum 20. des Vormonats bei uns eingehen, werden im nächsten Liefermonat berücksichtigt.",
      },
      {
        q: "Welche Produkte kann ich auswählen?",
        a: "Sie wählen aus einem breiten Sortiment an Pflegehilfsmitteln zum Verbrauch – z. B. Einmalhandschuhe, Desinfektionsmittel, Mundschutz, Schutzschürzen und Bettschutzeinlagen.",
      },
      {
        q: "Was passiert, wenn ich zu viele Produkte habe?",
        a: "Ihre monatliche Auswahl wird automatisch auf das Budget von 42 € begrenzt. Das System zeigt Ihnen während der Auswahl, wie viel Budget noch zur Verfügung steht.",
      },
      {
        q: "Kann ich die Pflegebox kündigen?",
        a: "Ja, jederzeit und ohne Frist. Eine kurze Nachricht an unser Team genügt.",
      },
    ],
  },
  {
    title: "Kosten & Abrechnung",
    icon: CardIcon,
    faqs: [
      {
        q: "Ist die Pflegebox wirklich völlig kostenlos?",
        a: "Ja. Für Versicherte mit anerkanntem Pflegegrad ist die FairPflegeBox 100 % kostenlos. Die Pflegekasse übernimmt bis zu 42 € monatlich direkt.",
      },
      {
        q: "Muss ich im Voraus bezahlen?",
        a: "Nein. Sie zahlen zu keinem Zeitpunkt Geld aus eigener Tasche. Die Abrechnung läuft vollständig über Ihre Pflegekasse.",
      },
      {
        q: "Gibt es versteckte Gebühren?",
        a: "Nein. Es fallen keinerlei Zuzahlungen, Versandkosten oder andere Gebühren für Sie an.",
      },
      {
        q: "Was kostet die Pflegebox die Pflegeversicherung?",
        a: "Die Pflegeversicherung zahlt maximal 42 € pro Monat. Bleibt Ihre Auswahl unter diesem Betrag, wird auch nur der tatsächliche Wert abgerechnet.",
      },
      {
        q: "Wird der Betrag von meinem Pflegegeld abgezogen?",
        a: "Nein. Die Pflegehilfsmittel zum Verbrauch werden separat abgerechnet und beeinflussen Ihr Pflegegeld nicht.",
      },
      {
        q: "Muss ich selbst mit der Pflegeversicherung kommunizieren?",
        a: "Nein. Wir übernehmen die gesamte Abwicklung mit Ihrer Pflegekasse – von der Antragstellung bis zur monatlichen Abrechnung.",
      },
    ],
  },
  {
    title: "Über FairPflegebox",
    icon: InfoIcon,
    faqs: [
      {
        q: "Wer steht hinter FairPflegebox?",
        a: "FairPflegeBox ist ein deutsches Familienunternehmen mit Sitz in Berlin, spezialisiert auf die einfache und faire Versorgung mit Pflegehilfsmitteln zu Hause.",
      },
      {
        q: "Sind die Produkte getestet und genehmigt?",
        a: "Ja. Alle Produkte stammen von namhaften Herstellern (z. B. Hartmann, Sterillium, MoliCare) und entsprechen den Qualitätsstandards der Pflegekassen.",
      },
      {
        q: "Wie sicher sind meine Daten?",
        a: "Ihre Daten werden SSL-verschlüsselt übertragen, in Deutschland gespeichert und ausschließlich zur Bearbeitung Ihres Antrags verwendet – DSGVO-konform.",
      },
      {
        q: "Wie kann ich FairPflegebox kontaktieren?",
        a: "Per E-Mail über unser Kontaktformular oder telefonisch unter 0800 123 456 78 (Mo–Fr 8:00–18:00 Uhr, kostenlos aus dem deutschen Fest- und Mobilfunknetz).",
      },
      {
        q: "Was passiert, wenn es Probleme mit der Lieferung gibt?",
        a: "Melden Sie sich einfach bei unserem Support – wir klären das Problem unbürokratisch und sorgen dafür, dass Sie schnellstmöglich versorgt sind.",
      },
    ],
  },
];

/* ════════════════════════════════════
   FAQ CARD
   ════════════════════════════════════ */

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-colors hover:border-gray-300">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
      >
        <span className="text-[14px] sm:text-[15px] font-bold text-gray-900 leading-snug">
          {faq.q}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 sm:px-6 pb-5 text-[13.5px] sm:text-[14px] text-gray-500 leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════
   PAGE
   ════════════════════════════════════ */

export default function HaeufigeFragenPage() {
  return (
    <main>
      {/* ══════ HERO ══════ */}
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
            <h1 className="text-[32px] sm:text-[44px] xl:text-[56px] font-medium text-white leading-[1.08] mb-5">
              Häufig Gestellte Fragen
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/85 leading-relaxed max-w-xl mx-auto mb-7">
              Hier finden Sie schnelle Antworten auf die wichtigsten Fragen zu
              Ihrem Anspruch und der FairPflegebox.
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

      {/* ══════ CATEGORIES ══════ */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[960px]">
          <div className="space-y-12 sm:space-y-16">
            {categories.map((cat) => (
              <ScrollReveal key={cat.title}>
                <div>
                  {/* Category header */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#EFE9FA] flex items-center justify-center flex-shrink-0">
                      <span className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#43358B]">
                        {cat.icon}
                      </span>
                    </span>
                    <h2 className="text-[22px] sm:text-[28px] lg:text-[30px] font-medium text-gray-900 leading-tight">
                      {cat.title}
                    </h2>
                  </div>

                  {/* FAQ list */}
                  <div className="space-y-3">
                    {cat.faqs.map((f) => (
                      <FAQItem key={f.q} faq={f} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
