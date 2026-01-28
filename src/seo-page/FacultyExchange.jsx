"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";

export default function FacultyExchange() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ------------------------------------
     FETCH PAGE DATA BY SLUG
  ------------------------------------ */
  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/mandatory/slug/faculty-exchange`
        );
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error("Failed to fetch faculty exchange page", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [API_URL]);

  /* ------------------------------------
     INIT AOS
  ------------------------------------ */
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000, once: true });
    });
  }, []);

  if (loading || !pageData) return null;

  const { banner_image, banner_text, page_content, page_title } = pageData;

  return (
    <>
      {/* Embedded CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Faculty Hero */
        .faculty-hero {
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
        .nav-pills .nav-link {
          border-radius: 50rem;
          background: #e9ecef;
          color: #333;
          transition: all 0.3s;
        }
        .nav-pills .nav-link.active {
          background: #ffc107 !important;
          color: #000000 !important;
        }
    `,
        }}
      />

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* =========================
          HERO SECTION (DYNAMIC)
      ========================== */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: `url(${API_URL}${banner_image})`,
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(banner_text),
            }}
          />
        </div>

        {/* =========================
            BREADCRUMB
        ========================== */}
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
                  {page_title}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <InternationalAssociationStickyBtns />

        {/* =========================
            PAGE CONTENT (DYNAMIC)
        ========================== */}
        <section className="pb-5">
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(page_content),
            }}
          />
        </section>
      </section>
    </>
  );
}
