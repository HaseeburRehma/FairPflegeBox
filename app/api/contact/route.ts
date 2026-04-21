import { NextResponse } from "next/server";
import { escapeHtml, sendEmail } from "../_lib/resend";

export const runtime = "nodejs";

type ContactBody = {
  anrede?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  consent?: boolean;
};

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  const firstName = (body.firstName || "").trim();
  const lastName = (body.lastName || "").trim();
  const email = (body.email || "").trim();
  const subject = (body.subject || "").trim();
  const message = (body.message || "").trim();
  const phone = (body.phone || "").trim();
  const anrede = (body.anrede || "").trim();
  const consent = Boolean(body.consent);

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json(
      { ok: false, error: "Bitte füllen Sie alle Pflichtfelder aus." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
      { status: 400 }
    );
  }
  if (!consent) {
    return NextResponse.json(
      { ok: false, error: "Bitte akzeptieren Sie die Datenschutzerklärung." },
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
    <div style="font-family:Onest,Arial,sans-serif;color:#1a1a2e;max-width:560px;margin:0 auto;padding:24px;">
      <h2 style="color:#43358B;margin:0 0 16px;">Neue Kontaktanfrage</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;">
        <tr><td style="padding:6px 0;color:#6b7280;width:130px;">Anrede</td><td>${escapeHtml(anrede) || "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280;">Name</td><td>${escapeHtml(firstName)} ${escapeHtml(lastName)}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280;">E-Mail</td><td><a href="mailto:${escapeHtml(email)}" style="color:#009CB4;">${escapeHtml(email)}</a></td></tr>
        <tr><td style="padding:6px 0;color:#6b7280;">Telefon</td><td>${escapeHtml(phone) || "—"}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280;">Betreff</td><td>${escapeHtml(subject)}</td></tr>
      </table>
      <h3 style="color:#43358B;margin:24px 0 8px;font-size:15px;">Nachricht</h3>
      <div style="white-space:pre-wrap;background:#F5F4F8;border-radius:12px;padding:16px;font-size:14px;line-height:1.55;">${escapeHtml(message)}</div>
      <p style="color:#9ca3af;font-size:11px;margin-top:24px;">Gesendet über das FairPflegeBox-Kontaktformular.</p>
    </div>
  `;

  const result = await sendEmail({
    to,
    subject: `Kontaktanfrage: ${subject}`,
    html,
    replyTo: email,
  });

  if (!result.ok) {
    console.error("[contact] resend error:", result.error);
    return NextResponse.json(
      { ok: false, error: "E-Mail konnte nicht gesendet werden. Bitte später erneut versuchen." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
