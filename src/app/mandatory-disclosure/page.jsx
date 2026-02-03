import { getMetadata } from "@/utils/getMetadata";
import MandatoryDisclosureClient from "@/seo-page/mandatory-disclosure";

// 🟢 Apply SEO metadata from CMS
export async function generateMetadata() {
  return getMetadata(
    "/mandatory-disclosure",
    "/api/mandatory/slug/mandatory-disclosure"
  );
}

export default function MandatoryDisclosure() {
  return <MandatoryDisclosureClient />;
}
