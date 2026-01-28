// app/tenders/page.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function TendersPage() {
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
     FETCH CMS DATA
  ====================== */
  useEffect(() => {
    if (!API_URL) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/api/mandatory/slug/tenders`);
        const json = await res.json();
        setData(json?.data || json);
      } catch (err) {
        console.error("Failed to load Tenders page", err);
      }
    };

    fetchData();
  }, [API_URL]);

  if (!data) return null;

  return (
    <>
      {/* ===== HERO + BREADCRUMB ===== */}
      <section className="faculty-section">
        {/* HERO (FROM CMS) */}
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

        {/* Breadcrumb (STATIC) */}
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
                  Tenders
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ===== PAGE CONTENT (FROM CMS) ===== */}
        <section className="model py-5">
          <div className="container">
            <div
              data-aos="fade-up"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.page_content),
              }}
            />
          </div>
        </section>

        {/* ===== ALL STYLES (Preserved 1:1) ===== */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
      .model .card {
        background-color: #f9f9f9;
        border-radius: 15px;
      }

      .model ul {
        list-style-type: disc;
        margin-left: 20px;
        padding-left: 20px;
      }

      .model ul li {
        margin-bottom: 8px;
        line-height: 1.6;
      }

      /* Hero Section */
      .faculty-hero {
        background: url('/media/hero.webp') center/cover no-repeat;
        position: relative;
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
    `,
          }}
        />
      </section>
    </>
  );
}
