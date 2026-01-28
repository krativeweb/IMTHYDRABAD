import { getMetadata } from "@/utils/getMetadata";
import FacultiesExchangeClient from "@/seo-page/FacultyExchange";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata(
    "/faculty-exchange","/api/mandatory/slug/faculty-exchange"
  );
}

export default function FacultyExchange() {
  return <FacultiesExchangeClient />;
}
