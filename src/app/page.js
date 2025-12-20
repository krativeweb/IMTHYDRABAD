import { getMetadata } from "@/utils/getMetadata";
import HomeClient from "@/seo-page/Home";

export async function generateMetadata() {
  return getMetadata("/");
}

export default function Page() {
  return <HomeClient />;
}
   
