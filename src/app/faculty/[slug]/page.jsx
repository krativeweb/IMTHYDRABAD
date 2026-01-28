import { getMetadata } from "@/utils/getMetadata";
import FacultyProfileClient from "@/seo-page/FacultyProfileClient";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/faculty/", "/api/faculty-details-seo");
}

export default function FacultyProfilePage({ params }) {
  return <FacultyProfileClient params={params} />;
}
