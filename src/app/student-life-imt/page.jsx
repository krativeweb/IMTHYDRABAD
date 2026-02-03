import { getMetadata } from "@/utils/getMetadata";
import StudentLifePage from "@/seo-page/student-life-imt";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/point-contact-iro", "/api/student-life");
}

export default function StudentLife() {
  return <StudentLifePage />;
}
