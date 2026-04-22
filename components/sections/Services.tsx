import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Breite Produktwahl",
    description:
      "Wählen Sie aus grundlegenden Pflegeprodukten, die für die tägliche Hygiene, den Schutz und die Nutzung zu Hause ausgewählt wurden.",
    image: "/breite-produktauswahl.png",
    imageAlt: "FairPflegeBox Breite Produktauswahl auf Küchentresen",
    cta: "Produkte erkunden",
    href: "/produkte",
  },
  {
    title: "Zuverlässige monatliche Lieferung",
    description:
      "Ihre FairPflegeBox kommt jeden Monat pünktlich, direkt zu Ihnen nach Hause.",
    image: "/Image.png",
    imageAlt: "FairPflegeBox zuverlässige Lieferung an der Haustür",
    cta: "Sehen Sie, wie die Lieferung funktioniert",
    href: "/so-funktioniert-es",
  },
  {
    title: "Schnelle & einfache Bewerbung",
    description:
      "Bewerben Sie sich online in nur wenigen Minuten mit einem einfachen und stressfreien Prozess.",
    image: "/schnelle-einfache-bestellung.png",
    imageAlt: "Seniorin bestellt FairPflegeBox einfach online am Laptop",
    cta: "Jetzt bewerben",
    href: "/bestellen",
  },
  {
    title: "Stressfreier Prozess",
    description:
      "Wir kümmern uns um den monatlichen Boxprozess, damit die Bestellung einfach und stressfrei bleibt.",
    image: "/stressfreier-prozess.png",
    imageAlt: "FairPflegeBox stressfreier Bestellprozess zu Hause",
    cta: "Erfahren Sie mehr",
    href: "/ueber-uns",
  },
];

export default function Services() {
  return (
    <section className="py-20 sm:py-24 bg-[#F5F5F7]">
      <div className="container mx-auto px-6 xl:px-12 max-w-[900px]">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          {/* Tag badge */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
              <span className="w-7 h-7 rounded-lg bg-[#009CB4] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </span>
              <span className="text-sm font-semibold text-gray-800 tracking-wide">
                Unsere Dienstleistungen
              </span>
            </div>
          </div>

          <h2 className="text-[32px] sm:text-[40px] font-medium text-gray-900 mb-3 leading-tight">
            Unsere Vorteile auf einen Blick
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-lg mx-auto">
            Warum Familien FairPflegeBox für einfache, zuverlässige Pflege zu
            Hause wählen
          </p>
        </div>

        {/* ── 2 × 2 Grid — bordered cards, no fill, matches reference ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex flex-col border border-gray-200/80 rounded-[24px] p-5 sm:p-6 hover:border-gray-300 transition-colors duration-300"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden rounded-2xl mb-6 aspect-[16/11]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Body */}
              <div className="flex flex-col gap-3 flex-1 px-1">
                <h3 className="font-medium text-gray-900 text-[18px] leading-snug">
                  {service.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Outline pill CTA */}
                <div className="pt-2">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 border border-[#43358B]/30 rounded-full px-5 py-2.5 text-[13px] text-[#43358B] font-semibold hover:border-[#43358B]/60 hover:bg-[#43358B]/[0.03] transition-all duration-200"
                  >
                    {service.cta}
                    <svg
                      className="w-3.5 h-3.5 flex-shrink-0"
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
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="text-center">
          <Link
            href="/produkte"
            className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[14px] rounded-full pl-6 pr-2 py-2.5 hover:bg-[#007f95] transition-colors shadow-lg shadow-[#009CB4]/25"
          >
            Alle erkunden
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
        </div>
      </div>
    </section>
  );
}
