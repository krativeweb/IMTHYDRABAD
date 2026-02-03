"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function Rankings() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (!API_URL) return;

    const fetchPage = async () => {
      try {
        const res = await fetch(`${API_URL}/api/mandatory/slug/rankings`);
        const json = await res.json();
        setPageData(json);
      } catch (err) {
        console.error("Failed to fetch rankings page:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [API_URL]);

  if (loading || !pageData) return null;

  return (
    <>
      {/* ================= HERO BANNER ================= */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            background: `url(${API_URL}${pageData.banner_image})`,
            position: "relative",
            backgroundSize: "cover",
            height: "60vh",
            backgroundPosition: "center",
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(pageData.banner_text),
            }}
          />
        </div>

        {/* ================= BREADCRUMB ================= */}
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
                  {pageData.page_title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* ================= PAGE CONTENT ================= */}
      <section id="rankings" className="py-5">
        <div className="container">
          <h2
            className="section-title text-center mb-4"
            style={{ color: "#08317a" }}
          >
            {pageData.page_title}
          </h2>

          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(pageData.page_content),
            }}
          />
        </div>
      </section>

      {/* ================= LOGOS SECTION (FROM DB) ================= */}
      {pageData.gallery_images?.length > 0 && (
        <section className="py-5" style={{ backgroundColor: "#151f54" }}>
          <div className="container">
            <div className="row logos_section_inner justify-content-center g-4">
              {pageData.gallery_images.map((img, i) => (
                <div key={i} className="col-sm-6 col-md-4 col-lg-3">
                  <div className="ranking-logo-card text-center">
                    <div className="logo-container">
                      <img
                        src={`${API_URL}${img}`}
                        alt={`Ranking Logo ${i + 1}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* === ORIGINAL CSS (No Truncation) === */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Global Adjustments */
      body { color: #333; line-height: 1.6; }
      .section-title { font-size: 2.5rem; font-weight: 800; position: relative; padding-bottom: 15px; }
      .section-title::after { content: ""; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 100px; height: 4px; background: #ffc107; border-radius: 2px; }

      /* Hero & Banner */
      .faculty-hero { display: flex; flex-direction: column; justify-content: center; align-items: center; }
      .faculty-hero h2 { margin-top: 0 !important; }

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
      /* Grid Layout */
      .rankings-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 25px;
      }

      /* Card Styling */
      .ranking-box {
        background: #ffffff;
        border-radius: 20px;
        padding: 25px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        transition: all 0.3s ease;
        border: 1px solid #edf2f7;
        position: relative;
        overflow: hidden;
      }
      .ranking-box:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }

      /* Specific Card Types */
      .featured-card { border: 2px solid #08317a; background: #f0f7ff; }
      .dark-card { background: #08317a; color: white; }
      .card-top-glow { position: absolute; top: 0; left: 0; width: 100%; height: 5px; background: linear-gradient(90deg, #ffc107, #08317a); }

      /* Rankings Headers */
      .ranking-source { font-size: 1.1rem; font-weight: 800;  color: #08317a; margin-bottom: 15px; display: flex; align-items: center; gap: 10px; }
      .source-logo { height: 50px; object-fit: contain; }

      /* Badges & Tags */
      .year-tag { display: inline-block; background: #08317a; color: #fff; font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border-radius: 50px; margin-bottom: 12px; }
      .year-tag.gold { background: #ffc107; color: #000; }
      .year-tag.muted { background: #e2e8f0; color: #64748b; }

      .highlight-pill { background: #ebf4ff; color: #08317a; font-weight: 800; padding: 8px 15px; border-radius: 12px; text-align: center; margin-bottom: 15px; font-size: 0.9rem; border: 1px dashed #08317a; }
      .rating-badge-glow { background: #ffc107; color: #000; font-weight: 900; text-align: center; padding: 10px; border-radius: 10px; box-shadow: 0 0 15px rgba(255, 193, 7, 0.5); animation: pulse-glow 2s infinite; }

      /* Ranks */
      .display-rank { font-size: 2.5rem; font-weight: 900; line-height: 1; margin-bottom: 5px; }
      .small-text { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }

      .rank-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; font-size: 0.92rem; font-weight: 500; }
      .rank-pill { min-width: 55px; height: 26px; display: flex; align-items: center; justify-content: center; background: #ffc107; color: #000; font-weight: 800; border-radius: 50px; font-size: 0.8rem; }
      .rank-pill.muted { background: #cbd5e1; }
      .rank-pill.gold { background: #ffc107; box-shadow: 0 4px 10px rgba(255,193,7,0.3); }

      /* Logos Section */
      .ranking-logo-card { background: white; border-radius: 15px; padding: 20px; transition: 0.3s; height: 120px; display: flex; align-items: center; justify-content: center; }
      .ranking-logo-card:hover { transform: scale(1.05); }
      .logo-container img { max-height: 70px; max-width: 100%; object-fit: contain; }

      /* Animations */
      @keyframes pulse-glow {
        0% { transform: scale(1); box-shadow: 0 0 10px rgba(255, 193, 7, 0.4); }
        50% { transform: scale(1.02); box-shadow: 0 0 20px rgba(255, 193, 7, 0.7); }
        100% { transform: scale(1); box-shadow: 0 0 10px rgba(255, 193, 7, 0.4); }
      }
      .animate-pulse { animation: pulse-glow 2s infinite; }

      @media (max-width: 768px) {
        .rankings-grid { grid-template-columns: 1fr; }
        .section-title { font-size: 1.8rem; }
      }
        /* Hover Background & Text Color Fix */
.ranking-box:hover {
  background: #09327a;
  border-color: #09327a;
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(9, 50, 122, 0.35);
}

/* Make all text white on hover */
.ranking-box:hover,
.ranking-box:hover .ranking-source,
.ranking-box:hover .ranking-year,
.ranking-box:hover .ranking-item,
.ranking-box:hover .small-text,
.ranking-box:hover .highlight-pill {
  color: #ffffff;
}

/* Rank pill adjustments on hover */
.ranking-box:hover .rank-pill {
  background: #ffc107;
  color: #000;
}

/* Year tags on hover */
.ranking-box:hover .year-tag {
  background: #ffc107;
  color: #000;
}

/* Dashed highlight pill fix */
.ranking-box:hover .highlight-pill {
  background: rgba(255, 255, 255, 0.12);
  border-color: #ffc107;
}

/* If card is dark-card already, keep consistency */
.dark-card:hover {
  background: #09327a;
}
  /* Disable hover color change for featured card */
.featured-card:hover {
  background: #f0f7ff;           /* original background */
  border-color: #08317a;
  transform: none;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

/* Keep original text colors on hover */
.featured-card:hover,
.featured-card:hover .ranking-source,
.featured-card:hover .display-rank,
.featured-card:hover .small-text {
  color: inherit;
}

/* Prevent hover rules from affecting inner elements */
.featured-card:hover .rank-pill,
.featured-card:hover .year-tag {
  background: inherit;
  color: inherit;
}
    `,
        }}
      />
    </>
  );
}
