import { getMetadata } from "@/utils/getMetadata";
import FellowAdmissionClient from "@/seo-page/FpmAdmission";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/fpm-admission", "/api/fellow-program-management");
}

export default function FellowAdmission() {
  return <FellowAdmissionClient />;
}
