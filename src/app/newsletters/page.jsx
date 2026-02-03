import { getMetadata } from "@/utils/getMetadata";
import NewsletterClient from "@/seo-page/newsletters";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/newsletters", "/api/newsletter-seo");
}

export default function newsletter() {
  return <NewsletterClient />;
}
