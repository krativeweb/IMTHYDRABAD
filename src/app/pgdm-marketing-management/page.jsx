import { getMetadata } from "@/utils/getMetadata";
import PgdmMarketingClient from "@/seo-page/PgdmMarketing";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/pgdm-marketing-management","/api/pgdm-marketing");
}

export default function PgdmMarketing() {
  return <PgdmMarketingClient />;
}
