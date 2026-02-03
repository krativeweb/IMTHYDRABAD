import { getMetadata } from "@/utils/getMetadata";
import NewsClient from "@/seo-page/News";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/news", "/api/mandatory/slug/news");
}

export default function News() {
  return <NewsClient />;
}
