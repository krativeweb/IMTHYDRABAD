import { getMetadata } from "@/utils/getMetadata";
import MessageDeskClient from "@/seo-page/message-desk";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata(
    "/message-desk","/api/mandatory/slug/leadership-and-governance"
  );
}

export default function MessageDesk() {
  return <MessageDeskClient />;
}
