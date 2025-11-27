"use client";

import { usePathname } from "next/navigation";
import Head from "next/head";
import SEO from "../../seo-config";

export default function SeoTags() {
  const pathname = usePathname();
  const meta = SEO[pathname] || SEO["/"];

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      <link
        rel="canonical"
        href={meta.canonical || `https://www.imthyderabad.edu.in${pathname}`}
      />
    </Head>
  );
}
