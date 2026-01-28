import { getMetadata } from "@/utils/getMetadata";
import PgdmFinanceClient from "@/seo-page/PgdmFinance";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/pgdm-finance-management", "/api/pgdm-finance");
}

export default function PgdmFinanc() {
  return <PgdmFinanceClient />;
}
