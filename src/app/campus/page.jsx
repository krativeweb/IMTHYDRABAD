import { getMetadata } from "@/utils/getMetadata";
import CampusClient from "@/seo-page/Campus";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata(
    "/campus","/api/mandatory/slug/campus"
  );
}

export default function Campus() {
  return <CampusClient />;
}
