"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function LearningResourceCenter() {
  const [pageData, setPageData] = useState(null);
  const [faqs, setFaqs] = useState([]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    // AOS
    import("aos").then((AOS) => {
      AOS.default.init({ duration: 1200, once: true });
    });

    fetchPage();
    fetchFaqs();
  }, []);

  const fetchPage = async () => {
    try {
      const res = await fetch(`${API_URL}/api/lrc-page`);
      const json = await res.json();
      setPageData(json);
    } catch (err) {
      console.error("LRC page fetch failed", err);
    }
  };

  const fetchFaqs = async () => {
    try {
      const res = await fetch(`${API_URL}/api/lrc-faq`);
      const json = await res.json();
      setFaqs(json.data || []);
    } catch (err) {
      console.error("LRC FAQ fetch failed", err);
    }
  };

  if (!pageData) return null;

  return (
    <div className="lrc-page">
      {/* ================= HERO SECTION ================= */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: `url(${API_URL}/${pageData.banner_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay" />
          <div
            className="hero-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(pageData.banner_text),
            }}
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
                <li className="breadcrumb-item active text-warning fw-bold">
                  LRC
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ================= TABS ================= */}
      <section className="py-3">
        <div className="container" data-aos="fade-up">
          {/* MAIN TABS */}
          <nav className="nav nav-pills justify-content-center gap-2">
            <Link
              className="nav-link active bg-white"
              data-bs-toggle="tab"
              href="#tab-about"
            >
              About LRC
            </Link>
            <Link
              className="nav-link bg-white"
              data-bs-toggle="tab"
              href="#tab-resources"
            >
              Resources
            </Link>
            <Link
              className="nav-link bg-white"
              data-bs-toggle="tab"
              href="#tab-faqs"
            >
              FAQ's
            </Link>
          </nav>

          <div className="tab-content mt-4">
            {/* ================= ABOUT TAB ================= */}
            <div
              className="tab-pane fade show active bg-white p-4 rounded-4"
              id="tab-about"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(pageData.about_lrc),
                }}
              />
            </div>

            {/* ================= RESOURCES TAB ================= */}
            <div
              className="tab-pane fade bg-white p-4 rounded-4"
              id="tab-resources"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(pageData.resources),
                }}
              />
            </div>

            {/* ================= FAQ TAB ================= */}
            <div className="tab-pane fade bg-white p-4 rounded-4" id="tab-faqs">
              <div className="accordion" id="lrcFaqs">
                {faqs.map((faq, index) => (
                  <div className="accordion-item mt-3" key={faq._id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          index !== 0 ? "collapsed" : ""
                        }`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-${faq._id}`}
                      >
                        {faq.question}
                      </button>
                    </h2>

                    <div
                      id={`faq-${faq._id}`}
                      className={`accordion-collapse collapse ${
                        index === 0 ? "show" : ""
                      }`}
                      data-bs-parent="#lrcFaqs"
                    >
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(faq.answer),
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* FAQ TAB END */}
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .lrc-page {
        width: 100%;
      }

      .faculty-section {
        width: 100%;
      }

      /* Hero Banner */
      .faculty-hero {
        background: url('/media/banners/Group 16.jpg') no-repeat center center;
        background-size: cover;
        height: 60vh;
        position: relative;
          background-position: center !important;
      }

      .hero-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
      }

      .hero-content {
        position: relative;
        z-index: 2;
        padding-top: 150px;
      }

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }

      /* Section Styles */
      .section-title {
        font-size: 2rem;
        font-weight: 700;
        color: #08317a;
        margin-bottom: 1.5rem;
        position: relative;
        padding-bottom: 0.5rem;
      }

      .section-title::after {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: #ffc107;
      }

      .section-subtitle {
        color: #08317a;
      }

      /* Tab Navigation */
      .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #333;
        transition: all 0.3s;
      }

      .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000 !important;
      }

      /* Accordion */
      .accordion-button {
        background-color: #ffc107;
        color: #000;
      }

      .accordion-button:not(.collapsed) {
        background-color: #ffc107;
        color: #000;
      }

      .accordion-body {
        background-color: #fff;
      }

      /* Table Styles */
      .table-responsive {
        border-radius: 1rem;
        overflow: hidden;
      }

      .table {
        margin-bottom: 0;
      }

      .table thead.bg-warning th {
        color: #000;
      }

      .crs_list ul, .d-flex.flex-column.gap-2 {
        list-style-type: disc;
        padding-left: 20px;
      }

      /* Swiper Styles */
      .swiper-item {
        background: #ffffff;
        padding: 30px;
        border-radius: 8px;
        text-align: center;
        transition: transform 0.3s;
      }

      .swiper-item:hover {
        transform: translateY(-5px);
      }

      .swiper-item img {
        max-height: 80px;
        object-fit: contain;
      }

      .placement-swiper .swiper-button-next,
      .placement-swiper .swiper-button-prev {
        color: #08317a;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .placement-swiper .swiper-button-next:after,
      .placement-swiper .swiper-button-prev:after {
        font-size: 20px;
      }

      /* Social Icons (unused but included) */
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

      /* Responsive Adjustments */
      @media (max-width: 768px) {
        .section-title {
          font-size: 1.7rem;
        }
      }

      @media (max-width: 576px) {
        .section-title {
          font-size: 1.5rem;
        }
      }
    `,
        }}
      />
    </div>
  );
}
