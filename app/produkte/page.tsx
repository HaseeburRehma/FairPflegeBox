import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { products, type Product } from "@/lib/products";

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
   ════════════════════════════════════
   Products live in `/lib/products.ts` so that detail pages at
   `/produkte/[slug]` share the same source of truth.
   ════════════════════════════════════ */

async function getProducts(): Promise<Product[]> {
  return products;
}


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
          href={`/produkte/${product.slug}`}
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#43358B] border border-[#D6D1EC] rounded-full px-5 py-2.5 hover:bg-[#43358B] hover:text-white hover:border-[#43358B] transition-all duration-200 group"
        >
          Produkt erkunden
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
