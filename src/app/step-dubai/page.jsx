import { getMetadata } from "@/utils/getMetadata";
import StepDubaiContent from "@/seo-page/step-dubai";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("step-dubai", "/api/mandatory/slug/step-dubai");
}

export default function StepDubai() {
  return <StepDubaiContent />;
}
