"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Loader from "@/components/Loader";
const SponsoredResearch = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ---------------------------
     INIT AOS
  --------------------------- */
  useEffect(() => {
    const initAOS = async () => {
      if (typeof window !== "undefined") {
        const AOS = (await import("aos")).default;
        AOS.init({
          duration: 1200,
          once: true,
          offset: 100,
        });
      }
    };
    initAOS();
  }, []);

  /* ---------------------------
     FETCH DATA
  --------------------------- */
  useEffect(() => {
    if (!API_URL) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/api/sponsored-research`);
        const json = await res.json();
        setPageData(json[0]);
      } catch (err) {
        console.error("Failed to fetch data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL]);

  if (loading || !pageData) return <Loader fullScreen />;

  return (
    <div className="sponsored-research-page">
      {/* ================= HERO ================= */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: `url(${API_URL}${pageData.banner_image}) no-repeat center center`,
            backgroundSize: "cover",
            height: "60vh",
            position: "relative",
          }}
        >
          <div className="hero-overlay" />
          <div
            className="hero-content"
            style={{ marginTop: "150px" }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(pageData.banner_text),
            }}
          />
        </div>

        {/* ================= BREADCRUMB ================= */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22, 57, 119)" }}
        >
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-warning fw-bold">
                  {pageData.page_title}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ================= TABS ================= */}
        <section id="research-tabs" className="py-5 faculty-tabs">
          <div className="container" data-aos="fade-up">
            <h2
              className="text-center fw-bold mb-4"
              style={{ color: "#08317a" }}
            >
              {pageData.page_title}
            </h2>

            {/* ===== STATIC TAB BUTTONS ===== */}
            <ul className="nav nav-pills justify-content-center mb-4">
              <li className="nav-item">
                <button
                  className="nav-link active fw-bold"
                  data-bs-toggle="pill"
                  data-bs-target="#sponsored"
                  type="button"
                >
                  Sponsored Research
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fw-bold"
                  data-bs-toggle="pill"
                  data-bs-target="#advisory"
                  type="button"
                >
                  Advisory Services
                </button>
              </li>
            </ul>

            {/* ===== TAB CONTENT ===== */}
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                {/* API ALREADY CONTAINS tab-pane → JUST RENDER */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(pageData.sponsored_research),
                  }}
                />

                {/* <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(pageData.advisory_services),
                    }}
                  /> */}
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* === CSS (Scoped with <style jsx>) === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Hero Section */
      .faculty-hero {
        position: relative;
      }
      .faculty-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
      }
      .hero-content {
        position: relative;
        z-index: 2;
      }

      /* Tabs Styling */
      .faculty-tabs .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #08317a;
        margin: 0 10px;
        transition: all 0.3s;
        padding: 10px 25px;
        font-size: 1rem;
      }

      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000 !important;
      }

      /* Card */
      .card {
        border-radius: 1rem;
      }

      /* Responsive */
      @media (max-width: 768px) {
        .hero-content {
          margin-top: 100px !important;
        }
        .nav-pills .nav-link {
          margin: 5px !important;
          font-size: 0.9rem;
          padding: 8px 16px;
        }
      }
    `,
        }}
      />
    </div>
  );
};

export default SponsoredResearch;
