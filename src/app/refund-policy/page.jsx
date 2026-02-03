import { getMetadata } from "@/utils/getMetadata";
import RefundPolicyClient from "@/seo-page/refund-policy";

// 🟢 Apply SEO metadata from CMS
export async function generateMetadata() {
  return getMetadata(
    "/refund-policy",
    "/api/mandatory/slug/refund-policy"
  );
}

export default function RefundPolicy() {
  return <RefundPolicyClient />;
}
