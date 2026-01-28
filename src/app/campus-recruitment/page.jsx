import { getMetadata } from "@/utils/getMetadata";
import CampusPlacementsClient from "@/seo-page/campus-recruitment";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/campus-recruitment", "/api/campus-placements");
}

export default function CampusPlacementsSection() {
  return <CampusPlacementsClient />;
}
