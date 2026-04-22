import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pflegepaket bestellen – Kostenlos in 3 Minuten | FairPflegeBox",
  description:
    "Stellen Sie Ihre kostenlose Pflegebox in wenigen Schritten zusammen. Wir kümmern uns um den gesamten Antrag bei Ihrer Pflegekasse – bis zu 42 € monatlich.",
  alternates: { canonical: "/pflegepaket" },
  openGraph: {
    title: "Pflegepaket bestellen – FairPflegeBox",
    description:
      "In nur 3 Minuten zur kostenlosen Pflegebox. 100 % digital, papierlos und vollständig verwaltet.",
    type: "website",
    locale: "de_DE",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
