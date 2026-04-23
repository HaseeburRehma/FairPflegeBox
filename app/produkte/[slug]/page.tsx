import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  getAllProductSlugs,
  getProductBySlug,
} from "@/lib/products";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: "Produkt nicht gefunden | FairPflegeBox" };
  }
  return {
    title: `${product.title} | FairPflegeBox`,
    description: product.intro,
    alternates: { canonical: `/produkte/${product.slug}` },
    openGraph: {
      title: product.title,
      description: product.intro,
      type: "website",
      locale: "de_DE",
    },
  };
}

export default function ProductDetailPage({ params }: { params: Params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <main>
      {/* ══════ HERO — same pattern as /pflichtangaben ══════ */}
      <section className="relative pt-36 sm:pt-44 lg:pt-52 pb-24 sm:pb-32 lg:pb-40 overflow-hidden">
        <Image
          src="/senior-fairpflegebox-wohnzimmer.png"
          alt="FairPflegeBox – Pflegehilfsmittel"
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

        <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px] relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[28px] sm:text-[38px] xl:text-[46px] font-medium text-white leading-[1.1] mb-5">
              {product.title}
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/85 leading-relaxed max-w-xl mx-auto">
              {product.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ══════ CONTENT ══════ */}
      <ScrollReveal>
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[860px]">
            {/* Product image */}
            <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden mb-10">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(min-width: 768px) 860px, 100vw"
                className="object-cover"
              />
            </div>

            <article className="text-center">
              {/* Detailed description */}
              {product.detail && (
                <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.9] text-center sm:text-justify mb-10">
                  {product.detail}
                </p>
              )}

              {/* Bullets as a clean feature list */}
              {product.bullets.length > 0 && (
                <div className="text-left bg-[#F5F4F8] rounded-2xl p-6 sm:p-8 mb-10">
                  <h2 className="text-[18px] sm:text-[20px] font-medium text-gray-900 mb-4">
                    Auf einen Blick
                  </h2>
                  <ul className="space-y-3">
                    {product.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[14px] sm:text-[15px] text-gray-700 leading-relaxed"
                      >
                        <svg
                          className="w-[18px] h-[18px] text-[#009CB4] flex-shrink-0 mt-[3px]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Pflichtinformation notice for regulated products */}
              {product.pflichtInfo && (
                <div className="text-left border border-[#009CB4]/30 bg-[#009CB4]/5 rounded-2xl p-6 sm:p-8 mb-10">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#009CB4] flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        strokeWidth={1.6}
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.6}
                        d="M12 8h.01M11 12h1v4h1"
                      />
                    </svg>
                    <div>
                      <p className="text-[13.5px] sm:text-[14px] text-gray-700 leading-relaxed">
                        Für dieses Produkt gelten Pflichtangaben gemäß dem
                        deutschen Arzneimittelgesetz und dem
                        Heilmittelwerbegesetz (HWG).
                      </p>
                      <Link
                        href="/pflichtangaben"
                        className="inline-flex items-center gap-1.5 mt-3 text-[13px] font-semibold text-[#43358B] hover:text-[#009CB4] transition-colors"
                      >
                        Pflichtinformationen anzeigen
                        <svg
                          className="w-3.5 h-3.5"
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
                  </div>
                </div>
              )}

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link
                  href="/jetzt-bewerben"
                  className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[14px] rounded-full pl-6 pr-2 py-2 hover:bg-[#007f95] transition-colors shadow-lg shadow-[#009CB4]/25"
                >
                  Jetzt bewerben
                  <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-[#009CB4]"
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
                <Link
                  href="/produkte"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#43358B] border border-[#D6D1EC] rounded-full px-5 py-2.5 hover:bg-[#43358B] hover:text-white hover:border-[#43358B] transition-all duration-200"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Zurück zur Produktübersicht
                </Link>
              </div>
            </article>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
