"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function PlacementDataSection() {
  const [data, setData] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ======================
     AOS INIT
  ====================== */
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
    }
  }, []);

  /* ======================
     FETCH PAGE DATA
  ====================== */
  useEffect(() => {
    if (!API_URL) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/api/mandatory/slug/placement-data`);
        const json = await res.json();
        setData(json?.data || json);
      } catch (err) {
        console.error("Failed to load Placement Data", err);
      }
    };

    fetchData();
  }, [API_URL]);

  if (!data) return null;

  return (
    <>
      {/* ======================
          HERO (FROM API)
      ====================== */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${API_URL}${data.banner_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            position: "relative",
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.banner_text),
            }}
          />
        </div>

        {/* ======================
            BREADCRUMB (STATIC)
        ====================== */}
        <div className="breadcrumb p-4">
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
                  Placement Data
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ======================
          PLACEMENT DATA TABS
      ====================== */}
      <section className="aiu-certificates py-5 faculty-tabs model">
        <div className="container">
          {/* 🔒 STATIC TAB BUTTONS */}
          <ul
            className="nav nav-pills justify-content-center mb-4"
            id="aiuTab"
            role="tablist"
            data-aos="zoom-in"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active fw-semibold"
                id="pgdm-tab"
                data-bs-toggle="pill"
                data-bs-target="#pgdm"
                type="button"
                role="tab"
                aria-controls="pgdm"
                aria-selected="true"
              >
                PGDM
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link fw-semibold"
                id="pgdm-finance-tab"
                data-bs-toggle="pill"
                data-bs-target="#pgdm-finance"
                type="button"
                role="tab"
                aria-controls="pgdm-finance"
                aria-selected="false"
              >
                PGDM - Finance
              </button>
            </li>

            <li className="nav-item" role="presentation">
              <button
                className="nav-link fw-semibold"
                id="pgdm-marketing-tab"
                data-bs-toggle="pill"
                data-bs-target="#pgdm-marketing"
                type="button"
                role="tab"
                aria-controls="pgdm-marketing"
                aria-selected="false"
              >
                PGDM - Marketing
              </button>
            </li>
          </ul>

          {/* ======================
              TAB CONTENT (FROM API)
          ====================== */}
          <div
            className="tab-content"
            id="aiuTabContent"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.page_content),
            }}
          />
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Faculty Hero */
      .faculty-hero {
        background: url("/media/banners/placement.webp") center/cover no-repeat;
        position: relative;
        height: 60vh;
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

      /* AIU Certificates Tabs */
      .aiu-certificates .nav-pills .nav-link {
        border-radius: 50rem;
        background-color: #f1f1f1;
        color: #08317a;
        margin: 5px;
        padding: 10px 25px;
        transition: all 0.3s ease;
        font-weight: 600;
      }
      .aiu-certificates .nav-pills .nav-link.active {
        background-color: #ffc107;
        color: #000;
        font-weight: 600;
      }

      /* Card Styling */
      .aiu-certificates .card {
        background-color: #fff;
        border-radius: 12px;
        border: 1px solid #eee;
        padding: 1.5rem;
      }

      /* Table Styling */
      .aiu-certificates h4 {
        color: #08317a;
      }
      .table thead th {
        background-color: #08317a !important;
        color: #fff;
        font-weight: 600;
      }
      .table td {
        vertical-align: middle;
      }
      .table a.btn {
        background-color: #ffc107;
        color: #000;
        border: none;
        transition: all 0.3s ease;
      }
      .table a.btn:hover {
        background-color: #e0a800;
        color: #fff;
      }
      .table a.btn-outline-primary {
        border: 1px solid #08317a;
        color: #08317a;
      }
      .table a.btn-outline-primary:hover {
        background-color: #08317a;
        color: #fff;
      }

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }
    `,
        }}
      />
    </>
  );
}
