import { getMetadata } from "@/utils/getMetadata";
import ExecutiveEducationClient from "@/seo-page/ExecutiveEducation";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/executive-education");
}

export default function ExecutiveEducation() {
  return <ExecutiveEducationClient />;
}
