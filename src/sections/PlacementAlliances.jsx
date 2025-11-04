"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

export default function PlacementAlliances() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseURL = process.env.NEXT_PUBLIC_BASE_URL; // example: https://thekreativeweb.com/codes/imt_hydrabad/api

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${baseURL}/placement`);
        if (Array.isArray(res.data)) {
          setCompanies(res.data);
        } else {
          setError("Invalid API data format");
        }
      } catch (err) {
        console.error("Error fetching placements:", err);
        setError("Failed to load placement data");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [baseURL]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-5 text-center bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4 text-dark" data-aos="fade-up">
          Placement Alliances
        </h2>

        {/* Loading Spinner */}
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <Slider {...settings}>
            {companies.map((company, index) => (
              <div key={company.id || index} className="p-3 text-center">
                <Image
                  src={`${company.image}`}
                  alt={company.title}
                  width={150}
                  height={100}
                  className="img-fluid mx-auto d-block rounded-3"
                />

              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}
