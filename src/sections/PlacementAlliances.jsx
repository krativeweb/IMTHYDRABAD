// src/sections/PlacementAlliances.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import axios from "axios";

export default function PlacementAlliances() {
  // --------------------------------------------------------------
  // State
  // --------------------------------------------------------------
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --------------------------------------------------------------
  // Embla Carousel Setup
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
  // Fetch placement alliances (NEW API)
  // --------------------------------------------------------------
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const base = process.env.NEXT_PUBLIC_API_URL;
        if (!base) throw new Error("NEXT_PUBLIC_API_URL is not defined");

        const { data } = await axios.get(`${base}/api/placement-alliances`, {
          timeout: 8000,
        });

        if (data?.success && Array.isArray(data.data)) {
          const active = data.data.filter((item) => item.isDeleted === false);
          setLogos(active);
        } else {
          setLogos([]);
        }

        setError(null);
      } catch (err) {
        console.error("PlacementAlliances error →", err);
        setError("Failed to load placement alliances");
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  return (
    <section className="py-5 ">
      <div className="container text-center">
        <h6 className="text-warning mb-2">Our Alliances</h6>
        <h2 className="mb-4 fw-bold">PLACEMENT ALLIANCES</h2>
        <p className="mb-5">
          We are proud to be associated with top companies for student
          placements.
        </p>

        {/* ---------- Loading ---------- */}
        {loading && (
          <div className="d-flex justify-content-center align-items-center my-4">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading…</span>
            </div>
          </div>
        )}

        {/* ---------- Error ---------- */}
        {error && !loading && (
          <div className="alert alert-danger d-inline-block">{error}</div>
        )}

        {/* ---------- Carousel ---------- */}
        {!loading && !error && logos.length > 0 && (
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {logos.map((logo, i) => (
                <div key={logo._id} className="embla__slide">
                  <div className="logo-box">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${logo.image}`}
                      alt={logo.title}
                      width={140}
                      height={80}
                      style={{
                        objectFit: "contain",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                      priority={i < 3}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
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

        .logo-box {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          padding: 16px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }
        .logo-box:hover {
          transform: translateY(-5px);
        }

        @media (max-width: 1400px) {
          .embla__slide {
            flex: 0 0 25%;
          }
        }
        @media (max-width: 1200px) {
          .embla__slide {
            flex: 0 0 33.333%;
          }
        }
        @media (max-width: 992px) {
          .embla__slide {
            flex: 0 0 33.333%;
          }
        }
        @media (max-width: 768px) {
          .embla__slide {
            flex: 0 0 50%;
          }
        }
        @media (max-width: 576px) {
          .embla__slide {
            flex: 0 0 100%;
            padding: 0 12px;
          }
          .logo-box {
            height: 140px;
            padding: 12px;
          }
        }
      `}</style>
    </section>
  );
}
