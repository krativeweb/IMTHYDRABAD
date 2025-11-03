// src/components/ResearchCarousel.jsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
export default function ResearchCarousel() {
  const carouselRef = useRef(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    // Prevent double init
    if (initializedRef.current) return;

    const initOwl = () => {
      if (!carouselRef.current || !window.$ || !window.$.fn.owlCarousel) return;

      window.$(carouselRef.current).owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
          1200: { items: 4 },
        },
      });

      initializedRef.current = true;
    };

    // Try immediately
    if (window.$ && window.$.fn.owlCarousel) {
      initOwl();
    } else {
      // Poll until Owl is ready (max 5 seconds)
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (window.$ && window.$.fn.owlCarousel) {
          initOwl();
          clearInterval(interval);
        } else if (attempts > 50) {
          console.warn("Owl Carousel failed to load after 5s");
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="py-4" style={{ backgroundColor: "#151e54" }}>
      <div className="container">
        <h6 className="text-center text-warning" data-aos="fade-down">
          Our Researches
        </h6>
        <h2 className="text-white text-center mb-4" data-aos="zoom-in">
          Research in Focus
        </h2>

        {/* Owl Carousel */}
        <div
          ref={carouselRef}
          className="owl-carousel owl-theme"
          id="researchCardCarousel"
        >
          {/* === Card 1 === */}
          <div className="item" data-aos="fade-up" data-aos-delay="100">
            <div className="research-card p-3 h-100 shadow rounded bg-white">
              <img
                src="/media/img/2.webp"
                className="img-fluid rounded mb-3"
                alt="Research 1"
              />
              <h5 className="research-org">IMT – CII</h5>
              <p className="research-title">
                Impact of COVID pandemic on small and medium enterprises (SMEs)
              </p>
              <Link href="/" className="link-primary">
                Read More
              </Link>
            </div>
          </div>

          {/* === Card 2 === */}
          <div className="item" data-aos="fade-up" data-aos-delay="200">
            <div className="research-card p-3 h-100 shadow rounded bg-white">
              <img
                src="/media/img/3.webp"
                className="img-fluid rounded mb-3"
                alt="Research 2"
              />
              <h5 className="research-org">IMT – NABARD</h5>
              <p className="research-title">
                Study on defaults in SHef-bank linkage program in Andhra Pradesh
              </p>
              <Link href="#" className="faces-primary">
                Read More
              </Link>
            </div>
          </div>

          {/* === Card 3 === */}
          <div className="item" data-aos="fade-up" data-aos-delay="300">
            <div className="research-card p-3 h-100 shadow rounded bg-white">
              <img
                src="/media/img/5.webp"
                className="img-fluid rounded mb-3"
                alt="Research 3"
              />
              <h5 className="research-org">IMT – SCOPE</h5>
              <p className="research-title">
                Study on digital transformation in Indian Central Public Sector
                Undertaking
              </p>
              <Link href="#" className="link-primary">
                Read More
              </Link>
            </div>
          </div>

          {/* === Card 4 === */}
          <div className="item" data-aos="fade-up" data-aos-delay="400">
            <div className="research-card p-3 h-100 shadow rounded bg-white">
              <img
                src="/media/img/4.webp"
                className="img-fluid rounded mb-3"
                alt="Research 4"
              />
              <h5 className="research-org">IMT – NPCI</h5>
              <p className="research-title">
                Study on Adoption of Cashless Transaction Solutions by Small
                merchants
              </p>
              <Link href="#" className="link-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
