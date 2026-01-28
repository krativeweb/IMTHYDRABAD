"use client";

import PlacementAlliances from "@/sections/PlacementAlliances.jsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Committees() {
  const [pageData, setPageData] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ------------------------------
     INIT AOS
  ------------------------------ */
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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
          `${API_URL}/api/mandatory/slug/committees`
        );
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error("Failed to load Committees page", err);
      }
    };

    fetchPage();
  }, [API_URL]);

  return (
    <>
      {/* Hero + Breadcrumb */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: pageData?.banner_image
              ? `url(${API_URL}${pageData.banner_image})`
              : "url('/media/banners/faculty.webp')",
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
                  <h2 class="display-5 fw-bold mb-2">Committees</h2>
                  <p class="text-white">
                    Governed by transparency, guided by integrity.<br/>
                    Our committees ensure academic quality, accountability, and ethical decision-making.
                  </p>
                `,
            }}
          />
        </div>

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
                  Committees
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Committees Section */}
      <section id="committees" className="py-5">
        <div className="container">
          <h2
            className="section-title text-center mb-4"
            style={{ color: "#08317a" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Committees
          </h2>

          {/* ===============================
              STATIC TABS (DO NOT TOUCH)
          =============================== */}
          <ul
            className="nav nav-pills justify-content-center mb-4"
            id="CommitteesTabs"
            role="tablist"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <li className="nav-item mx-1">
              <button
                className="nav-link active"
                data-bs-toggle="pill"
                data-bs-target="#long"
                type="button"
              >
                Anti-Ragging
              </button>
            </li>
            <li className="nav-item mx-1">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#firsttime"
                type="button"
              >
                Internal Complaints Committee
              </button>
            </li>
            <li className="nav-item mx-1">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#Grievance"
                type="button"
              >
                Grievance Redressal Committee
              </button>
            </li>
            <li className="nav-item mx-1">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#Anti"
                type="button"
              >
                Anti Drug Committee
              </button>
            </li>
          </ul>

          <hr />

          {/* ===============================
              TAB CONTENT (FROM CMS)
          =============================== */}
          <div
            className="tab-content card bg-light p-4"
            data-aos="fade-up"
            data-aos-delay="200"
            dangerouslySetInnerHTML={{
              __html: pageData?.page_content
                ? DOMPurify.sanitize(pageData.page_content)
                : "",
            }}
          />
        </div>
      </section>

      {/* Placement Alliances Section */}
      <section
        className="placement-alliances-section py-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <PlacementAlliances />
      </section>

         <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Faculty Hero */
      .faculty-hero {
        background: url('/media/banners/faculty.webp');
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

      /* Nav Pills */
      .nav-pills .nav-link.active,
      .nav-pills .show > .nav-link {
        border-radius: 50rem !important;
        background: #ffc107 !important;
        color: #333 !important;
        transition: all 0.3s !important;
      }
      .nav-pills .nav-link {
        border-radius: 30px;
        background-color: #e9ecef;
        color: #333;
      }

      /* Owl Carousel */
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

      /* Custom Card */
      .custom-card {
        transition: background-color 0.3s ease, transform 0.3s ease;
        cursor: pointer;
      }
      .custom-card:hover {
        background-color: #ffc107;
        border: 1px solid #03255f;
        transform: translateY(-5px);
      }

      /* Table Styling */
      .table-responsive {
        margin-top: 1rem;
      }
      .table th,
      .table td {
        vertical-align: middle;
      }
      .thead-dark {
        background-color: #08317a;
        color: white;
      }
      .table-striped tbody tr:nth-of-type(odd) {
        background-color: rgba(0, 0, 0, 0.05);
      }
      .table-hover tbody tr:hover {
        background-color: rgba(0, 0, 0, 0.075);
      }
      .table-bordered {
        border: 1px solid #dee2e6;
      }
      .table-bordered th,
      .table-bordered td {
        border: 1px solid #dee2e6;
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
