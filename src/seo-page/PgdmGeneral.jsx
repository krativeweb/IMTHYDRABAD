"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import VideoCarouselSection from "@/components/VideoSection";
import Loader from "@/components/Loader";

export default function PGDMGeneralSection() {
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
        const res = await fetch(`${API_URL}/api/pgdm-general`);
        const json = await res.json();
        setPageData(json[0]);
      } catch (err) {
        console.error("Failed to load PGDM General page", err);
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
      {/* ---------------- GTM ---------------- */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* ---------------- BANNER ---------------- */}
      <div
        className="faculty-hero text-center text-white py-5"
        style={{
          background: `url(${API_URL}${pageData.banner_image}) center/cover no-repeat`,
        }}
        data-aos="fade-up"
      >
        <div dangerouslySetInnerHTML={{ __html: pageData.banner_text }} />
      </div>

      {/* ---------------- BREADCRUMB ---------------- */}
      <div className="breadcrumb p-4">
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

      {/* ---------------- TABS SECTION ---------------- */}
      <section id="pgdm-tabs" className="py-5 faculty-tabs">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-center fw-bold mb-4" style={{ color: "#08317a" }}>
            {pageData.page_title}
          </h2>

          <p className="text-center mb-5" style={{ color: "#08317a" }}>
            {pageData.meta_description}
          </p>

          {/* -------- TAB BUTTONS (STATIC) -------- */}
          <ul className="nav nav-pills justify-content-center mb-4 flex-wrap">
            <li className="nav-item m-1">
              <button
                className="nav-link active fw-bold"
                data-bs-toggle="pill"
                data-bs-target="#curriculum"
              >
                CURRICULUM
              </button>
            </li>
            <li className="nav-item m-1">
              <button
                className="nav-link fw-bold"
                data-bs-toggle="pill"
                data-bs-target="#keyfeatures"
              >
                KEY FEATURES
              </button>
            </li>
            <li className="nav-item m-1">
              <button
                className="nav-link fw-bold"
                data-bs-toggle="pill"
                data-bs-target="#programoutcome"
              >
                PROGRAM OUTCOME
              </button>
            </li>
            <li className="nav-item m-1">
              <button
                className="nav-link fw-bold"
                data-bs-toggle="pill"
                data-bs-target="#pedagogy"
              >
                PEDAGOGY
              </button>
            </li>
            <li className="nav-item m-1">
              <button
                className="nav-link fw-bold"
                data-bs-toggle="pill"
                data-bs-target="#career"
              >
                CAREER OPPORTUNITIES
              </button>
            </li>
            <li className="nav-item m-1">
              <button
                className="nav-link fw-bold"
                data-bs-toggle="pill"
                data-bs-target="#competency"
              >
               Program Learning Outcomes
              </button>
            </li>
          </ul>

          {/* -------- TAB CONTENT (FROM DB) -------- */}
          <div className="card">
            <div className="card-body">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="curriculum">
                  <div
                    dangerouslySetInnerHTML={{ __html: pageData.curriculum }}
                  />
                </div>

                <div className="tab-pane fade" id="keyfeatures">
                  <div
                    dangerouslySetInnerHTML={{ __html: pageData.key_features }}
                  />
                </div>

                <div className="tab-pane fade" id="programoutcome">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: pageData.program_outcome,
                    }}
                  />
                </div>

                <div className="tab-pane fade" id="pedagogy">
                  <div
                    dangerouslySetInnerHTML={{ __html: pageData.pedagogy }}
                  />
                </div>

                <div className="tab-pane fade" id="career">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: pageData.career_opportunities,
                    }}
                  />
                </div>

                <div className="tab-pane fade" id="competency">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: pageData.competency_goal,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- VIDEO SECTION ---------------- */}
      <VideoCarouselSection emblaRef={emblaRef} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Faculty Hero */
      .faculty-hero {
        background: url("/media/banners/programs.webp") center/cover no-repeat;
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

      /* Faculty Tabs */
      .faculty-tabs .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #08317a;
        margin: 5px;
        transition: all 0.3s;
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: bold;
      }
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107;
        color: #000;
      }

      /* Custom Bullets */
      .custom-bullets li {
        position: relative;
        padding-left: 25px;
        margin-bottom: 10px;
        list-style: none;
      }
      .custom-bullets li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #ffc107;
        font-weight: bold;
      }

      /* Curriculum List */
      .curriculum-item {
        color: #142a53;
      }
      .curriculum-item i {
        font-size: 8px;
        margin-right: 8px;
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

      /* Card Styling */
      .card {
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .card-body {
        padding: 2rem;
      }

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
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
