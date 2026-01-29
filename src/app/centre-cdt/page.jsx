import { getMetadata } from "@/utils/getMetadata";
import CenterCdtClient from "@/seo-page/CenterCdt";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/centre-cdt");
}

export default function Faculty() {
  return <CenterCdtClient />;
}
