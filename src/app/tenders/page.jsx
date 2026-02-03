import { getMetadata } from "@/utils/getMetadata";
import TendersClient from "@/seo-page/tenders";

// 🟢 Apply SEO metadata from CMS
export async function generateMetadata() {
  return getMetadata("/tenders", "/api/mandatory/slug/tenders");
}

export default function Tenders() {
  return <TendersClient />;
}
