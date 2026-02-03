// src/sections/ApprovalsAccreditation.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function ApprovalsAccreditation() {
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
          `${API_URL}/api/mandatory/slug/approvals-and-accreditation`
        );
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error(
          "Failed to fetch Approvals & Accreditation page",
          err
        );
      }
    };

    fetchPage();
  }, [API_URL]);

  return (
    <>
      {/* Hero Banner */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5 position-relative"
          style={{
            backgroundImage: pageData?.banner_image
              ? `url(${API_URL}${pageData.banner_image})`
              : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.3)",
              zIndex: 1,
            }}
          />
          <div
            style={{ zIndex: 2, marginTop: "100px" }}
            dangerouslySetInnerHTML={{
              __html: pageData?.banner_text
                ? DOMPurify.sanitize(pageData.banner_text)
                : `
                  <h2 class="display-5 fw-bold mb-2">
                    Approvals & Accreditation
                  </h2>
                  <p class="text-white">
                    Our accreditations reflect our dedication to excellence,
                    integrity,<br/>and innovation in education.
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
                  Approvals & Accreditation
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* CMS Page Content */}
      <section className="py-4">
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
