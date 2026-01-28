import { getMetadata } from "@/utils/getMetadata";
import ConferenceWorkshopClient from "@/seo-page/ConferenceWorkshop";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata(
    "/conferences-workshops",
    "/api/workshops-conferences-seo/slug/conferences-workshops"
  );
}

export default function ConferencesWorkshops() {
  return <ConferenceWorkshopClient />;
}
