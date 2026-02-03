import { getMetadata } from "@/utils/getMetadata";
import OmbudsmanClient from "@/seo-page/ombudsman";

// 🟢 Apply SEO metadata from CMS
export async function generateMetadata() {
  return getMetadata(
    "/ombudsman",
    "/api/mandatory/slug/ombudsman"
  );
}

export default function Ombudsman() {
  return <OmbudsmanClient />;
}
