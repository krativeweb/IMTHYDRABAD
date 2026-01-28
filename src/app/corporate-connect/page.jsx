import { getMetadata } from "@/utils/getMetadata";
import CorporateConnectClient from "@/seo-page/corporate-connect";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/corporate-connect", "/api/corporate-connect-seo");
}

export default function CorporateConnect() {
  return <CorporateConnectClient />;
}

