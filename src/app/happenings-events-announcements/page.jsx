import { getMetadata } from "@/utils/getMetadata";
import Happenings from "@/seo-page/happenings-events-announcements";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/happenings-events-announcements", "/api/happenings-seo");
}

export default function HappeningsPage() {
  return <Happenings />;
}
