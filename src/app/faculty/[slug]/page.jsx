import { getMetadata } from "@/utils/getMetadata";
import FacultyProfileClient from "@/seo-page/FacultyProfileClient";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata({ params }) {
  const { slug } = params;
  return getMetadata( `/faculty/${slug}`,
    `/api/faculty/slug/${slug}` );
}

export default function FacultyProfilePage({ params }) {
  return <FacultyProfileClient params={params} />;
}
