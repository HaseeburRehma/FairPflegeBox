"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ════════════════════════════════════
   DATA
   ════════════════════════════════════ */

const steps = [
  "Pflegegrad",
  "Pflegesituation",
  "Produktwahl",
  "Pers\u00f6nliche Daten",
  "Best\u00e4tigung",
];

const pflegegrade = [
  { value: "1", label: "Pflegegrad 1", desc: "Geringe Beeintr\u00e4chtigung" },
  { value: "2", label: "Pflegegrad 2", desc: "Erhebliche Beeintr\u00e4chtigung" },
  { value: "3", label: "Pflegegrad 3", desc: "Schwere Beeintr\u00e4chtigung" },
  { value: "4", label: "Pflegegrad 4", desc: "Schwerste Beeintr\u00e4chtigung" },
  { value: "5", label: "Pflegegrad 5", desc: "Schwerste Beeintr\u00e4chtigung mit besonderen Anforderungen" },
];

const situationen = [
  { value: "zuhause", label: "Pflege zu Hause", desc: "Die pflegebed\u00fcrftige Person wird zu Hause gepflegt." },
  { value: "ambulant", label: "Ambulante Pflege", desc: "Ein ambulanter Pflegedienst unterst\u00fctzt die Pflege." },
  { value: "angehoerige", label: "Pflege durch Angeh\u00f6rige", desc: "Familienangeh\u00f6rige \u00fcbernehmen die Pflege." },
  { value: "betreut", label: "Betreutes Wohnen", desc: "Die Person lebt in einer betreuten Wohneinrichtung." },
];

const produktgruppen = [
  {
    title: "Hygiene & Desinfektion",
    products: [
      {
        id: "hand-desinfektion",
        name: "Händedesinfektionsmittel",
        price: "6,50",
        image: "/products/sterillium-bottle.png",
      },
      {
        id: "hand-desinfektionstuecher",
        name: "Händedesinfektionstücher",
        price: "5,90",
        image: "/products/sterillium-home-wipes.png",
      },
      {
        id: "flaechen-desinfektion",
        name: "Flächendesinfektionsmittel",
        price: "5,90",
        image: "/products/bacillol-sensitive.png",
      },
      {
        id: "flaechen-desinfektionstuecher",
        name: "Flächendesinfektionstücher",
        price: "6,80",
        image: "/products/bacillol-sensitive.png",
      },
    ],
  },
  {
    title: "Schutzkleidung",
    products: [
      {
        id: "handschuhe",
        name: "Einmalhandschuhe (100 St\u00fcck)",
        price: "7,80",
        image: "/products/peha-soft-vinyl.png",
      },
      {
        id: "mundschutz",
        name: "Mundschutz (50 St\u00fcck)",
        price: "5,50",
        image: "/products/foliodress-mask.png",
      },
      {
        id: "schutzschuerzen",
        name: "Schutzsch\u00fcrzen (50 St\u00fcck)",
        price: "8,90",
        image: "/products/valacomfort-apron.png",
      },
    ],
  },
  {
    title: "Inkontinenz & Schutz",
    products: [
      {
        id: "bettschutz",
        name: "Bettschutzeinlagen (25 St\u00fcck)",
        price: "9,80",
        image: "/products/molicare-bed-mat.png",
      },
      {
        id: "waschbare-bettauflagen",
        name: "Waschbare Bettauflagen (1 St\u00fcck)",
        price: "0,00",
        image: "/products/washable-bedpad.png",
      },
    ],
  },
];

/* ════════════════════════════════════
   COMPONENT
   ════════════════════════════════════ */

