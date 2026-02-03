"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";
import Loader from "@/components/Loader";

export default function AwardsRecognitions() {
  const [pageData, setPageData] = useState(null);
  const [awards, setAwards] = useState([]);
  const [facultyAwards, setFacultyAwards] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ================= FETCH ALL DATA ================= */
  useEffect(() => {
    if (!API_URL) return;

    const fetchAll = async () => {
      try {
        const [seoRes, awardsRes, facultyRes] = await Promise.all([
          fetch(`${API_URL}/api/awards-recognition-seo`),
          fetch(`${API_URL}/api/awards`),
          fetch(`${API_URL}/api/faculty-awards`),
        ]);

        const seoJson = await seoRes.json();
        const awardsJson = await awardsRes.json();
        const facultyJson = await facultyRes.json();

        setPageData(seoJson?.data || null);
        setAwards(awardsJson?.data || []);
        setFacultyAwards(facultyJson?.data || []);
      } catch (err) {
        console.error("Awards page fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [API_URL]);

  if (loading) return <Loader fullScreen />;
  if (!pageData) return null;

  /* ================= FILTER AWARDS ================= */
  const instituteAwards = awards.filter(
    (a) => a.type === "Awards for Institute"
  );
  const directorAwards = awards.filter((a) => a.type === "Awards for Director");

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: `url(${API_URL}/${pageData.banner_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(pageData.banner_text),
            }}
          />
        </div>

        {/* ================= BREADCRUMB ================= */}
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
      </section>

      {/* ================= AWARDS ================= */}
      <section id="offerings" className="py-5">
        <div className="container">
          <h2
            className="section-title text-center mb-4"
            style={{ color: "#08317a" }}
          >
            {pageData.page_title}
          </h2>

          {/* ================= TABS ================= */}
          <ul className="nav nav-pills justify-content-center mb-4">
            <li className="nav-item mx-1">
              <button
                className="nav-link active"
                data-bs-toggle="pill"
                data-bs-target="#short"
              >
                Awards For Institute
              </button>
            </li>
            <li className="nav-item mx-1">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#long"
              >
                Awards For Faculty
              </button>
            </li>
          </ul>

          <hr />

          <div className="tab-content card bg-light p-4 border-0">
            {/* ================= INSTITUTE + DIRECTOR ================= */}
            <div className="tab-pane fade show active" id="short">
              <div className="row justify-content-center">
                {instituteAwards.map((award) => (
                  <div className="col-md-4 mb-4" key={award._id}>
                    <div className="program-card">
                      <img
                        src={`${API_URL}/${award.image}`}
                        alt={award.title}
                      />
                      <div className="program-body">
                        <h5 className="program-title">{award.title}</h5>
                        <div
                          className="program-text"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(award.content),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {directorAwards.length > 0 && (
                  <>
                    <h2
                      className="mt-4 mb-3 fw-bold"
                      style={{ textAlign: "center", color: "#08317a" }}
                    >
                      Awards For Director
                    </h2>

                    {directorAwards.map((award) => (
                      <div className="col-md-4 mb-4" key={award._id}>
                        <div className="program-card">
                          <img
                            src={`${API_URL}/${award.image}`}
                            alt={award.title}
                          />
                          <div className="program-body">
                            <h5 className="program-title">{award.title}</h5>
                            <div
                              className="program-text"
                              dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(award.content),
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* ================= FACULTY ================= */}
            <div className="tab-pane fade" id="long">
              <div className="row justify-content-center">
                {facultyAwards.map((award) => (
                  <div className="col-md-4 mb-4" key={award._id}>
                    <div className="program-card">
                      <img
                        src={`${API_URL}/${award.image}`}
                        alt="Faculty Award"
                      />
                      <div className="program-body">
                        <div
                          className="program-text"
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(award.content),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === ALL ORIGINAL CSS === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .faculty-hero h2 {
        margin-top: 150px;
      }

      #offerings .nav-pills .nav-link {
        border-radius: 999px;
        padding: 0.6rem 1.2rem;
        font-weight: 600;
        color: #333;
        background: #eaeaea;
      }
      #offerings .nav-pills .nav-link.active {
        background: #314a7c;
        color: #fff;
      }

      #short {
        padding: 30px 0;
        border-radius: 12px;
      }

      .program-card {
        background-color: #fff;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        height: 100%;
      }
      .program-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
      }

      .program-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .program-body {
        padding: 20px;
      }
      .program-title {
        font-weight: 600;
        font-size: 1.05rem;
        color: #000;
        margin-bottom: 15px;
        line-height: 1.4;
      }
      .program-body p {
        margin-bottom: 8px;
        font-size: 0.95rem;
        color: #1f2328;
      }
      .program-body strong {
        color: #000;
      }

      .read-more-btn {
        align-self: flex-start;
        background-color: #ffc107;
        color: #000;
        border: none;
        border-radius: 25px;
        padding: 8px 20px;
        font-size: 0.8rem;
        font-weight: 600;
        margin-top: 10px;
        transition: background-color 0.3s ease;
      }
      .read-more-btn:hover {
        background-color: #ffb400;
        cursor: pointer;
      }

      @media (max-width: 768px) {
        .program-card {
          margin-bottom: 20px;
        }
      }

      .program-card {
        background-color: #fff;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      .program-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
      }

      .program-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .program-body {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
      }

      .program-title {
        font-weight: 600;
        font-size: 1.05rem;
        color: #000;
        margin-bottom: 10px;
        line-height: 1.4;
      }

      .program-body p {
        font-size: 0.95rem;
        color: #1f2328;
        margin-bottom: 0;
      }

      @media (max-width: 768px) {
        .program-card img {
          height: 180px;
        }
      }

      .program-card {
        background: #fff;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      .program-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 18px rgba(0, 0, 0, 0.25);
      }

      .program-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .program-body {
        padding: 20px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .program-text {
        font-size: 0.95rem;
        color: #1f2328;
        line-height: 1.6;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        transition: all 0.3s ease;
      }
      .program-text.expanded {
        -webkit-line-clamp: unset;
        overflow: visible;
      }

      .read-more-btn {
        align-self: flex-start;
        background-color: #ffc107;
        color: #000;
        border: none;
        border-radius: 25px;
        padding: 6px 14px;
        font-weight: 600;
        margin-top: 10px;
        transition: background-color 0.3s ease;
      }
      .read-more-btn:hover {
        background-color: #ffb400;
        cursor: pointer;
      }

      .mx-1 {
        margin-top: 9px;
      }
    `,
        }}
      />
    </>
  );
}
