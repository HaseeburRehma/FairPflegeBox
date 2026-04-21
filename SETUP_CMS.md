# FairPflegeBox · CMS Setup Guide

This project now supports a full WordPress-like content editing experience through **Sanity**, a headless CMS. Your client signs in at `fairpflegebox.de/studio` and edits text, images and lists in a friendly UI — no developer required.

## 1 · Install dependencies

The Sanity packages were added to `package.json` but haven't been installed yet. From the project root:

```bash
npm install
```

This pulls in `sanity`, `next-sanity`, `@sanity/image-url`, `@sanity/vision`, `styled-components`, and `@portabletext/react`.

## 2 · Create a Sanity project

1. Go to **[sanity.io](https://www.sanity.io/)** and sign up (free plan is fine for this site — 3 users, 10 GB assets).
2. In the dashboard click **"Create new project"**. Name it *FairPflegeBox*.
3. When asked for a dataset name, use **`production`** (lowercase).
4. Copy the **Project ID** from the project overview page (it looks like `abc12xyz`).

## 3 · Fill in the env vars

Open `.env.local` and replace the empty values:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12xyz        # ← paste the Project ID here
NEXT_PUBLIC_SANITY_DATASET=production
```

Restart `npm run dev` so Next.js picks up the new values.

## 4 · Add CORS origin (one-time)

In Sanity's dashboard go to **Settings → API → CORS Origins** and add:

- `http://localhost:3000` (for local dev)
- `https://fairpflegebox.de` (your production domain)
- Enable **"Allow credentials"** for both.

This lets the embedded Studio at `/studio` authenticate.

## 5 · Open the embedded Studio

Visit **[http://localhost:3000/studio](http://localhost:3000/studio)**. Sign in with the email you registered at sanity.io. You'll see six content areas in the left sidebar:

- **Startseite · Hero** — H1, subtitle, CTA, background image, the stat-slider entries
- **Globale Einstellungen** — footer contact info, newsletter copy, social links
- **Vorteile (Services)** — the four "Unsere Vorteile" cards
- **Produkte** — the 10 cards on the `/produkte` page
- **Kundenstimmen** — testimonials carousel
- **Häufige Fragen** — FAQ accordion

Create your first Product document: click **Produkte → Create new**, fill in title, intro, bullets, upload a product image, save → publish.

## 6 · Wire the `/produkte` page to Sanity

Open `app/produkte/page.tsx`. Near the top you'll see the `getProducts()` helper that currently just returns the static array. Replace its body with:

```ts
async function getProducts(): Promise<Product[]> {
  const { sanityClient } = await import("@/sanity/lib/client");
  const { productsQuery } = await import("@/sanity/lib/queries");
  type Row = {
    _id: string;
    title: string;
    intro: string;
    pflichtInfo?: boolean;
    bullets?: string[] | null;
    image?: string | null;
    imageAlt?: string | null;
    ctaHref?: string | null;
  };
  const rows = await sanityClient.fetch<Row[]>(productsQuery);
  if (!rows?.length) return products; // fall back to static array
  return rows.map((r) => ({
    id: r._id,
    title: r.title,
    intro: r.intro,
    pflichtInfo: r.pflichtInfo || false,
    bullets: r.bullets || [],
    image: r.image || "",
    imageAlt: r.imageAlt || r.title,
    href: r.ctaHref || "/pflegepaket",
  }));
}
```

Also remove the `sanity` entries from `tsconfig.json` → `exclude` now that `npm install` has brought in the types.

Repeat the same pattern for `components/sections/Hero.tsx`, `Services.tsx`, `Testimonials.tsx`, `FAQ.tsx` — each already has a static array that you swap for a Sanity fetch using the matching query from `sanity/lib/queries.ts`.

## 7 · Deploy the Studio (optional)

You have two options to give your client access:

**Option A — embedded (recommended)**
The Studio already lives at `/studio` in your own Next.js app. Push the app to Vercel / your host and share `fairpflegebox.de/studio` with your client. They sign in via Google or email. This is the WordPress-like experience.

**Option B — standalone Studio on sanity.studio**
Run `npm run sanity:deploy` — this publishes a copy at `<yourproject>.sanity.studio`. Useful if you don't want the Studio bundled with your main app.

## 8 · Inviting the client

From sanity.io → your project → **Members → Invite**, enter the client's email and choose the **Editor** role. They get an invite link, pick a password, and can edit content at `/studio` immediately.

## File map

| File | What it does |
| --- | --- |
| `sanity.config.ts` | Studio configuration (name, layout, plugins) |
| `sanity/env.ts` | Reads project ID / dataset from env |
| `sanity/lib/client.ts` | The read-only Sanity client used in server components |
| `sanity/lib/image.ts` | `urlFor(image).width(800).url()` helper for `<Image src>` |
| `sanity/lib/queries.ts` | GROQ queries for each content type |
| `sanity/schemas/*.ts` | One file per document type — controls what fields your client sees |
| `app/studio/[[...tool]]/page.tsx` | Renders the embedded Studio at `/studio` |

To add a new editable content type (e.g. blog posts), create `sanity/schemas/post.ts`, export a `defineType({ name: "post", … })`, add it to `sanity/schemas/index.ts`, and add a GROQ query. Your client sees it in the sidebar on next page load.
