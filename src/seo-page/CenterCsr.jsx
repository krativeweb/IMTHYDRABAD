"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Loader from "@/components/Loader";

export default function CentreSustainabilityCSR() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [pageData, setPageData] = useState(null);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    if (!API_URL) return;

    const fetchAll = async () => {
      try {
        const [pageRes, peopleRes] = await Promise.all([
          fetch(`${API_URL}/api/centre-sustainability-csr`),
          fetch(`${API_URL}/api/advisory-council-csr`),
        ]);

        const pageJson = await pageRes.json();
        const peopleJson = await peopleRes.json();

        setPageData(pageJson[0] || null);
        setPeople(peopleJson.data || []);
      } catch (err) {
        console.error("Failed to load CSR data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [API_URL]);

  /* ---------------- LOADER ---------------- */
  if (loading || !pageData) {
    return <Loader fullScreen />;
  }

  /* ---------------- GROUP PEOPLE ---------------- */
  const advisoryCouncil = people.filter((p) => p.type === "ADVISORY_COUNCIL");

  const affiliatedFaculty = people.filter(
    (p) => p.type === "AFFILIATED_FACULTY_PRACTITIONERS_INNOVATION"
  );

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: `url(${API_URL}${pageData.banner_image}) no-repeat center center`,
            backgroundSize: "cover",
            height: "60vh",
            position: "relative",
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
        <div className="breadcrumb p-4" style={{ backgroundColor: "#163977" }}>
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

      {/* ================= MAIN CONTENT ================= */}
      <section className="container mt-5 mb-5">
        <h2 className="text-center fw-bold mb-4" style={{ color: "#08317a" }}>
          {pageData.page_title}
        </h2>

        {/* ===== STATIC TAB BUTTONS ===== */}
        <ul className="nav nav-pills justify-content-center mb-4">
          <li className="nav-item">
            <button
              className="nav-link active text-dark rounded-pill"
              data-bs-toggle="pill"
              data-bs-target="#sub-res-susabt"
              type="button"
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link text-dark rounded-pill"
              data-bs-toggle="pill"
              data-bs-target="#people"
              type="button"
            >
              People
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link text-dark rounded-pill"
              data-bs-toggle="pill"
              data-bs-target="#sub-res-susne"
              type="button"
            >
              News & Events
            </button>
          </li>
        </ul>

        {/* ===== TAB CONTENT ===== */}
        <div className="tab-content bg-white p-4 rounded-4 shadow-sm">
          {/* ABOUT */}
          <div
            className="tab-pane fade show active"
            id="sub-res-susabt"
            role="tabpanel"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(pageData.about_details),
              }}
            />
          </div>

          {/* PEOPLE */}
          <div className="tab-pane fade" id="people" role="tabpanel">
            <h4 className="text-center fw-bold mb-4 text-primary">
              Advisory Council
            </h4>

            <div className="row">
              {advisoryCouncil.map((m) => (
                <PersonCard key={m._id} member={m} api={API_URL} />
              ))}
            </div>

            <h4 className="text-center fw-bold mt-5 mb-4 text-primary">
              Affiliated Faculty & Practitioners
            </h4>

            <div className="row">
              {affiliatedFaculty.map((m) => (
                <PersonCard key={m._id} member={m} api={API_URL} />
              ))}
            </div>
          </div>

          {/* NEWS */}
          <div className="tab-pane fade" id="sub-res-susne" role="tabpanel">
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(pageData.news_events),
              }}
            />
          </div>
        </div>
      </section>

      {/* ================= INLINE CSS ================= */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.3);
            z-index: 1;
          }
          .hero-content {
            position: relative;
            z-index: 2;
            margin-top: 150px;
          }
          .nav-pills .nav-link.active {
            background-color: #ffc107 !important;
            color: #000 !important;
          }
          .nav-pills .nav-link {
            min-width: 90px;
            font-weight: 500;
          }
          .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
            transition: all 0.3s ease;
          }
        `,
        }}
      />
    </>
  );
}

/* ================= PERSON CARD ================= */
function PersonCard({ member, api }) {
  return (
    <div className="col-12 col-md-6 mb-4">
      <div className="card h-100 p-4">
        <div className="row g-0">
          <div className="col-md-5">
            <Image
              src={`${api}/${member.image}`}
              alt={member.name}
              width={300}
              height={220}
              className="img-fluid rounded-start"
              style={{ height: "14rem", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <p className="fw-bold fs-5">{member.name}</p>
              <p>
                {member.designation}
                <br />
                {member.role_expertise}
              </p>
              <Link
                href="/faculties"
                className="btn btn-warning text-white px-3 py-2 rounded-4"
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
