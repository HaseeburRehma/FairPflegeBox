import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const SITE_URL = "https://fairpflegebox.de";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "FairPflegeBox – Pflegehilfsmittel einfach & fair | Kostenlose Pflegebox",
    template: "%s | FairPflegeBox",
  },
  description:
    "FairPflegeBox liefert Ihnen monatlich kostenlose Pflegehilfsmittel direkt nach Hause. Über 1.300 Pflegeboxen geliefert. Bis zu 42 € monatlich über die Pflegekasse – ohne Zuzahlung.",
  applicationName: "FairPflegeBox",
  category: "Healthcare",
  generator: "Next.js",
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
    "42 Euro Pflegehilfsmittel",
    "häusliche Pflege",
    "Pflegende Angehörige",
  ],
  authors: [{ name: "FairPflegeBox", url: SITE_URL }],
  creator: "FairPflegeBox",
  publisher: "FairPflegeBox",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "FairPflegeBox – Kostenlose Pflegehilfsmittel monatlich geliefert",
    description:
      "Qualitäts-Pflegeprodukte bequem geliefert. Über 1.300 Pflegeboxen geliefert. Kostenlos über die Pflegekasse.",
    siteName: "FairPflegeBox",
    locale: "de_DE",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: "/hero-nurse.jpg",
        width: 1200,
        height: 630,
        alt: "FairPflegeBox – Pflegehilfsmittel einfach und fair",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FairPflegeBox – Pflegehilfsmittel einfach & fair",
    description:
      "Kostenlose Pflegehilfsmittel monatlich geliefert. Bis zu 42 € über die Pflegekasse.",
    images: ["/hero-nurse.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
    languages: { "de-DE": SITE_URL },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#43358B",
  width: "device-width",
  initialScale: 1,
};

/** JSON-LD Organization schema — gives Google your brand, logo, contact, and socials */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FairPflegeBox",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-full.png`,
  description:
    "FairPflegeBox liefert monatlich kostenlose Pflegehilfsmittel direkt nach Hause – bis zu 42 € über die Pflegekasse.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+49-176-95554394",
    contactType: "customer service",
    email: "info@fairpflegebox.de",
    availableLanguage: ["German"],
    areaServed: "DE",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Reisholzer Werftstraße 76",
    postalCode: "40589",
    addressLocality: "Düsseldorf",
    addressCountry: "DE",
  },
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
    "https://x.com",
    "https://linkedin.com",
  ],
};

/** JSON-LD WebSite schema — enables Google sitelinks search box */
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FairPflegeBox",
  url: SITE_URL,
  inLanguage: "de-DE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* Structured data for search engines */}
        <script
          type="application/ld+json"
          // JSON is safe to inline — no user content
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className="font-onest antialiased text-gray-900 overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
