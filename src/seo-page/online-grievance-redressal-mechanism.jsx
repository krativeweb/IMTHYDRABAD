"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function GrievanceRedressalSection() {
  const [pageData, setPageData] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ------------------------------
     INIT AOS
  ------------------------------ */
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 1000, once: true });
      });
    }
  }, []);

  /* ------------------------------
     FETCH CMS DATA
  ------------------------------ */
  useEffect(() => {
    if (!API_URL) return;

    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/mandatory/slug/grievance-redressal`
        );
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error(
          "Failed to fetch Grievance Redressal page",
          err
        );
      }
    };

    fetchPage();
  }, [API_URL]);

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

      <section className="faculty-section">
        {/* Hero Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          data-aos="fade-up"
          style={{
            background: pageData?.banner_image
              ? `url(${API_URL}${pageData.banner_image})`
              : undefined,
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
            backgroundPosition: "center",
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: pageData?.banner_text
                ? DOMPurify.sanitize(pageData.banner_text)
                : `
                  <h2 class="display-5 fw-bold mb-2">
                    Online Grievance Redressal Mechanism
                  </h2>
                  <p class="text-white">
                    Ensuring every voice is heard with fairness.<br/>
                    Our grievance redressal mechanism maintains transparency,
                    empathy, and timely resolution of concerns within our community.
                  </p>
                `,
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
                  Online Grievance Redressal Mechanism
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Page Content */}
        <section id="executive-education" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <div
              className="card p-4"
              dangerouslySetInnerHTML={{
                __html: pageData?.page_content
                  ? DOMPurify.sanitize(pageData.page_content)
                  : "",
              }}
            />
          </div>
        </section>
      </section>
         <style
  dangerouslySetInnerHTML={{
    __html: `
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
        border-radius: var(--bs-nav-pills-border-radius);
        background-color: #e9ecef;
        border-radius: 30px;
        color: #333;
      }
    `,
  }}
/>
    </>
  );
}