"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import InternationalAssociationStickyBtns from "@/components/internationalassotianstickybtns.jsx";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import PlacementAlliances from "@/sections/PlacementAlliances.jsx";

const InternationalAssociations = () => {
  useEffect(() => {
    // Initialize AOS after mount
    const initAOS = async () => {
      if (typeof window !== "undefined") {
        const AOS = (await import("aos")).default;
        AOS.init({
          duration: 1200,
          once: true,
        });
      }
    };
    initAOS();
  }, []);

  const internationalData = [
    { img: "/media/internationalacc/1.jpg", title: "Austria" },
    { img: "/media/internationalacc/2.png", title: "China" },
    { img: "/media/internationalacc/3.jpg", title: "France" },
    { img: "/media/internationalacc/3.png", title: "France" },
    { img: "/media/internationalacc/4.png", title: "France" },
    { img: "/media/internationalacc/5.png", title: "France" },
    { img: "/media/internationalacc/6.jpg", title: "France" },
    { img: "/media/internationalacc/7.png", title: "France" },
    { img: "/media/internationalacc/8.png", title: "France" },
    { img: "/media/internationalacc/9.jpg", title: "France" },
    { img: "/media/internationalacc/10.png", title: "France" },
    { img: "/media/internationalacc/11.png", title: "France" },
    { img: "/media/internationalacc/12.png", title: "France" },
    { img: "/media/internationalacc/13.png", title: "France" },
    { img: "/media/internationalacc/14.jpg", title: "Germany" },
    { img: "/media/internationalacc/15.png", title: "Kazakhstan" },
    { img: "/media/internationalacc/16.png", title: "Mexico" },
    { img: "/media/internationalacc/17.jpg", title: "Morocco" },
    { img: "/media/internationalacc/18.png", title: "Morocco" },
    { img: "/media/internationalacc/19.png", title: "Poland" },
    { img: "/media/internationalacc/20.png", title: "Portugal" },
    { img: "/media/internationalacc/21.png", title: "Slovenia" },
    { img: "/media/internationalacc/22.jpg", title: "Thailand" },
  ];

  return (
    <div className="international-associations-page">
      {/* Hero Section */}
      <section className="faculty-section">
        <div className="faculty-hero text-center text-white py-5">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h2 className="display-5 fw-bold mb-2">
              International Associations
            </h2>
            <p className="text-white">
              Connected to the world of global learning. <br />
              Our international partnerships expand horizons, fostering
              collaboration with leading universities and institutions
              worldwide.
            </p>
          </div>
        </div>
        <InternationalAssociationStickyBtns/>

        {/* Breadcrumb */}
        <div className="breadcrumb p-4">
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
                  International Associations
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* International Associations Grid */}
        <section id="international-associations" className="py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h2 className="section-title">International Associations</h2>
            </div>

            <div className="row g-4">
              {internationalData.map((item, index) => (
                <div
                  key={index}
                  className="col-6 col-md-4 col-lg-3"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 50}
                >
                  <div className="card text-center border-0 shadow-sm h-100 custom-card">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="card-img-top p-3"
                      style={{ height: "150px", objectFit: "contain" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{item.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Carousel */}
        <section
          className="placement-alliances-section py-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <PlacementAlliances/>
        </section>

      </section>
<style
  dangerouslySetInnerHTML={{
    __html: `
      .faculty-hero {
        background: url("./media/banners/Group 2.jpg") no-repeat center center;
        background-size: cover;
        height: 60vh;
        position: relative;
          background-position: center !important;
      }

      .hero-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.3);
      }

      .hero-content {
        position: relative;
        z-index: 2;
        padding-top: 150px;
      }

      .breadcrumb {
        background-color: rgb(22, 57, 119);
      }

      .section-title {
        font-size: 2rem;
        font-weight: 700;
        color: #08317a;
        position: relative;
        padding-bottom: 0.5rem;
      }

      .section-title::after {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: #ffc107;
      }

      .custom-card {
        transition: background-color 0.3s ease, transform 0.3s ease;
        background: #f8f9fa;
        border-radius: 1.5rem;
      }

      .custom-card:hover {
        background-color: #ffc107;
        border: 1px solid #03255f;
        transform: translateY(-5px);
      }

      .placement-swiper .swiper-button-next,
      .placement-swiper .swiper-button-prev {
        color: #08317a;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        width: 40px;
        height: 40px;
      }

      .swiper-item img {
        max-height: 80px;
        object-fit: contain;
      }

      .contact-links-section {
        background-color: rgb(21, 30, 84);
        color: white;
      }
    `,
  }}
/>

    </div>
  );
};

export default InternationalAssociations;
