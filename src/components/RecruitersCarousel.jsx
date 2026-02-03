"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function PlacementAlliances() {
  const [alliances, setAlliances] = useState([]);

  // Embla Carousel Setup
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 2000, stopOnInteraction: false })]
  );

  // ✅ API call INSIDE this component
  useEffect(() => {
    async function fetchAlliances() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/placement-alliances`,
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error("Failed to fetch alliances");

        const json = await res.json();
        setAlliances(json?.data || []);
      } catch (error) {
        console.error("Placement alliances fetch error:", error);
      }
    }

    fetchAlliances();
  }, []);

  if (!alliances.length) return null;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  return (
    <section className="py-5">
      <div className="container text-center">
        <h6 className="text-warning mb-2">Our Alliances</h6>
        <h2 className="mb-4 fw-bold">PLACEMENT ALLIANCES</h2>
        <p className="mb-5">
          We are proud to be associated with top companies for student placements.
        </p>

        {/* EMBLA CAROUSEL */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container mt-4">
            {alliances.map((item, i) => {
              const imageUrl = item.image.startsWith("http")
                ? item.image
                : `${API_URL}/${item.image}`;

              return (
                <div key={item._id} className="embla__slide">
                  <div className="logo-box">
                    <Image
                      src={imageUrl}
                      alt={item.title}
                      width={140}
                      height={80}
                      style={{
                        objectFit: "contain",
                        maxWidth: "100%",
                        height: "auto",
                      }}
                      priority={i < 5}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Styles unchanged */}
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

        @media (max-width: 1200px) {
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
          }
        }
      `}</style>
    </section>
  );
}
