"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";
import PlacementAlliances from "@/sections/PlacementAlliances.jsx";

const InternationalAssociations = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [pageData, setPageData] = useState(null);
  const [associations, setAssociations] = useState([]);
  const [loading, setLoading] = useState(true);

  /* -----------------------------
     INIT AOS (ONCE)
  ----------------------------- */
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1200,
        once: true,
        easing: "ease-in-out",
      });
      window.AOS = AOS;
    });
  }, []);

  /* -----------------------------
     FETCH BANNER DATA
  ----------------------------- */
  useEffect(() => {
    if (!API_URL) return;

    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/mandatory/slug/international-associations`
        );
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error("Failed to fetch banner data:", err);
      }
    };

    fetchPage();
  }, [API_URL]);

  /* -----------------------------
     FETCH GRID DATA
  ----------------------------- */
  useEffect(() => {
    if (!API_URL) return;

    const fetchAssociations = async () => {
      try {
        const res = await fetch(`${API_URL}/api/imt-association-gallery`);
        const json = await res.json();

        const active = (json.data || []).filter((i) => !i.isDel);
        setAssociations(active);

        // 🔥 CRITICAL: Refresh AOS AFTER DOM update
        setTimeout(() => {
          if (window.AOS) {
            window.AOS.refreshHard();
          }
        }, 200);
      } catch (err) {
        console.error("Failed to fetch associations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAssociations();
  }, [API_URL]);

  if (loading || !pageData) return null;

  return (
    <div className="international-associations-page">
      {/* ================= HERO ================= */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: `url(${API_URL}${pageData.banner_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="hero-overlay" />
          <div
            className="hero-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(pageData.banner_text),
            }}
          />
        </div>

        <InternationalAssociationStickyBtns />

        {/* ================= BREADCRUMB ================= */}
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
                  International Associations
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ================= GRID ================= */}
        <section className="py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="section-title">International Associations</h2>
            </div>

            <div className="row g-4">
              {associations.map((item, index) => (
                <div
                  key={item._id}
                  className="col-6 col-md-4 col-lg-3"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className="card text-center border-0 shadow-sm h-100 custom-card">
                    <img
                      src={`${API_URL}/${item.image}`}
                      alt={item.title}
                      className="card-img-top p-3"
                      style={{ height: "150px", objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{item.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CAROUSEL ================= */}
        <section className="py-4" data-aos="fade-up">
          <PlacementAlliances />
        </section>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .faculty-hero {
        background-size: cover;
        height: 60vh;
        position: relative;
          background-position: center !important;
      }

      .hero-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
      }

      .hero-content {
        position: relative;
        z-index: 2;
        padding-top: 150px;
      }

      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }

      .section-title {
        font-size: 2rem;
        font-weight: 700;
        color: #08317a;
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

      .custom-card {
        transition: background-color 0.3s ease, transform 0.3s ease;
        background: #f8f9fa;
        border-radius: 1.5rem;
      }

      .custom-card:hover {
        background-color: #ffc107;
        border: 1px solid #03255f;
        transform: translateY(-5px);
      }

      .placement-swiper .swiper-button-next,
      .placement-swiper .swiper-button-prev {
        color: #08317a;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }

      .swiper-item img {
        max-height: 80px;
        object-fit: contain;
      }

      .contact-links-section {
        background-color: rgb(21, 30, 84);
        color: white;
      }
    `,
        }}
      />
    </div>
  );
};

export default InternationalAssociations;
