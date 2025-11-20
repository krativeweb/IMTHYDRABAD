"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import axios from "axios";

export default function InternationalAssociations() {
  // --------------------------------------------------------------
  // State
  // --------------------------------------------------------------
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --------------------------------------------------------------
  // Embla carousel
  // --------------------------------------------------------------
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  // --------------------------------------------------------------
  // Fetch data from env + /int_association
  // --------------------------------------------------------------
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_BASE_URL;
        if (!base)
          throw new Error("NEXT_PUBLIC_BASE_URL is not defined in .env.local");

        // Build full URL (remove trailing slash if present)
        const url = `${
          base.endsWith("/") ? base.slice(0, -1) : base
        }/int_association`;
        // console.log("Fetching international associations →", url);

        const { data } = await axios.get(url, { timeout: 8000 });
        // console.log("API response →", data);

        // Keep only non-deleted items
        const active = data.filter((item) => item.is_del === 0);
        setLogos(active);
        setError(null);
      } catch (err) {
        console.error("InternationalAssociations error →", err);
        const msg =
          err.response && err.response.status === 404
            ? "No associations found (404)"
            : err.message || "Network error";
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  // --------------------------------------------------------------
  // Render
  // --------------------------------------------------------------
  return (
    <section className="parallax-section py-5 d-flex align-items-center">
      <div className="overlay"></div>

      <div className="container text-center">
        <h6 className="subtitle text-warning mb-2">Our Associations</h6>
        <h2 className="section-title mb-4 text-white">
          INTERNATIONAL ASSOCIATION
        </h2>
        <p className="mb-5 text-warning">
          We are proud to be recognized and accredited by leading organizations.
        </p>

        {/* ---------- Loading ---------- */}
        {loading && (
          <div className="d-flex justify-content-center align-items-center my-5">
            <div className="spinner-border text-warning me-3" role="status">
              <span className="visually-hidden">Loading…</span>
            </div>
            <p className="text-white mb-0">Loading associations…</p>
          </div>
        )}

        {/* ---------- Error ---------- */}
        {error && !loading && (
          <div
            className="alert alert-danger d-inline-block mx-auto"
            style={{ maxWidth: "500px" }}
          >
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* ---------- No data ---------- */}
        {!loading && !error && logos.length === 0 && (
          <p className="text-white">No associations available.</p>
        )}

        {/* ---------- Carousel ---------- */}
        {!loading && logos.length > 0 && (
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {logos.map((logo) => (
                <div key={logo.id} className="embla__slide px-2">
                  <div className="item bg-white p-3 rounded d-flex align-items-center justify-content-center">
                    <div className="img-wrapper">
                      <Image
                        src={logo.image}
                        alt={logo.title}
                        fill
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw, 200px"
                        style={{ objectFit: "contain" }}
                        priority
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ------------------------------------------------- CSS ------------------------------------------------- */}
      <style jsx>{`
        .parallax-section {
          position: relative;
          background: url("/media/hero.webp") center/cover
            no-repeat;
        }
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 0;
        }
        .container > * {
          position: relative;
          z-index: 1;
        }

        .embla {
          overflow: hidden;
          width: 100%;
        }
        .embla__container {
          display: flex;
          touch-action: pan-y;
        }
        .embla__slide {
          flex: 0 0 25%; /* 4 per view */
          min-width: 0;
          padding: 0 8px;
          box-sizing: border-box;
        }

        .item {
          height: 130px;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        }
        .img-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          max-width: 180px;
          max-height: 100px;
        }

        .item:hover {
          transform: translateY(-5px);
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .embla__slide {
            flex: 0 0 33.333%;
          }
        }
        @media (max-width: 768px) {
          .embla__slide {
            flex: 0 0 50%;
          }
        }
        @media (max-width: 480px) {
          .embla__slide {
            flex: 0 0 100%;
          }
          .item {
            height: 140px;
          }
          .img-wrapper {
            max-width: 140px;
            max-height: 80px;
          }
        }
      `}</style>
    </section>
  );
}
