import { getMetadata } from "@/utils/getMetadata";
import StudyImtSectionClient from "@/seo-page/StudyImtSection";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/studying-at-imt-hyderabad", "/api/mandatory/slug/studying-at-imt-hyderabad");
}

export default function Faculty() {
  return <StudyImtSectionClient />;
}
