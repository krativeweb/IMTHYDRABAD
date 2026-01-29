import { getMetadata } from "@/utils/getMetadata";
import ResearchArchieveClient from "@/seo-page/ResearchArchieve";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/research-archive");
}

export default function ResearchArchieve() {
  return <ResearchArchieveClient />;
}
