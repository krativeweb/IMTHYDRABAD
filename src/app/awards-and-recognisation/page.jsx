import { getMetadata } from "@/utils/getMetadata";
import AwardsRecognitionClient from "@/seo-page/AwardsRecognition";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata(
    "/awards-and-recognisation",
    "/api/awards-recognition-seo/slug/awards-and-recognition"
  );
}

export default function Faculty() {
  return <AwardsRecognitionClient />;
}
