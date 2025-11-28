import { getMetadata } from "@/utils/getMetadata";
import FacultyClient from "@/seo-page/FacultiesClient";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/faculties/");
}

export default function page() {
  return <FacultyClient />;
}
