import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Häufige Fragen – FAQ zu Pflegehilfsmitteln | FairPflegeBox",
  description:
    "Antworten auf die wichtigsten Fragen zu Anspruch, Bestellung, Lieferung und Abrechnung der FairPflegeBox. Alles rund um Pflegehilfsmittel zum Verbrauch.",
  alternates: { canonical: "/haeufige-fragen" },
  openGraph: {
    title: "Häufig gestellte Fragen – FairPflegeBox",
    description:
      "Schnelle Antworten auf Fragen zu Ihrem Anspruch auf kostenlose Pflegehilfsmittel, Bestellung, Lieferung und mehr.",
    type: "website",
    locale: "de_DE",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
