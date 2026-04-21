"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Wer kann eine FairPflegeBox erhalten?",
    answer:
      "Personen mit einem anerkannten Pflegegrad können berechtigt sein, Pflegeprodukte im Rahmen des monatlichen Budgets zu erhalten.",
  },
  {
    question: "Wie viel kostet die Pflegebox?",
    answer:
      "Für Versicherte mit einem anerkannten Pflegegrad ist die FairPflegeBox vollständig kostenlos. Die Pflegekasse übernimmt die Kosten bis zu 40 Euro monatlich. Es entstehen keine Zuzahlungen oder versteckten Gebühren.",
  },
  {
    question: "Kann ich meine Produkte wählen?",
    answer:
      "Ja, Sie können aus unserem breiten Sortiment an Pflegehilfsmitteln die Produkte auswählen, die am besten zu Ihren Bedürfnissen passen. Ihre Auswahl können Sie jederzeit anpassen.",
  },
  {
    question: "Wie oft wird die Box geliefert?",
    answer:
      "Die FairPflegeBox wird einmal im Monat geliefert. Sie können das Lieferdatum flexibel anpassen und Ihre Produktauswahl jeden Monat neu zusammenstellen.",
  },
  {
    question: "Kann ich meine Box jederzeit ändern?",
    answer:
      "Ja, Sie können Ihre Produktauswahl jederzeit anpassen. Änderungen, die bis zum 20. des Vormonats eingehen, werden im nächsten Liefermonat berücksichtigt.",
  },
];

function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span
          className={`font-semibold text-[15px] leading-snug transition-colors duration-150 ${
            open
              ? "text-gray-900"
              : "text-gray-700 group-hover:text-gray-900"
          }`}
        >
          {question}
        </span>
        <span
          className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
            open
              ? "bg-[#009CB4] text-white"
              : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
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

      {/* Expandable answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-5 pr-12 text-[14px] text-gray-500 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#F5F4F8]">
      <div className="container mx-auto px-6 xl:px-12 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ══════ LEFT ══════ */}
          <div className="lg:sticky lg:top-28">
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm mb-6">
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
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <span className="text-sm font-semibold text-gray-800 tracking-wide">
                Häufige Fragen
              </span>
            </div>

            <h2 className="text-[30px] sm:text-[38px] xl:text-[44px] font-bold text-gray-900 leading-[1.08] mb-10">
              Fragen? Wir sind<br />hier, um zu helfen
            </h2>

            {/* Contact card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6 max-w-sm">
              <h3 className="font-bold text-gray-900 text-[16px] mb-1.5">
                Haben Sie noch Fragen?
              </h3>
              <p className="text-[13.5px] text-gray-500 leading-relaxed mb-5">
                Wir sind hier, um den Prozess einfach zu gestalten.
              </p>
              <Link
                href="mailto:info@fairpflegebox.de"
                className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[13px] rounded-full pl-5 pr-1.5 py-1.5 hover:bg-[#007f95] transition-colors shadow-md shadow-[#009CB4]/25"
              >
                E-Mail senden
                <span className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5 text-[#009CB4]"
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

          {/* ══════ RIGHT: Accordion ══════ */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
