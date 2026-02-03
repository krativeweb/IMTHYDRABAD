"use client";

import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

export default function VideoSection() {
  const [bannerVideo, setBannerVideo] = useState("");
  const [bannerText, setBannerText] = useState("");

  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchHomeSEO = async () => {
      try {
        const res = await fetch(`${baseURL}/api/home-seo`, {
          cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch home SEO");

        const data = await res.json();

        setBannerVideo(data.banner_video || "");
        setBannerText(data.banner_text || "");
      } catch (error) {
        console.error("Video banner fetch error:", error);
      }
    };

    fetchHomeSEO();
  }, [baseURL]);

  return (
    <section className="video-section position-relative">
      {/* 🔹 Background Video */}
      {bannerVideo && (
        <video autoPlay muted loop playsInline>
          <source src={`${baseURL}/${bannerVideo}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* 🔹 Overlay */}
      <div className="video-overlay"></div>

      {/* 🔹 Content */}
      <div className="container video-content d-flex flex-column justify-content-center h-100 text-center mt-5">
        {bannerText && (
          <div
            data-aos="fade-up"
            style={{
              fontSize: "60px",
              textShadow: "0 5px rgb(0 18 51)",
            }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(bannerText),
            }}
          />
        )}
      </div>
    </section>
  );
}
