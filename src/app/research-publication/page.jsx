import { getMetadata } from "@/utils/getMetadata";
import ResearchPublicationClient from "@/seo-page/ResearchPublication";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/research-publication");
}

export default function ResearchPublication() {
  return <ResearchPublicationClient />;
}
