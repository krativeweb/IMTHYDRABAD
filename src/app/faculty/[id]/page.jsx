import { getMetadata } from "@/utils/getMetadata";
import FacultyProfileClient from "@/seo-page/FacultyProfileClient";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/faculty/");
}

export default function FacultyProfilePage({ params }) {
  return <FacultyProfileClient params={params} />;
}
