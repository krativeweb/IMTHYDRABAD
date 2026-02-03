"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/Loader";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function NewsletterSection() {
  const [page, setPage] = useState(null);
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ---------------- Fetch APIs ---------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pageRes, listRes] = await Promise.all([
          fetch(`${API}/api/newsletter-seo`),
          fetch(`${API}/api/newsletters`),
        ]);

        const pageJson = await pageRes.json();
        const listJson = await listRes.json();

        setPage(pageJson?.[0]);
        setNewsletters(
          listJson?.filter((n) => !n.isDeleted)?.sort((a, b) => b.year - a.year)
        );
      } catch (err) {
        console.error("Newsletter API error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader fullScreen />;

  return (
    <>
      {/* HERO */}
      <section className="faculty-section">
        <div
          className="faculty-hero text-center text-white py-5"
          style={{
            backgroundImage: `url(${API}${page?.banner_image})`,
          }}
        >
          <div className="overlay"></div>

          <div
            className="container position-relative z-2"
            style={{ marginTop: "150px" }}
            dangerouslySetInnerHTML={{ __html: page?.banner_text }}
          />
        </div>

        {/* BREADCRUMB */}
        <div className="breadcrumb p-4" style={{ background: "#163977" }}>
          <div className="container-fluid">
            <ol className="breadcrumb bg-transparent p-0 m-0">
              <li className="breadcrumb-item">
                <Link
                  href="/"
                  className="text-white fw-bold text-decoration-none"
                >
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-warning fw-bold">
                {page?.page_title}
              </li>
            </ol>
          </div>
        </div>

        {/* NEWSLETTERS */}
        <div className="container mt-4">
          <h2
            className="text-center fw-bold text-uppercase"
            style={{ color: "#163977" }}
          >
            {page?.page_title}
          </h2>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mt-2 mb-4">
            {newsletters.map((item) => (
              <div className="col" key={item._id}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex align-items-center gap-3">
                    <svg width="40" height="40" className="text-secondary">
                      <use href="#icon-doc" />
                    </svg>

                    <div>
                      <Link
                        href={item.pdfUrl}
                        target="_blank"
                        rel="noopener"
                        className="fw-bold text-warning stretched-link text-decoration-none"
                      >
                        {item.month} {item.year}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICON */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="icon-doc" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"
          />
          <path fill="#fff" d="M13 2v5h5z" />
        </symbol>
      </svg>

      <style
        dangerouslySetInnerHTML={{
          __html: `
      .faculty-hero {
        background: url("/media/banners/newsletter.webp") center/cover no-repeat;
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
    `,
        }}
      />
    </>
  );
}
