import { getMetadata } from "@/utils/getMetadata";
import ContactUs from "@/seo-page/contact-us";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/contact-us", "/api/contact-info");
}

export default function FpmProgrammePage() {
  return <ContactUs />;
}
