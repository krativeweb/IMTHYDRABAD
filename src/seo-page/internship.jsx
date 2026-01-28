"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/Loader";

export default function SummerInternships() {
  const [activeTab, setActiveTab] = useState("head");
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/internship-page`
        );
        const json = await res.json();

        // ✅ API RETURNS ARRAY
        if (Array.isArray(json) && json.length > 0) {
          setPageData(json[0]);
        }
      } catch (error) {
        console.error("Failed to load Internship page", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, []);

  if (loading || !pageData) return <Loader fullScreen />;

  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: pageData.banner_image
              ? `url(${process.env.NEXT_PUBLIC_API_URL}${pageData.banner_image})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            position: "relative",
          }}
        >
          <div className="hero-overlay" />
          <div className="hero-content">
            <div dangerouslySetInnerHTML={{ __html: pageData.banner_text }} />
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link
                    href="/"
                    className="text-white fw-bold text-decoration-none"
                  >
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
      </section>

      {/* ================= PAGE CONTENT ================= */}
      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">
            {pageData.page_title}
          </h2>

          {/* Tabs */}
          <ul className="nav nav-pills justify-content-center mb-4">
            {[
              { id: "head", label: "Head CRO Message" },
              { id: "program", label: "Internship Program" },
              { id: "procedure", label: "Internship Procedure" },
              { id: "student", label: "Student Committees" },
              { id: "recruiters", label: "Recruiters Guide" },
              { id: "reports", label: "Internship Reports" },
              { id: "contact", label: "Contact Us" },
            ].map((tab) => (
              <li key={tab.id} className="nav-item mx-1 mb-2">
                <button
                  className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <hr />

          {/* ================= TAB CONTENT ================= */}
          <div className="card bg-light p-4">
            {activeTab === "head" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData.head_cro_message,
                }}
              />
            )}

            {activeTab === "program" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData.internship_program,
                }}
              />
            )}

            {activeTab === "procedure" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData.internship_procedure,
                }}
              />
            )}

            {activeTab === "student" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData.student_committees,
                }}
              />
            )}

            {activeTab === "recruiters" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData.recruiters_guide,
                }}
              />
            )}

            {activeTab === "reports" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData.internship_reports,
                }}
              />
            )}

            {activeTab === "contact" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData.contact_us,
                }}
              />
            )}
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
      .summer-internships-page {
        width: 100%;
      }

      .faculty-section {
        width: 100%;
      }

      /* Hero Banner */
      .faculty-hero {
        background: url('/media/banners/pgdmmarketing.webp') no-repeat center center;
        background-size: cover;
        height: 60vh;
        position: relative;
          background-position: center !important;
      }

      .hero-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
      }

      .hero-content {
        position: relative;
        z-index: 2;
        padding-top: 150px;
      }

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }

      /* Section Styles */
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

      .section-subtitle {
        color: #08317a;
      }

      /* Tab Navigation */
      .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #333;
        transition: all 0.3s;
      }

      .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000 !important;
      }

      /* Table Styles */
      .table-responsive {
        border-radius: 1rem;
        overflow: hidden;
      }

      .table {
        margin-bottom: 0;
      }

      .table thead.bg-warning th {
        color: #000;
      }

      .crs_list ul {
        list-style-type: disc;
        padding-left: 20px;
      }

      .crs_list ol {
        padding-left: 20px;
      }

      .inv-txt {
        line-height: 1.7;
        color: #333;
      }

      .profile-img {
        float: left;
        margin: 0 1.5rem 0.5rem 0;
        width: 150px;
        height: 200px;
        object-fit: cover;
        border-radius: 0.75rem;
        border: 2px solid #000;
        box-shadow: 0 5px 15px rgba(56, 54, 51, 0.3);
      }

      .inv-txt:first-of-type {
        margin-top: 0;
      }

      /* Responsive Adjustments */
      @media (max-width: 768px) {
        .profile-img {
          float: none;
          margin: 0 auto 1rem;
          display: block;
        }

        .section-title {
          font-size: 1.7rem;
        }
      }

      @media (max-width: 576px) {
        .section-title {
          font-size: 1.5rem;
        }
      }

      /* Social Icons */
      .social-icon {
        display: inline-flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        background: #ffc107;
        color: #ffffff;
        transition: all 0.3s;
      }

      .social-icon:hover {
        background: #5390d9;
        color: #ffffff;
        transform: translateY(-3px);
      }
    `,
        }}
      />
    </>
  );
}
