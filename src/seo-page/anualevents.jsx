"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

export default function AnnualEvents() {
  const [pageData, setPageData] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!API_URL) return;

    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/mandatory/slug/annual-events`
        );
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error("Failed to load Annual Events page", err);
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
              : "url('/media/banners/annualevents.webp')",
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
                  Annual Events
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Annual Events Content */}
      <section id="annual-events" className="py-5">
        <div className="container" data-aos="fade-up" data-aos-delay="200">
          {/* PAGE CONTENT FROM CMS */}
          <div
            dangerouslySetInnerHTML={{
              __html: pageData?.page_content
                ? DOMPurify.sanitize(pageData.page_content)
                : "",
            }}
          />

          {/* Gallery Images */}
          {pageData?.gallery_images?.length > 0 && (
            <div className="row g-3 mt-5">
              <h4 className="display-5 fw-bold mb-4">
                Glimpse of Annual Events
              </h4>

              <div className="row g-3">
                {pageData.gallery_images.map((img, i) => (
                  <div key={i} className="col-12 col-sm-6 col-lg-3">
                    <Image
                      src={`${API_URL}${img}`}
                      alt={`Annual Event ${i + 1}`}
                      width={400}
                      height={300}
                      className="img-fluid rounded shadow"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Custom Styles */}
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
    `,
        }}
      />
    </>
  );
}
