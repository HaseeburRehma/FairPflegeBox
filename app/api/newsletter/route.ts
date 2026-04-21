import { NextResponse } from "next/server";
import { escapeHtml, sendEmail } from "../_lib/resend";

export const runtime = "nodejs";

type NewsletterBody = { email?: string };

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: NewsletterBody;
  try {
    body = (await request.json()) as NewsletterBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  const email = (body.email || "").trim();
  if (!email || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    return NextResponse.json(
      { ok: false, error: "Server ist nicht konfiguriert (CONTACT_TO_EMAIL fehlt)." },
      { status: 500 }
    );
  }

  const html = `
    <div style="font-family:Onest,Arial,sans-serif;color:#1a1a2e;max-width:520px;margin:0 auto;padding:24px;">
      <h2 style="color:#43358B;margin:0 0 12px;">Neue Newsletter-Anmeldung</h2>
      <p style="font-size:14px;color:#4b5563;margin:0;">
        Folgende E-Mail-Adresse hat sich für den FairPflegeBox-Newsletter angemeldet:
      </p>
      <p style="font-size:16px;font-weight:700;color:#43358B;background:#F5F4F8;border-radius:10px;padding:12px 14px;margin:16px 0;">
        ${escapeHtml(email)}
      </p>
      <p style="color:#9ca3af;font-size:11px;margin-top:24px;">Gesendet über das FairPflegeBox-Newsletter-Formular im Footer.</p>
    </div>
  `;

  const result = await sendEmail({
    to,
    subject: "Newsletter-Anmeldung · FairPflegeBox",
    html,
    replyTo: email,
  });

  if (!result.ok) {
    console.error("[newsletter] resend error:", result.error);
    return NextResponse.json(
      { ok: false, error: "Anmeldung fehlgeschlagen. Bitte später erneut versuchen." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
