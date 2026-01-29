import { getMetadata } from "@/utils/getMetadata";
import PlacementsClient from "@/seo-page/Placements";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/placements");
}

export default function Placements() {
  return <PlacementsClient />;
}
