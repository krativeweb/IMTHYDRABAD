"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";
import Loader from "@/components/Loader";

const StepDubaiContent = () => {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH SEO DATA ---------------- */
useEffect(() => {
  const fetchPageData = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/mandatory/slug/step-dubai`,
      );
      const json = await res.json();

      // ✅ YOUR API RETURNS DIRECT OBJECT
      if (json?.page_slug) {
        setPageData(json);
      }
    } catch (err) {
      console.error("Failed to load Step Dubai page", err);
    } finally {
      setLoading(false);
    }
  };

  fetchPageData();
}, []);

  /* ---------------- INIT AOS ---------------- */
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

  /* ---------------- LOADER ---------------- */
  if (loading) return <Loader fullScreen />;
  if (!pageData) return null;

  return (
    <div className="step-dubai-content">
      {/* Hero Section */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: pageData.banner_image
              ? `url(${process.env.NEXT_PUBLIC_API_URL}${pageData.banner_image}) no-repeat center center`
              : "none",
            backgroundSize: "cover",
            height: "60vh",
            position: "relative",
          }}
        >
          <div
            style={{
              content: '""',
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.3)",
              zIndex: 1,
            }}
          />

          <div
            className="hero-content"
            style={{ position: "relative", zIndex: 2, marginTop: "150px" }}
            dangerouslySetInnerHTML={{
              __html: pageData.banner_text || "",
            }}
          />
        </div>

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22, 57, 119)" }}
        >
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
                  {pageData.page_title}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <InternationalAssociationStickyBtns />

        {/* Main Content */}
        <section className="py-5">
          <div
            dangerouslySetInnerHTML={{
              __html: pageData.page_content || "",
            }}
          />
        </section>
      </section>

      {/* Scoped Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
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

      .table {
        border-radius: 0.5rem;
        overflow: hidden;
      }

      .table td {
        vertical-align: middle;
        font-size: 1rem;
      }

      .table a {
        text-decoration: underline;
        transition: color 0.3s;
      }

      .table a:hover {
        color: #ffc107 !important;
      }

      @media (max-width: 768px) {
        .hero-content {
          margin-top: 100px !important;
        }
        .hero-content h2 {
          font-size: 1.8rem;
        }
        .table {
          font-size: 0.9rem;
        }
      }
    `,
        }}
      />
    </div>
  );
};

export default StepDubaiContent;
