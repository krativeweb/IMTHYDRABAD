"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import DistinguishedClientsSection from "@/components/DistinguishedClient";

export default function StudentLifePage() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay({ delay: 2000, stopOnInteraction: false })],
  );

  // 🔹 Fetch Student Life data
  useEffect(() => {
    const fetchStudentLife = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/student-life`,
        );
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setPageData(data[0]);
        }
      } catch (err) {
        console.error("Failed to fetch student life data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentLife();
  }, []);

  // 🔹 AOS Init
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1200, once: true });
      });
    }
  }, []);

  // 🔹 Loader
  if (loading || !pageData) return <Loader fullScreen />;

  return (
    <>
      {/* ===== HERO BANNER ===== */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${pageData.banner_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: pageData.banner_text }} />
        </div>

        {/* ===== BREADCRUMB ===== */}
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
                  {pageData.page_title}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <section id="international-associations" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center mb-5">
              <h2 className="section-title" style={{ color: "#08317a" }}>
                {pageData.page_title}
              </h2>
            </div>

            <div className="row justify-content-center">
              <div
                className="col-12 col-md-10 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="250"
                bis_skin_checked="1"
                dangerouslySetInnerHTML={{
                  __html: pageData.student_life_content,
                }}
              />
            </div>
          </div>
        </section>

        {/* ===== IMAGE GALLERY ===== */}
        <section
          id="student-life-gallery"
          className="py-5"
          style={{ backgroundColor: "#163977" }}
        >
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <div className="text-center mb-5">
              <h2 className="section-title text-warning">
                Life at IMT Hyderabad
              </h2>
              <p className="text-light">
                Moments from campus life, events, and activities
              </p>
            </div>

            <div className="row g-4">
              {pageData.student_life_images.map((img, i) => (
                <div
                  key={i}
                  className="col-6 col-md-4 col-lg-3"
                  data-aos="zoom-in"
                  data-aos-delay={100 + i * 50}
                >
                  <div className="card border-0 shadow-sm overflow-hidden">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${img}`}
                      className="card-img-top img-fluid"
                      style={{ height: "200px", objectFit: "cover" }}
                      alt={`Student Life ${i + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CLIENTS CAROUSEL ===== */}
        <DistinguishedClientsSection emblaRef={emblaRef} />
      </section>

      {/* ===== STYLES (unchanged) ===== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      #student-life-gallery .card {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
      }
      #student-life-gallery .card:hover {
        transform: translateY(-5px) scale(1.03);
        box-shadow: 0 10px 20px rgba(0,0,0,0.15);
      }
      #student-life-gallery .card-body {
        padding: 0.5rem;
      }

      .custom-card {
        transition: background-color 0.3s ease, transform 0.3s ease;
        cursor: pointer;
      }
      .custom-card:hover {
        background: #ffc107;
        transform: translateY(-5px);
      }

      .owl-carousel .item {
        background: #fff;
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

      .faculty-hero {
        background: url('/media/hero.webp');
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
        color: #fff;
        transition: all 0.3s;
      }
      .social-icon:hover {
        background: #5390D9;
        color: #fff;
        transform: translateY(-3px);
      }

      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107 !important;
        color: #000 !important;
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
        background: #e9ecef;
        border-radius: 30px;
        color: #333;
      }
                  /* ================= EMBLA CLIENTS ================= */

.embla {
  overflow: hidden;
  width: 100%;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 25%; /* Desktop: 4 */
  padding: 0 8px;
  box-sizing: border-box;
}

.logo-box {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.logo-box:hover {
  transform: translateY(-5px);
}

/* -------- RESPONSIVE -------- */

@media (max-width: 1200px) {
  .embla__slide {
    flex: 0 0 33.333%;
  }
}

@media (max-width: 992px) {
  .embla__slide {
    flex: 0 0 50%;
  }
}

@media (max-width: 768px) {
  .embla__slide {
    flex: 0 0 50%; /* 🔥 same same */
  }
}

@media (max-width: 576px) {
  .embla__slide {
    flex: 0 0 50%; /* 🔥 same same */
  }

  .logo-box {
    height: 120px;
  }
}

    `,
        }}
      />
    </>
  );
}
