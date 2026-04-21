import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "../env";

const builder = imageUrlBuilder({ projectId, dataset });

/**
 * Build a Sanity CDN image URL.
 *
 *   urlFor(image).width(1200).quality(80).url()
 *
 * Pass the result to next/image's `src` prop.
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
