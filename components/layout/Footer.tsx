"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import TypingCredit from "@/components/ui/TypingCredit";

const navColumns = [
  {
    title: "Unternehmen",
    links: [
      { label: "Startseite", href: "/" },
      { label: "Pflegebox", href: "/pflegepaket" },
      { label: "Produkte", href: "/produkte" },
      { label: "Pflegebedarf", href: "/pflegebedarf" },
      { label: "So funktioniert", href: "/so-funktioniert-es" },
      { label: "Jetzt bewerben", href: "/jetzt-bewerben" },
    ],
  },
  {
    title: "Über uns",
    links: [
      { label: "Häufige Fragen", href: "/haeufige-fragen" },
      { label: "Berechtigung", href: "/pflegebedarf" },
      { label: "Pflichtangaben", href: "/pflichtangaben" },
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Unterst\u00fctzung", href: "/jetzt-bewerben" },
    ],
  },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "X", href: "https://x.com" },
  { label: "Linkedin", href: "https://linkedin.com" },
];

const cardClass =
  "bg-[#16143A] border border-white/[0.12] rounded-2xl";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleNewsletter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Anmeldung fehlgeschlagen.");
      } else {
        setStatus("success");
        setEmail("");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Netzwerkfehler. Bitte erneut versuchen.");
    }
  };

  return (
    <footer className="bg-[#0A0820] text-white" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 xl:px-10 max-w-[1280px] pt-10 sm:pt-14 pb-8">

        {/* ══════ TOP ROW: Newsletter card + Nav/Contact card ══════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-4 mb-4">

          {/* ── Card 1: Newsletter ── */}
          <div className={`${cardClass} p-6 sm:p-8 flex flex-col justify-between`}>
            <div>
              <h3 className="text-[24px] sm:text-[28px] font-medium text-white leading-snug mb-3">
                Bleiben Sie mit uns verbunden
              </h3>
              <p className="text-[13px] text-white/60 leading-relaxed mb-8">
                Erhalten Sie Geschichten, Updates und
                echte Impact-Berichte direkt in Ihr Postfach.
              </p>
            </div>

            {/* Email input */}
            <form
              onSubmit={handleNewsletter}
              className="flex items-center bg-white/[0.08] border border-white/[0.14] rounded-full pl-4 pr-1.5 py-1.5"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "submitting" || status === "success"}
                placeholder="Ihre E-Mail-Adresse"
                aria-label="E-Mail-Adresse für Newsletter"
                className="flex-1 bg-transparent text-[13px] text-white placeholder-white/40 outline-none min-w-0 py-1 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                aria-label="Newsletter abonnieren"
                className="w-10 h-10 rounded-full bg-[#009CB4] flex items-center justify-center flex-shrink-0 hover:bg-[#007f95] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <svg className="w-4 h-4 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2.5} className="opacity-30" />
                    <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" />
                  </svg>
                ) : status === "success" ? (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
            {status === "success" && (
              <p className="text-[12px] text-[#6EE7B7] mt-3">
                Vielen Dank! Ihre Anmeldung ist eingegangen.
              </p>
            )}
            {status === "error" && errorMsg && (
              <p className="text-[12px] text-red-300 mt-3">{errorMsg}</p>
            )}
          </div>

          {/* ── Card 2: Nav columns + Contact ── */}
          <div className={`${cardClass} p-6 sm:p-8`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Nav columns */}
              {navColumns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-[13px] font-semibold text-white/70 uppercase tracking-wider mb-5">
                    {col.title}
                  </h4>
                  <ul className="space-y-3">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[13px] text-white/75 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Contact column */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-[13px] font-semibold text-white/70 uppercase tracking-wider mb-5">
                  Kontakt
                </h4>
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/[0.10] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <span className="text-[13px] text-white/75 leading-relaxed">
                      FairPflegeBox GbR, Reisholzer Werftstraße&nbsp;76,
                      40589&nbsp;Düsseldorf, Deutschland
                    </span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/[0.10] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <Link
                      href="tel:+4917695554394"
                      className="text-[13px] text-white/75 hover:text-white transition-colors"
                    >
                      +49 176 95554394
                    </Link>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/[0.10] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <Link
                      href="mailto:info@fairpflegebox.de"
                      className="text-[13px] text-white/75 hover:text-white transition-colors break-all"
                    >
                      info@fairpflegebox.de
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════ BOTTOM ROW: Logo card + Social card ══════ */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4 mb-6">

          {/* ── Card 3: Logo ── */}
          <div className={`${cardClass} p-10 sm:p-12 flex items-center justify-center min-h-[280px] sm:min-h-[320px]`}>
            <Image
              src="/footer-logo.png"
              alt="FairPflegeBox Logo – Pflegehilfsmittel einfach und fair"
              width={821}
              height={600}
              className="w-[280px] sm:w-[340px] lg:w-[380px] h-auto object-contain opacity-95 drop-shadow-[0_8px_24px_rgba(67,53,139,0.35)]"
              unoptimized
            />
          </div>

          {/* ── Card 4: Social links ── */}
          <div className={`${cardClass} p-6 sm:p-8 flex flex-col justify-center`}>
            {socials.map((s, i) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between py-4 group ${
                  i < socials.length - 1
                    ? "border-b border-white/[0.10]"
                    : ""
                }`}
              >
                <span className="text-[15px] font-medium text-white/80 group-hover:text-white transition-colors duration-200">
                  {s.label}
                </span>
                <svg
                  className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* ══════ COPYRIGHT ══════ */}
        <div className="pt-4 text-center">
          <p className="text-[12px] text-white/40">
            © {new Date().getFullYear()} FairPflegeBox. Alle Rechte vorbehalten.
          </p>
        </div>

        {/* ══════ TYPING CREDIT ══════ */}
        <div className="pt-5">
          <TypingCredit />
        </div>
      </div>
    </footer>
  );
}
