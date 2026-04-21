import type { SchemaTypeDefinition } from "sanity";

import { product } from "./product";
import { hero } from "./hero";
import { service } from "./service";
import { faq } from "./faq";
import { testimonial } from "./testimonial";
import { siteSettings } from "./siteSettings";

export const schemaTypes: SchemaTypeDefinition[] = [
  hero,
  siteSettings,
  service,
  testimonial,
  faq,
  product,
];
