import { getMetadata } from "@/utils/getMetadata";
import AboutIMTHyderabadClient from "@/seo-page/About";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/about-imt-hyderabad");
}

export default function Faculty() {
  return <AboutIMTHyderabadClient />;
}
