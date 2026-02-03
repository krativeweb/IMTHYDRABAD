import { getMetadata } from "@/utils/getMetadata";
import OnlineGrievanceRedressalMechanismFeedbackClient from "@/seo-page/online-grievance-redressal-mechanism";

// 🟢 Apply SEO metadata from CMS
export async function generateMetadata() {
  return getMetadata(
    "/online-grievance-redressal-mechanism",
    "/api/mandatory/slug/grievance-redressal"
  );
}

export default function OnlineGrievanceRedressalMechanism() {
  return <OnlineGrievanceRedressalMechanismFeedbackClient />;
}
