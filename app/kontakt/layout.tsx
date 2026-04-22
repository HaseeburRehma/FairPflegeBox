import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Wir sind für Sie da | FairPflegeBox",
  description:
    "Haben Sie Fragen? Unser Team hilft Ihnen per Telefon, E-Mail oder Kontaktformular – Antwort innerhalb von 24 Stunden.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt – FairPflegeBox",
    description:
      "Telefon, E-Mail oder Kontaktformular: Wir helfen Ihnen gerne bei Fragen rund um Ihre FairPflegeBox.",
    type: "website",
    locale: "de_DE",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
