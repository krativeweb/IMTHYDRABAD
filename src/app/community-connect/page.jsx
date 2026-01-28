import { getMetadata } from "@/utils/getMetadata";
import CommunityConnect from "@/seo-page/community-connect";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/community-connect","/api/community-connect");
}

export default function CommunityConnectPage() {
  return <CommunityConnect />;
}
