import { getMetadata } from "@/utils/getMetadata";
import Media from "@/seo-page/medias";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/medias", "/api/media");
}

export default function MediaSection() {
  return <Media />;
}
