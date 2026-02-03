"use client";

import PlacementAlliances from "@/sections/PlacementAlliances.jsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

export default function StandardsOfScholarship() {
  const [pageData, setPageData] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ------------------------------
     INIT AOS
  ------------------------------ */
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
    }
  }, []);

  /* ------------------------------
     FETCH CMS DATA
  ------------------------------ */
  useEffect(() => {
    if (!API_URL) return;

    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/mandatory/slug/standards-of-scholarship`
        );
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error(
          "Failed to load Standards of Scholarship page",
          err
        );
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

      {/* Main Section */}
      <section className="faculty-section">
        {/* Hero Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          data-aos="fade-up"
          style={{
            backgroundImage: pageData?.banner_image
              ? `url(${API_URL}${pageData.banner_image})`
              : undefined,
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: pageData?.banner_text
                ? DOMPurify.sanitize(pageData.banner_text)
                : `
                  <h2 class="display-5 fw-bold mb-2">
                    Standards Of Scholarship And Professionalism
                  </h2>
                  <p class="text-white">
                    Recognizing merit, nurturing integrity.<br/>
                    Our scholarships reward excellence and encourage professionalism
                    grounded in ethics, diligence, and leadership potential.
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
                  Standards Of Scholarship And Professionalism
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Policy Content */}
        <section id="executive-education" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
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

        {/* Placement Alliances */}
        <section
          className="placement-alliances-section py-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <PlacementAlliances />
        </section>
      </section>


      <style
  dangerouslySetInnerHTML={{
    __html: `
      .table-responsive {
        border-radius: 0.5rem;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
        margin-bottom: 1rem;
      }
      .owl-carousel .item {
        background: #ffffff;
        padding: 30px;
        border-radius: 8px;
        text-align: center;
        transition: transform 0.3s;
      }
      .owl-carousel .item:hover {
        transform: translateY(-5px);
      }
      .owl-carousel .item img {
        max-height: 80px;
        object-fit: contain;
      }
      .custom-card {
        transition: background-color 0.3s ease, transform 0.3s ease;
        cursor: pointer;
      }
      .custom-card:hover {
        background-color: #ffc107;
        border: 1px solid #03255f;
        transform: translateY(-5px);
      }

      /* Faculty Hero */
      .faculty-hero {
        background: url("./media/banners/carrier.webp") center/cover no-repeat;
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
      .faculty-hero h2 {
        margin-top: 150px;
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
        background: #5390d9;
        color: #ffffffff;
        transform: translateY(-3px);
      }

      /* Tabs */
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
    `,
  }}
/>
    </>
  );
}
