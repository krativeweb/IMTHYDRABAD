"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import DOMPurify from "dompurify";

import JournalComponents from "@/components/JournalComponets";
import CasesArchive from "@/components/CasesArchive";
import NewsArchieve from "@/components/NewsArchieve";
import ConferenceArchieve from "@/components/ConferenceArchieve";
import BookArchieve from "@/components/BookArchieve";
import MagazineArchieve from "@/components/MagazineArchieve";
import Loader from "@/components/Loader";

export default function ResearchArchive() {
  const [seoData, setSeoData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ---------------- FETCH SEO DATA ---------------- */
  useEffect(() => {
    if (!API_URL) return;

    axios
      .get(`${API_URL}/api/research-archive-seo`)
      .then((res) => {
        setSeoData(res.data?.[0] || null);
      })
      .catch((err) => {
        console.error("Research Archive SEO fetch error:", err);
      })
      .finally(() => setLoading(false));
  }, [API_URL]);

  if (loading) return <Loader fullScreen />;
  if (!seoData) return null;

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* ===== Banner Section ===== */}
      <div
        className="faculty-hero text-center text-white py-5"
        data-aos="fade-up"
        style={{
          background: `url(${API_URL}${seoData.banner_image}) center/cover no-repeat`,
          height: "60vh",
          position: "relative",
        }}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(seoData.banner_text),
        }}
      />

      {/* ===== Breadcrumb ===== */}
      <div className="breadcrumb p-4">
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent p-0 m-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white fw-bold">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-warning fw-bold">
                {seoData.page_title}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ===== Tabs + Content ===== */}
      <section>
        {/* Tabs (STATIC) */}
        <nav className="nav nav-pills justify-content-center flex-wrap gap-2 mt-5 mb-5">
          <Link
            className="nav-link rounded-pill bg-white active"
            data-bs-toggle="tab"
            href="#tab-journal"
          >
            Journal Publication
          </Link>
          <Link
            className="nav-link rounded-pill bg-white"
            data-bs-toggle="tab"
            href="#tab-cases"
          >
            Cases
          </Link>
          <Link
            className="nav-link rounded-pill bg-white"
            data-bs-toggle="tab"
            href="#tab-conference"
          >
            Conference Proceeding
          </Link>
          <Link
            className="nav-link rounded-pill bg-white"
            data-bs-toggle="tab"
            href="#tab-article"
          >
            News Article
          </Link>
          <Link
            className="nav-link rounded-pill bg-white"
            data-bs-toggle="tab"
            href="#tab-books"
          >
            Books
          </Link>
          <Link
            className="nav-link rounded-pill bg-white"
            data-bs-toggle="tab"
            href="#tab-magazines"
          >
            Magazines
          </Link>
        </nav>

        {/* Existing Components (UNCHANGED) */}
        <JournalComponents />
        <CasesArchive />
        <ConferenceArchieve />
        <NewsArchieve />
        <BookArchieve />
        <MagazineArchieve />
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
      .table-responsive {
        border-radius: 0.5rem;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
      }

      /* Faculty Hero */
      .faculty-hero {
        background: url("/media/banners/researcharchive.webp") center/cover no-repeat, #f0f0f0;
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

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }
      .breadcrumb-item a {
        text-decoration: none;
      }

      /* Card Styling */
      .faculty-card {
        background: #f8f9fa;
        border: none;
        border-radius: 1.5rem;
      }

      /* Image Glow & Hover Effect */
      .faculty-img {
        border-radius: 1.2rem;
        transition: transform 0.4s ease;
      }
      .faculty-img:hover {
        transform: scale(1.03);
      }

      /* Social Icons */
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
      .nav-pills .nav-link.active {
        background-color: var(--bs-warning) !important;
        color: var(--bs-dark) !important;
      }
    `,
        }}
      />
    </>
  );
}
