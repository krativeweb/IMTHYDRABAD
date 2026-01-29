import { getMetadata } from "@/utils/getMetadata";
import FellowAdmissionClient from "@/seo-page/FpmAdmission";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/fpm-admission");
}

export default function FellowAdmission() {
  return <FellowAdmissionClient />;
}
