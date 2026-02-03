"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Loader from "@/components/Loader";

export default function InnovationLab() {
  const [activeTab, setActiveTab] = useState("about");
  const [pageData, setPageData] = useState(null);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    if (!API_URL) return;

    const fetchAll = async () => {
      try {
        const [pageRes, peopleRes] = await Promise.all([
          fetch(`${API_URL}/api/innovation-lab`),
          fetch(`${API_URL}/api/affiliated-faculty-practitioners-innovation`),
        ]);

        const pageJson = await pageRes.json();
        const peopleJson = await peopleRes.json();

        setPageData(pageJson[0] || null);
        setPeople(peopleJson.data || []);
      } catch (err) {
        console.error("Innovation Lab fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [API_URL]);

  if (loading) return <Loader fullScreen />;
  if (!pageData) return null;

  return (
    <>
      {/* ===== Banner Section ===== */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: `url(${API_URL}${pageData.banner_image})`,
            backgroundSize: "cover",
            height: "60vh",
          }}
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(pageData.banner_text),
          }}
        />

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22 57 119)" }}
        >
          <div className="container-fluid">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-white fw-bold">
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

      {/* ===== Main Content ===== */}
      <section>
        <div className="container mt-5 mb-4">
          <h2
            className="section-title text-center mb-3"
            style={{ color: "#08317a" }}
          >
            {pageData.page_title}
          </h2>

          {/* Tabs */}
          <nav className="nav nav-pills flex-wrap gap-2 mb-3 justify-content-center">
            {["about", "people", "startup"].map((tab) => (
              <button
                key={tab}
                className={`nav-link bg-light text-dark rounded-pill ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "about"
                  ? "About"
                  : tab === "people"
                  ? "People"
                  : "Start-up Accelerator Program"}
              </button>
            ))}
          </nav>

          {/* ===== Tabs Content ===== */}
          <div className="tab-content container-sm text-black">
            {/* ABOUT */}
            {activeTab === "about" && (
              <div
                className="bg-white p-4 rounded-4"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(pageData.about_details),
                }}
              />
            )}

            {/* PEOPLE */}
            {activeTab === "people" && (
              <div className="bg-white p-4 rounded-4">
                <div className="row">
                  <h5
                    className="text-center fw-bold fs-3 mb-4"
                    style={{ color: "#163977" }}
                  >
                    AFFILIATED FACULTY & PRACTITIONERS
                  </h5>

                  {people.map((person) => (
                    <div key={person._id} className="col-12 col-md-6 mb-3">
                      <div className="card h-100 p-4">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={`${API_URL}/${person.image}`}
                              alt={person.name}
                              className="img-fluid rounded-start"
                              style={{ height: "14rem", objectFit: "cover" }}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="fw-bold">{person.name}</h5>
                              <p>{person.designation}</p>
                              <p>{person.role_expertise}</p>
                              <Link
                                href="/faculties"
                                className="btn btn-warning rounded-4 text-white"
                              >
                                View Profile
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STARTUP */}
            {activeTab === "startup" && (
              <div
                className="bg-white p-4 rounded-4"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    pageData.startup_accelerator_program
                  ),
                }}
              />
            )}
          </div>
        </div>
      </section>

      {/* === PRESERVE ALL ORIGINAL CSS === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Active tab yellow */
      .nav-pills .nav-link.active {
        background-color: var(--bs-warning) !important;
        color: var(--bs-dark) !important;
      }

      /* Gradient banner with subtle overlay */
      .faculty-hero {
        background: url("./media/hero.jpg");
        position: relative;
        background-size: cover;
        height: 50vh;
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
        background: #5390d9;
        color: #ffffffff;
        transform: translateY(-3px);
      }

      /* Tabs */
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
    `,
        }}
      />
    </>
  );
}
