"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function LeadershipSection() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [pageData, setPageData] = useState(null);

  /* -----------------------------
     INIT AOS
  ----------------------------- */
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        once: true,
      });
      window.AOS = AOS;
    });
  }, []);

  /* -----------------------------
     FETCH CMS BANNER DATA
  ----------------------------- */
  useEffect(() => {
    if (!API_URL) return;

    const fetchPage = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/mandatory/slug/leadership-and-governance`
        );
        const json = await res.json();
        setPageData(json);

        setTimeout(() => {
          if (window.AOS) window.AOS.refreshHard();
        }, 200);
      } catch (err) {
        console.error("Failed to fetch leadership page:", err);
      }
    };

    fetchPage();
  }, [API_URL]);

  if (!pageData) return null;
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
        .faculty-hero {

          position: relative;
          background-size: cover;
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

        #leadership-section .nav-tabs .nav-link {
          border-radius: 50px;
          background: #e9ecef;
          color: #333;
          font-weight: 600;
          margin: 5px 5px;
          transition: all 0.3s ease;
        }

        .leader-img-box {
  width: 320px;        /* fixed width */
  height: auto;       /* control height freely */
  overflow: hidden;
  border-radius: 12px;
  margin: 0px auto;      /* center horizontally */
}

.leader-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

        #leadership-section .nav-tabs .nav-link.active {
          background: #ffc107;
          color: #000;
        }

        #leadership-section .nav-tabs .nav-link:hover {
          background: #ffc107;
          color: #000;
        }
          @media screen and (min-width: 1000px) {
  .your-class {
    margin-top: -60px !important;
  }
}
  .director-message {
  line-height: 1.7;
  color: #333;
}

/* FLOAT IMAGE */
.director-img {
  float: left;
  width: 300px;
  margin: 6px 30px 0px 0;
}

.director-img img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* CLEAR FLOAT AT END */
.director-message::after {
  content: "";
  display: block;
  clear: both;
}

/* MOBILE */
@media (max-width: 768px) {
  .director-img {
    float: none;
    margin: 0 auto 20px;
    width: 100%;
    max-width: 320px;
  }
}
.director-message p {
  line-height: 22px;          /* increase line height */
  text-align: justify;
}
  .president-message {
  line-height: 22px;
  color: #333;
  text-align: justify;
}

/* FLOAT IMAGE */
.president-img {
  float: left;
  width: 300px;
  margin: 6px 30px 20px 0;
}

.president-img img {
  width: 90%;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* CLEAR FLOAT */
.president-message::after {
  content: "";
  display: block;
  clear: both;
}

/* PARAGRAPH SPACING */
.president-message p {
  line-height: 22px;
  
}

/* MOBILE */
@media (max-width: 768px) {
  .president-img {
    float: none;
    margin: 0 auto 20px;
    width: 100%;
    max-width: 320px;
  }
}

    `,
        }}
      />

      <section className="faculty-section">
        {/* Top Banner */}
        {/* ================= TOP BANNER (DYNAMIC) ================= */}
        <div
          className="faculty-hero text-center text-white py-5"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${API_URL}${pageData.banner_image})`,
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(pageData.banner_text),
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
                  Leadership & Governance
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Leadership Section with Tabs */}
        <section id="leadership-section" className="py-5">
          <div className="container" data-aos="fade-up" data-aos-delay="200">
            <ul
              className="nav nav-tabs justify-content-center mb-4"
              id="leadershipTabs"
              role="tablist"
            >
              {[
                { id: "director", label: "Director’s Message", active: true },
                { id: "president", label: "President’s Message" },
                { id: "governing", label: "Governing Council" },
                { id: "board", label: "Board of Governors" },
              ].map((tab) => (
                <li className="nav-item" role="presentation" key={tab.id}>
                  <button
                    className={`nav-link ${tab.active ? "active" : ""}`}
                    id={`${tab.id}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${tab.id}`}
                    type="button"
                    role="tab"
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="card border-0 shadow-sm rounded-3 overflow-hidden p-4 p-md-5">
              {/* Tab Content */}
              <div
                className="tab-content"
                id="leadershipTabsContent"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(pageData.page_content),
                }}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
