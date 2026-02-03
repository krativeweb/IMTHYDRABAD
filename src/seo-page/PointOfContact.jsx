"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";
export default function PointOfContactSection() {
  // Initialize AOS
  const [pageData, setPageData] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* -------------------------------
     AOS INIT
  -------------------------------- */
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1000, once: true });
      });
    }
  }, []);

  /* -------------------------------
     FETCH PAGE DATA
  -------------------------------- */
useEffect(() => {
  if (!API_URL) return;

  const fetchPage = async () => {
    try {
      const res = await fetch(`${API_URL}/api/mandatory/slug/point-of-contact`);
      const json = await res.json();
      setPageData(json);

      // 👇 AOS REFRESH AFTER CONTENT LOAD
      setTimeout(() => {
        if (window.AOS) {
          window.AOS.refresh();
        }
      }, 300);
    } catch (err) {
      console.error("Failed to fetch page data:", err);
    }
  };

  fetchPage();
}, [API_URL]);


  if (!pageData) return null;

  const bannerStyle = {
    background: `url(${API_URL}${pageData.banner_image}) center/cover no-repeat`,
    height: "60vh",
    position: "relative",
  };

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TPXCPVN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* Styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Faculty Hero */
      .faculty-hero {

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
        background: #5390D9;
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

      /* Breadcrumb */
      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }

      /* Point of Contact Section */
      .point-of-contact .card {
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .point-of-contact .card img {
        border-radius: 12px 0 0 12px;
      }
      .point-of-contact .card-body {
        padding: 1.5rem;
      }
      .point-of-contact h2 {
        color: #022d7c;
      }
    `,
        }}
      />

      {/* Top Banner */}
      <div
        className="faculty-hero text-center text-white py-5"
        style={bannerStyle}
        data-aos="fade-up"
      >
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(pageData.banner_text),
          }}
        />
      </div>

      {/* Breadcrumb */}
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
              <li
                className="breadcrumb-item active text-warning fw-bold"
                aria-current="page"
              >
                Point of Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <InternationalAssociationStickyBtns />
      {/* Point of Contact Section */}
      <section className="point-of-contact py-4">
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(pageData.page_content),
          }}
        />
      </section>
    </>
  );
}
