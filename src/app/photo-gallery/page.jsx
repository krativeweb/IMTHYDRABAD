import { getMetadata } from "@/utils/getMetadata";
import PhotoGallerySectionClient from "@/seo-page/Photo-Gallery";

// 🟢 Apply faculty page SEO for ALL faculty profiles
export async function generateMetadata() {
  return getMetadata("/photo-gallery", "/api/mandatory/slug/photo-gallery");
}

export default function PhotoGallerySection() {
  return <PhotoGallerySectionClient />;
}
