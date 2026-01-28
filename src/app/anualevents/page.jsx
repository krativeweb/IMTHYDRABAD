import { getMetadata } from "@/utils/getMetadata";
import AnnualEventsClient from "@/seo-page/anualevents";

// 🟢 Apply SEO metadata from CMS
export async function generateMetadata() {
  return getMetadata(
    "/anualevents",
    "/api/mandatory/slug/annual-events"
  );
}

export default function AnnualEvents() {
  return <AnnualEventsClient />;
}
