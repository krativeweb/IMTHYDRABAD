"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function CampusPlacements() {
  const [activeTab, setActiveTab] = useState("final");
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/campus-placements`
        );
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error("Campus placements fetch error", err);
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
          {pageData.banner_text && (
            <div
              dangerouslySetInnerHTML={{ __html: pageData.banner_text }}
            />
          )}
        </div>

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22 57 119)" }}
        >
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold text-decoration-none">
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
          <h2
            className="section-title text-center mb-4"
            style={{ color: "#08317a" }}
          >
            {pageData.page_title}
          </h2>

          {/* Tabs */}
          <ul className="nav nav-pills justify-content-center mb-4">
            {[
              { id: "head", label: "Head CRO Message" },
              { id: "final", label: "Final Placements" },
              { id: "procedure", label: "Placements Procedure" },
              { id: "brochure", label: "Placements Brochure" },
              { id: "student", label: "Students Committees" },
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
            {activeTab === "final" && (
              <div dangerouslySetInnerHTML={{ __html: pageData.final_placements }} />
            )}

            {activeTab === "head" && (
              <div dangerouslySetInnerHTML={{ __html: pageData.head_cro_message }} />
            )}

            {activeTab === "procedure" && (
              <div dangerouslySetInnerHTML={{ __html: pageData.placements_procedure }} />
            )}

            {activeTab === "brochure" && (
              <div dangerouslySetInnerHTML={{ __html: pageData.placements_brochure }} />
            )}

            {activeTab === "student" && (
              <div dangerouslySetInnerHTML={{ __html: pageData.student_committees }} />
            )}

            {activeTab === "contact" && (
              <div dangerouslySetInnerHTML={{ __html: pageData.contact_us }} />
            )}
          </div>
        </div>
      </section>

      {/* === ORIGINAL CSS (Tabs, Hover, Profile Image, Tables) === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Gradient banner with subtle overlay */
      .faculty-hero {
        background: url("./media/hero.webp");
        position: relative;
        background-size: cover;
        height: 50vh;
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

      /* UPDATED: Enhanced Wide Card Styles */
      .placement-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        margin: 0 !important;
      }
      .placement-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
      }
      .placement-card img {
        transition: transform 0.3s ease;
      }
      .placement-card:hover img {
        transform: scale(1.02);
      }

      @media (min-width: 1200px) {
        .container-fluid {
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }
      }
      @media (max-width: 768px) {
        .placement-card {
          max-height: 60vh;
          border-radius: 1rem !important;
        }
        .container-fluid {
          padding-left: 0.5rem !important;
          padding-right: 0.5rem !important;
        }
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
        background: #ffc107 !important;
        color: #000000ff !important;
      }
      .small-placeholder::placeholder {
        font-size: 0.85rem;
      }
      .nav-pills .nav-link.active,
      .nav-pills .show > .nav-link {
        border-radius: 50rem !important;
        background: #ffc107 !important;
        color: #333 !important;
        transition: all 0.3s !important;
      }
      .nav-pills .nav-link {
        border-radius: var(--bs-nav-pills-border-radius);
        background-color: #e9ecef;
        border-radius: 30px;
        color: #333;
      }

      /* Adjusted Image Margin */
      .profile-img {
        float: left;
        margin: 0 1.5rem 0.5rem 0;
        width: 150px;
        height: 200px;
        object-fit: cover;
        border-radius: 0.75rem;
        border: 2px solid #0d0d0dff;
        box-shadow: 0 5px 15px rgba(56, 54, 51, 0.3);
      }

      /* Removed Top Margin from First Paragraph */
      .inv-txt:first-of-type {
        margin-top: 0;
      }
    `,
        }}
      />
    </>
  );
}
