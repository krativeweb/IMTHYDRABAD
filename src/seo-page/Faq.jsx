"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [banner, setBanner] = useState(null);

  // -----------------------------
  // Fetch FAQs
  // -----------------------------
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/faq/all`
        );
        const json = await res.json();
        setFaqs(json.data || []);
      } catch (err) {
        console.error("Failed to fetch FAQs:", err);
      }
    };

    fetchFaqs();
  }, []);

  // -----------------------------
  // Fetch Banner (Mandatory Page)
  // -----------------------------
  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/mandatory/slug/faqs`
        );
        const json = await res.json();
        setBanner(json);
      } catch (err) {
        console.error("Failed to fetch FAQ banner:", err);
      }
    };

    fetchBanner();
  }, []);

  // -----------------------------
  // AOS Init
  // -----------------------------
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }, []);

  return (
    <>
      {/* Embedded CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .faculty-hero {
        background: url("${
          banner?.banner_image
            ? `${process.env.NEXT_PUBLIC_API_URL}${banner.banner_image}`
            : "/media/banners/Group 2.jpg"
        }") !important;
        position: relative;
        background-size: cover !important;
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
    `,
        }}
      />

      {/* Hero Section */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          data-aos="fade-up"
        >
          {banner?.banner_text ? (
            <div dangerouslySetInnerHTML={{ __html: banner.banner_text }} />
          ) : (null
          )}
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
                  Frequently Asked Questions
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* FAQ Accordion */}
        <section>
          <div
            className="container bg-white p-4 mb-4 rounded-4"
            data-aos="fade-up"
          >
            <div className="mb-4">
              <h2
                className="fw-bold text-center mt-2"
                style={{ color: "#022D7C" }}
              >
                FAQ'S
              </h2>
            </div>

            <div className="accordion" id="accordionExample">
              {faqs.map((faq, index) => (
                <div className="accordion-item mt-2" key={faq._id}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button bg-warning ${
                        index !== 0 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${faq._id}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${faq._id}`}
                    >
                      <b>{faq.question}</b>
                    </button>
                  </h2>

                  <div
                    id={`collapse${faq._id}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
