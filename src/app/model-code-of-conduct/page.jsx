import { getMetadata } from "@/utils/getMetadata";
import ModelCodeOfConductClient from "@/seo-page/model-code-of-conduct";

// 🟢 Apply SEO metadata from CMS
export async function generateMetadata() {
  return getMetadata(
    "/model-code-of-conduct",
    "/api/mandatory/slug/model-code-of-conduct"
  );
}

export default function ModelCodeOfConduct() {
  return <ModelCodeOfConductClient />;
}
