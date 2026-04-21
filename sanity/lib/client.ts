import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

/**
 * Public read-only client — safe to call from server components.
 * Uses the CDN for performance; set `useCdn: false` when you need fresh data
 * for drafts/preview.
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});
