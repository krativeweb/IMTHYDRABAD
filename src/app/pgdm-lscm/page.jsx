import { getMetadata } from "@/utils/getMetadata";
import PgdmLcsmClient from "@/seo-page/PgdmLcsm";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/pgdm-lscm","/api/pgdm-logistics-supply-chain");
}

export default function PgdmLcsm() {
  return <PgdmLcsmClient />;
}
