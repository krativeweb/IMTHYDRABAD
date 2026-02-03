import { getMetadata } from "@/utils/getMetadata";
import ApprovalsAccreditationClient from "@/seo-page/accredations-approvals";

// 🟢 Apply SEO metadata from CMS
export async function generateMetadata() {
  return getMetadata(
    "/accredations&approvals",
    "/api/mandatory/slug/approvals-and-accreditation"
  );
}

export default function RefundPolicy() {
  return <ApprovalsAccreditationClient />;
}
