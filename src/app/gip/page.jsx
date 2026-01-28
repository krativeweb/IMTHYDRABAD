import { getMetadata } from "@/utils/getMetadata";
import GlobalImmersionClient from "@/seo-page/gjp";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/gip", "/api/mandatory/slug/global-immersion");
}

export default function Gjp() {
  return <GlobalImmersionClient />;
}

