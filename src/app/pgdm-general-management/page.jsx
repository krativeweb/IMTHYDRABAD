import { getMetadata } from "@/utils/getMetadata";
import PgdmGeneralClient from "@/seo-page/PgdmGeneral";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/pgdm-general-management", "/api/pgdm-general");
}

export default function PgdmGeneral() {
  return <PgdmGeneralClient />;
}
