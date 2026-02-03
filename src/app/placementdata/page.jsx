import { getMetadata } from "@/utils/getMetadata";
import PlacementDataClient from "@/seo-page/placementdata";

// 🟢 Apply SEO metadata from CMS
export async function generateMetadata() {
  return getMetadata("/placementdata", "/api/mandatory/slug/placement-data");
}

export default function PlacementDataSection() {
  return <PlacementDataClient />;
}
