"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

const STATIC_SLUG = "nabard"; // 🔒 STATIC SLUG HERE

export default function CII() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API = process.env.NEXT_PUBLIC_API_URL;

  /* ---------------- Fetch API ---------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${API}/api/research-infocus/slug/${STATIC_SLUG}`
        );

        if (res.data?.success) {
          setData(res.data.data);
        }
      } catch (err) {
        console.error("Research fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API]);

  /* ---------------- Init AOS ---------------- */
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({
        duration: 1200,
        once: true,
      });
    });
  }, []);

  if (loading || !data) return null;

  return (
    <div className="industry-relevance-page">
      <section className="faculty-section">
        {/* ================= Banner ================= */}
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: `url(${API}/${data.details_banner_image})`,
          }}
        >
          <div className="hero-overlay" />
          <div
            className="hero-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.banner_text),
            }}
          />
        </div>

        {/* ================= Breadcrumb ================= */}
        <div className="breadcrumb p-4">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold">
                  {data.page_title?.toUpperCase()}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ================= Content ================= */}
        <section id="cii-study" className="py-5">
          <div className="container" data-aos="fade-up">
            {/* Page Title */}
            <div
              className="text-center mb-5"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.details_page_title),
              }}
            />

            {/* Subtitle */}
            <div
              className="section-description mb-4 text-center"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.sub_title),
              }}
            />

            {/* Main Description */}
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.main_description),
              }}
            />
          </div>
        </section>
      </section>

      {/* ================= Styles ================= */}
  <style
  dangerouslySetInnerHTML={{
    __html: `
      .faculty-hero {
        background: url("/media/banners/nabard.jpg") no-repeat center center;
        background-size: cover;
        height: 60vh !important;
        position: relative;
      }

      .hero-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
      }

      .hero-content {
        position: relative;
        z-index: 2;
        padding-top: 150px;
      }

      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }

      .section-title {
        font-size: 2rem;
        font-weight: 700;
        color: #08317a;
        margin-bottom: 1.5rem;
        position: relative;
        padding-bottom: 0.5rem;
      }

      .section-title::after {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: #ffc107;
      }

      .section-description {
        max-width: 900px;
        line-height: 1.8;
        color: #333;
        margin: 0 auto;
      }

      .card {
        background: #f8f9fa;
        border-radius: 1.5rem;
      }

      .card ul {
        padding-left: 1.5rem;
        margin-top: 0.5rem;
      }

      .card ul li {
        margin-bottom: 0.5rem;
      }

      @media (max-width: 767px) {
        .section-title {
          font-size: 1.6rem;
        }
        .faculty-hero {
          height: 40vh;
        }
      }
    `,
  }}
/>
    </div>
  );
}
