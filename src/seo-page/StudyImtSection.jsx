// app/studying/page.jsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";
export default function StudyingPage() {
  // -----------------------------------------------------------------
  // Initialise AOS (once, client-side only)
  // -----------------------------------------------------------------
  const [pageData, setPageData] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.init({
        duration: 1200,
        once: true,
      });
    }
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/student-activities`)
      .then((res) => res.json())
      .then((data) => {
        setItems(Array.isArray(data) ? data : []);
      })
      .catch(console.error);
  }, []);
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/mandatory/slug/studying-at-imt-hyderabad`
        );
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error("Failed to fetch studying page:", err);
      }
    };

    fetchPage();
  }, []);

  const mid = Math.ceil(items.length / 2);
  const leftItems = items.slice(0, mid);
  const rightItems = items.slice(mid);
  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: `url(${
              pageData?.banner_image
                ? `${process.env.NEXT_PUBLIC_API_URL}${pageData.banner_image}`
                : "/media/banners/aboutus.webp"
            })`,
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
          }}
        >
          {pageData?.banner_text ? (
            <div dangerouslySetInnerHTML={{ __html: pageData.banner_text }} />
          ) : (
            <>
              <h2 className="display-5 fw-bold mb-2">
                Studying at IMT Hyderabad
              </h2>
              <p className="text-white">
                A community where students grow, collaborate, and lead.
              </p>
            </>
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
                  <Link
                    style={{ textDecoration: "none" }}
                    href="/"
                    className="text-white fw-bold"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Studying at IMT Hyderabad
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <InternationalAssociationStickyBtns />
        {/* ===== MAIN CONTENT ===== */}
        <div className="container py-3">
          {/* Header */}
          <div className="section-header">
            <h2
              className="section-title text-center mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Studying at IMT Hyderabad
            </h2>
          </div>

          {/* ==== TABS ==== */}
          <div className="tabs-container">
            <ul
              className="nav nav-pills justify-content-center flex-wrap"
              id="pgdmTabs"
              role="tablist"
            >
              {[
                { id: "THE-PGDM-PROGRAMS", label: "THE PGDM PROGRAMS" },
                { id: "COURSE", label: "COURSE LOAD" },
                {
                  id: "ASSESSMENT-AND-FEEDBACK",
                  label: "ASSESSMENT AND FEEDBACK",
                },
                { id: "Term-Dates", label: "Term Dates" },
                { id: "Attendence", label: "Attendence" },
                { id: "MISSED-EVALUATIONS", label: "MISSED EVALUATIONS" },
                { id: "STUDENT", label: "STUDENT ACTIVITIES" },
                { id: "CAMPUS", label: "CAMPUS ADDRESS" },
              ].map((tab) => (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <button
                    className={`tab-button ${
                      tab.id === "THE-PGDM-PROGRAMS" ? "active" : ""
                    }`}
                    id={`${tab.id}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${tab.id}`}
                    type="button"
                    role="tab"
                    aria-controls={tab.id}
                    aria-selected={tab.id === "THE-PGDM-PROGRAMS"}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ==== TAB CONTENT ==== */}
          {pageData?.page_content && (
            <div dangerouslySetInnerHTML={{ __html: pageData.page_content }} />
          )}

          {/* ==== ACCORDIONS – STUDENT ACTIVITIES & LOGISTICS ==== */}
        <div className="container py-5 px-4">
  <h2
    className="s-heading text-center mb-4"
    style={{ color: "#08317a", fontWeight: 700 }}
  >
    STUDENT ACTIVITIES &amp; LOGISTICS
  </h2>
          
          <div className="row g-4">
            {/* -------- LEFT COLUMN -------- */}
            <div className="col-12 col-md-6">
              <div className="accordion" id="accordionLeft">
                {leftItems.map((item, i) => (
                  <div
                    key={item._id}
                    className="accordion-item border-0 shadow-sm mb-3"
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button bg-warning text-dark fw-bold shadow-sm collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target={`#left-${i}`}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`left-${i}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionLeft"
                    >
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{
                          __html: item.content,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* -------- RIGHT COLUMN -------- */}
            <div className="col-12 col-md-6">
              <div className="accordion" id="accordionRight">
                {rightItems.map((item, i) => (
                  <div
                    key={item._id}
                    className="accordion-item border-0 shadow-sm mb-3"
                  >
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button bg-warning text-dark fw-bold shadow-sm collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target={`#right-${i}`}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`right-${i}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionRight"
                    >
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{
                          __html: item.content,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* ===== ALL ORIGINAL STYLES (preserved 1:1) ===== */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
      body {
        background-color: #f5f7fa;
        color: #333;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .container {
        max-width: 1200px;
      }

      .tabs-container {
        padding: 1.5rem;
        border-radius: 12px;
        margin-bottom: 2rem;
      }

      .tab-button {
        border: none;
        border-radius: 50px;
        padding: 12px 28px;
        margin: 0 8px 12px;
        background: #e0e0e0;
        color: #000;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      }

      .tab-button:hover {
        background: #d0d0d0;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }

      .tab-button.active {
        background: #FFC107;
        color: #000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }

      .tab-content {
        background: white;
        border-radius: 12px;
        padding: 2.5rem;
        box-shadow: 0 8px 30px rgba(0,0,0,0.08);
        border: 1px solid #eee;
      }

      .faculty-hero {
        background: url('/media/hero.webp');
        position: relative;
        background-size: cover;
        height: 50vh;
      }
      .faculty-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.3);
      }
      .faculty-hero h2,
      .faculty-hero p {
        position: relative;
        z-index: 1;
      }
      .faculty-hero h2 {
        margin-top: 150px;
      }

      .faculty-card {
        background: #f8f9fa;
        border: none;
        border-radius: 1.5rem;
      }

      .faculty-img {
        border-radius: 1.2rem;
        transition: transform 0.4s ease;
      }
      .faculty-img:hover {
        transform: scale(1.03);
      }

      .social-icon {
        display: inline-flex;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        justify-content: center;
        align-items: center;
        background: #ffc107;
        color: #fff;
        transition: all 0.3s;
      }
      .social-icon:hover {
        background: #5390D9;
        color: #fff;
        transform: translateY(-3px);
      }

      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000 !important;
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
        background: #e9ecef;
        border-radius: 30px;
        color: #333;
      }
    `,
          }}
        />
      </section>
    </>
  );
}
