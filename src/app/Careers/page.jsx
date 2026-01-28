import { getMetadata } from "@/utils/getMetadata";
import CareersClient from "@/seo-page/Carrers";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/careers", "/api/mandatory/slug/careers");
}

export default function Careers() {
  return <CareersClient />;
}
