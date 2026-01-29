import SEO from "../../seo-config";

export function getMetadata(pathname) {
  const seo = SEO[pathname] || SEO["/"]; // fallback to homepage

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical,
      siteName: "IMT Hyderabad",
    },
  };
}
