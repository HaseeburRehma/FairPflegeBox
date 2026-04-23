import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jetzt bewerben – FairPflegeBox kostenlos sichern",
  description:
    "Jetzt kostenlos bewerben: Sichern Sie sich Ihre monatliche FairPflegeBox mit Pflegehilfsmitteln. Antwort innerhalb von 24 Stunden per Telefon, E-Mail oder Formular.",
  alternates: { canonical: "/jetzt-bewerben" },
  openGraph: {
    title: "Jetzt bewerben – FairPflegeBox",
    description:
      "Sichern Sie sich Ihre kostenlose FairPflegeBox: Füllen Sie das Formular aus und wir kümmern uns um alles Weitere.",
    type: "website",
    locale: "de_DE",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
