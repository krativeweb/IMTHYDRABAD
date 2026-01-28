import { getMetadata } from "@/utils/getMetadata";
import InnovationLabClient from "@/seo-page/InnovationLab";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/innovation-lab", "/api/innovation-lab");
}

export default function Faculty() {
  return <InnovationLabClient />;
}
