import { getMetadata } from "@/utils/getMetadata";
import PrivacyPolicySection from "@/seo-page/privacy-policy";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/point-contact-iro", "/api/privacy-policy");
}

export default function PrivacyPolicy() {
  return <PrivacyPolicySection />;
}
