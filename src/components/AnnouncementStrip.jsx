"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

export default function AnnouncementStrip() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!API_URL) {
      console.error("NEXT_PUBLIC_API_URL is not defined");
      return;
    }

    const fetchAnnouncement = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/newannoucement`, {
          timeout: 8000,
          headers: {
            "Cache-Control": "no-store",
          },
        });

        if (data?.success && Array.isArray(data.data)) {
          const active = data.data.find((item) => item.is_active === true);

          if (active?.cta_content) {
            setContent(active.cta_content);
          }
        }
      } catch (error) {
        console.error("Announcement fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncement();
  }, [API_URL]);

  if (loading || !content) return null;

  return (
    <div
      className="announcement-strip"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(content),
      }}
    >

    </div>
  );
}
