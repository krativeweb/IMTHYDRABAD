"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Faculties from "@/seo-page/FacultiesClient";
import VideoCarouselSection from "@/components/VideoSection";
import Loader from "@/components/Loader";

export default function PGDMProgramsSection() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ---------------- EMBLA ---------------- */
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  /* ---------------- PAGE DATA ---------------- */
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await fetch(`${API_URL}/api/about-pgdm`);
        const json = await res.json();
        setPageData(json[0]);
      } catch (err) {
        console.error("Failed to load PGDM page", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [API_URL]);

  /* ---------------- AOS ---------------- */
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1000, once: true });
      });
    }
  }, []);

  /* ---------------- LOADER ---------------- */
  if (loading) return <Loader fullScreen />;
  if (!pageData) return null;

  return (
    <>
      {/* ---------------- BANNER ---------------- */}
      <div
        className="faculty-hero-pgdm text-center text-white py-5"
        style={{
          background: `url(${API_URL}${pageData.banner_image}) center/cover no-repeat`,
        }}
        data-aos="fade-up"
      >
        <div dangerouslySetInnerHTML={{ __html: pageData.banner_text }} />
      </div>

      {/* ---------------- BREADCRUMB ---------------- */}
      <div
        className="breadcrumb p-4"
        style={{ backgroundColor: "rgb(22,57,119)" }}
      >
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
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
                {pageData.page_title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ---------------- INTRODUCTION ---------------- */}
      <div className="container py-3">
        <h2
          className="section-title text-center mb-4"
          style={{ color: "#08317a" }}
        >
          About-PGDM-Programs
        </h2>

        <div dangerouslySetInnerHTML={{ __html: pageData.introduction }} />
      </div>

      {/* ---------------- TABS ---------------- */}
      <section className="py-4">
        <div className="container">
          {/* TAB BUTTONS (STATIC) */}
          <div className="tabs-container">
            <ul className="nav nav-pills justify-content-center flex-wrap">
              <li className="nav-item">
                <button
                  className="tab-button active"
                  data-bs-toggle="tab"
                  data-bs-target="#leap"
                >
                  Programs Uniqueness: LEAP
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="tab-button"
                  data-bs-toggle="tab"
                  data-bs-target="#specializations"
                >
                  Specializations
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="tab-button"
                  data-bs-toggle="tab"
                  data-bs-target="#structure"
                >
                  Program Structure
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="tab-button"
                  data-bs-toggle="tab"
                  data-bs-target="#calendar"
                >
                  Academic Calendar
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="tab-button"
                  data-bs-toggle="tab"
                  data-bs-target="#placements"
                >
                  Placements
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="tab-button"
                  data-bs-toggle="tab"
                  data-bs-target="#faculty"
                >
                  Faculty
                </button>
              </li>
            </ul>
          </div>

          {/* TAB CONTENT */}
          <div className="tab-content mt-4">
            <div className="tab-pane fade show active" id="leap">
              <div
                dangerouslySetInnerHTML={{
                  __html: pageData.program_uniqueness,
                }}
              />
            </div>

            <div className="tab-pane fade" id="specializations">
              <div
                dangerouslySetInnerHTML={{ __html: pageData.specializations }}
              />
            </div>

            <div className="tab-pane fade" id="structure">
              <div
                dangerouslySetInnerHTML={{ __html: pageData.program_structure }}
              />
            </div>

            <div className="tab-pane fade" id="calendar">
              <div
                dangerouslySetInnerHTML={{ __html: pageData.academic_calendar }}
              />
            </div>

            <div className="tab-pane fade" id="placements">
              <div dangerouslySetInnerHTML={{ __html: pageData.placement }} />
            </div>

            {/* FACULTY (STATIC) */}
            <div className="tab-pane fade" id="faculty">
              <Faculties />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- VIDEO CAROUSEL ---------------- */}
      <VideoCarouselSection emblaRef={emblaRef} />

      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* General Table Styles */
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

      /* Faculty Hero */
