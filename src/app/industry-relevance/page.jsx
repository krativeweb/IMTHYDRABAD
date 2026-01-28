import { getMetadata } from "@/utils/getMetadata";
import IndustryRelevanceClient from "@/seo-page/IndustryRelevence";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata(
    "/industry-relevance","/api/mandatory/slug/industry-relevance"
  );
}

export default function IndustryRelevance() {
  return <IndustryRelevanceClient />;
}
