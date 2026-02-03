import { getMetadata } from "@/utils/getMetadata";
import FaqClient from "@/seo-page/Faq";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/news", "/api/mandatory/slug/faqs");
}

export default function Faq() {
  return <FaqClient />;
}
