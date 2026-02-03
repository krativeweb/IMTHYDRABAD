"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/Loader";

export default function ResearchPublication() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ------------------------------------
     INIT AOS (ONCE)
  ------------------------------------ */
  useEffect(() => {
    if (typeof window === "undefined") return;

    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  /* ------------------------------------
     FETCH CMS PAGE
  ------------------------------------ */
  useEffect(() => {
    if (!API_URL) return;

    setLoading(true);

    fetch(`${API_URL}/api/research-publication`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        // API returns array
        setPage(Array.isArray(data) ? data[0] : data);
      })
      .catch((err) => console.error("Research publication fetch error:", err))
      .finally(() => setLoading(false));
  }, [API_URL]);

  /* ------------------------------------
     REFRESH AOS AFTER CMS HTML LOAD
  ------------------------------------ */
  useEffect(() => {
    if (!page) return;

    import("aos").then((AOS) => {
      AOS.refreshHard();
    });
  }, [page]);

  /* ------------------------------------
     LOADER
  ------------------------------------ */
  if (loading) return <Loader fullScreen />;

  if (!page) return null;

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* ================= HERO ================= */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white d-flex align-items-center justify-content-center"
          style={{
            background: `url(${API_URL}${page.banner_image}) center/cover no-repeat`,
            height: "60vh",
            position: "relative",
          }}
        >
          <div
            className="hero-content"
            data-aos="fade-up"
            dangerouslySetInnerHTML={{ __html: page.banner_text }}
          />
        </div>

        {/* ================= BREADCRUMB ================= */}
        <div className="breadcrumb p-4">
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold">
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  {page.page_title}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ================= PAGE CONTENT ================= */}

        {/* ================= RESEARCH PUBLICATIONS ================= */}
        <div
          className="container-fluid border-bottom text-center mt-4"
          data-aos="fade-up"
        >
          <h3 className="fw-bold text-warning text-uppercase">
            Research Publications
          </h3>
        </div>

        <div className="container my-4" data-aos="fade-up">
          <div
            dangerouslySetInnerHTML={{
              __html: page.research_publications,
            }}
          />
        </div>

        {/* Journal Publications */}
        <div
          className="container-fluid border-bottom text-center mt-5 pt-4"
          data-aos="fade-up"
        >
          <h3 className="fw-bold text-warning">Journal Publication</h3>
        </div>

        <div className="container my-4" data-aos="fade-up">
          <div
            dangerouslySetInnerHTML={{
              __html: page.journal_publications,
            }}
          />
        </div>

        {/* Cases */}
        <div
          className="container-fluid border-bottom py-3 text-center"
          data-aos="fade-up"
        >
          <h3 className="fw-bold text-warning">Cases</h3>
        </div>

        <div className="container my-4" data-aos="fade-up">
          <div
            dangerouslySetInnerHTML={{
              __html: page.cases,
            }}
          />
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Faculty Hero */
      .faculty-hero {
        background: url("/media/banners/researcharchive.webp") center/cover no-repeat, #f0f0f0;
        position: relative;
        height: 60vh;
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
      // .faculty-hero h2 {
      //   margin-top: 150px;
      // }

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }
      .breadcrumb-item a {
        text-decoration: none;
      }

      /* Card Styling */
      .faculty-card {
        background: #f8f9fa;
        border: none;
        border-radius: 1.5rem;
      }

      /* Image Glow & Hover Effect */
      .faculty-img {
        border-radius: 1.2rem;
        transition: transform 0.4s ease;
      }
      .faculty-img:hover {
        transform: scale(1.03);
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
        color: #ffffffff;
        transition: all 0.3s;
      }
      .social-icon:hover {
        background: #5390D9;
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

      /* Section Headers */
      .section-header {
        background-color: #163977;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }

      /* Content Sections */
      .content-section {
        background: #fff;
        padding: 1.5rem;
        border: 1px solid #ddd;
        border-radius: 0.25rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    `,
        }}
      />
    </>
  );
}
