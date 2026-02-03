import { getMetadata } from "@/utils/getMetadata";
import MomBogClient from "@/seo-page/mom-bog";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/mom-bog", "/api/mandatory/slug/mom-bog");
}

export default function MessageDesk() {
  return <MomBogClient />;
}
