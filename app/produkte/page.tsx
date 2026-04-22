import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title:
    "Produkte – Alle Pflegehilfsmittel aus der FairPflegeBox Pflege Reihe",
  description:
    "Entdecken Sie alle in der FairPflegeBox enthaltenen Pflegehilfsmittel: Einmalhandschuhe, Händedesinfektion, FFP2-Masken, Schutzschürzen und mehr – bis zu 40 € monatlich kostenlos über die Pflegekasse.",
  keywords: [
    "Pflegeprodukte",
    "Pflegehilfsmittel",
    "Peha-soft",
    "Sterillium",
    "Bacillol",
    "MoliCare",
    "Foliodress",
    "Vala Comfort",
    "Vala Fit",
    "FFP2 Maske",
    "Bettauflagen",
    "FairPflegeBox Produkte",
  ],
  openGraph: {
    title: "Alle Produkte aus der FairPflegeBox Pflege Reihe",
    description:
      "Bewährte Markenprodukte für die professionelle häusliche Pflege – alle kostenlos über die Pflegekasse.",
    type: "website",
    locale: "de_DE",
  },
};

/* ════════════════════════════════════
   PRODUCT DATA
   ════════════════════════════════════ */

type Product = {
  id: string;
  title: string;
  intro: string;
  pflichtInfo?: boolean;
  bullets: string[];
  image: string;
  imageAlt: string;
  href: string;
};

/**
 * Product data source.
 *
 * ▸ STATIC (default) — the page renders the `products` array below.
 * ▸ SANITY — once you've run `npm install` and filled in the Sanity env
 *   vars in `.env.local`, replace the `getProducts` body with:
 *
 *     import { sanityClient } from "@/sanity/lib/client";
 *     import { productsQuery } from "@/sanity/lib/queries";
 *     const rows = await sanityClient.fetch(productsQuery);
 *     return rows?.length ? rows.map(mapSanityProduct) : products;
 *
 *   (full copy-paste block in SETUP_CMS.md). The rest of the page
 *   stays untouched.
 */
async function getProducts(): Promise<Product[]> {
  return products;
}

