
import nodemailer, { type Transporter } from "nodemailer";

type SendArgs = {
  from?: string;
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
};

/** Lazily created so dev-hot-reload doesn't open dozens of SMTP pools. */
let cachedTransporter: Transporter | null = null;

function getTransporter(): Transporter | null {
  if (cachedTransporter) return cachedTransporter;

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (!host || !user || !pass) {
    return null;
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },

    tls: { minVersion: "TLSv1.2" },
  });

  return cachedTransporter;
}

export async function sendEmail({
  from,
  to,
  subject,
  html,
  replyTo,
}: SendArgs) {
  const transporter = getTransporter();

  if (!transporter) {
    return {
      ok: false as const,
      error:
        "SMTP is not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASSWORD in .env.local.",
    };
  }

  // Resolution order for the "From" address:
  //   1) explicit arg
  //   2) CONTACT_FROM_EMAIL env var
  //   3) fall back to the SMTP user
  const fromAddress =
    from ||
    process.env.CONTACT_FROM_EMAIL ||
    process.env.SMTP_USER ||
    "info@fairpflegebox.de";

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      ...(replyTo ? { replyTo } : {}),
    });

    return { ok: true as const, id: info.messageId };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false as const, error: `SMTP send failed: ${message}` };
  }
}

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
