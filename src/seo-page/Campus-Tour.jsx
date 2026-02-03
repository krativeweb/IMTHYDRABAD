"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import PlacementAlliances from "@/sections/PlacementAlliances";
import Loader from "@/components/Loader";

export default function CampusTour() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // AOS init
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ API call INSIDE page
  useEffect(() => {
    async function fetchCampusTour() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/campus-tour`,
          { cache: "no-store" }
        );
        const json = await res.json();
        setData(json?.[0] || null);
      } catch (err) {
        console.error("Campus Tour fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCampusTour();
  }, []);

  if (loading) return <Loader fullScreen />;
  if (!data) return null;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const bannerImage = data.banner_image.startsWith("http")
    ? data.banner_image
    : `${API_URL}${data.banner_image}`;

  // Convert YouTube URL to embed URL
  const videoId = data.video_url?.includes("youtu.be")
    ? data.video_url.split("youtu.be/")[1].split("?")[0]
    : data.video_url?.split("v=")[1];

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: `url(${bannerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            position: "relative",
          }}
        >
          {/* Banner Text from CMS */}
          <div
            dangerouslySetInnerHTML={{ __html: data.banner_text }}
            style={{ position: "relative", zIndex: 2, marginTop: 150 }}
          />
        </div>

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22 57 119)" }}
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
                <li className="breadcrumb-item active text-warning fw-bold">
                  {data.page_title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="innar py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h3 className="fw-bold">{data.video_title}</h3>
          </div>

          <div className="kass">
            <iframe
              loading="lazy"
              src={embedUrl}
              title={data.video_title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-100"
              style={{ height: "506px", borderRadius: "15px" }}
            />
          </div>
        </div>
      </section>

      {/* ================= PLACEMENT ALLIANCES ================= */}
      <section
        className="placement-alliances-section py-4"
        data-aos="fade-up"
      >
        <PlacementAlliances />
      </section>
      {/* === FULL ORIGINAL STYLES (Video, Carousel, Gallery, Hover) === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .innar {
        padding: 20px;
      }
      .innar-top {
        margin-bottom: 20px;
      }
      .kass {
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .kass iframe {
        width: 100%;
        height: 506px;
      }

      /* Gradient banner with subtle overlay */
      .faculty-hero {
        background: url('./media/hero.webp');
        position: relative;
        background-size: cover;
        height: 50vh;
          background-position: center !important;
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
        background: #5390D9;
        color: #ffffffff;
        transform: translateY(-3px);
      }

      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000000ff !important;
      }
      .small-placeholder::placeholder {
        font-size: 0.85rem;
      }

      /* RESET & BASE */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      h1 {
        font-family: 'Josefin Sans', sans-serif;
        text-align: center;
        font-size: 2.5rem;
        font-weight: 300;
        color: #333;
        margin-bottom: 3rem;
      }

      .gallery {
        display: grid;
        grid-template-areas:
          "img1 img2 img3 img4"
          "img1 img5 img5 img6"
          "img7 img8 img9 img10";
        grid-template-rows: 220px 300px 220px;
        grid-gap: 1rem;
      }
      .gallery__item--1 { grid-area: img1; }
      .gallery__item--2 { grid-area: img2; }
      .gallery__item--3 { grid-area: img3; }
      .gallery__item--4 { grid-area: img4; }
      .gallery__item--5 { grid-area: img5; }
      .gallery__item--6 { grid-area: img6; }
      .gallery__item--7 { grid-area: img7; }
      .gallery__item--8 { grid-area: img8; }
      .gallery__item--9 { grid-area: img9; }
      .gallery__item--10 { grid-area: img10; }

      .gallery__item {
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        box-shadow: 0 6px 15px rgba(0,0,0,0.15);
      }

      .gallery__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      @media (max-width: 768px) {
        .gallery {
          grid-template-areas:
            "img1"
            "img2"
            "img3"
            "img4"
            "img5"
            "img6"
            "img7"
            "img8"
            "img9"
            "img10";
          grid-template-rows: repeat(10, 250px);
        }
        h1 { font-size: 2rem; }
      }

      /* NEW: Wider images + tighter gap */
      #placement-carousel .swiper-slide .item {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        transition: transform 0.3s;
      }
      #placement-carousel .swiper-slide .item:hover {
        transform: translateY(-5px);
      }
      #placement-carousel .swiper-slide .item img {
        width: 220px;
        height: auto;
        max-height: 80px;
        object-fit: contain;
      }

      /* Navigation buttons */
      .swiper-button-next,
      .swiper-button-prev {
        background: rgba(0,0,0,0.5);
        color: #ffc107;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .swiper-button-next:after,
      .swiper-button-prev:after {
        font-size: 18px;
      }
    `,
        }}
      />
    </>
  );
}