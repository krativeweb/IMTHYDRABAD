import SEO from "../../seo-config";

export async function getMetadata(pathname, apiPath = null) {
  // 1️⃣ API SEO FIRST
  if (apiPath) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_API_URL is undefined");
      }

      // console.log("SEO API CALLED:", `${baseUrl}${apiPath}`);

      const res = await fetch(`${baseUrl}${apiPath}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`SEO API failed: ${res.status} ${text}`);
      }

      const data = await res.json();
      const seo = Array.isArray(data) ? data[0] : data;

      // console.log("SEO DATA RECEIVED:", seo);

      if (seo) {
        return {
          title: seo.meta_title || seo.page_title,
          description: seo.meta_description,
          keywords: seo.meta_keywords,
          alternates: {
            canonical: seo.meta_canonical,
          },
          openGraph: {
            title: seo.meta_title,
            description: seo.meta_description,
            url: seo.meta_canonical,
            siteName: "IMT Hyderabad",
          },
        };
      }
    } catch (err) {
      console.error("Dynamic SEO error:", err.message);
    }
  }

  // 2️⃣ Static SEO fallback
  // const staticSeo = SEO[pathname] || SEO["/"];
  // return {
  //   title: staticSeo.title,
  //   description: staticSeo.description,
  //   keywords: staticSeo.keywords,
  //   alternates: {
  //     canonical: staticSeo.canonical,
  //   },
  // };
}
