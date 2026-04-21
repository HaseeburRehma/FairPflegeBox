# FairPflegeBox – Website

Next.js 14 + Tailwind CSS website for FairPflegeBox.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Onest** font (Google Fonts)

## Project Structure

```
app/
  layout.tsx        # Root layout (Header + Footer)
  page.tsx          # Homepage
  globals.css       # Global styles + Tailwind

components/
  layout/
    Header.tsx      # Sticky nav header
    Footer.tsx      # Footer with links & socials
  sections/
    Hero.tsx        # Hero banner
    Mission.tsx     # Unsere Mission
    Services.tsx    # Unsere Vorteile (4 cards)
    Features.tsx    # Features (purple bg)
    Testimonials.tsx # Kundenmeinungen
    HowItWorks.tsx  # 3-step process
    FAQ.tsx         # FAQ accordion
    CTABanner.tsx   # Final CTA
  ui/
    Logo.tsx        # FairPflegeBox SVG logo
```

## Adding Sanity CMS (next step)

Run: `npm create sanity@latest -- --project <your-project-id> --dataset production`

Then connect each section's content via Sanity queries.

## Brand Colors

- Primary: `#43358B`
- Font: Onest (all weights)
