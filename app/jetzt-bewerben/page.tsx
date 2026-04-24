"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ════════════════════════════════════
   CONTACT METHOD CARDS
   ════════════════════════════════════ */

type Method = {
  title: string;
  subtitle: string;
  value: string;
  note: string;
  icon: ReactNode;
  highlight?: "teal" | "dark";
  /** If set, the value becomes a clickable link (tel: / mailto: / https:) */
  href?: string;
};

const contactMethods: Method[] = [
  {
    title: "Telefon",
    subtitle: "Direkter Kontakt",
    value: "+49 176 95554394",
    note: "Rückruf auf Wunsch möglich",
    highlight: "teal",
    href: "tel:+4917695554394",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "E-Mail",
    subtitle: "Schreiben Sie uns",
    value: "info@fairpflegebox.de",
    note: "Antwort innerhalb von 24 Stunden.",
    highlight: "teal",
    href: "mailto:info@fairpflegebox.de",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Kontaktformular",
    subtitle: "Verwenden Sie das Formular",
    value: "Unten auf der Seite",
    note: "Sicher & Verschlüsselt",
    highlight: "teal",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: "Postanschrift",
    subtitle: "Schriftlicher Kontakt",
    value: "FairPflegeBox GbR",
    note: "Reisholzer Werftstraße 76\n40589 Düsseldorf",
    highlight: "dark",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.6}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

/* ════════════════════════════════════
   PAGE
   ════════════════════════════════════ */

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
      {/* ══════ HERO ══════ */}
      <section className="relative pt-36 sm:pt-44 lg:pt-52 pb-24 sm:pb-32 lg:pb-40 overflow-hidden">
        <Image
          src="/hero-nurse.jpg"
          alt="Älterer Herr mit FairPflegeBox im Wohnzimmer"
          fill
          priority
          className="object-cover object-top"
        />
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
            <h1 className="text-[32px] sm:text-[44px] xl:text-[56px] font-medium text-white leading-[1.08] mb-5">
              Jetzt bewerben
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/85 leading-relaxed max-w-xl mx-auto mb-7">
              Sichern Sie sich Ihre kostenlose FairPflegeBox. Füllen Sie das
              Formular aus und wir kümmern uns um den Rest – per Telefon,
              E-Mail oder direkt online.
            </p>

            <div className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-5 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
              <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[14px] font-medium text-white">
                Antwort innerhalb von 24 Stunden
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ SCHREIBEN SIE UNS — contact form ══════ */}
      <ScrollReveal>
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[900px]">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] font-medium text-gray-900 leading-[1.1] mb-3">
                Schreiben Sie uns
              </h2>
              <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed max-w-md mx-auto">
                Füllen Sie das Formular aus und wir werden uns so schnell wie
                möglich bei Ihnen melden.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#F0FAFB] border border-[#009CB4]/20 rounded-2xl p-8 sm:p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#009CB4] flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-medium text-gray-900 mb-2">
                  Nachricht gesendet!
                </h3>
                <p className="text-[14px] text-gray-500 max-w-md mx-auto">
                  Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von
                  24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_2px_16px_rgba(67,53,139,0.04)]"
              >
                {/* Anrede */}
                <div className="mb-6">
                  <label className="block text-[13px] font-semibold text-gray-700 mb-3">
                    Anrede *
                  </label>
                  <div className="flex flex-wrap gap-5">
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
                        <span className="text-[14px] text-gray-700">{a}</span>
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
                      E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="ihre.email@beispiel.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                      Telefon (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="0123 456789"
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
                    placeholder="Worüber geht es?"
                    className={inputClass}
                  />
                </div>

                {/* Nachricht */}
                <div className="mb-6">
                  <label className="block text-[13px] font-semibold text-gray-700 mb-2">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Beschreiben Sie Ihr Anliegen…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Consent */}
                <div className="mb-6 bg-[#F5F4F8] border border-gray-100 rounded-xl p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="w-4 h-4 mt-0.5 text-[#009CB4] border-gray-300 rounded focus:ring-[#009CB4]"
                    />
                    <span className="text-[13px] text-gray-600 leading-relaxed">
                      Ich habe die{" "}
                      <Link href="/pflichtangaben" className="text-[#009CB4] hover:underline">
                        Datenschutzrichtlinie
                      </Link>{" "}
                      gelesen. Ich stimme zu, dass meine Informationen für
                      Kontakt- und Folgefragen gespeichert werden. *
                    </span>
                  </label>
                </div>

                {errorMsg && (
                  <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-[13px] text-red-700">
                    {errorMsg}
                  </div>
                )}

                {/* Submit + Pflichtfelder */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2.5 bg-[#009CB4] text-white font-semibold text-[14px] rounded-full px-6 py-3 hover:bg-[#007f95] transition-all duration-200 shadow-lg shadow-[#009CB4]/30 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    {submitting ? "Wird gesendet…" : "Nachricht senden"}
                  </button>
                  <span className="text-[12px] text-gray-400">* Pflichtfelder</span>
                </div>
              </form>
            )}

            {/* SSL notice */}
            <div className="mt-6 bg-white border border-[#009CB4]/20 rounded-2xl p-5 flex items-start gap-3">
              <svg className="w-5 h-5 text-[#009CB4] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Ihre Daten sind sicher:</strong>{" "}
                Alle Informationen werden über SSL-Verschlüsselung übertragen
                und gemäß der DSGVO verarbeitet.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════ 4 CONTACT METHOD CARDS ══════ */}
      <ScrollReveal>
        <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-5 sm:px-6 xl:px-12 max-w-[1200px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {contactMethods.map((m) => (
                <div
                  key={m.title}
                  className="border border-gray-200 rounded-2xl p-6 sm:p-7 text-center hover:border-gray-300 transition-colors"
                >
                  <span className="w-12 h-12 rounded-2xl bg-[#EFE9FA] flex items-center justify-center mx-auto mb-5">
                    <span className="w-[22px] h-[22px] text-[#43358B]">
                      {m.icon}
                    </span>
                  </span>
                  <h3 className="text-[16px] font-medium text-gray-900 mb-1.5">
                    {m.title}
                  </h3>
                  <p className="text-[12.5px] text-gray-500 mb-2">
                    {m.subtitle}
                  </p>
                  {m.href ? (
                    <a
                      href={m.href}
                      className={`block text-[14px] font-bold mb-1.5 hover:underline underline-offset-2 ${
                        m.highlight === "teal"
                          ? "text-[#009CB4]"
                          : "text-gray-900"
                      }`}
                    >
                      {m.value}
                    </a>
                  ) : (
                    <p
                      className={`text-[14px] font-bold mb-1.5 ${
                        m.highlight === "teal"
                          ? "text-[#009CB4]"
                          : "text-gray-900"
                      }`}
                    >
                      {m.value}
                    </p>
                  )}
                  <p className="text-[12px] text-gray-400 whitespace-pre-line leading-relaxed">
                    {m.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
