"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

export default function Campus() {
  const [pageData, setPageData] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!API_URL) return;

    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/mandatory/slug/campus`
        );
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error("Failed to load Campus page", err);
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
              : "url('./media/banners/campus.webp')",
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
                  <h2 class="display-5 fw-bold mb-2">Campus</h2>
                  <p class="text-white">
                    The IMT Hyderabad campus is a vibrant, eco-friendly, and modern
                    learning environment <br />
                    fostering innovation, collaboration, and holistic student
                    development.
                  </p>
                `,
            }}
          />
        </div>

        {/* Breadcrumb */}
        <div
          className="breadcrumb p-4"
          style={{ backgroundColor: "rgb(22 57 119)" }}
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
                  Campus
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Campus Content */}
      <section id="campus" className="py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          <div
            dangerouslySetInnerHTML={{
              __html: pageData?.page_content
                ? DOMPurify.sanitize(pageData.page_content)
                : "",
            }}
          />
        </div>
      </section>

      {/* === ORIGINAL CSS (Slanted Images + Mobile Responsive) === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .faculty-hero {
        position: relative;
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

      .clipped-img-1 {
        clip-path: polygon(0 0, 85% 0, 100% 100%, 0 100%);
        height: 30vh;
        object-fit: cover;
      }

      .clipped-img-2 {
        clip-path: polygon(15% 0, 100% 0, 100% 100%, 0 100%);
        height: 30vh;
        object-fit: cover;
      }

      /* Mobile View Adjustments */
      @media (max-width: 767px) {
        .clipped-img-1,
        .clipped-img-2 {
          height: 20vh;
          clip-path: none;
          border-radius: 0.75rem;
        }

        .card.d-flex.flex-row,
        .card.d-flex.flex-row-reverse {
          flex-direction: column !important;
          text-align: center;
        }

        .card .col-md-4,
        .card .col-md-8 {
          max-width: 100%;
          padding: 0;
        }

        .card .col-md-4 {
          margin-bottom: 15px;
        }
      }
    `,
        }}
      />
    </>
  );
}