.faculty-hero-pgdm {
  background: url("/media/banners/pgdm.webp") center/cover no-repeat !important;
  position: relative;
  height: 60vh;
}
.faculty-hero-pgdm::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
}
      .faculty-hero-pgdm h2,
      .faculty-hero-pgdm p {
        position: relative;
        z-index: 1;
      }
      .faculty-hero-pgdm h2 {
        margin-top: 150px;
      }

      /* Faculty Card */
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
        background: #5390d9;
        color: #ffffffff;
        transform: translateY(-3px);
      }
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000000ff !important;
      }
      .faculty-tabs .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #333;
        transition: all 0.3s;
      }

      /* Tabs Styles */
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
        color: #000;
        font-weight: 600;
        transition: all 0.3s ease;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
      }
      .tab-button:hover {
        background: #d0d0d0;
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      }
      .tab-button.active {
        background: #ffc107;
        color: #000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      .tab-content {
        background: white;
        border-radius: 12px;
        padding: 2.5rem;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        border: 1px solid #eee;
      }

      /* Content Styles */
      .content-section h4 {
        color: #004a80;
        margin-bottom: 1.5rem;
        padding-bottom: 0.8rem;
        border-bottom: 2px solid #e9ecef;
      }
      .content-section h5 {
        color: #0066cc;
        margin: 1.5rem 0 1rem;
      }

      /* Specialization Cards */
      .specialization-card {
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        height: 100%;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
      }
      .specialization-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
      }
      .specialization-card h5 {
        background: #004a80;
        color: white;
        padding: 12px;
        margin: 0;
        border-radius: 10px 10px 0 0;
      }
      .specialization-card ul {
        padding: 1.5rem;
        list-style-type: none;
      }
      .specialization-card li {
        margin-bottom: 0.8rem;
        padding-left: 1.5rem;
        position: relative;
      }
      .specialization-card li:before {
        content: "•";
        color: #004a80;
        font-weight: bold;
        font-size: 24px;
        position: absolute;
        left: 0;
      }

      /* Program Structure Tables */
      .program-structure-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
      }
      .program-structure-table th {
        background-color: #004a80;
        color: white;
        padding: 12px 15px;
        text-align: left;
      }
      .program-structure-table td {
        padding: 10px 15px;
        border-bottom: 1px solid #e0e0e0;
      }
      .program-structure-table tr:last-child td {
        border-bottom: none;
      }

      /* Accordion Styles */
      .accordion-button {
        background: #f8f9fa;
        font-weight: 600;
        color: #004a80;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        margin-bottom: 8px;
      }
      .accordion-button:not(.collapsed) {
        background: #e9f0fa;
        color: #004a80;
        box-shadow: none;
      }
      .accordion-item {
        border: none;
        border-radius: 8px;
        margin-bottom: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
      }

      /* Placements Section */
      .placement-card {
        text-align: center;
        padding: 1.5rem;
        border-radius: 10px;
        background: #f8f9fa;
        transition: all 0.3s ease;
      }
      .placement-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      }
      .placement-card h6 {
        color: #004a80;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }
      .placement-card h2 {
        font-size: 2.2rem;
        color: #0066cc;
        margin: 0;
        font-weight: 700;
      }

      /* Video Carousel Section */
      .video-carousel-section {
        background: #163977;
      }
      .video-wrapper {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      .video-wrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;
      }
      .video-wrapper iframe:hover {
        transform: scale(1.03);
      }
      .owl-carousel .owl-nav button.owl-prev,
      .owl-carousel .owl-nav button.owl-next {
        position: absolute;
        top: 40%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        border: none;
        padding: 10px 15px;
        border-radius: 50%;
      }
      .owl-carousel .owl-nav button.owl-prev {
        left: -25px;
      }
      .owl-carousel .owl-nav button.owl-next {
        right: -25px;
      }
      .owl-theme .owl-dots .owl-dot {
        display: inline-block;
        zoom: 1;
      }
      .owl-carousel .owl-nav button.owl-next,
      .owl-carousel .owl-nav button.owl-prev,
      .owl-carousel button.owl-dot {
        background: 0 0;
        color: white;
        border: none;
        padding: 0 !important;
        font: inherit;
        background-color: #163977 !important;
      }

      .mx-1 {
        margin-top: 9px;
      }
        .pgdm-course{
        display:none;
        }

      @media (max-width: 768px) {
        .tab-button {
          width: 100%;
          max-width: 280px;
          margin: 0.5rem auto;
        }
        .tabs-container {
          padding: 1rem;
        }
        .tab-content {
          padding: 1.5rem;
        }
        .placement-card {
          margin-bottom: 1.5rem;
        }
      }


      @media (max-width: 576px) {
        .tab-button {
          width: 100%;
          max-width: 100%;
        }
        .section-header h1 {
          font-size: 2rem;
        }
        .tab-content {
          padding: 1.5rem;
        }
      }
        /* Embla Carousel */
.embla {
  overflow: hidden;
  width: 100%;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 33.333%;
  padding: 0 12px;
}

@media (max-width: 992px) {
  .embla__slide {
    flex: 0 0 50%;
  }
}

@media (max-width: 576px) {
  .embla__slide {
    flex: 0 0 100%;
  }
}


    `,
        }}
      />
    </>
  );
}
