"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function CorporateConnect() {
  const [seo, setSeo] = useState(null);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- Fetch Data ---------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [seoRes, contentRes] = await Promise.all([
          fetch(`${API}/api/corporate-connect-seo`),
          fetch(`${API}/api/corporate-connect`),
        ]);

        const seoData = await seoRes.json();
        const contentData = await contentRes.json();

        setSeo(seoData?.[0]);
        setContent(contentData);
      } catch (err) {
        console.error("Corporate Connect API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader fullScreen />;

  /* ---------------- Helpers ---------------- */
  const getTabData = (type) =>
    content
      .filter((item) => item.tab_type === type && !item.is_deleted)
      .sort((a, b) => b.academic_year.localeCompare(a.academic_year));

  const renderInnerTabs = (tabType, prefix) => {
    const data = getTabData(tabType);

    return (
      <>
        {/* Year Tabs */}
        <ul className="nav nav-pills justify-content-center mb-4">
          {data.map((item, index) => (
            <li className="nav-item mx-1" key={item._id}>
              <button
                className={`nav-link ${index === 0 ? "active" : ""}`}
                data-bs-toggle="pill"
                data-bs-target={`#${prefix}-${item.academic_year}`}
              >
                {item.academic_year}
              </button>
            </li>
          ))}
        </ul>

        {/* Year Content */}
        <div className="tab-content">
          {data.map((item, index) => (
            <div
              key={item._id}
              className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
              id={`${prefix}-${item.academic_year}`}
              dangerouslySetInnerHTML={{ __html: item.tab_content }}
            />
          ))}
        </div>
      </>
    );
  };

  /* ---------------- JSX ---------------- */
  return (
    <>
      {/* HERO */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: `url(${API}${seo?.banner_image})`,
            backgroundSize: "cover",
            height: "60vh",
            backgroundPosition: "center",
          }}
          dangerouslySetInnerHTML={{ __html: seo?.banner_text }}
        />

        {/* Breadcrumb */}
        <div className="breadcrumb p-4" style={{ background: "#163977" }}>
          <div className="container-fluid">
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
                {seo?.page_title}
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-5 faculty-tabs">
        <div className="container">
          <h2
            className="section-title text-center mb-4"
            style={{ color: "#08317a" }}
          >
            {seo?.page_title}
          </h2>

          {/* MAIN TABS */}
          <ul className="nav nav-pills justify-content-center mb-4">
            <li className="nav-item mx-1">
              <button
                className="nav-link active"
                data-bs-toggle="pill"
                data-bs-target="#panel"
              >
                Panel Discussion
              </button>
            </li>
            <li className="nav-item mx-1">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#leadership"
              >
                Leadership Series
              </button>
            </li>
            <li className="nav-item mx-1">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#guest"
              >
                Guest Lectures
              </button>
            </li>
          </ul>

          <div className="tab-content card bg-light p-4">
            {/* PANEL */}
            <div className="tab-pane fade show active" id="panel">
              <h4
                className="text-center fw-semibold mb-4"
                style={{ color: "#08317a" }}
              >
                Panel Discussion
              </h4>
              {renderInnerTabs("Panel Discussion", "panel")}
            </div>

            {/* LEADERSHIP */}
            <div className="tab-pane fade" id="leadership">
              <h4
                className="text-center fw-semibold mb-4"
                style={{ color: "#08317a" }}
              >
                Leadership Series
              </h4>
              {renderInnerTabs("Leadership Series", "leader")}
            </div>

            {/* GUEST */}
            <div className="tab-pane fade" id="guest">
              <h4
                className="text-center fw-semibold mb-4"
                style={{ color: "#08317a" }}
              >
                Guest Lectures
              </h4>
              {renderInnerTabs("Guest Lectures", "guest")}
            </div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Faculty Hero */
        .faculty-hero {
 
          position: relative;
          background-size: cover;
          height: 60vh;
            background-position: center !important;
        }
        .faculty-hero::before {
          content: '';
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
        .nav-pills .nav-link.active,
        .nav-pills .show > .nav-link {
          border-radius: 50rem !important;
          background: #ffc107 !important;
          color: #333 !important;
        }
        .nav-pills .nav-link {
          border-radius: 30px;
          background: #e9ecef;
          color: #333;
        }

        /* List Group */
        .list-group-item {
          background-color: transparent;
          border: none;
        }

        /* Container adjustments */
        @media (min-width: 1200px) {
          .container-fluid {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
        }
        @media (max-width: 768px) {
          .container-fluid {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
        }

        .mx-1 {
          margin-top: 10px;
        }
      `,
        }}
      />
    </>
  );
}
