"use client";

import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

export default function USPSection() {
  const [uspHtml, setUspHtml] = useState("");
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchUSP = async () => {
      try {
        const res = await fetch(`${API_URL}/api/usp`);
        const json = await res.json();

        if (json?.success && json?.data?.content) {
          setUspHtml(json.data.content);
        }
      } catch (error) {
        console.error("Failed to fetch USP content", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUSP();
  }, [API_URL]);

  if (loading || !uspHtml) return null;

  return (
    <section className="usp-section py-4">
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(uspHtml),
        }}
      />
    </section>
  );
}
