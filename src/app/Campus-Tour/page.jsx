"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import Link from "next/link";

export default function CampusTour() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Initialize Swiper (Owl Carousel replacement)
    const swiper = new Swiper("#placement-carousel", {
      loop: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
      speed: 600,
      spaceBetween: 10, // reduces gap between slides (was default ~30)
      slidesPerView: 4, // wider images (fewer slides visible at once)
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: false,
      breakpoints: {
        0: { slidesPerView: 2, spaceBetween: 8 },
        600: { slidesPerView: 3, spaceBetween: 10 },
        1000: { slidesPerView: 4, spaceBetween: 10 },
      },
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: "url('./media/banners/campustour.webp')",
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
          }}
        >
          <h2 className="display-5 fw-bold mb-2">Campus Tour</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, laboriosam.
          </p>
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
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Campus Tour
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="innar py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 innar-top"></div>
            <div className="col-md-12 text-center">
              <div className="kass">
                <iframe
                  loading="lazy"
                  src="https://www.youtube.com/embed/c0mlwf4hifA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-100"
                  style={{ height: "506px", borderRadius: "15px" }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === COMMENTED-OUT GALLERY (Preserved as in original) === */}
      {/* 
      <div className="container py-5">
        <h2 className="section-title text-center mb-4" data-aos="fade-up" data-aos-delay="200">
          STUDENT LIFE @ IMT HYDERABAD
        </h2>
        <div className="gallery">
          {[...Array(10)].map((_, i) => (
            <figure key={i + 1} className={`gallery__item gallery__item--${i + 1}`}>
              <img src="images/g2.png" alt={`Campus Image ${i + 1}`} className="gallery__img" />
            </figure>
          ))}
        </div>
      </div>
      */}

      {/* Our Distinguished Clients (Owl Carousel to Swiper) */}
      <section
        className="placement-alliances-section py-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container text-center">
          <h6
            className="subtitle text-center text-warning"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Our Clients
          </h6>
          <h2
            className="section-title mb-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Our Distinguished Clients
          </h2>
          <p className="mb-5" data-aos="fade-up" data-aos-delay="300">
            We are proud to be associated with top companies.
          </p>

          {/* Swiper Carousel */}
          <div
            id="placement-carousel"
            className="swiper"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="swiper-wrapper">
              {[
                { src: "https://www.imthyderabad.edu.in/assets/admin/images/banners/1672051319_r14.png", alt: "Google" },
                { src: "https://www.imthyderabad.edu.in/assets/admin/images/banners/1672051331_r39.png", alt: "Microsoft" },
                { src: "https://www.imthyderabad.edu.in/assets/admin/images/banners/1672051345_r12.png", alt: "Amazon" },
                { src: "https://www.imthyderabad.edu.in/assets/admin/images/banners/1672051576_r1.png", alt: "Infosys" },
                { src: "https://www.imthyderabad.edu.in/assets/admin/images/banners/1672051590_r36.png", alt: "TCS" },
              ].map((item, i) => (
                <div key={i} className="swiper-slide">
                  <div className="item">
                    <img src={item.src} alt={item.alt} />
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation */}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </section>

      {/* === FULL ORIGINAL STYLES (Video, Carousel, Gallery, Hover) === */}
      <style jsx>{`
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

        /* ==================== */
        /* NEW: Wider images + tighter gap */
        /* ==================== */
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
          width: 220px;           /* INCREASED WIDTH */
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
      `}</style>
    </>
  );
}