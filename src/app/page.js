import { getMetadata } from "@/utils/getMetadata";
import HomeClient from "@/seo-page/Home";

export async function generateMetadata() {
  return getMetadata("/", "/api/home-seo");
}

export default function Page() {
  return <HomeClient />;
}
 
