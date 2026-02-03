"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import SEO from "../../seo-config";

export default function SeoTags() {
  const pathname = usePathname();

  // remove trailing slash for matching
  const cleanPath = pathname.replace(/\/$/, "") || "/";

  // try exact match
  let meta = SEO[cleanPath];

  // try prefix match for dynamic routes
  if (!meta) {
    const matchKey = Object.keys(SEO).find((key) =>
      cleanPath.startsWith(key) && key !== "/"
    );
    meta = SEO[matchKey] || SEO["/"];
  }

  useEffect(() => {
    document.title = meta.title;

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name='${name}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMeta("description", meta.description);
    if (meta.keywords) setMeta("keywords", meta.keywords);

    // canonical
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = meta.canonical;
  }, [cleanPath, meta]);

  return null;
}
