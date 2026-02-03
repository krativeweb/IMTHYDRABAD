"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";

const IndustryRelevance = () => {
  const [pageData, setPageData] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!API_URL) return;

    const fetchPageData = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/mandatory/slug/industry-relevance`
        );
        const json = await res.json();
        setPageData(json);
      } catch (error) {
        console.error("Failed to load Industry Relevance page", error);
      }
    };

    fetchPageData();
  }, [API_URL]);

  return (
    <div className="industry-relevance-page">
      <section className="faculty-section">
        {/* Top Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: pageData?.banner_image
              ? `url(${API_URL}${pageData.banner_image})`
              : undefined,
          }}
        >
          <div className="hero-overlay" />
          <div
            className="hero-content"
            dangerouslySetInnerHTML={{
              __html: pageData?.banner_text
                ? DOMPurify.sanitize(pageData.banner_text)
                : "",
            }}
          />
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link
                    href="/"
                    className="text-white fw-bold"
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Industry Relevance
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* PAGE CONTENT (Cards + Quality Policy) */}
        <section id="industry-relevance" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <div
              dangerouslySetInnerHTML={{
                __html: pageData?.page_content
                  ? DOMPurify.sanitize(pageData.page_content)
                  : "",
              }}
            />
          </div>
        </section>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Makes ANY active tab (main or sub) turn yellow (bg-warning) */
      .nav-pills .nav-link.active {
        background-color: var(--bs-warning) !important;
        color: var(--bs-dark) !important;
      }

      .scrollable-columns {
        max-height: 400px;
        overflow-y: auto;
        column-count: 2;
        column-gap: 1rem;
        padding-right: 10px;
      }
        .breadcrumb{
        background-color: rgb(22, 57, 119);
        }
    
      /* For screens wider than 1300px */
      @media (min-width: 1300px) {
        .scrollable-columns {
          max-height: 580px;
        }
      }

      .scrollable-columns .nav-link {
        display: inline-block;
        width: 100%;
        margin-bottom: 0.5rem;
      }

      .date-box {
        width: 80px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      /* Gradient banner with subtle overlay */
      .faculty-hero {
        background: url("/media/banners/aboutus.webp");
        position: relative;
        background-size: cover;
        height: 60vh;
          background-position: center !important;
      }
      .faculty-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
      }
      .faculty-hero h2,
      .faculty-hero p {
        position: relative;
        z-index: 1;
      }
      .faculty-hero h2 {
        margin-top: 150px;
      }

      /* Card styling */
      .faculty-card {
        background: #f8f9fa;
        border: none;
        border-radius: 1.5rem;
      }

      /* Image glow & hover effect */
      .faculty-img {
        border-radius: 1.2rem;
        transition: transform 0.4s ease;
      }
      .faculty-img:hover {
        transform: scale(1.03);
      }

      /* Social icons */
      .social-icon {
        display: inline-flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        background: #ffc107;
        color: #ffffffff;
        transition: all 0.3s;
      }
      .social-icon:hover {
        background: #5390d9;
        color: #ffffffff;
        transform: translateY(-3px);
      }

      /* Tabs */
      .faculty-tabs .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #333;
        transition: all 0.3s;
      }
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107;
        color: #000000ff;
      }

      /* Limit height for the full tab area */
      .tab-pane.fade.show.active.bg-white.p-4.rounded-4.text-black {
        height: 80vh;
        overflow: hidden;
      }

      /* Left side (tabs) */
      .col-md-3.mb-3 {
        max-height: 80vh;
        overflow-y: auto;
        padding-right: 8px;
        border-right: 2px solid #eee;
      }

      /* Right side (content) */
      .col-md-9 {
        max-height: 80vh;
        overflow-y: auto;
        padding-left: 10px;
      }

      /* Optional: nice scrollbar */
      .col-md-3.mb-3::-webkit-scrollbar,
      .col-md-9::-webkit-scrollbar {
        width: 6px;
      }
      .col-md-3.mb-3::-webkit-scrollbar-thumb,
      .col-md-9::-webkit-scrollbar-thumb {
        background: #bbb;
        border-radius: 10px;
      }
        /* ONLY industry relevance image fix */
.ir-fixed-img {
  width: 100%;
  max-height: 220px;
  object-fit: cover;
  border-radius: 12px;
}

/* mobile spacing */
@media (max-width: 767px) {
  .ir-fixed-img {
    max-height: 200px;
  }
}

    `,
        }}
      />
    </div>
  );
};

export default IndustryRelevance;
