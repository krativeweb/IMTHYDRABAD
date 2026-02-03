"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";

export default function GlobalImmersionProgram() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ------------------------------------
     FETCH PAGE DATA
  ------------------------------------ */
useEffect(() => {
  const fetchPage = async () => {
    try {
      const res = await fetch(`${API_URL}/api/mandatory/slug/global-immersion`);
      const json = await res.json();

      // ✅ API already returns page object directly
      setPageData(json);
    } catch (error) {
      console.error("Failed to load Global Immersion Program page", error);
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
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  /* ------------------------------------
     BOOTSTRAP YELLOW LOADER
  ------------------------------------ */
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "100vh",
          backgroundColor: "#fffbea",
        }}
      >
        <div className="text-center">
          <div
            className="spinner-border text-warning mb-3"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <h6 className="fw-bold text-warning">
            Loading content, please wait...
          </h6>
        </div>
      </div>
    );
  }

  if (!pageData) return null;

  const { page_title, banner_image, banner_text, page_content } = pageData;

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
        background: #ffc107;
        color: #000000;
      }

      /* Active tab styling */
      .nav-pills .nav-link.active {
        background-color: var(--bs-warning) !important;
        color: var(--bs-dark) !important;
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

      {/* Faculty Section */}
      <section className="faculty-section">
        {/* HERO (DYNAMIC) */}
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

        {/* BREADCRUMB */}
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

        {/* PAGE CONTENT FROM CMS */}
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
