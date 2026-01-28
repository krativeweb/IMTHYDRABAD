// src/sections/ApprovalsAccreditation.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/Loader";

export default function ApprovalsAccreditation() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mandatory/slug/approvals`)
      .then((res) => res.json())
      .then((data) => {
        setPage(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader fullScreen />;

  return (
    <>
      {/* Hero Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5 position-relative"
          style={{
            backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${page.banner_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="hero-overlay" />
          <div
            className="text-center position-relative"
            style={{ zIndex: 2 }}
            dangerouslySetInnerHTML={{ __html: page.banner_text }}
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
                  {page.page_title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Tabs Section (STATIC BUTTONS) */}
      <section className="py-4">
        <div className="container">
          {/* Main Tabs */}
          <nav className="nav nav-pills justify-content-center flex-wrap gap-2 mb-4">
            <a
              className="nav-link rounded-pill bg-white active"
              data-bs-toggle="tab"
              href="#tab-aicte"
              role="tab"
            >
              AICTE Approvals
            </a>
            <a
              className="nav-link rounded-pill bg-white"
              data-bs-toggle="tab"
              href="#tab-aiu"
              role="tab"
            >
              AIU Certificates
            </a>
            <a
              className="nav-link rounded-pill bg-white"
              data-bs-toggle="tab"
              href="#tab-nba"
              role="tab"
            >
              NBA Accredited
            </a>
          </nav>

          {/* CMS CONTENT (Tabs HTML from API) */}
          <div dangerouslySetInnerHTML={{ __html: page.page_content }} />
        </div>
      </section>

      {/* Custom Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
    .nav-pills .nav-link.active {
        background-color: #ffc107 !important;
        color: #212529 !important;
      }
      .faculty-hero::before {
        content: "";
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 1;
      }
      .faculty-hero h2,
      .faculty-hero p {
        position: relative;
        z-index: 2;
      }
    `,
        }}
      />
    </>
  );
}
