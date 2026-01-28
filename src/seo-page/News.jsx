"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsRes, bannerRes] = await Promise.all([
          axios.get(`${BASE_URL}/api/news`),
          axios.get(`${BASE_URL}/api/mandatory/slug/news`),
        ]);

        // ✅ news
        setNews(newsRes.data?.data || []);

        // ✅ banner
        setBanner(bannerRes.data || null);
      } catch (err) {
        console.error("Error fetching news page:", err);
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [BASE_URL]);

  if (loading) return <p className="text-center mt-5">Loading news...</p>;
  if (error) return <p className="text-center text-danger mt-5">{error}</p>;

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
        background: url("${
          banner?.banner_image
            ? BASE_URL + banner.banner_image
            : "/media/banners/newsletter.webp"
        }") center/cover no-repeat;
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
    `,
        }}
      />

      <section className="faculty-section">
        {/* Top Banner */}
        <div className="faculty-hero text-center text-white py-5">
          {banner?.banner_text ? (
            <div dangerouslySetInnerHTML={{ __html: banner.banner_text }} />
          ) : (
            <>
              <h2 className="display-5 fw-bold mb-2">News</h2>
              <p className="text-white">
                Highlighting milestones that define our progress. <br />
                Stay updated on our latest initiatives, achievements,
                collaborations, and academic advancements.
              </p>
            </>
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
                  News
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <InternationalAssociationStickyBtns />

        {/* News Section */}
        <section>
          <div className="container bg-white p-4 mb-4 rounded-4">
            <div className="mb-4">
              <h2
                className="fw-bold text-center mt-2"
                style={{ color: "#022D7C" }}
              >
                NEWS
              </h2>
            </div>

            {news.map((item) => (
              <div className="card mb-4 w-100" key={item._id}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={`${BASE_URL}/${item.image}`}
                      className="img-fluid rounded-start"
                      alt="News"
                    />
                  </div>
                  <div className="col-md-8">
                    <div
                      className="card-body"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
