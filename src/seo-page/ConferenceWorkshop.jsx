"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

export default function WorkshopsConferences() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [seo, setSeo] = useState(null);
  const [workshops, setWorkshops] = useState([]);
  const [conferences, setConferences] = useState([]);
  const [loading, setLoading] = useState(true);
  /* ------------------------------------
     FETCH SEO (BANNER + TITLE)
  ------------------------------------ */

  // Initialize AOS
  useEffect(() => {
    if (!seo) return;

    import("aos").then((AOS) => {
      AOS.refreshHard(); // 🔥 KEY FIX
    });
  }, [seo]);

  useEffect(() => {
    if (!API_URL) return;

    setLoading(true);

    fetch(
      `${API_URL}/api/workshops-conferences-seo/slug/conferences-workshops`,
      { cache: "no-store" }
    )
      .then((res) => res.json())
      .then((data) => setSeo(data))
      .catch((err) => console.error("SEO fetch error:", err))
      .finally(() => setLoading(false));
  }, [API_URL]);

  /* ------------------------------------
     FETCH WORKSHOPS
  ------------------------------------ */
  useEffect(() => {
    if (!API_URL) return;

    fetch(`${API_URL}/api/workshops`)
      .then((res) => res.json())
      .then((json) => setWorkshops(json.data || []))
      .catch((err) => console.error("Workshops fetch error:", err));
  }, [API_URL]);

  /* ------------------------------------
     FETCH CONFERENCES
  ------------------------------------ */
  useEffect(() => {
    if (!API_URL) return;

    fetch(`${API_URL}/api/conferences`)
      .then((res) => res.json())
      .then((json) => setConferences(json.data || []))
      .catch((err) => console.error("Conferences fetch error:", err));
  }, [API_URL]);

  /* ------------------------------------
     INIT AOS
  ------------------------------------ */
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000, once: true });
    });
  }, []);

  if (loading) return <Loader fullScreen />;

  return (
    <>
      {/* Hero Section */}
      <div
        className="faculty-hero text-center text-white d-flex align-items-center justify-content-center"
        style={{
          background: `url(${
            seo?.banner_image
              ? `${API_URL}/${seo.banner_image}`
              : "/media/banners/industryrelevance.webp"
          })`,
          backgroundSize: "cover",
          height: "60vh",
          position: "relative",
        }}
      >
        <div
          className="hero-content"
          data-aos="fade-up"
          data-aos-delay="200"
          dangerouslySetInnerHTML={{ __html: seo?.banner_text }}
        />
      </div>

      {/* Breadcrumb */}
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
              <li
                className="breadcrumb-item active text-warning fw-bold"
                aria-current="page"
              >
                {seo?.page_title || "Workshops & Conferences"}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Workshops & Conferences Section */}
      <section id="workshop-conference" className="py-5 faculty-tabs">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-center fw-bold mb-4" style={{ color: "#08317a" }}>
            Workshops & Conferences
          </h2>

          {/* Static Tabs */}
          <ul className="nav nav-pills justify-content-center mb-4">
            <li className="nav-item m-1">
              <button
                className="nav-link active fw-bold"
                data-bs-toggle="pill"
                data-bs-target="#workshop"
              >
                WORKSHOPS
              </button>
            </li>
            <li className="nav-item m-1">
              <button
                className="nav-link fw-bold"
                data-bs-toggle="pill"
                data-bs-target="#conference"
              >
                CONFERENCES
              </button>
            </li>
          </ul>

          <div className="tab-content">
            {/* WORKSHOPS TAB */}
            <div className="tab-pane fade show active" id="workshop">
              <div className="row g-4">
                {workshops.map((w) => (
                  <div className="col-md-4" key={w._id}>
                    <div className="card h-100 shadow-sm border-0">
                      <img
                        src={`${API_URL}/${w.image}`}
                        className="card-img-top"
                        alt={w.title}
                      />
                      <div className="card-body">
                        <h5 className="fw-bold">{w.title}</h5>
                        <p className="card-text">
                          <strong>Company:</strong> {w.company}
                          <br />
                          <strong>Program Director:</strong>{" "}
                          {w.program_director}
                        </p>
                        <Link href="#" className="btn btn-warning fw-bold">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CONFERENCES TAB */}
            <div className="tab-pane fade" id="conference">
              <div className="row g-4 mt-3">
                {conferences.map((c) => (
                  <div className="col-md-4" key={c._id}>
                    <div className="card h-100 shadow-sm border-0">
                      <div className="card-body">
                        <h5 className="fw-bold">{c.title}</h5>
                        <p className="card-text">
                          <strong>Date:</strong> {c.date}
                          <br />
                          <strong>Conference:</strong> {c.conference}
                          <br />
                          <strong>Theme:</strong> {c.theme}
                          <br />
                          <strong>Support:</strong> {c.support}
                          <br />
                          <strong>Journal:</strong> {c.journal}
                          <br />
                          <strong>Brochure:</strong> {c.brochure}
                        </p>
                        <Link href="#" className="btn btn-warning fw-bold">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Hero Section */
      .faculty-hero {
        background: url('/media/banners/industryrelevance.webp') center/cover no-repeat;
        position: relative;
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
      // .faculty-hero h2 {
      //   margin-top: 150px;
      // }

      /* Nav Pills */
      .faculty-tabs .nav-pills .nav-link {
        border-radius: 50rem;
        background: #e9ecef;
        color: #08317a;
        margin: 5px;
        transition: all 0.3s;
        padding: 10px 20px;
        font-size: 1rem;
      }
      .faculty-tabs .nav-pills .nav-link.active {
        background: #ffc107;
        color: #000;
      }

      /* Card Styling */
      .card {
        transition: transform 0.3s ease;
      }
      .card:hover {
        transform: translateY(-5px);
      }
      .card-img-top {
        height: 200px;
        object-fit: cover;
      }
      .btn-warning {
        background-color: #ffc107;
        border-color: #ffc107;
      }
      .btn-warning:hover {
        background-color: #e0a800;
        border-color: #e0a800;
      }
    `,
        }}
      />
    </>
  );
}
