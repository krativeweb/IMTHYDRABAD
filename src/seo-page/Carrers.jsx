"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function Careers() {
  const [page, setPage] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ================= FETCH CMS ================= */
  useEffect(() => {
    if (!API_URL) return;

    fetch(`${API_URL}/api/mandatory/slug/careers`)
      .then((res) => res.json())
      .then((json) => {
        setPage(json);
      })
      .catch((err) => console.error("Careers CMS error:", err));
  }, [API_URL]);

  /* ================= AOS ================= */
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1200, once: true });
    });
  }, []);

  if (!page) return null;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: `url(${API_URL}${page.banner_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
          }}
        >
          {/* ✅ banner_text must be INSIDE */}
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(page.banner_text),
            }}
          />
        </div>

        {/* ================= BREADCRUMB ================= */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22 57 119)" }}
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
                  Careers
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container mt-4">
        <h2 className="section-title text-center mb-4" data-aos="fade-up">
          Careers
        </h2>

        <div className="row justify-content-center">
          <div className="col-12">
            {/* ================= STATIC TAB BUTTONS ================= */}
            <ul className="nav nav-pills" id="careersTab" role="tablist">
              <li className="nav-item">
                <button
                  className="nav-link active"
                  data-bs-toggle="pill"
                  data-bs-target="#guidelines"
                >
                  Faculty Positions - Guidelines
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#apply-faculty"
                >
                  Faculty Positions - Apply Now
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link"
                  data-bs-toggle="pill"
                  data-bs-target="#apply-non-teaching"
                >
                  Non-Teaching Positions
                </button>
              </li>
            </ul>

            {/* ================= CMS TAB CONTENT ================= */}
            <div className="card mt-4">
              {/* ❌ DO NOT add card-body / tab-content here */}
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(page.page_content),
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== ALL ORIGINAL CSS (inside <style jsx>) ===== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      :root {
        --primary-color: #ffc108;
        --secondary-color: #f8f9fa;
        --text-color: #333;
      }

      .card {
        border: none;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 30px;
      }

      .card-header {
        padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
        margin-bottom: 0;
        color: var(--bs-card-cap-color);
        background-color: rgb(220 220 220) !important;
        border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);
      }

      .nav-pills {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
      }

      .nav-pills .nav-link {
        border-radius: 50px;
        padding: 10px 25px;
        font-weight: 500;
        color: #333;
        background-color: #d3d3d3;
        transition: all 0.3s ease;
        margin: 0 5px;
      }

      .nav-pills .nav-link:hover {
        background-color: #e9ecef;
      }

      .nav-pills .nav-link.active {
        background-color: var(--primary-color);
        color: #000;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      .tab-content {
        padding: 25px;
        background-color: white;
      }

      .tab-pane {
        animation: fadeIn 0.3s ease;
      }

      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      h5 {
        color: #09327a;
        margin-top: 20px;
        margin-bottom: 15px;
        padding-bottom: 5px;
        border-bottom: 2px solid #eee;
      }

      ul {
        padding-left: 20px;
      }

      .crs_list {
        margin: 15px 0;
        padding-left: 20px;
      }

      .crs_list ul {
        list-style-type: disc;
      }

      table {
        width: 100%;
        margin: 20px 0;
        border-collapse: collapse;
      }

      th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }

      th {
        background-color: #f8f9fa;
        font-weight: 600;
      }

      .mb-4 {
        margin-bottom: 1.5rem;
      }

      @media (max-width: 768px) {
        .nav-pills {
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }

        .nav-pills .nav-link {
          padding: 8px 15px;
          font-size: 14px;
          margin: 5px;
        }
      }

      .faculty-hero {
        background: url('./media/hero.webp');
        position: relative;
        background-size: cover;
        height: 50vh;
          background-position: center !important;
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
        color: #ffffffff;
        transition: all 0.3s;
      }
      .social-icon:hover {
        background: #5390D9;
        color: #ffffffff;
        transform: translateY(-3px);
      }

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
      .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
        border-radius: 50rem !important;
        background: #ffc107 !important;
        color: #333 !important;
        transition: all 0.3s !important;
      }
      .nav-pills .nav-link {
        background-color: #e9ecef;
        border-radius: 30px;
        color: #333;  
      }
    `,
        }}
      />
    </>
  );
}
