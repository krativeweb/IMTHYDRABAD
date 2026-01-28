import { getMetadata } from "@/utils/getMetadata";
import SponsoredResearchClient from "@/seo-page/SponsoredResearch";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/sponsered-research-advisory", "/api/sponsored-research");
}

export default function SponsoredResearch() {
  return <SponsoredResearchClient />;
}
