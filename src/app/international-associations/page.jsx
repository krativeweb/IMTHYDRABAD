import { getMetadata } from "@/utils/getMetadata";
import InternationalAssociationsClient from "@/seo-page/International-Association";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata(
    "/international-associations",
    "/api/mandatory/slug/international-associations"
  );
}

export default function InternationalAssociations() {
  return <InternationalAssociationsClient />;
}
