import { groq } from "next-sanity";

/** All products ordered by the manual `order` field, then creation date. */
export const productsQuery = groq`
  *[_type == "product"] | order(order asc, _createdAt asc) {
    _id,
    title,
    slug,
    intro,
    "bullets": bullets[],
    pflichtInfo,
    "image": image.asset->url,
    "imageAlt": image.alt,
    ctaLabel,
    ctaHref
  }
`;

/** Homepage hero singleton. */
export const heroQuery = groq`
  *[_type == "hero"][0] {
    _id,
    title,
    subtitle,
    ctaLabel,
    ctaHref,
    "backgroundImage": backgroundImage.asset->url,
    slides[]{
      stat,
      label,
      sub
    }
  }
`;

/** Service cards for homepage "Unsere Vorteile" grid. */
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    "image": image.asset->url,
    "imageAlt": image.alt,
    ctaLabel,
    ctaHref
  }
`;

/** FAQ entries for homepage accordion. */
export const faqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer
  }
`;

/** Testimonials for homepage carousel. */
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    name,
    role,
    quote,
    stars,
    "avatar": avatar.asset->url,
    "portrait": portrait.asset->url
  }
`;

/** Global site settings (contact info, newsletter copy, social links). */
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    contactAddress,
    contactEmail,
    contactPhone,
    newsletterHeading,
    newsletterBody,
    socialLinks[]{ label, href }
  }
`;
