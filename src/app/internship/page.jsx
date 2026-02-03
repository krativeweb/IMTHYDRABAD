import { getMetadata } from "@/utils/getMetadata";
import InternshipClient from "@/seo-page/internship";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/internship", "/api/internship-page");
}

export default function InternshipSection() {
  return <InternshipClient />;
}
