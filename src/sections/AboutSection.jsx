"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import DOMPurify from "dompurify";

export default function AboutSection() {
  const [about, setAbout] = useState(null);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch(`${API_URL}/api/home-about`);
        const data = await res.json();
        setAbout(data);
      } catch (error) {
        console.error("Failed to fetch About data", error);
      }
    };

    fetchAbout();
  }, [API_URL]);

  // 🔑 AOS FIX
  useEffect(() => {
    if (about && window.AOS) {
      window.AOS.refreshHard();
    }
  }, [about]);

  if (!about) return null;

  return (
    <section className="about-section py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div
              className="about-content pe-lg-5"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h6 className="subtitle text-warning">About Us</h6>
              <h2 className="title">{about.title}</h2>

              <div
                style={{ textAlign: "justify" }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(about.description),
                }}
              />

              <Link
                href="/about-imt-hyderabad"
                className="btn btn-primary rounded-pill border border-dark mt-3"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="col-lg-6 text-end">
            <div
              className="about-img position-relative"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src={`${API_URL}${about.image}`}
                alt="About IMT Hyderabad"
                className="img-fluid shadow-lg rounded-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
