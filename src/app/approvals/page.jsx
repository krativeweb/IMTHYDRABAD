import { getMetadata } from "@/utils/getMetadata";
import Approval from "@/seo-page/Approval";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/approvals", "/api/mandatory/slug/approvals");
}

export default function Approvals() {
  return <Approval />;
}
