import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "FairPflegeBox – Pflegehilfsmittel einfach & fair | Kostenlose Pflegebox",
  description:
    "FairPflegeBox liefert Ihnen monatlich kostenlose Pflegehilfsmittel direkt nach Hause. Über 1.300 Pflegeboxen geliefert. Bis zu 40€ monatlich über die Pflegekasse – ohne Zuzahlung.",
  keywords: [
    "Pflegebox",
    "Pflegehilfsmittel",
    "Pflegeprodukte",
    "Pflegebox kostenlos",
    "Pflegehilfsmittel zum Verbrauch",
    "monatliche Pflegelieferung",
    "Pflegegrad",
    "Pflegekasse",
    "FairPflegeBox",
    "40 Euro Pflegehilfsmittel",
  ],
  authors: [{ name: "FairPflegeBox" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "FairPflegeBox – Kostenlose Pflegehilfsmittel monatlich geliefert",
    description:
      "Qualitäts-Pflegeprodukte bequem geliefert. Über 1.300 Pflegeboxen geliefert. Kostenlos über die Pflegekasse.",
    siteName: "FairPflegeBox",
    locale: "de_DE",
    type: "website",
    url: "https://fairpflegebox.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "FairPflegeBox – Pflegehilfsmittel einfach & fair",
    description:
      "Kostenlose Pflegehilfsmittel monatlich geliefert. Bis zu 40€ über die Pflegekasse.",
  },
  alternates: {
    canonical: "https://fairpflegebox.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#43358B" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-onest antialiased text-gray-900 overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
