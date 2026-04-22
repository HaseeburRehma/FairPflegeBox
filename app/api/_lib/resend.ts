/**
 * Thin wrapper around the Resend HTTP API.
 * We avoid the `resend` npm package so the project stays dependency-free.
 * Docs: https://resend.com/docs/api-reference/emails/send-email
 */

type SendArgs = {
  from?: string;
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendEmail({ from, to, subject, html, replyTo }: SendArgs) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return { ok: false as const, error: "RESEND_API_KEY is not configured" };
  }

  const fromAddress =
    from || process.env.CONTACT_FROM_EMAIL || "haseebtylo@gmail.com";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromAddress,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
    // Resend sometimes takes a moment — give it time.
    cache: "no-store",
  });

  if (!res.ok) {
    let detail = "";
    try {
      detail = JSON.stringify(await res.json());
    } catch {
      detail = await res.text();
    }
    return { ok: false as const, error: `Resend ${res.status}: ${detail}` };
  }

  const data = (await res.json()) as { id?: string };
  return { ok: true as const, id: data.id };
}

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
