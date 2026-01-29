import { getMetadata } from "@/utils/getMetadata";
import CenterCsrClient from "@/seo-page/CenterCsr";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/centre-csr");
}

export default function CentreSustainabilityCSR() {
  return <CenterCsrClient />;
}
