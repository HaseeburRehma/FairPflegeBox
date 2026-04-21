/**
 * Embedded Sanity Studio — runs at /studio on your own domain.
 * Your client signs in with the email you invite them with from sanity.io
 * and edits content from a WordPress-like UI. Changes go live immediately.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
