import { getMetadata } from "@/utils/getMetadata";
import PointOfContactClient from "@/seo-page/PointOfContact";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/point-contact-iro","/api/mandatory/slug/point-of-contact"
  );
}

export default function PointOfContact() {
  return <PointOfContactClient />;
}
