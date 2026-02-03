"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function AboutIMTHyderabad() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [pageData, setPageData] = useState(null);

  /* ---------------------------------
     FETCH CMS DATA
  --------------------------------- */
  useEffect(() => {
    if (!API_URL) return;

    const fetchPage = async () => {
      try {
        const res = await fetch(`${API_URL}/api/mandatory/slug/about-us`);
        const json = await res.json();
        setPageData(json);

        // refresh AOS after HTML inject
        setTimeout(() => {
          if (window.AOS) window.AOS.refreshHard();
        }, 200);
      } catch (err) {
        console.error("Failed to fetch About page:", err);
      }
    };

    fetchPage();
  }, [API_URL]);

  if (!pageData) return null;

  return (
    <>
      {/* Hero Banner (UI UNCHANGED) */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5 position-relative"
          style={{
            backgroundImage: `url(${API_URL}${pageData.banner_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          data-aos="fade-up"
          data-delay="200"
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.3)",
              zIndex: 1,
            }}
          />

          {/* Banner text from CMS (UI SAME) */}
          <div
            style={{ zIndex: 2, marginTop: "100px" }}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(pageData.banner_text),
            }}
          />
        </div>

        {/* Breadcrumb (UNCHANGED) */}
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
                  {pageData.page_title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ================= PAGE CONTENT ================= */}
      {/* FULL UI COMES FROM CMS — SAME MARKUP */}
      <section
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(pageData.page_content),
        }}
      />

      {/* Custom Styles (UNCHANGED) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
            .text-justify {
              text-align: justify;
            }
          `,
        }}
      />
    </>
  );
}
