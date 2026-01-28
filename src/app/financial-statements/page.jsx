import { getMetadata } from "@/utils/getMetadata";
import FinancialStatementsClient from "@/seo-page/financial-statements";

// 🟢 Apply SEO metadata from CMS
export async function generateMetadata() {
  return getMetadata(
    "/financial-statements",
    "/api/mandatory/slug/financial-statements"
  );
}

export default function FinancialStatements() {
  return <FinancialStatementsClient />;
}
