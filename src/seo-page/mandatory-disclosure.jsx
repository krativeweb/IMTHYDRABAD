"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import DOMPurify from "dompurify";
import PlacementAlliances from "@/sections/PlacementAlliances.jsx";
const MandatoryDisclosure = () => {
  const [pageData, setPageData] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Fetch CMS page
  useEffect(() => {
    if (!API_URL) return;

    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/mandatory/slug/mandatory-disclosure`
        );
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error("Failed to load Mandatory Disclosure page", err);
      }
    };

    fetchPage();
  }, [API_URL]);

  return (
    <>
      {/* Hero Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: pageData?.banner_image
              ? `url(${API_URL}${pageData.banner_image})`
              : "",
            position: "relative",
            backgroundSize: "cover",
            height: "50vh",
            backgroundPosition: "center",
          }}
        >
<div
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1000"
  dangerouslySetInnerHTML={{
    __html: pageData?.banner_text
      ? DOMPurify.sanitize(pageData.banner_text)
      : "",
  }}
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
                    style={{ textDecoration: "none" }}
                    href="/"
                    className="text-white fw-bold"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Mandatory Disclosure
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* PAGE CONTENT (TABLES ETC.) */}
        <section className="py-5">
          <div className="container">
            <div
              dangerouslySetInnerHTML={{
                __html: pageData?.page_content
                  ? DOMPurify.sanitize(pageData.page_content)
                  : "",
              }}
            />
          </div>
        </section>

        <section
          className="placement-alliances-section py-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* Swiper Carousel */}
          <PlacementAlliances />
        </section>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-slide .item {
          background: #ffffff;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s;
        }
        .swiper-slide .item:hover {
          transform: translateY(-5px);
        }
        .swiper-slide .item img {
          max-height: 80px;
          object-fit: contain;
        }

        .custom-card {
          transition: background-color 0.3s ease, transform 0.3s ease;
          cursor: pointer;
        }
        .custom-card:hover {
          background-color: #ffc107;
          border: 1px solid #03255f;
          transform: translateY(-5px);
        }

        .faculty-hero {
          background: url("./media/hero.webp");
          position: relative;
          background-size: cover;
          height: 60vh !important;
            background-position: center !important;
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
          margin-top: 130px;
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
          color: #ffffffff;
          transition: all 0.3s;
        }
        .social-icon:hover {
          background: #5390d9;
          color: #ffffffff;
          transform: translateY(-3px);
        }

        .faculty-tabs .nav-pills .nav-link.active {
          background: #ffc107 !important;
          color: #000000ff !important;
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
          border-radius: 30px;
          background-color: #e9ecef;
          color: #333;
        }

        h3,
        h4,
        h5,
        h6 {
          font-weight: bold !important;
        }

        .table-responsive.align-center {
          display: block;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin-left: auto;
          margin-right: auto;
          max-width: 100%;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
          border-spacing: 0;
          border: 1px solid #e2e2e2;
          background-color: #fff;
          font-family: Arial, sans-serif;
          font-size: 14px;
        }

        .table td,
        .table th {
          border: 1px solid #e6e6e6;
          padding: 10px 12px;
          vertical-align: top;
          line-height: 1.4;
        }

        .table td p,
        .table th p {
          margin: 0;
          padding: 0;
        }

        .table.table-striped tbody tr:nth-child(odd) {
          background-color: #fafafa;
        }

        .table tbody tr:hover {
          background-color: #f5f7fa;
        }

        @media (max-width: 576px) {
          .table td,
          .table th {
            padding: 8px 10px;
            font-size: 13px;
          }
        }

        .table-bordered {
          border: 1px solid #cfcfcf;
        }

        .table-bordered td,
        .table-bordered th {
          border: 1px solid #dcdcdc;
        }

        /* Placement Alliances */
        .placement-alliances-section .subtitle {
          color: #ffc107;
        }

        .swiper-item {
          background: #ffffff;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s;
        }
        .swiper-item:hover {
          transform: translateY(-5px);
        }
        .swiper-item img {
          max-height: 80px;
          object-fit: contain;
        }

        /* Swiper Navigation */
        .placement-swiper .swiper-button-next,
        .placement-swiper .swiper-button-prev {
          color: #08317a;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placement-swiper .swiper-button-next:after,
        .placement-swiper .swiper-button-prev:after {
          font-size: 20px;
        }

        .text-overflow p {
          word-wrap: break-word;
          word-break: break-all;
          white-space: normal;
        }
    `,
        }}
      />
    </>
  );
};

export default MandatoryDisclosure;
