"use client";

import { useEffect, useState } from "react";
import PlacementAlliances from "@/sections/PlacementAlliances.jsx";

export default function PlacementsSection() {
  const [page, setPage] = useState(null);

  /* ======================
     FETCH PLACEMENT PAGE
  ====================== */
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/placement/slug/placement`)
      .then((res) => res.json())
      .then((json) => {
        if (json && json._id) {
          setPage(json);
        }
      })
      .catch((err) => console.error("Placement page fetch error:", err));
  }, []);

  /* ======================
     INIT AOS
  ====================== */
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1000, once: true });
      });
    }
  }, []);

  if (!page) return null;

  return (
    <>
      {/* ================= TOP BANNER ================= */}
      <div
        className="faculty-hero text-center text-white py-5"
        style={{
          background: `url(${process.env.NEXT_PUBLIC_API_URL}/${page.banner_image})`,
          position: "relative",
          backgroundSize: "cover",
          height: "70vh",
        }}
      >
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: page.banner_text }}
        />
      </div>

      {/* ================= USP SECTION ================= */}
      <section className="usp-section py-4">
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: page.ranking_content }} />
        </div>
      </section>

      {/* ================= DIRECTOR MESSAGE ================= */}
      <section className="directors-message py-5">
        <div className="container">
          <div className="message-wrapper bg-white shadow-sm rounded-4 p-4 p-md-5 position-relative">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/${page.director_image}`}
              alt="Director"
              className="director-img float-md-start me-md-4 mb-3 shadow-sm rounded-3"
            />
            <div
              className="text-secondary lh-lg"
              dangerouslySetInnerHTML={{ __html: page.director_message }}
            />
          </div>
        </div>
      </section>

      {/* ================= PLACEMENT ALLIANCES ================= */}
      <section className="py-4" data-aos="fade-up">
        <PlacementAlliances />
      </section>

      {/* ================= CORPORATE MESSAGE ================= */}
      <section className="py-5">
        <div className="container">
          <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5">
            <div className="position-relative">
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}/${page.corporate_image}`}
                alt="Corporate Head"
                className="float-md-start me-md-4 mb-3 shadow-sm"
                style={{
                  width: "180px",
                  height: "auto",
                  borderRadius: "1rem",
                  objectFit: "cover",
                  float: "left",
                  marginRight: "1.5rem",
                  marginBottom: "0.5rem",
                }}
              />
              <div
                dangerouslySetInnerHTML={{ __html: page.corporate_message }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTOR STATISTICS ================= */}
      <section className="py-3">
        <div className="container">
          <h3 className="section-title text-center mb-4">
            Sector Wise Statistics
          </h3>
          <div className="card placement-card">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}/${page.sector_stat_image}`}
              className="img-fluid rounded"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* ================= BATCH PROFILE ================= */}
      <section className="py-3">
        <div className="container-fluid">
          <h3 className="section-title text-center mb-4">
            Batch Profile PGDM CLASS 2026
          </h3>
          <div className="row">
            {page.gallery_images.map((img, index) => (
              <div key={index} className="col-md-3">
                <div className="card placement-card">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${img}`}
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky Buttons — UNCHANGED */}
        <div className="sticky-buttons">
          <a
            href="https://drive.google.com/file/d/1fHoddrt_trxb8hyxATXnJzMkvM3iEPaH/view"
            target="_blank"
            className="sticky-btn"
          >
            Recruiters Handbook
          </a>
          <a
            href="https://drive.google.com/file/d/1jkjfW8OBofArrSCjurKNVK5Vr2YS_KvB/view"
            target="_blank"
            className="sticky-btn"
          >
            Placement Brochure
          </a>
          <a
            href="https://drive.google.com/file/d/1OaObJn3rOucYi5Yib3ojuiLzY42-O4my/view?usp=sharing"
            target="_blank"
            className="sticky-btn"
          >
            Summer Internship
          </a>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
      .faculty-hero {
        background: url('./media/hero.webp');
        position: relative;
        background-size: cover;
        height: 50vh;
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
        margin-top: 170px;
      }

      .placement-card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        margin: 0 !important;
      }
      .placement-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
      }
      .placement-card img {
        transition: transform 0.3s ease;
      }
      .placement-card:hover img {
        transform: scale(1.02);
      }

      @media (min-width: 1200px) {
        .container-fluid {
          padding-left: 1.5rem !important;
          padding-right: 1.5rem !important;
        }
      }
      @media (max-width: 768px) {
        .placement-card {
          max-height: 60vh;
          border-radius: 1rem !important;
        }
        .container-fluid {
          padding-left: 0.5rem !important;
          padding-right: 0.5rem !important;
        }
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

      .directors-message .message-wrapper {
        background: #fff;
        border-radius: 1.2rem;
        padding: 2rem 2.5rem;
        line-height: 1.8;
      }
      .directors-message h2 {
        font-weight: 700;
        font-size: 1.8rem;
        letter-spacing: -0.5px;
        position: relative;
      }
      .directors-message h2::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -8px;
        width: 60px;
        height: 3px;
        background: #ffc107;
      }
      .director-img {
        width: 180px;
        height: auto;
        border-radius: 1rem;
        object-fit: cover;
        float: left;
        margin-right: 1.5rem;
        margin-bottom: 0.5rem;
      }
      .director-img:hover {
        filter: brightness(1.05);
        transform: scale(1.02);
        transition: all 0.3s ease;
      }

      @media (max-width: 768px) {
        .director-img {
          float: none;
          display: block;
          margin: 0 auto 1.5rem auto;
          width: 150px;
          clip-path: none;
          shape-outside: none;
        }
        .directors-message h2 {
          text-align: center;
          font-size: 1.5rem;
        }
      }

      .owl-carousel .item {
        background: #f8f9fa;
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

      .placement-alliances-section {
        background-color: #151e54;
      }

      .sticky-buttons {
        position: fixed;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        z-index: 999;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .sticky-btn {
        background-color: #ffc107;
        color: #000;
        padding: 10px 16px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 50px 0 0 50px;
        text-decoration: none;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
      }
      .sticky-btn:hover {
        background-color: #0f2d61;
        color: #fff;
      }
      @media (max-width: 768px) {
        .sticky-buttons {
          right: 5px;
          gap: 6px;
        }
        .sticky-btn {
          padding: 6px 10px;
          font-size: 10px;
          border-radius: 30px 0 0 30px;
        }
      }
    `,
        }}
      />
    </>
  );
}
