"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function FeedbackFacility() {
  const [pageData, setPageData] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ------------------------------
     INIT AOS
  ------------------------------ */
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000, once: true });
    });
  }, []);

  /* ------------------------------
     FETCH CMS DATA
  ------------------------------ */
  useEffect(() => {
    if (!API_URL) return;

    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/mandatory/slug/feedback-faculties`
        );
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error("Failed to fetch Feedback Facility page", err);
      }
    };

    fetchPage();
  }, [API_URL]);

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

      {/* Faculty Section - Hero and Breadcrumb */}
      <section className="faculty-section">
        {/* Hero */}
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: pageData?.banner_image
              ? `url(${API_URL}${pageData.banner_image})`
              : undefined,
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
            backgroundPosition: "center",
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: pageData?.banner_text
                ? DOMPurify.sanitize(pageData.banner_text)
                : `
                  <h2 class="display-5 fw-bold mb-2">
                    Feedback Facility for Students and Faculty
                  </h2>
                  <p class="text-white">
                    Listening to grow stronger together.<br/>
                    We value constructive feedback from students, faculty, and
                    stakeholders to enhance quality and enrich experiences
                  </p>
                `,
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
                  Feedback Facility for Students and Faculty
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Page Content */}
        <section id="executive-education" className="py-5">
          <div className="container">
            <div
              className="card p-4"
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
        /* Faculty Hero */
        .faculty-hero {
          background: url('/media/banners/placement.webp') !important;
          position: relative;
          background-size: cover !important;
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
          color: #ffffff;
          transition: all 0.3s;
        }
        .social-icon:hover {
          background: #5390d9;
          color: #ffffff;
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
          color: #000000 !important;
        }
        .nav-pills .nav-link {
          border-radius: 30px;
          background-color: #e9ecef;
          color: #333;
        }
        .nav-pills .nav-link.active,
        .nav-pills .show > .nav-link {
          border-radius: 50rem !important;
          background: #ffc107 !important;
          color: #333 !important;
          transition: all 0.3s !important;
        }

        /* Table styling */
        .table thead th {
          background-color: #08317a !important;
          color: #fff;
          font-weight: 600;
        }
        .table td {
          vertical-align: middle;
        }
        .table a.btn {
          background-color: #ffc107;
          color: #000;
          border: none;
          transition: all 0.3s ease;
        }
        .table a.btn:hover {
          background-color: #e0a800;
          color: #fff;
        }
    `,
        }}
      />
    </>
  );
}
