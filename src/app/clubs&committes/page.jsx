import { getMetadata } from "@/utils/getMetadata";
import ClubsAndCommittees from "@/seo-page/clubs&committes";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/clubs&committes", "/api/club-communities-seo");
}

export default function ClubsAndCommitteesPage() {
  return <ClubsAndCommittees />;
}