export default function PflegepaketPage() {
  const [step, setStep] = useState(0);
  const [pflegegrad, setPflegegrad] = useState("");
  const [situation, setSituation] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    geburtsdatum: "",
    strasse: "",
    plz: "",
    stadt: "",
    pflegekasse: "",
    versicherungsnummer: "",
    email: "",
    telefon: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canNext = () => {
    if (step === 0) return pflegegrad !== "";
    if (step === 1) return situation !== "";
    if (step === 2) return selectedProducts.length > 0;
    if (step === 3)
      return (
        form.vorname &&
        form.nachname &&
        form.strasse &&
        form.plz &&
        form.stadt &&
        form.email
      );
    if (step === 4) return agreed;
    return true;
  };

  const toggleProduct = (id: string) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:border-[#009CB4] focus:ring-2 focus:ring-[#009CB4]/20 transition-all duration-200";

  const allProducts = produktgruppen.flatMap((g) => g.products);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-36 sm:pt-44 lg:pt-52 pb-24 sm:pb-32 lg:pb-40 overflow-hidden">
        {/* Background photo */}
        <Image
          src="/hero-nurse.jpg"
          alt="Älterer Herr mit FairPflegeBox im Wohnzimmer"
          fill
          priority
          className="object-cover object-top"
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
            <h1 className="text-[32px] sm:text-[42px] xl:text-[54px] font-medium text-white leading-[1.08] mb-5">
              Beantragen Sie die
              <br className="hidden sm:block" /> Pflegebox kostenlos
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/85 leading-relaxed max-w-xl mx-auto mb-7">
              Dauert weniger als 3 Minuten – wir kümmern uns um den gesamten
              Prozess
            </p>

            {/* Trust bar — teal icons on all three items */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[14px] sm:text-[15px] text-white">
              <span className="inline-flex items-center gap-2">
                <svg className="w-[18px] h-[18px] text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M1.5 13l4 4L13 9" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M9 17l1.5 1.5L22 7" />
                </svg>
                100% kostenlos
              </span>
              <span className="inline-flex items-center gap-2">
                <svg className="w-[18px] h-[18px] text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M1.5 13l4 4L13 9" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M9 17l1.5 1.5L22 7" />
                </svg>
                Datenschutz garantiert
              </span>
              <span className="inline-flex items-center gap-2">
                <svg className="w-[18px] h-[18px] text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 7v5l3 2" />
                </svg>
                Vollständig verwaltet
              </span>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-10 sm:py-16 bg-[#F5F4F8]">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">

              {/* ── Main Panel — stepper + form in two separate cards ── */}
              <div className="space-y-5">
              {/* Stepper card */}
              {!submitted && (
                <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6">
                  <div className="flex items-start">
                    {steps.map((s, i) => (
                      <div
                        key={s}
                        className={`flex items-center ${
                          i < steps.length - 1 ? "flex-1" : "flex-initial"
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[13px] font-bold transition-all duration-300 ${
                              i < step
                                ? "bg-[#009CB4] text-white"
                                : i === step
                                ? "bg-[#009CB4] text-white"
                                : "bg-gray-100 text-gray-400"
                            }`}
                          >
                            {i < step ? (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : i === step ? (
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              i + 1
                            )}
                          </div>
                          <span
                            className={`hidden sm:block text-[12px] mt-2 font-medium whitespace-nowrap ${
                              i <= step ? "text-[#009CB4]" : "text-gray-400"
                            }`}
                          >
                            {s}
                          </span>
                        </div>
                        {i < steps.length - 1 && (
                          <div
                            className={`h-[2px] flex-1 mx-2 mt-[18px] sm:mt-[-20px] transition-colors duration-300 ${
                              i < step ? "bg-[#009CB4]" : "bg-gray-200"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Form card */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-7 lg:p-8">
                {submitted ? (
                  <div className="py-10 sm:py-14 text-center">
                    <div className="w-20 h-20 rounded-full bg-[#E6F7FA] flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-[26px] sm:text-[32px] font-medium text-gray-900 mb-3">
                      Vielen Dank, {form.vorname || "wir haben Ihre Anfrage erhalten"}!
                    </h2>
                    <p className="text-[15px] text-gray-500 leading-relaxed max-w-md mx-auto mb-8">
                      Ihre Pflegebox-Anfrage wurde erfolgreich übermittelt.
                      Wir kümmern uns ab jetzt um den gesamten Antrag bei
                      Ihrer Pflegekasse und melden uns in Kürze bei Ihnen.
                    </p>
                    <div className="inline-flex items-center gap-2 text-[13px] text-gray-400 mb-8">
                      <svg className="w-4 h-4 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Eine Bestätigung haben wir an {form.email || "Ihre E-Mail-Adresse"} gesendet.
                    </div>
                    <div>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[14px] rounded-full pl-6 pr-2 py-2 hover:bg-[#007f95] transition-colors shadow-lg shadow-[#009CB4]/25"
                      >
                        Zur Startseite
                        <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                ) : (
                <>
                {/* ═══ STEP 0: Pflegegrad ═══ */}
                {step === 0 && (
                  <div>
                    <h2 className="text-[22px] sm:text-[26px] font-medium text-gray-900 mb-2">
                      Welchen Pflegegrad haben Sie?
                    </h2>
                    <p className="text-[14px] text-gray-500 leading-relaxed mb-6 sm:mb-7">
                      Ihren Pflegegrad finden Sie auf Ihrem Bescheid von der
                      Pflegekasse oder auf Ihrer Pflegeversicherungskarte.
                    </p>

                    <div className="space-y-3">
                      {pflegegrade.map((pg) => (
                        <label
                          key={pg.value}
                          className={`flex items-center gap-3.5 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                            pflegegrad === pg.value
                              ? "border-[#009CB4] bg-[#F0FAFB]"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                              pflegegrad === pg.value
                                ? "border-[#009CB4]"
                                : "border-gray-300"
                            }`}
                          >
                            {pflegegrad === pg.value && (
                              <span className="w-2.5 h-2.5 rounded-full bg-[#009CB4]" />
                            )}
                          </span>
                          <span className="text-[15px] font-medium text-gray-900">
                            {pg.label}
                          </span>
                          <input
                            type="radio"
                            name="pflegegrad"
                            value={pg.value}
                            checked={pflegegrad === pg.value}
                            onChange={() => setPflegegrad(pg.value)}
                            className="sr-only"
                          />
                        </label>
                      ))}
                    </div>

                    <div className="mt-6 bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#009CB4] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-[14px] font-semibold text-gray-900 mb-0.5">
                          Haben Sie noch keinen Pflegegrad?
                        </p>
                        <p className="text-[13px] text-gray-500 leading-relaxed">
                          Kontaktieren Sie Ihre Pflegekasse, um einen Antrag
                          auf Pflegegradfeststellung zu stellen.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ═══ STEP 1: Pflegesituation ═══ */}
                {step === 1 && (
                  <div>
                    <h2 className="text-[22px] sm:text-[26px] font-medium text-gray-900 mb-2">
                      Wie ist die Pflegesituation?
                    </h2>
                    <p className="text-[14px] text-gray-500 leading-relaxed mb-6 sm:mb-7">
                      Wählen Sie die Situation, die aktuell auf die
                      pflegebedürftige Person zutrifft.
                    </p>

                    <div className="space-y-3">
                      {situationen.map((s) => (
                        <label
                          key={s.value}
                          className={`flex items-center gap-3.5 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                            situation === s.value
                              ? "border-[#009CB4] bg-[#F0FAFB]"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                              situation === s.value
                                ? "border-[#009CB4]"
                                : "border-gray-300"
                            }`}
                          >
                            {situation === s.value && (
                              <span className="w-2.5 h-2.5 rounded-full bg-[#009CB4]" />
                            )}
                          </span>
                          <span className="text-[15px] font-medium text-gray-900">
                            {s.label}
                          </span>
                          <input
                            type="radio"
                            name="situation"
                            value={s.value}
                            checked={situation === s.value}
                            onChange={() => setSituation(s.value)}
                            className="sr-only"
                          />
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* ═══ STEP 2: Produktwahl ═══ */}
                {step === 2 && (
                  <div>
                    <h2 className="text-[22px] sm:text-[26px] font-medium text-gray-900 mb-2">
                      W{"\u00e4"}hlen Sie Ihre Produkte aus
                    </h2>
                    <p className="text-[14px] text-gray-500 mb-6 sm:mb-7">
                      Passen Sie Ihr monatliches Pflegepaket an (bis zu 42 {"\u20ac"}
                      pro Monat).
                    </p>

                    <div className="space-y-4">
                      {produktgruppen.map((group, gi) => {
                        const icon =
                          gi === 0 ? (
                            <svg className="w-4 h-4 text-[#43358B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          ) : gi === 1 ? (
                            <svg className="w-4 h-4 text-[#43358B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 text-[#43358B]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                          );
                        return (
                          <div
                            key={group.title}
                            className="border border-gray-200 rounded-2xl p-5 sm:p-6"
                          >
                            <div className="flex items-center gap-2.5 mb-4">
                              <span className="w-8 h-8 rounded-lg bg-[#EFE9FA] flex items-center justify-center flex-shrink-0">
                                {icon}
                              </span>
                              <h3 className="text-[15px] font-medium text-gray-900">
                                {group.title}
                              </h3>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {group.products.map((p) => (
                                <label
                                  key={p.id}
                                  className={`flex items-center gap-3 px-3 py-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                                    selectedProducts.includes(p.id)
                                      ? "border-[#009CB4] bg-[#F0FAFB]"
                                      : "border-gray-200 hover:border-gray-300"
                                  }`}
                                >
                                  {/* Checkbox */}
                                  <span
                                    className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors ${
                                      selectedProducts.includes(p.id)
                                        ? "border-[#009CB4] bg-[#009CB4]"
                                        : "border-gray-300"
                                    }`}
                                  >
                                    {selectedProducts.includes(p.id) && (
                                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                      </svg>
                                    )}
                                  </span>

                                  {/* Product thumbnail */}
                                  <span className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                    <Image
                                      src={p.image}
                                      alt={p.name}
                                      fill
                                      sizes="64px"
                                      quality={95}
                                      className="object-cover object-center"
                                    />
                                  </span>

                                  {/* Name */}
                                  <span className="text-[14px] font-medium text-gray-900 truncate flex-1">
                                    {p.name.replace(/\s*\([^)]*\)\s*/g, "")}
                                  </span>

                                  <input
                                    type="checkbox"
                                    checked={selectedProducts.includes(p.id)}
                                    onChange={() => toggleProduct(p.id)}
                                    className="sr-only"
                                  />
                                </label>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ═══ STEP 3: Personal Data ═══ */}
                {step === 3 && (
                  <div>
                    <h2 className="text-[20px] sm:text-[24px] font-medium text-gray-900 mb-2">
                      Personenbezogene Daten
                    </h2>
                    <p className="text-[14px] text-gray-500 mb-6">
                      Bitte geben Sie die Daten der pflegebed{"\u00fc"}rftigen Person
                      ein.
                    </p>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                            Vorname *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Vorname"
                            value={form.vorname}
                            onChange={(e) =>
                              setForm({ ...form, vorname: e.target.value })
                            }
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                            Nachname *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Nachname"
                            value={form.nachname}
                            onChange={(e) =>
                              setForm({ ...form, nachname: e.target.value })
                            }
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                          Geburtsdatum
                        </label>
                        <input
                          type="date"
                          value={form.geburtsdatum}
                          onChange={(e) =>
                            setForm({ ...form, geburtsdatum: e.target.value })
                          }
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                          Stra{"\u00df"}e &amp; Hausnummer *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Stra\u00dfe und Hausnummer"
                          value={form.strasse}
                          onChange={(e) =>
                            setForm({ ...form, strasse: e.target.value })
                          }
                          className={inputClass}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                            PLZ *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="PLZ"
                            value={form.plz}
                            onChange={(e) =>
                              setForm({ ...form, plz: e.target.value })
                            }
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                            Stadt *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Stadt"
                            value={form.stadt}
                            onChange={(e) =>
                              setForm({ ...form, stadt: e.target.value })
                            }
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                            Pflegekasse
                          </label>
                          <input
                            type="text"
                            placeholder="Name der Pflegekasse"
                            value={form.pflegekasse}
                            onChange={(e) =>
                              setForm({ ...form, pflegekasse: e.target.value })
                            }
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                            Versicherungsnummer
                          </label>
                          <input
                            type="text"
                            placeholder="Versicherungsnummer"
                            value={form.versicherungsnummer}
                            onChange={(e) =>
                              setForm({
                                ...form,
                                versicherungsnummer: e.target.value,
                              })
                            }
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                            E-Mail *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="ihre@email.de"
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                            Telefon
                          </label>
                          <input
                            type="tel"
                            placeholder="Telefonnummer"
                            value={form.telefon}
                            onChange={(e) =>
                              setForm({ ...form, telefon: e.target.value })
                            }
                            className={inputClass}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ═══ STEP 4: Confirmation ═══ */}
                {step === 4 && (
                  <div>
                    <h2 className="text-[20px] sm:text-[24px] font-medium text-gray-900 mb-2">
                      Zusammenfassung &amp; Best{"\u00e4"}tigung
                    </h2>
                    <p className="text-[14px] text-gray-500 mb-6">
                      Bitte {"\u00fc"}berpr{"\u00fc"}fen Sie Ihre Angaben.
                    </p>

                    <div className="space-y-5">
                      {/* Summary cards */}
                      <div className="bg-[#F5F4F8] rounded-xl p-5">
                        <h3 className="text-[13px] font-semibold text-gray-500 mb-2">
                          Pflegegrad
                        </h3>
                        <p className="text-[15px] font-bold text-gray-900">
                          Pflegegrad {pflegegrad}
                        </p>
                      </div>

                      <div className="bg-[#F5F4F8] rounded-xl p-5">
                        <h3 className="text-[13px] font-semibold text-gray-500 mb-2">
                          Pflegesituation
                        </h3>
                        <p className="text-[15px] font-bold text-gray-900">
                          {situationen.find((s) => s.value === situation)?.label || "\u2013"}
                        </p>
                      </div>

                      <div className="bg-[#F5F4F8] rounded-xl p-5">
                        <h3 className="text-[13px] font-semibold text-gray-500 mb-3">
                          Gew{"\u00e4"}hlte Produkte
                        </h3>
                        <div className="space-y-1.5">
                          {selectedProducts.map((id) => {
                            const prod = allProducts.find((p) => p.id === id);
                            return prod ? (
                              <div key={id} className="flex justify-between text-[14px]">
                                <span className="text-gray-700">{prod.name}</span>
                                <span className="font-semibold text-gray-900">{prod.price} {"\u20ac"}</span>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>

                      <div className="bg-[#F5F4F8] rounded-xl p-5">
                        <h3 className="text-[13px] font-semibold text-gray-500 mb-2">
                          Pers{"\u00f6"}nliche Daten
                        </h3>
                        <p className="text-[14px] text-gray-700">
                          {form.vorname} {form.nachname}
                        </p>
                        <p className="text-[14px] text-gray-700">
                          {form.strasse}, {form.plz} {form.stadt}
                        </p>
                        <p className="text-[14px] text-gray-700">{form.email}</p>
                      </div>

                      {/* Agreement */}
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={agreed}
                          onChange={() => setAgreed(!agreed)}
                          className="w-4 h-4 mt-0.5 text-[#009CB4] border-gray-300 rounded focus:ring-[#009CB4]"
                        />
                        <span className="text-[13px] text-gray-500 leading-relaxed">
                          Ich best{"\u00e4"}tige die Richtigkeit meiner Angaben und
                          stimme der Verarbeitung meiner Daten gem{"\u00e4"}{"\u00df"} der{" "}
                          <Link href="/pflichtangaben" className="text-[#009CB4] hover:underline">
                            Datenschutzerkl{"\u00e4"}rung
                          </Link>{" "}
                          zu. Ich beauftrage FairPflegeBox, den Antrag bei meiner
                          Pflegekasse einzureichen. *
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* ── Navigation Buttons ── */}
                <div className="flex flex-row items-center justify-between gap-3 mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-gray-100">
                  {step > 0 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="inline-flex items-center gap-3 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-semibold text-[14px] rounded-full pl-1.5 pr-5 py-1.5"
                    >
                      <span className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                      </span>
                      Zur{"\u00fc"}ck
                    </button>
                  ) : (
                    <span />
                  )}

                  {step < 4 ? (
                    <button
                      disabled={!canNext()}
                      onClick={() => setStep(step + 1)}
                      className={`inline-flex items-center gap-3 font-semibold text-[14px] rounded-full pl-6 pr-2 py-2 transition-all duration-200 active:scale-[0.97] ${
                        canNext()
                          ? "bg-[#009CB4] text-white shadow-lg shadow-[#009CB4]/30 hover:bg-[#007f95]"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      Weiter
                      <span
                        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                          canNext() ? "bg-white" : "bg-gray-100"
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 ${canNext() ? "text-[#009CB4]" : "text-gray-400"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  ) : (
                    <button
                      disabled={!agreed}
                      onClick={() => {
                        if (agreed) setSubmitted(true);
                      }}
                      className={`inline-flex items-center gap-3 font-semibold text-[14px] rounded-full pl-6 pr-2 py-2.5 transition-all duration-200 active:scale-[0.97] ${
                        agreed
                          ? "bg-[#009CB4] text-white shadow-lg shadow-[#009CB4]/30 hover:bg-[#007f95]"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      Jetzt bestellen
                      <span
                        className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                          agreed ? "bg-white" : "bg-gray-100"
                        }`}
                      >
                        <svg
                          className={`w-4 h-4 ${agreed ? "text-[#009CB4]" : "text-gray-400"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    </button>
                  )}
                </div>
                </>
                )}
              </div>
              </div>

              {/* ── Sidebar — Leistungen + SSL ── */}
              <div className="space-y-5">
                {/* Purple Leistungen card */}
                <div className="bg-[#43358B] rounded-[20px] p-7 text-white">
                  <h3 className="text-[24px] font-medium mb-6">Ihre Leistungen</h3>
                  <div className="space-y-5">
                    {[
                      {
                        title: "Bis zu 42 \u20ac kostenlos",
                        desc: "Monatliche Pflegehilfsmittel ohne Eigenanteil",
                        icon: (
                          <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M1.5 13l4 4L13 9" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M9 17l1.5 1.5L22 7" />
                          </svg>
                        ),
                      },
                      {
                        title: "Antrag in 3 Minuten",
                        desc: "Einfach, schnell und digital",
                        icon: (
                          <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="9" strokeWidth={1.8} />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 7v5l3 2" />
                          </svg>
                        ),
                      },
                      {
                        title: "Vollst\u00e4ndig verwaltet",
                        desc: "Wir \u00fcbernehmen die Abwicklung mit der Pflegekasse",
                        icon: (
                          <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        ),
                      },
                    ].map((v) => (
                      <div key={v.title} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                          {v.icon}
                        </div>
                        <div className="flex-1 pt-0.5">
                          <p className="text-[17px] font-bold leading-tight">
                            {v.title}
                          </p>
                          <p className="text-[13px] text-white/70 leading-relaxed mt-1">
                            {v.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Divider + phone */}
                  <div className="mt-7 pt-6 border-t border-white/10">
                    <p className="text-[13px] text-white/70 mb-3">
                      Haben Sie noch Fragen? Wir helfen Ihnen gerne
                    </p>
                    <a
                      href="tel:+4917695554394"
                      className="text-[18px] font-bold flex items-center gap-2.5 mb-1 hover:text-[#FF6B4A] transition-colors"
                    >
                      <svg className="w-5 h-5 text-[#FF6B4A]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                      </svg>
                      +49 176 95554394
                    </a>
                    <a
                      href="mailto:info@fairpflegebox.de"
                      className="text-[12px] text-white/55 hover:text-white transition-colors"
                    >
                      info@fairpflegebox.de
                    </a>
                  </div>
                </div>

                {/* SSL card */}
                <div className="bg-white border border-gray-100 rounded-[20px] p-6">
                  <div className="flex items-center gap-3 mb-2.5">
                    <svg
                      className="w-[22px] h-[22px] text-[#009CB4] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.7}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <p className="text-[17px] font-bold text-gray-900">
                      Sicher &amp; vertraulich
                    </p>
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    Ihre Daten werden verschl{"\u00fc"}sselt {"\u00fc"}ber SSL
                    {"\u00fc"}bertragen und ausschlie{"\u00df"}lich zur Bearbeitung
                    Ihres Antrags verwendet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
