import Image from "next/image";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      className="py-10 sm:py-14"
      style={{ backgroundColor: "rgba(244, 245, 246, 1)" }}
    >
      <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px]">
        <div className="relative rounded-3xl overflow-hidden min-h-[420px] sm:min-h-[460px]">

          {/* Background image */}
          <Image
            src="/pflegebox-seniorin-betreuerin-garten.png"
            alt="Seniorin und Betreuerin freuen sich über FairPflegeBox im Garten"
            fill
            className="object-cover object-center"
          />

          {/* Vertical dark-green gradient from bottom — keeps top of photo clear */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(12, 32, 26, 0) 32%, rgba(12, 32, 26, 0.71) 74.04%, #0C201A 100%)",
            }}
          />

          {/* Content — anchored to the bottom, 2-col layout */}
          <div className="relative z-10 flex flex-col justify-end h-full min-h-[420px] sm:min-h-[460px] p-6 sm:p-10 lg:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-end">

              {/* Left: Heading */}
              <h2 className="text-[26px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.1]">
                Ihre Pflegebox kann<br />jeden Monat ankommen
              </h2>

              {/* Right: Description + CTA — stacked, left-aligned inside the right column */}
              <div className="flex flex-col items-start gap-5 md:max-w-[360px] md:justify-self-end">
                <p className="text-[14px] sm:text-[15px] text-white leading-relaxed">
                  Bewerben Sie sich in nur wenigen Minuten und erhalten Sie
                  essentielle Pflegeprodukte direkt nach Hause.
                </p>
                <Link
                  href="/bestellen"
                  className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[14px] rounded-full pl-6 pr-2 py-2 hover:bg-[#007f95] transition-colors shadow-lg shadow-black/30"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
