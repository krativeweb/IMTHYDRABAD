import { getMetadata } from "@/utils/getMetadata";
import LearningResourceCenterClient from "@/seo-page/learning-resource-center-lrc";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/learning-resource-center-lrc", "/api/lrc-page");
}

export default function Careers() {
  return <LearningResourceCenterClient />;
}
