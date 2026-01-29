"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PlacementAlliance() {
  const [placements, setPlacements] = useState([]);
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/placement`);
        setPlacements(res.data || []);
      } catch (error) {
        console.error("Error fetching placements:", error);
      }
    };
    fetchPlacements();
  }, [BASE_URL]);

  useEffect(() => {
    if (placements.length === 0) return; // ✅ Wait until data is loaded

    // Import jQuery & Owl only after placements are ready
    import("jquery").then(($) => {
      window.$ = window.jQuery = $.default;
      import("owl.carousel").then(() => {
        const $carousel = window.$("#placement-carousel");

        // ✅ Destroy any existing instance before reinitializing
        if ($carousel.hasClass("owl-loaded")) {
          $carousel.trigger("destroy.owl.carousel");
          $carousel.find(".owl-stage-outer").children().unwrap();
        }

        // ✅ Initialize once
        $carousel.owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          dots: false,
          autoplay: true,
          autoplayTimeout: 2000,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 4 },
          },
        });
      });
    });

    // ✅ Initialize AOS only once
    import("aos").then((AOS) => {
      AOS.init({ duration: 1000, once: true });
    });
  }, [placements]);

  return (
    <>
      <style jsx global>{`
        .owl-carousel .item {
          background: #ffffff;
          padding: 30px;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s;
        }
        .owl-carousel .item:hover {
          transform: translateY(-5px);
        }
        .owl-carousel .item img {
          max-height: 80px;
          object-fit: contain;
          width: auto;
          margin: 0 auto;
        }
      `}</style>

      <section
        className="placement-alliances-section py-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container text-center">
          <h6
            className="subtitle text-center text-warning"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Our Alliances
          </h6>
          <h2
            className="section-title mb-4"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            PLACEMENT ALLIANCES
          </h2>
          <p className="mb-5" data-aos="fade-up" data-aos-delay="300">
            We are proud to be associated with top companies for student
            placements.
          </p>

          <div
            id="placement-carousel"
            className="owl-carousel owl-theme"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {placements.length > 0 ? (
              placements.map((item) => (
                <div className="item" key={item.id}>
                  <img src={item.image} alt={item.title} />
                </div>
              ))
            ) : (
              <p>Loading placement partners...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