const products: Product[] = [
  {
    id: "peha-soft",
    title: "Einmalhandschuhe: Peha-soft® puderfrei",
    intro:
      "Einmalhandschuhe sind für alltägliche Pflegesituationen geeignet und helfen, Infektionen zu vermeiden.",
    bullets: [
      "Nicht-sterile Handschuhe zum Selbstschutz und zum Schutz anderer",
      "Reißfest und puderfrei",
      "Ideal für: Wechseln von Inkontinenzprodukten und Verbänden, Körper- und Mundpflege",
    ],
    image: "/products/peha-soft-vinyl.png",
    imageAlt: "Peha-soft vinyl Einmalhandschuhe Verpackung",
    href: "/pflegepaket",
  },
  {
    id: "sterillium",
    title: "Händedesinfektionsmittel: Sterillium®",
    intro:
      "Sterillium® – das klassische alkoholische Händedesinfektionsmittel mit Hautpflegekomplex.",
    pflichtInfo: true,
    bullets: [
      "Flüssiges Produkt mit sehr guter Hautverträglichkeit",
      "Wirksam gegen viele Erreger wie Coronaviren, Hefen und Bakterien.",
      "Ideal für: Händedesinfektion vor dem Wechseln von Inkontinenzprodukten oder Verbänden, während der Katheterpflege",
    ],
    image: "/products/sterillium-bottle.png",
    imageAlt: "Sterillium Händedesinfektionsmittel 500 ml Flasche",
    href: "/pflichtangaben",
  },
  {
    id: "sterillium-home",
    title: "Oberflächen-Desinfektionstücher: Sterillium® home",
    intro:
      "Sterillium® plastikfreie Tücher für die schnelle Oberflächendesinfektion.**",
    pflichtInfo: true,
    bullets: [
      "Einfach und schnell zu verwenden.",
      "Geeignet für empfindliche Oberflächen",
      "Desinfiziert und reinigt",
      "Wirksam gegen viele Erreger wie Coronaviren, Hefen und Bakterien.",
      "Ideal für: Desinfizieren von Oberflächen, z.B. Toilettensitzen und Bettgestellen",
    ],
    image: "/products/sterillium-home-wipes.png",
    imageAlt: "Sterillium home Desinfektionstücher Packung",
    href: "/pflichtangaben",
  },
  {
    id: "bacillol",
    title: "Einmalhandschuhe: Peha-soft® puderfrei",
    intro:
      "Flüssiges Bacillol® Produkt zur schnellen Desinfektion von Oberflächen.**",
    pflichtInfo: true,
    bullets: [
      "Gebrauchsfertige Lösung, kann ohne Handschuhe aufgetragen werden",
      "Wirksam gegen viele Erreger wie Coronaviren, Hefen und Bakterien.",
      "Aldehyd-, farbstoff- und parfümfrei",
      "Ideal für: Desinfizieren von Oberflächen, z.B. im Badezimmer",
    ],
    image: "/products/bacillol-sensitive.png",
    imageAlt: "Bacillol Sensitive Tissues Desinfektionstücher Packung",
    href: "/pflichtangaben",
  },
  {
    id: "molicare-bed-mat",
    title: "Einmalhandschuhe: Peha-soft® puderfrei",
    intro:
      "Flüssiges Bacillol® Produkt zur schnellen Desinfektion von Oberflächen.**",
    pflichtInfo: true,
    bullets: [
      "Gebrauchsfertige Lösung, kann ohne Handschuhe aufgetragen werden",
      "Wirksam gegen viele Erreger wie Coronaviren, Hefen und Bakterien.",
      "Aldehyd-, farbstoff- und parfümfrei",
      "Ideal für: Desinfizieren von Oberflächen, z.B. im Badezimmer",
    ],
    image: "/products/molicare-bed-mat.png",
    imageAlt: "MoliCare Premium Bed Mat Bettschutzeinlagen Packung",
    href: "/pflichtangaben",
  },
  {
    id: "foliodress-mask",
    title: "Medizinische Gesichtsmasken: Foliodress® Mundschutz",
    intro:
      "Gesichtsmasken (\u201echirurgische Masken\u201c) aus dünnen Schichten von Vliesstoff helfen, andere vor Infektionen zu schützen.",
    bullets: [
      "Gesichtsmasken aus hypoallergenem Vliesstoff",
      "Mit Nasenbügel und elastischen Ohrschlaufen",
      "Helfen, Infektionen zu verhindern, die durch Tröpfchen übertragen werden",
      "Ideal für: Wundversorgung",
    ],
    image: "/products/foliodress-mask.png",
    imageAlt: "Foliodress Mask Loop Type IIR Mundschutz Verpackung",
    href: "/pflegepaket",
  },
  {
    id: "ffp2",
    title: "FFP2-Masken: Foliodress® Maske FFP2",
    intro:
      "FFP2-Masken aus mehrlagigem Vliesstoff helfen, Sie und andere vor Infektionen zu schützen.",
    bullets: [
      "Partikelfiltrierende Halbmaske aus mehrlagigem, dicht gewebtem Vliesstoff",
      "Mit Nasenbügel und elastischen Ohrschlaufen",
      "Helfen, Infektionen zu verhindern, die durch Tröpfchen und Aerosole übertragen werden.",
      "Besonders geeignet, wenn die zu pflegende Person beispielsweise erkältet ist.",
    ],
    image: "/products/foliodress-ffp2.png",
    imageAlt: "Foliodress Mask Loop FFP2 Atemschutz-Maske Verpackung",
    href: "/pflegepaket",
  },
  {
    id: "vala-comfort",
    title: "Einmal-Schutzschürzen: Vala®Comfort Einwegschürze",
    intro:
      "Wasserdichte Schürzen halten die Kleidung des Pflegepersonals sauber und trocken.",
    bullets: [
      "Einwegschürzen aus reißfestem, wasserdichtem Material (135 x 57 cm)",
      "Schützen die Kleidung vor Feuchtigkeit und Schmutz",
      "Mit Bändern im Rücken zum Schließen",
      "Ideal für: Wechseln von Inkontinenzprodukten und Verbänden, Körper- und Intimpflege",
    ],
    image: "/products/valacomfort-apron.png",
    imageAlt: "ValaComfort Einwegschürzen Packung",
    href: "/pflegepaket",
  },
  {
    id: "vala-fit",
    title: "Einmal-Schutzlätzchen: Vala®Fit haftende Schutzlätzchen",
    intro:
      "Schutzlätzchen schützen die Kleidung der zu pflegenden Person, z.B. während der Mahlzeiten.",
    bullets: [
      "Einweg-Lätzchen mit Auffangtasche (37 x 65 cm)",
      "Schnell dank des selbstklebenden Streifens anzubringen",
      "Fangen Essensreste und Flüssigkeiten auf",
      "Können auch als Mundlätzchen verwendet werden",
      "Ideal für: Essen und Trinken am Tisch oder im Krankenhausbett",
    ],
    image: "/products/valafit-bib.png",
    imageAlt: "Vala Fit haftende Schutzlätzchen Packung",
    href: "/pflegepaket",
  },
  {
    id: "bettauflage",
    title:
      "Ihr Extra für die 42 €: Waschbare Bettauflagen kostenlos enthalten",
    intro:
      "Unabhängig von den in Ihrem Curabox-Pflegepaket enthaltenen Produkten können Sie wiederverwendbare Bettauflagen anfordern. Diese rutschfesten Bettauflagen aus weichem Stoff (75 x 85 cm) nehmen noch mehr Flüssigkeit auf und können bis zu 300 Mal bei 95° Celsius gewaschen werden. Dies reduziert Abfall. Je nach Ihrem Anbieter der langfristigen Pflegeversicherung können Sie zusätzlich zu Ihrer Curabox-Pflege bis zu vier waschbare Bettauflagen pro Jahr für 0 € erhalten.",
    bullets: [],
    image: "/products/washable-bedpad.png",
    imageAlt: "Waschbare Bettauflage in Blau und Türkis",
    href: "/pflegepaket",
  },
];

