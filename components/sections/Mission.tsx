import Image from "next/image";
import Link from "next/link";

export default function Mission() {
  return (
    <section className="py-16 sm:py-20 bg-white" aria-label="Unsere Mission">
      <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_2fr_1.4fr] gap-6 sm:gap-8 items-start">

          {/* COL 1: Text */}
          <div className="flex flex-col justify-center lg:pt-8">
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm mb-6 w-fit">
              <span className="w-7 h-7 rounded-lg bg-[#009CB4] flex items-center justify-center flex-shrink-0">
                <Image
                  src="/our-mission-icon.png"
                  alt=""
                  width={16}
                  height={16}
                  className="object-contain brightness-0 invert"
                />
              </span>
              <span className="text-sm font-semibold text-gray-800 tracking-wide">
                Unsere Mission
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] xl:text-[42px] font-bold text-gray-900 leading-[1.1] mb-5">
              Ältere Erwachsene mit Würde, Komfort und Pflege unterstützen
            </h2>

            <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed mb-8">
              Wir setzen uns dafür ein, Senioren und ihren Familien den Zugang
              zu zuverlässiger Pflege, notwendiger Unterstützung und täglichem
              Komfort zu erleichtern.
            </p>

            <div>
              <Link
                href="/ueber-uns"
                className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[14px] rounded-full pl-6 pr-2 py-2 hover:bg-[#007f95] transition-all duration-200 shadow-lg shadow-[#009CB4]/30 active:scale-[0.97]"
              >
                Erfahren Sie mehr
                <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* COL 2: Tall center image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[3/4] w-full">
            <Image
              src="/our-mission-1.jpg"
              alt="Älteres Paar freut sich über FairPflegeBox Pflegehilfsmittel"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* COL 3: Stat card + small image */}
          <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Stat card */}
              <div className="bg-[#F5F5F7] rounded-2xl p-5 sm:p-6">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white flex items-center justify-center shadow-sm mb-4">
                  <Image
                    src="/our-mission-icon.png"
                    alt="Pflege mit Würde Symbol"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <p className="text-[36px] sm:text-[42px] font-bold text-gray-900 leading-none mb-1">
                  100%
                </p>
                <p className="text-[13px] sm:text-[14px] text-gray-500 font-medium">
                  Pflege mit Würde
                </p>
              </div>

              {/* Small image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full">
                <Image
                  src="/our-mission-2.jpg"
                  alt="Älteres Paar öffnet FairPflegeBox Lieferung zu Hause"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
