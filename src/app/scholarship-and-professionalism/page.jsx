import { getMetadata } from "@/utils/getMetadata";
import ScholarshipClient from "@/seo-page/scholarship-and-professionalism";

// 🟢 Apply SEO metadata from CMS
export async function generateMetadata() {
  return getMetadata(
    "/scholarship-and-professionalism",
    "/api/mandatory/slug/standards-of-scholarship"
  );
}

export default function ScholarshipAndProfessionalism() {
  return <ScholarshipClient />;
}
