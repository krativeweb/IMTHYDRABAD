import { getMetadata } from "@/utils/getMetadata";
import CampusTour from "@/seo-page/Campus-Tour";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/Campus-Tour","/api/campus-tour");
}

export default function CampusTourPage() {
  return <CampusTour />;
}
