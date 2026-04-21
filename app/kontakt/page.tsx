"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactMethods = [
  {
    title: "Telefon",
    value: "0800 123 456 78",
    subtitle: "Kostenlos erreichbar",
    icon: (
      <svg className="w-5 h-5 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "E-Mail",
    value: "info@fairpflegebox.de",
    subtitle: "Antwort innerhalb von 24h",
    icon: (
      <svg className="w-5 h-5 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Kontaktformular",
    value: "Jetzt ausf\u00fcllen",
    subtitle: "Schnell und unkompliziert",
    icon: (
      <svg className="w-5 h-5 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Postanschrift",
    value: "FairPflegebox GmbH",
    subtitle: "Musterstra\u00dfe 10, 10115 Berlin",
    icon: (
      <svg className="w-5 h-5 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      anrede: String(data.get("anrede") || ""),
      firstName: String(data.get("firstName") || ""),
      lastName: String(data.get("lastName") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      subject: String(data.get("subject") || ""),
      message: String(data.get("message") || ""),
      consent: data.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setErrorMsg(json.error || "Nachricht konnte nicht gesendet werden.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setErrorMsg("Netzwerkfehler. Bitte überprüfen Sie Ihre Verbindung.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-900 placeholder-gray-400 outline-none focus:border-[#009CB4] focus:ring-2 focus:ring-[#009CB4]/20 transition-all duration-200";

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-[#43358B] pt-32 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#43358B] to-[#352878] opacity-90" />
        <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px] relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-7 h-7 rounded-lg bg-[#009CB4] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-sm font-semibold text-white tracking-wide">
                Kontakt
              </span>
            </div>
            <h1 className="text-[32px] sm:text-[42px] xl:text-[52px] font-bold text-white leading-[1.1] mb-5">
              Wir sind f{"\u00fc"}r Sie da
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/70 leading-relaxed max-w-xl">
              Haben Sie Fragen zu unseren Pflegehilfsmitteln oder Ihrer
              Bestellung? Kontaktieren Sie uns {"\u2013"} wir helfen Ihnen gerne.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <ScrollReveal>
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1280px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
              {contactMethods.map((m) => (
                <div
                  key={m.title}
                  className="bg-[#F5F4F8] rounded-2xl p-5 sm:p-6"
                >
                  <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm mb-4">
                    {m.icon}
                  </div>
                  <h3 className="text-[14px] font-bold text-gray-900 mb-1">
                    {m.title}
                  </h3>
                  <p className="text-[14px] font-semibold text-[#009CB4] mb-0.5">
                    {m.value}
                  </p>
                  <p className="text-[12px] text-gray-400">{m.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-[26px] sm:text-[34px] font-bold text-gray-900 leading-[1.1] mb-3">
                  Schreiben Sie uns
                </h2>
                <p className="text-[14px] text-gray-500">
                  F{"\u00fc"}llen Sie das Formular aus und wir melden uns
                  schnellstm{"\u00f6"}glich bei Ihnen.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#F0FAFB] border border-[#009CB4]/15 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#009CB4] flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[20px] font-bold text-gray-900 mb-2">
                    Nachricht gesendet!
                  </h3>
                  <p className="text-[14px] text-gray-500">
                    Vielen Dank f{"\u00fc"}r Ihre Nachricht. Wir werden uns
                    innerhalb von 24 Stunden bei Ihnen melden.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-[0_2px_16px_rgba(67,53,139,0.06)]"
                >
                  {/* Anrede */}
                  <div className="mb-5">
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                      Anrede
                    </label>
                    <div className="flex gap-3">
                      {["Herr", "Frau", "Divers"].map((a) => (
                        <label
                          key={a}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="anrede"
                            value={a}
                            className="w-4 h-4 text-[#009CB4] border-gray-300 focus:ring-[#009CB4]"
                          />
                          <span className="text-[14px] text-gray-700">
                            {a}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                        Vorname *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        placeholder="Ihr Vorname"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                        Nachname *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        placeholder="Ihr Nachname"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="ihre@email.de"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Ihre Telefonnummer"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Betreff */}
                  <div className="mb-5">
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                      Betreff *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Worum geht es?"
                      className={inputClass}
                    />
                  </div>

                  {/* Nachricht */}
                  <div className="mb-5">
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                      Nachricht *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Ihre Nachricht an uns..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Datenschutz */}
                  <div className="mb-6">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        className="w-4 h-4 mt-0.5 text-[#009CB4] border-gray-300 rounded focus:ring-[#009CB4]"
                      />
                      <span className="text-[13px] text-gray-500 leading-relaxed">
                        Ich stimme der Verarbeitung meiner Daten gem{"\u00e4"}{"\u00df"}{" "}
                        der{" "}
                        <Link
                          href="/datenschutz"
                          className="text-[#009CB4] hover:underline"
                        >
                          Datenschutzerkl{"\u00e4"}rung
                        </Link>{" "}
                        zu. *
                      </span>
                    </label>
                  </div>

                  {/* Error banner */}
                  {errorMsg && (
                    <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-[13px] text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-3 bg-[#009CB4] text-white font-semibold text-[14px] rounded-full pl-6 pr-2 py-2.5 hover:bg-[#007f95] transition-all duration-200 shadow-lg shadow-[#009CB4]/30 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Wird gesendet…" : "Nachricht senden"}
                    <span className="w-9 h-9 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#009CB4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>

                  {/* DSGVO note */}
                  <div className="mt-6 flex items-center gap-2.5 text-[12px] text-gray-400">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>
                      SSL-verschl{"\u00fc"}sselt &amp; DSGVO-konform. Ihre Daten
                      sind bei uns sicher.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
