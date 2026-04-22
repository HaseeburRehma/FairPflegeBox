import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "So funktioniert es – In 4 Schritten zu Ihrer Pflegebox",
  description:
    "Von der Online-Anmeldung bis zur monatlichen Lieferung: In nur 4 Schritten erhalten Sie kostenlos Ihre FairPflegeBox – 100 % digital und papierlos.",
  alternates: { canonical: "/so-funktioniert-es" },
  openGraph: {
    title: "So funktioniert es – In 4 Schritten zu Ihrer Pflegebox | FairPflegeBox",
    description:
      "Von der Online-Anmeldung bis zur monatlichen Lieferung: In nur 4 Schritten erhalten Sie kostenlos Ihre FairPflegeBox.",
    type: "website",
    locale: "de_DE",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
