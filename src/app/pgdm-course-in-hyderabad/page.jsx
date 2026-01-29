import { getMetadata } from "@/utils/getMetadata";
import PgdmCourseClient from "@/seo-page/PgdmCourse";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/pgdm-course-in-hyderabad");
}

export default function PgdmCourse() {
  return <PgdmCourseClient />;
}
