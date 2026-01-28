import { getMetadata } from "@/utils/getMetadata";
import Accreditation from "@/seo-page/Accreditation";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/accredations", "/api/mandatory/slug/accredations");
}

export default function AccreditationClient() {
  return <Accreditation />;
}
