// src/sections/ResearchCarousel.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "aos/dist/aos.css"; // Make sure you import AOS CSS
import Link from "next/link";

export default function ResearchCarousel() {
  const carouselRef = useRef(null);
  const [researches, setResearches] = useState([]);

  useEffect(() => {
    // Fetch research data
    const fetchResearch = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/research_infocus`
        );
        // Only take non-deleted items
        setResearches(res.data.filter((item) => item.is_del === 0));
      } catch (err) {
        console.error("Failed to fetch research data:", err);
      }
    };
    fetchResearch();
  }, []);

  useEffect(() => {
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

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (initCarousel()) clearInterval(interval);
      else if (attempts > 50) {
        console.warn("Bootstrap Carousel failed to initialize after 5s");
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [researches]);

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
                {researches.map((item, idx) => (
                  <div
                    key={item.id}
                    className="col-lg-3 col-md-6"
                    data-aos="fade-up"
                    data-aos-delay={100 + idx * 100}
                  >
                    <div className="research-card p-3 h-100 bg-white shadow rounded text-center">
                      <img
                        src={item.team_image}
                        className="img-fluid rounded mb-3"
                        alt={item.title}
                      />
                      <h5 className="research-org text-primary">
                        {item.title}
                      </h5>
                      <p className="research-title small">{item.description}</p>
                      <Link
                        href={`/${item.title
                          .toLowerCase()
                          .replace(/\s+/g, "")}`}
                        className="link-warning fw-bold text-decoration-underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#researchCardCarouselss"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#researchCardCarouselss"
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
