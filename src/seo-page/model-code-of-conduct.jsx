"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function ModelCodeSection() {
  const [pageData, setPageData] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  /* ------------------------------
     INIT AOS
  ------------------------------ */
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

  /* ------------------------------
     FETCH CMS DATA
  ------------------------------ */
  useEffect(() => {
    if (!API_URL) return;

    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/mandatory/slug/model-code-of-conduct`
        );
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error("Failed to load Model Code of Conduct page", err);
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
        {/* Top Banner */}
        <div
          className="faculty-hero text-center text-white py-5"
          data-aos="fade-up"
          style={{
            backgroundImage: pageData?.banner_image
              ? `url(${API_URL}${pageData.banner_image})`
              : undefined,
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: pageData?.banner_text
                ? DOMPurify.sanitize(pageData.banner_text)
                : `
                  <h2 class="display-5 fw-bold mb-2">Model Code of Conduct</h2>
                  <p class="text-white">
                    Rooted in values that define our community.<br/>
                    Our code of conduct promotes respect, discipline, and
                    professionalism in every interaction and endeavor.
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
                    className="text-white fw-bold text-decoration-none"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-warning fw-bold"
                  aria-current="page"
                >
                  Model Code of Conduct
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Model Code of Conduct Content */}
        <section className="model py-5">
          <div className="container">
            <div
              className="card p-4 shadow-lg border-0"
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
      .faculty-hero {
        background: url("/media/banners/pgdmfinance.webp") center/cover no-repeat!important;
        position: relative;
        height: 60vh;
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
        margin-top: 150px;
      }
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
    </>
  );
}
