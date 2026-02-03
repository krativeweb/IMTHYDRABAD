import { getMetadata } from "@/utils/getMetadata";
import StudentExchangePage from "@/seo-page/student-exchange";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/student-exchange", "/api/student-exchange-seo");
}

export default function StudentExchange() {
  return <StudentExchangePage />;
}
