import { getMetadata } from "@/utils/getMetadata";
import AboutIMTHyderabadClient from "@/seo-page/About";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/about-imt-hyderabad", "/api/mandatory/slug/about-us");
}

export default function AboutUs() {
  return <AboutIMTHyderabadClient />;
}
