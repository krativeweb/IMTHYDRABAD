import { getMetadata } from "@/utils/getMetadata";
import FeedbackClient from "@/seo-page/feedback";

// 🟢 Apply SEO metadata from CMS
export async function generateMetadata() {
  return getMetadata(
    "/feedback",
    "/api/mandatory/slug/feedback-faculties"
  );
}

export default function Feedback() {
  return <FeedbackClient />;
}
