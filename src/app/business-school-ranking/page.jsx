import { getMetadata } from "@/utils/getMetadata";
import RankingClient from "@/seo-page/business-school-ranking";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata(
    "/business-school-ranking",
    "/api/mandatory/slug/rankings"
  );
}

export default function Careers() {
  return <RankingClient />;
}
