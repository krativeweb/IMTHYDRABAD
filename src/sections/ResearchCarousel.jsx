// src/sections/ResearchCarousel.jsx
"use client";

import { useEffect, useRef } from "react";
import "aos/dist/aos.css"; // Make sure you import AOS CSS
import Link from "next/link";

export default function ResearchCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        once: true,
        duration: 1000,
      });
    }

    // Initialize Bootstrap Carousel
    const initCarousel = () => {
      if (!carouselRef.current || !window.bootstrap) return false;

      new window.bootstrap.Carousel(carouselRef.current, {
        interval: 5000,
        ride: "carousel",
        wrap: true,
        keyboard: true,
      });

      return true;
    };

    if (initCarousel()) return;

    // Poll until Bootstrap JS is ready (max 5s)
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (initCarousel()) {
        clearInterval(interval);
      } else if (attempts > 50) {
        console.warn("Bootstrap Carousel failed to initialize after 5s");
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="research-card-carousel py-4"
      style={{ backgroundColor: "#151e54" }}
    >
      <div className="container">
        <h6
          className="subtitle text-center text-warning"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Our Researches
        </h6>
        <h2
          className="section-title text-white mb-4 text-center"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Research in Focus
        </h2>

        {/* Bootstrap Carousel */}
        <div
          ref={carouselRef}
          id="researchCardCarouselss"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row g-4 justify-content-center">
                {/* Card 1 */}
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="research-card p-3 h-100 bg-white shadow rounded text-center">
                    <img
                      src="/media/img/2.webp"
                      className="img-fluid rounded mb-3"
                      alt="IMT-CII Research"
                    />
                    <h5 className="research-org text-primary">IMT – CII</h5>
                    <p className="research-title small">
                      Impact of COVID pandemic on small and medium enterprises
                      (SMEs)
                    </p>
                    <Link
                      href="cgesg"
                      className="link-warning fw-bold text-decoration-underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="research-card p-3 h-100 bg-white shadow rounded text-center">
                    <img
                      src="/media/img/3.webp"
                      className="img-fluid rounded mb-3"
                      alt="IMT-NABARD Research"
                    />
                    <h5 className="research-org text-primary">IMT – NABARD</h5>
                    <p className="research-title small">
                      Study on defaults in SHG-bank linkage program in Andhra
                      Pradesh
                    </p>
                    <Link
                      href="nabard"
                      className="link-warning fw-bold text-decoration-underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>

                {/* Card 3 */}
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="research-card p-3 h-100 bg-white shadow rounded text-center">
                    <img
                      src="/media/img/5.webp"
                      className="img-fluid rounded mb-3"
                      alt="IMT-SCOPE Research"
                    />
                    <h5 className="research-org text-primary">IMT – SCOPE</h5>
                    <p className="research-title small">
                      Study on digital transformation in Indian Central Public
                      Sector Undertaking
                    </p>
                    <Link
                      href="scope"
                      className="link-warning fw-bold text-decoration-underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>

                {/* Card 4 */}
                <div
                  className="col-lg-3 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="research-card p-3 h-100 bg-white shadow rounded text-center">
                    <img
                      src="/media/img/4.webp"
                      className="img-fluid rounded mb-3"
                      alt="IMT-NPCI Research"
                    />
                    <h5 className="research-org text-primary">IMT – NPCI</h5>
                    <p className="research-title small">
                      Study on Adoption of Cashless Transaction Solutions by
                      Small merchants
                    </p>
                    <Link
                      href="npci"
                      className="link-warning fw-bold text-decoration-underline"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#researchCardCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#researchCardCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