/* ════════════════════════════════════
   PRODUCT CARD
   ════════════════════════════════════ */

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-white rounded-[28px] border border-[#EEEBF7] p-4 sm:p-5 flex flex-col h-full transition-all duration-300 hover:shadow-[0_14px_40px_rgba(67,53,139,0.10)] hover:-translate-y-0.5">
      {/* Image — full-bleed, no tint, photos fill the whole area */}
      <div className="relative rounded-[20px] overflow-hidden aspect-[16/10] mb-6">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 768px) 40vw, 90vw"
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-[18px] sm:text-[20px] font-medium text-gray-900 leading-snug mb-3 px-1">
        {product.title}
      </h3>

      {/* Intro paragraph — Onest 400 · 18/27 · -0.3px per design spec */}
      <p
        className="font-onest text-gray-500 mb-5 px-1"
        style={{
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "27px",
          letterSpacing: "-0.3px",
        }}
      >
        {product.intro}
        {product.pflichtInfo && (
          <>
            {" "}
            <Link
              href="/pflichtangaben"
              className="text-[#43358B] hover:text-[#009CB4] underline underline-offset-2 whitespace-nowrap"
            >
              ( Pflichtinformation )
            </Link>
          </>
        )}
      </p>

      {/* Bullet list (hidden when empty — card 10 renders as single paragraph) */}
      {product.bullets.length > 0 && (
        <ul className="mb-6 px-1 space-y-1.5 list-none">
          {product.bullets.map((b, i) => (
            <li
              key={i}
              className="font-onest text-gray-500"
              style={{
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "27px",
                letterSpacing: "-0.3px",
              }}
            >
              {b}
            </li>
          ))}
        </ul>
      )}

      {/* CTA — sticks to bottom */}
      <div className="mt-auto px-1 pb-1">
        <Link
          href={product.href}
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#43358B] border border-[#D6D1EC] rounded-full px-5 py-2.5 hover:bg-[#43358B] hover:text-white hover:border-[#43358B] transition-all duration-200 group"
        >
          Produkte erkunden
          <svg
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
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
        </Link>
      </div>
    </article>
  );
}

/* ════════════════════════════════════
   PAGE
   ════════════════════════════════════ */

export default async function ProduktePage() {
  const products = await getProducts();
  return (
    <main>
      {/* ══════ HERO ══════ */}
      <section
        className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24"
        aria-label="Produkte Hero"
      >
        {/* Background photo */}
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

        <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1400px] relative z-10">
          <div className="mx-auto text-center pt-16 sm:pt-20">
            <h1 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-medium text-white leading-[1.05] mb-5 whitespace-normal md:whitespace-nowrap drop-shadow-[0_2px_16px_rgba(0,0,0,0.25)]">
              Qualität für die tägliche Pflege
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/85 leading-relaxed max-w-xl mx-auto mb-8">
              Alle Produkte sind speziell für die häusliche Pflege zugelassen
              und entsprechen den Qualitätsstandards der Pflegekassen.
            </p>

            {/* Trust pill with double-check icon */}
            <div className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
              <svg
                className="w-5 h-5 text-white flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.4}
                  d="M1.5 13l4 4L13 9"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.4}
                  d="M9 17l1.5 1.5L22 7"
                />
              </svg>
              <span className="text-[14px] font-medium text-white">
                Getestete Qualität für zu Hause
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ PRODUCTS ══════ */}
      <section
        className="bg-white py-16 sm:py-24"
        aria-label="Produktübersicht"
      >
        <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1180px]">
          {/* Section header */}
          <ScrollReveal>
            <div className="text-center mb-12 sm:mb-14">
              {/* Tag */}
              <div className="flex justify-center mb-5">
                <div className="inline-flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[#009CB4] flex items-center justify-center flex-shrink-0">
                    <svg
                      viewBox="0 0 20 20"
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 7l7-3.5L17 7v8l-7 3.5L3 15V7z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M3 7l7 3.5L17 7M10 10.5V18.5"
                      />
                    </svg>
                  </span>
                  <span className="text-[13px] font-semibold text-gray-800 tracking-wide">
                    Unsere Produkte
                  </span>
                </div>
              </div>
              <h2 className="text-[30px] sm:text-[40px] xl:text-[48px] font-medium text-gray-900 leading-[1.1] mb-4 max-w-[800px] mx-auto">
                Alle verfügbaren Produkte aus der FairPflegeBox Pflege Reihe
              </h2>
              <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed max-w-[680px] mx-auto">
                Beispiele aus unserem Sortiment – bewährte Markenprodukte für
                die professionelle häusliche Pflege.
              </p>
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {products.map((p, i) => (
              <ScrollReveal key={p.id} delay={(i % 2) * 80}>
                <ProductCard product={p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
