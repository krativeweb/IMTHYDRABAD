import { getMetadata } from "@/utils/getMetadata";
import AdmissionClient from "@/seo-page/Admission";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/admissions/pgdm","/api/pgdm-admission");
}

export default function Admission() {
  return <AdmissionClient />;
}
