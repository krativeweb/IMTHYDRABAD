import { getMetadata } from "@/utils/getMetadata";
import FpmProgramme from "@/seo-page/fpm-program-hyderabad";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/fpm-program-hyderabad","/api/fellowprogram-in-management");
}

export default function FpmProgrammePage() {
  return <FpmProgramme />;
}
