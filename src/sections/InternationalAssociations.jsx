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
  // Fetch data (NEW API)
  // --------------------------------------------------------------
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_API_URL;
        if (!base) throw new Error("NEXT_PUBLIC_API_URL is not defined");

        const url = `${base}/api/international-association`;

        const { data } = await axios.get(url, { timeout: 8000 });

        if (data?.success && Array.isArray(data.data)) {
          const active = data.data.filter((item) => item.isDeleted === false);
          setLogos(active);
        } else {
          setLogos([]);
        }

        setError(null);
      } catch (err) {
        console.error("InternationalAssociations error →", err);
        setError(err.message || "Failed to load associations");
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
                <div key={logo._id} className="embla__slide px-2">
                  <div className="item bg-white p-3 rounded d-flex align-items-center justify-content-center">
                    <div className="img-wrapper">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}/${logo.image}`}
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

      {/* ------------------------------- CSS ------------------------------- */}
      <style jsx>{`
        .parallax-section {
          position: relative;
          background: url("/media/hero.webp") center/cover no-repeat;
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
          flex: 0 0 25%;
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
