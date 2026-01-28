import { getMetadata } from "@/utils/getMetadata";
import CommitteeClient from "@/seo-page/committees";

// 🟢 Apply SEO metadata from CMS
export async function generateMetadata() {
  return getMetadata(
    "/committees",
    "/api/mandatory/slug/committees"
  );
}

export default function Committees() {
  return <CommitteeClient />;
}
