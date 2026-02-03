"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import DistinguishedClientsSection from "@/components/DistinguishedClient";
import Loader from "@/components/Loader";

export default function ExecutiveEducation() {
  const [pageData, setPageData] = useState(null);
  const [recentPrograms, setRecentPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pageRes, workshopRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/executive-education`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/workshops`),
        ]);

        const pageJson = await pageRes.json();
        const workshopJson = await workshopRes.json();
        if (Array.isArray(pageJson) && pageJson.length > 0) {
          setPageData(pageJson[0]);
        } else if (pageJson?.data?.length) {
          setPageData(pageJson.data[0]);
        }

        if (workshopJson?.success) {
          // ✅ show ONLY latest 3
          setRecentPrograms(workshopJson.data.slice(0, 3));
        }
      } catch (error) {
        console.error("Failed to load Executive Education page", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading || !pageData) return <Loader fullScreen />;

  return (
    <>
      {/* ================= HERO / BANNER ================= */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${pageData.banner_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            position: "relative",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: pageData.banner_text }} />
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
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section id="executive-education" className="py-5">
        <div dangerouslySetInnerHTML={{ __html: pageData.introduction }} />
      </section>

      {/* ================= RECENT PROGRAMS ================= */}
      <section
        id="recent-programs"
        className="py-5"
        style={{ backgroundColor: "#151e54" }}
      >
        <div className="container">
          <h2 className="text-center text-warning fw-bold">Recent Programs</h2>
          <p className="text-center text-white">
            Explore our latest Executive Development and Leadership Workshops.
          </p>

          <div className="row g-4 mt-3">
            {recentPrograms.map((program, index) => (
              <div
                className="col-md-6 col-lg-4"
                key={program._id}
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${program.image}`}
                    alt={program.title}
                    width={500}
                    height={300}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "220px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{program.title}</h5>
                    <p className="mb-1">
                      <strong>Company:</strong> {program.company}
                    </p>
                    <p className="mb-0">
                      <strong>Program Director:</strong>{" "}
                      {program.program_director}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link
              href="/conferences-workshops"
              className="btn btn-warning px-4 rounded-pill border-dark"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* ================= EDP CALENDAR ================= */}
      <section id="calendar" className="py-4">
        <div dangerouslySetInnerHTML={{ __html: pageData.edp_calender }} />
      </section>

      {/* ================= OFFERINGS ================= */}
      <section id="offering" className="py-5">
        <div className="container">
          <ul className="nav nav-pills justify-content-center mb-4">
            <li className="nav-item mx-1">
              <button
                className="nav-link active"
                data-bs-toggle="pill"
                data-bs-target="#short"
              >
                Short Duration Programs
              </button>
            </li>
            <li className="nav-item mx-1">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#long"
              >
                Long Duration Programs
              </button>
            </li>
            <li className="nav-item mx-1">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#firsttime"
              >
                First Time Manager Program
              </button>
            </li>
            <li className="nav-item mx-1">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#certificate"
              >
                Certificate Program
              </button>
            </li>
          </ul>

          <div className="tab-content card bg-light p-4">
            <div
              id="short"
              className="tab-pane fade show active"
              dangerouslySetInnerHTML={{
                __html: pageData.short_during_program,
              }}
            />
            <div
              id="long"
              className="tab-pane fade"
              dangerouslySetInnerHTML={{ __html: pageData.long_during_program }}
            />
            <div
              id="firsttime"
              className="tab-pane fade"
              dangerouslySetInnerHTML={{
                __html: pageData.first_time_manager_program,
              }}
            />
            <div
              id="certificate"
              className="tab-pane fade"
              dangerouslySetInnerHTML={{
                __html: pageData.certificate_program,
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= CLIENTS ================= */}
      <DistinguishedClientsSection emblaRef={emblaRef} />

      {/* ================= CONTACT STRIP ================= */}
      <section
        className="py-3"
        style={{ backgroundColor: "rgb(21, 30, 84)", color: "white" }}
      >
        <h4 className="text-center fw-bold text-warning">Contact Details</h4>
        <div className="container text-center">
          <strong className="text-warning">Email:</strong>{" "}
          <a
            href={`mailto:${pageData.email}`}
            className="text-light text-decoration-none"
          >
            {pageData.email}
          </a>
          <br />
          <strong className="text-warning">Phone:</strong>{" "}
          <span className="text-light">{pageData.contact}</span>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Faculty Hero */
        .faculty-hero {
          background: url('/media/banners/executiveeducation.webp');
          position: relative;
          background-size: cover;
          height: 60vh;
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
          color: #ffffff;
          transition: all 0.3s;
        }
        .social-icon:hover {
          background: #5390d9;
          color: #ffffff;
          transform: translateY(-3px);
        }

        /* Tabs */
        .nav-pills .nav-link {
          border-radius: 30px;
          background: #e9ecef;
          color: #333;
          transition: all 0.3s;
        }
        .nav-pills .nav-link.active {
          background: #ffc107 !important;
          color: #000000 !important;
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

        /* Custom Card Hover */
        .custom-card {
          transition: background-color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }
        .custom-card:hover {
          background-color: #ffc107;
          border: 1px solid #03255f;
          transform: translateY(-5px);
        }

        /* Table */
        .table th {
          background-color: #151e54;
          color: #ffc107;
        }

        .mx-1 {
          margin-top: 10px;
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
